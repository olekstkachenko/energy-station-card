/**
 * Native Home Assistant WebSocket API client for live sync in standalone app
 */
export class HomeAssistantClient {
  constructor(options = {}) {
    this.url = options.url || 'http://homeassistant.local:8123';
    this.token = options.token || '';
    this.onStateChange = options.onStateChange || (() => {});
    this.onStatusChange = options.onStatusChange || (() => {});
    
    this.ws = null;
    this.msgId = 1;
    this.states = {};
    this.connected = false;
  }

  connect(url, token) {
    if (url) this.url = url;
    if (token) this.token = token;

    if (this.ws) {
      this.disconnect();
    }

    // Convert http/https to ws/wss
    let wsUrl = this.url.replace(/^http/, 'ws');
    if (!wsUrl.endsWith('/api/websocket')) {
      wsUrl = wsUrl.replace(/\/+$/, '') + '/api/websocket';
    }

    this.onStatusChange('connecting', 'Підключення до HA WebSocket...');

    try {
      this.ws = new WebSocket(wsUrl);
    } catch (err) {
      this.onStatusChange('error', `Помилка створення сокета: ${err.message}`);
      return;
    }

    this.ws.onopen = () => {
      this.onStatusChange('authenticating', 'Авторизація токена...');
    };

    this.ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        this._handleMessage(msg);
      } catch (err) {
        console.error('Failed to parse HA WS message:', err);
      }
    };

    this.ws.onerror = (err) => {
      this.connected = false;
      this.onStatusChange('error', 'Помилка WebSocket з’єднання');
    };

    this.ws.onclose = () => {
      this.connected = false;
      this.onStatusChange('disconnected', 'Від’єднано');
    };
  }

  disconnect() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.connected = false;
    this.onStatusChange('disconnected', 'Від’єднано');
  }

  _send(obj) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(obj));
    }
  }

  _handleMessage(msg) {
    if (msg.type === 'auth_required') {
      this._send({
        type: 'auth',
        access_token: this.token
      });
      return;
    }

    if (msg.type === 'auth_ok') {
      this.connected = true;
      this.onStatusChange('connected', 'Підключено до Home Assistant!');
      
      // Fetch initial states
      const id = this.msgId++;
      this._send({ id, type: 'get_states' });

      // Subscribe to state change events
      this._send({
        id: this.msgId++,
        type: 'subscribe_events',
        event_type: 'state_changed'
      });
      return;
    }

    if (msg.type === 'auth_invalid') {
      this.connected = false;
      this.onStatusChange('error', `Помилка авторизації: ${msg.message}`);
      return;
    }

    if (msg.type === 'result' && Array.isArray(msg.result)) {
      // Result from get_states
      this.states = {};
      msg.result.forEach(s => {
        this.states[s.entity_id] = s;
      });
      this.onStateChange(this.states);
      return;
    }

    if (msg.type === 'event' && msg.event?.event_type === 'state_changed') {
      const { entity_id, new_state } = msg.event.data;
      if (new_state) {
        this.states[entity_id] = new_state;
        this.onStateChange(this.states);
      }
    }
  }
}

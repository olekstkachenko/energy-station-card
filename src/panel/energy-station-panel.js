import '../card/energy-station-card.js';
import { EnergyStationPanel } from './panel-component.js';

export { EnergyStationPanel };

if (typeof customElements !== 'undefined' && !customElements.get('energy-station-panel')) {
  customElements.define('energy-station-panel', EnergyStationPanel);
}

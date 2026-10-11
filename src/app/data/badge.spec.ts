import { badge } from './badge';

describe('badge', () => {
  it('escapes shields separators and spaces in the label', () => {
    expect(badge('Zigbee-2_MQTT x', 'E87E04', 'zigbee2mqtt').url).toBe(
      'https://img.shields.io/badge/Zigbee--2__MQTT%20x-E87E04?logo=zigbee2mqtt&logoColor=white',
    );
  });
});

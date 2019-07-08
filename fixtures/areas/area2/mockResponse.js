const mock = require('../../../mockConstants');
const area2Geojson = require('./geojson');

exports.response = {
  id: mock.area2.id,
  type: mock.area2.type,
  name: mock.area2.name,
  description: mock.area2.description,
  owner: {
    customer: mock.participant2.id,
    organization: 'string'
  },
  config: {
    counting: {
      'separate-offline': true
    },
    tracking: {
      type: 'SPACE'
    }
  },
  props: {
    location: {},
    boundaries: { geojson: area2Geojson.geojson },
    type: 'STORAGE'
  }
};

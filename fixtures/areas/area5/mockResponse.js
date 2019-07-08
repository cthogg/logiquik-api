const mock = require('../../../mockConstants');
const area4Geojson = require('./geojson');

exports.response = {
  id: mock.area5.id,
  type: mock.area5.type,
  name: mock.area5.name,
  description: mock.area5.description,
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
    boundaries: { geojson: area4Geojson.geojson },
    type: 'STORAGE'
  }
};

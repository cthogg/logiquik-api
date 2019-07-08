const mock = require('../../../mockConstants');
const area4Geojson = require('./geojson');

exports.response = {
  id: mock.area4.id,
  type: mock.area4.type,
  name: mock.area4.name,
  description: mock.area4.description,
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

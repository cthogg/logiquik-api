const mock = require('../../../mockConstants');
const area4Geojson = require('./geojson');

exports.response = {
  id: mock.area6.id,
  type: mock.area6.type,
  name: mock.area6.name,
  description: mock.area6.description,
  owner: {
    customer: mock.participant1.id,
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

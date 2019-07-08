const mock = require('../../../mockConstants');
const area1Geojson = require('./geojson');

exports.response = {
  id: mock.area1.id,
  type: 'TYPE',
  name: mock.area1.name,
  description: mock.area1.description,
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
    boundaries: {
      geojson: area1Geojson.geojson
    },
    type: mock.area1.type
  }
};

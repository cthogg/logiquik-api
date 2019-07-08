const mock = require('../../../../mockConstants');

exports.response = {
  id: mock.trackable1.id,
  type: mock.trackable1.type,
  owner: {
    customer: mock.participant1.id
  },
  name: mock.trackable1.name,
  description: mock.trackable1.description,
  config: {
    connectivity: {
      time_to_inactive: 600000,
      time_to_offline: 1800000
    },
    process: {
      id: mock.process1.id,
      type: 'PROCESS'
    }
  },
  status: {
    connectivity: {
      state: 'ACTIVE',
      last_updated: 1550069075017,
      area_entry: 1550069075017,
      area: {
        id: mock.area1.id,
        type: 'AREA'
      }
    },
    process: {
      process_states: [
        {
          id: mock.processState1.id,
          type: 'PROCESS_STATE'
        }
      ]
    }
  },
  devices: [
    {
      id: mock.device1.id,
      type: 'DEVICE'
    }
  ]
};

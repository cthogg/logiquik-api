const mock = require('../../../../mockConstants');

exports.response = {
  id: mock.trackable2.id,
  type: mock.trackable2.type,
  owner: {
    customer: mock.participant1.id
  },
  name: mock.trackable2.name,
  description: mock.trackable2.description,
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
      state: 'INACTIVE',
      last_updated: 544521620000,
      area_entry: 544521920000,
      area: {
        id: mock.area2.id,
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

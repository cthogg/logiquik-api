const mock = require('../../../mockConstants');

exports.response = {
  id: mock.process1.id,
  type: mock.process1.type,
  name: mock.process1.name,
  description: mock.process1.description,
  owner: {
    customer: 'string',
    organization: 'string'
  },
  states: [
    {
      name: 'string',
      description: 'string',
      details: {},
      id: 'string'
    }
  ],
  areas: [
    {
      id: 'string',
      type: 'string'
    }
  ],
  participants: [
    {
      id: mock.participant1.id,
      type: mock.participant1.type,
      name: mock.participant1.name,
      description: mock.participant1.description,
      areas: [
        {
          id: 'string',
          type: 'string'
        }
      ]
    },
    {
      id: mock.participant2.id,
      type: mock.participant2.type,
      name: mock.participant2.name,
      description: mock.participant2.description,
      areas: [
        {
          id: 'string',
          type: 'string'
        }
      ]
    },
    {
      id: mock.participant3.id,
      type: mock.participant3.type,
      name: mock.participant3.name,
      description: mock.participant3.description,
      areas: [
        {
          id: 'string',
          type: 'string'
        }
      ]
    }
  ],
  receivers: [
    {
      id: 'string',
      type: 'string'
    }
  ],
  'receiver-area-map': {
    additionalProp1: 'string',
    additionalProp2: 'string',
    additionalProp3: 'string'
  }
};

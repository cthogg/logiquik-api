const mock = require('../../../mockConstants');

exports.response = {
  id: mock.process1.id,
  type: mock.process1.type,
  name: mock.process1.name,
  description: mock.process1.description,
  areas: [
    {
      id: mock.area1.id,
      type: mock.area1.type
    }
  ],
  states: [
    {
      name: mock.processState1.name,
      id: mock.processState1.id
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
          id: mock.area1.id,
          type: mock.area1.type
        },
        {
          id: mock.area4.id,
          type: mock.area4.type
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
          id: mock.area2.id,
          type: mock.area2.type
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
          id: mock.area3.id,
          type: mock.area3.type
        }
      ]
    },
    {
      id: mock.participant4.id,
      type: mock.participant4.type,
      name: mock.participant4.name,
      description: mock.participant4.description,
      areas: [
        {
          id: mock.area5.id,
          type: mock.area5.type
        },
        {
          id: mock.area6.id,
          type: mock.area6.type
        }
      ]
    }
  ]
};

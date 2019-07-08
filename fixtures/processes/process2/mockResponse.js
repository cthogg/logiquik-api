const mock = require('../../../mockConstants');

exports.response = {
  id: mock.process2.id,
  type: mock.process2.type,
  name: mock.process2.name,
  description: mock.process2.description,
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
    }
  ]
};

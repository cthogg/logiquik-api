const mock = require('../../mockConstants');

exports.response = {
  count: 1,
  items: [
    {
      id: mock.process1.id,
      type: mock.process1.type,
      name: mock.process1.name,
      description: mock.process1.description
    },
    {
      id: mock.process2.id,
      type: mock.process2.type,
      name: mock.process2.name,
      description: mock.process2.description
    }
  ]
};

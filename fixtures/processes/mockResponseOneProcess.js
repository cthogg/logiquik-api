const mock = require('../../mockConstants');

exports.response = {
  count: 1,
  items: [
    {
      id: mock.process1.id,
      type: mock.process1.type,
      name: mock.process1.name,
      description: mock.process1.description
    }
  ]
};

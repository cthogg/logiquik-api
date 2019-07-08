const mock = require('../../mockConstants');

exports.response = {
  count: 2,
  items: [
    {
      id: mock.trackable1.id,
      type: mock.trackable1.type,
      name: mock.trackable1.name,
      description: mock.trackable1.description
    },
    {
      id: mock.trackable2.id,
      type: mock.trackable2.type,
      name: mock.trackable2.name,
      description: mock.trackable2.description
    }
  ]
};

const mock = require('../../../mockConstants');

exports.response = {
  id: mock.area3.id,
  type: mock.area3.type,
  name: mock.area3.name,
  description: mock.area3.description,
  owner: {
    customer: mock.participant3.id,
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
    boundaries: {},
    type: 'STORAGE'
  }
};

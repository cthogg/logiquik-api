const mock = require('../../mockConstants');
const mockHelpers = require('../../mockHelperFunctions');

module.exports = [
  {
    id: mockHelpers.generateRandomUUID(),
    type: mock.eventApiConstants.eventTypes.changeEvent,
    sub_types: [
      mock.eventApiConstants.eventSubTypes.areaChangeForTrackable,
      mock.eventApiConstants.eventSubTypes.connectionStatusChangeForTrackable
    ],
    owner: {
      customer: mock.customer1.id
    },
    timestamp: mockHelpers.getCurrentTimeStamp(),
    related: {
      trackables: [
        {
          id: mock.trackable1.id,
          type: 'TRACKABLE'
        }
      ],
      areas: [
        {
          id: mock.area1.id,
          type: 'AREA',
          movement_type: 'target'
        },
        {
          id: mock.area1.id,
          type: 'AREA',
          movement_type: 'source'
        }
      ]
    }
  },
  {
    id: mockHelpers.generateRandomUUID(),
    type: mock.eventApiConstants.eventTypes.changeEvent,
    sub_types: [
      mock.eventApiConstants.eventSubTypes.areaChangeForTrackable,
      mock.eventApiConstants.eventSubTypes.connectionStatusChangeForTrackable
    ],
    owner: {
      customer: mock.customer1.id
    },
    timestamp: mockHelpers.getCurrentTimeStamp(),
    related: {
      trackables: [
        {
          id: mock.trackable1.id,
          type: 'TRACKABLE'
        }
      ],
      areas: [
        {
          id: mock.area2.id,
          type: 'AREA',
          movement_type: 'target'
        },
        {
          id: mock.area1.id,
          type: 'AREA',
          movement_type: 'source'
        }
      ]
    }
  },
  {
    id: mockHelpers.generateRandomUUID(),
    type: mock.eventApiConstants.eventTypes.changeEvent,
    sub_types: [
      mock.eventApiConstants.eventSubTypes.areaChangeForTrackable,
      mock.eventApiConstants.eventSubTypes.connectionStatusChangeForTrackable
    ],
    owner: {
      customer: mock.customer1.id
    },
    timestamp: mockHelpers.getCurrentTimeStamp(),
    related: {
      trackables: [
        {
          id: mock.trackable2.id,
          type: 'TRACKABLE'
        }
      ],
      areas: [
        {
          id: mock.area1.id,
          type: 'AREA',
          movement_type: 'target'
        },
        {
          id: mock.area1.id,
          type: 'AREA',
          movement_type: 'source'
        }
      ]
    }
  }
];

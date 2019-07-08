const _ = require('lodash');
const mock = require('../../mockConstants');
const mockHelpers = require('../../mockHelperFunctions');
const defaultEvents = require('./defaultEvents');

const numberOfEvents = 100;

const getMockEvents = () => ({
  count: numberOfEvents,
  items: [
    ...defaultEvents,
    ..._.times(numberOfEvents, () => ({
      id: mockHelpers.generateRandomUUID(),
      type: mock.eventApiConstants.eventTypes.changeEvent,
      sub_types: [
        mock.eventApiConstants.eventSubTypes.areaChangeForTrackable,
        mock.eventApiConstants.eventSubTypes.connectionStatusChangeForTrackable
      ],
      owner: {
        customer: mock.customer1.id
      },
      timestamp: mockHelpers.getRandomInt(
        mockHelpers.getStartOfTimePeriodMinusOneTimestamp('month'),
        mockHelpers.getCurrentTimeStamp()
      ),
      related: {
        trackables: [
          {
            id: mock[`trackable${mockHelpers.getRandomInt(0, 3)}`].id,
            type: 'TRACKABLE'
          }
        ],
        areas: [
          {
            id: mock[`area${mockHelpers.getRandomInt(0, 4)}`].id,
            type: 'AREA',
            movement_type: 'target'
          },
          {
            id: mock[`area${mockHelpers.getRandomInt(0, 4)}`].id,
            type: 'AREA',
            movement_type: 'source'
          }
        ]
      }
    }))
  ]
});

const getMockEventsTargetOnly = () => ({
  count: numberOfEvents,
  items: _.times(numberOfEvents, () => ({
    id: mockHelpers.generateRandomUUID(),
    type: mock.eventApiConstants.eventTypes.changeEvent,
    sub_types: [
      mock.eventApiConstants.eventSubTypes.areaChangeForTrackable,
      mock.eventApiConstants.eventSubTypes.connectionStatusChangeForTrackable
    ],
    owner: {
      customer: mock.customer1.id
    },
    timestamp: mockHelpers.getRandomInt(
      mockHelpers.getStartOfTimePeriodMinusOneTimestamp('month'),
      mockHelpers.getCurrentTimeStamp()
    ),
    related: {
      trackables: [
        {
          id: mock[`trackable${mockHelpers.getRandomInt(0, 3)}`].id,
          type: 'TRACKABLE'
        }
      ],
      areas: [
        {
          id: mock[`area${mockHelpers.getRandomInt(0, 4)}`].id,
          type: 'AREA',
          movement_type: 'target'
        }
      ]
    }
  }))
});

const mockEventsTarget = getMockEventsTargetOnly().items;
const mockEvents = getMockEvents().items;

const mockResponse = {
  count: numberOfEvents * 2 + defaultEvents.length,
  items: mockEvents.concat(mockEventsTarget)
};

exports.response = mockResponse;

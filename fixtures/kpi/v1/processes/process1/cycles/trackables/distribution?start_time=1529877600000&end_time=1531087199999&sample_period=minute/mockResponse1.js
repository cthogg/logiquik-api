const mock = require('../../../../../../../../mockConstants');
const kpiMock = require('../../../../../../mockConstantsKpi');
const mockHelperFunctions = require('../../../../../../../../mockHelperFunctions');

exports.response = {
  count: 3,
  start_time: kpiMock.week26.start_time,
  end_time: kpiMock.week27.end_time,
  items: [
    {
      count: 2,
      id: mock.participant1.id,
      type: 'participant',
      items: mockHelperFunctions.generateFakeItems(
        mockHelperFunctions.numberOfFakeItems,
        kpiMock.week27.start_time
      )
    },
    {
      count: 2,
      id: mock.participant2.id,
      type: 'participant',
      items: mockHelperFunctions.generateFakeItems(
        mockHelperFunctions.numberOfFakeItems,
        kpiMock.week27.start_time
      )
    },
    {
      count: 2,
      id: mock.participant3.id,
      type: 'participant',
      items: mockHelperFunctions.generateFakeItems(
        mockHelperFunctions.numberOfFakeItems,
        kpiMock.week27.start_time
      )
    }
  ]
};

const mock = require('../../../../../../../../mockConstants');
const kpiMock = require('../../../../../../mockConstantsKpi');

exports.response = {
  count: 3,
  start_time: kpiMock.week26.start_time,
  end_time: kpiMock.week27.end_time,
  items: [
    {
      count: 2,
      id: mock.participant1.id,
      type: 'count',
      items: [
        {
          start_time: kpiMock.week26.start_time,
          end_time: kpiMock.week26.end_time,
          trackable_count: kpiMock.week26.participant1Count
        },
        {
          start_time: kpiMock.week27.start_time,
          end_time: kpiMock.week27.end_time,
          trackable_count: kpiMock.week27.participant1Count
        }
      ]
    },
    {
      count: 2,
      id: mock.participant2.id,
      type: 'count',
      items: [
        {
          start_time: kpiMock.week26.start_time,
          end_time: kpiMock.week26.end_time,
          trackable_count: kpiMock.week26.participant2Count
        },
        {
          start_time: kpiMock.week27.start_time,
          end_time: kpiMock.week27.end_time,
          trackable_count: kpiMock.week27.participant2Count
        }
      ]
    },
    {
      count: 2,
      id: mock.participant3.id,
      type: 'count',
      items: [
        {
          start_time: kpiMock.week26.start_time,
          end_time: kpiMock.week26.end_time,
          trackable_count: kpiMock.week26.participant3Count
        },
        {
          start_time: kpiMock.week27.start_time,
          end_time: kpiMock.week27.end_time,
          trackable_count: kpiMock.week27.participant3Count
        }
      ]
    }
  ]
};

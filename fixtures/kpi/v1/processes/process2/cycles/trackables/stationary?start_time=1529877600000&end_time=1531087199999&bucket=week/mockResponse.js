const kpiMock = require('../../../../../../mockConstantsKpiProcess2');

exports.response = {
  count: 2,
  start_time: kpiMock.week26.start_time,
  end_time: kpiMock.week27.end_time,
  items: [
    {
      start_time: kpiMock.week26.start_time,
      end_time: kpiMock.week26.end_time,
      stationary_ids: [
        { type: 'TRACKABLE', id: kpiMock.stationaryId1 },
        { type: 'TRACKABLE', id: kpiMock.stationaryId2 }
      ]
    },
    {
      start_time: kpiMock.week27.start_time,
      end_time: kpiMock.week27.end_time,
      stationary_ids: [{ type: 'TRACKABLE', id: kpiMock.stationaryId2 }]
    }
  ]
};

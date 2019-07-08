const mock = require('../../../../../../mockConstantsKpiProcess2');
// TODO: change "counts" directory to "count" only
exports.response = {
  count: 1,
  start_time: mock.threeMonths.start_time,
  end_time: mock.threeMonths.end_time,
  items: [
    {
      start_time: mock.week27.start_time,
      end_time: mock.week27.end_time,
      cycle_count: 222
    },
    {
      start_time: mock.week26.start_time,
      end_time: mock.week26.end_time,
      cycle_count: 222
    }
  ]
};

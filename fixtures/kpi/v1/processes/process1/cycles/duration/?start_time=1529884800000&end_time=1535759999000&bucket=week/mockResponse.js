const mock = require('../../../../../../mockConstantsKpi');

exports.response = {
  count: 2,
  start_time: mock.week26.start_time,
  end_time: mock.week27.end_time,
  items: [
    {
      start_time: mock.week26.start_time,
      end_time: mock.week26.end_time,
      average_duration: 1728000000
    },
    {
      start_time: mock.week27.start_time,
      end_time: mock.week27.end_time,
      average_duration: 4728000000
    }
  ]
};

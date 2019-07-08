const mock = require('../../../../mockConstantsKpiProcess2');

exports.response = {
  weeks: {
    count: 2,
    items: [
      { start_time: mock.week26.start_time, end_time: mock.week26.end_time },
      { start_time: mock.week27.start_time, end_time: mock.week27.end_time }
    ]
  }
};

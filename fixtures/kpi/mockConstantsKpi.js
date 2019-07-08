const mock = require('../../mockConstants');

const threeMonths = {
  start_time: 1529884800000,
  end_time: 1535759999000
};

const week26 = {
  start_time: 1529877600000,
  end_time: 1530482399099,
  count: 122,
  participant1Count: 22,
  participant2Count: 18,
  participant3Count: 31,
  distributionTimestamp1: 1529877600000,
  distributionTimestamp2: 1529871600000
};

const week27 = {
  start_time: 1530482400000,
  end_time: 1531087199999,
  count: 122,
  participant1Count: 29,
  participant2Count: 27,
  participant3Count: 16,
  distributionTimestamp1: 1530492400000,
  distributionTimestamp2: 1530592400000
};

const stationaryId1 = mock.trackable1.id;
const stationaryId2 = mock.trackable2.id;

module.exports = Object.freeze({
  stationaryId1,
  stationaryId2,
  threeMonths,
  week26,
  week27
});

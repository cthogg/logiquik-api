const moment = require('moment');

const getStartOfTimePeriodMinusOneTimestamp = timePeriod =>
  moment()
    .subtract(1, `${timePeriod}s`)
    .startOf(timePeriod)
    .valueOf();

const getCurrentTimeStamp = () => {
  const timestamp = moment().valueOf();
  return timestamp;
};

const getCurrentTimeYesterdayTimestamp = () => {
  const timestamp = moment()
    .subtract(1, 'day')
    .valueOf();
  return timestamp;
};

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function parseJwt(token) {
  return { username: 'no_user' };
}

// https://stackoverflow.com/a/8809472
/* eslint-disable no-bitwise */
function generateRandomUUID() {
  let d = new Date().getTime();
  if (
    typeof performance !== 'undefined' &&
    typeof performance.now === 'function'
  ) {
    d += performance.now(); // use high-precision timer if available
  }
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}
/* eslint-enable no-bitwise */

const generateFakeItems = (number, startingTimeStamp) => {
  const items = [];
  for (let i = 0; i < number; i += 1) {
    const num = getRandomInt(100);
    const timestamp = startingTimeStamp + i * 175000;
    items.push({
      timestamp,
      trackable_count: num
    });
  }
  return items;
};
const numberOfFakeItems = 100;

module.exports = Object.freeze({
  getStartOfTimePeriodMinusOneTimestamp,
  getCurrentTimeStamp,
  generateRandomUUID,
  generateFakeItems,
  numberOfFakeItems,
  getRandomInt,
  getCurrentTimeYesterdayTimestamp,
  parseJwt
});

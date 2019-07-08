const db = require('./db');
const mockResponseOneProcess = require('./fixtures/processes/mockResponseOneProcess');

module.exports = {
  ...db(),
  processes: mockResponseOneProcess
};

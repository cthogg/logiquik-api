const mock = require('../../../../mockConstants');

const process2Area1Count = {
  total: 61,
  known: 50,
  unknown: 1,
  states: {
    'state-1-uuid': 3,
    'state-2-uuid': 2
  }
};

const process2Area2Count = {
  total: 6,
  known: 4,
  unknown: 1,
  states: {
    'state-1-uuid': 3,
    'state-2-uuid': 2
  }
};
const process2Area3Count = {
  total: 5,
  known: 5,
  unknown: 1,
  states: {
    'state-1-uuid': 3,
    'state-2-uuid': 2
  }
};

const process2Area4Count = {
  total: 60,
  known: 60,
  unknown: 0,
  states: {
    'state-1-uuid': 60,
    'state-2-uuid': 2
  }
};

const process2Area5Count = {
  total: 60,
  known: 60,
  unknown: 0,
  states: {
    'state-1-uuid': 60,
    'state-2-uuid': 0
  }
};

const process2Area6Count = {
  total: 62,
  known: 62,
  unknown: 0,
  states: {
    'state-1-uuid': 62,
    'state-2-uuid': 0
  }
};
const process2Participant1Count = {
  total: 6,
  known: 5,
  unknown: 1,
  states: {
    'state-1-uuid': 3,
    'state-2-uuid': 2
  }
};
const process2Participant2Count = {
  total: 100,
  known: 100,
  unknown: 1,
  states: {
    'state-1-uuid': 3,
    'state-2-uuid': 2
  }
};
const process2Participant3Count = {
  total: 50,
  known: 50,
  unknown: 0,
  states: {
    'state-1-uuid': 3,
    'state-2-uuid': 2
  }
};

const process2Participant4Count = {
  total: 23,
  known: 23,
  unknown: 0,
  states: {
    'state-1-uuid': 23,
    'state-2-uuid': 0
  }
};

const processTotalCount = {
  id: mock.process2.id,
  total: process2Area1Count.total + process2Area2Count.total,
  known: process2Area1Count.known + process2Area2Count.known,
  unknown: process2Area1Count.unknown + process2Area2Count.unknown,
  states: {
    'state-1-uuid': 3,
    'state-2-uuid': 2
  }
};
const response = {
  total: processTotalCount,
  areas: {},
  participants: {}
};
response.areas[mock.area1.id] = process2Area1Count;
response.areas[mock.area2.id] = process2Area2Count;
response.areas[mock.area3.id] = process2Area3Count;
response.areas[mock.area4.id] = process2Area4Count;
response.areas[mock.area5.id] = process2Area5Count;
response.areas[mock.area6.id] = process2Area6Count;

response.participants[mock.participant1.id] = process2Participant1Count;
response.participants[mock.participant2.id] = process2Participant2Count;
response.participants[mock.participant3.id] = process2Participant3Count;
response.participants[mock.participant4.id] = process2Participant4Count;

module.exports = Object.freeze({
  response,
  process2Area1Count,
  process2Area2Count,
  process2Participant1Count,
  processTotalCount
});

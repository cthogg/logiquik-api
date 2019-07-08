const mock = require('../../../../mockConstants');

const process1Area1Count = {
  total: 61,
  known: 50,
  unknown: 1,
  states: {
    'state-1-uuid': 3,
    'state-2-uuid': 2
  }
};

const process1Area2Count = {
  total: 6,
  known: 4,
  unknown: 1,
  states: {
    'state-1-uuid': 3,
    'state-2-uuid': 2
  }
};
const process1Area3Count = {
  total: 5,
  known: 5,
  unknown: 1,
  states: {
    'state-1-uuid': 3,
    'state-2-uuid': 2
  }
};

const process1Area4Count = {
  total: 60,
  known: 60,
  unknown: 0,
  states: {
    'state-1-uuid': 60,
    'state-2-uuid': 2
  }
};

const process1Area5Count = {
  total: 60,
  known: 60,
  unknown: 0,
  states: {
    'state-1-uuid': 60,
    'state-2-uuid': 0
  }
};

const process1Area6Count = {
  total: 62,
  known: 62,
  unknown: 0,
  states: {
    'state-1-uuid': 62,
    'state-2-uuid': 0
  }
};
const process1Participant1Count = {
  total: 6,
  known: 5,
  unknown: 1,
  states: {
    'state-1-uuid': 3,
    'state-2-uuid': 2
  }
};
const process1Participant2Count = {
  total: 100,
  known: 100,
  unknown: 1,
  states: {
    'state-1-uuid': 3,
    'state-2-uuid': 2
  }
};
const process1Participant3Count = {
  total: 50,
  known: 50,
  unknown: 0,
  states: {
    'state-1-uuid': 3,
    'state-2-uuid': 2
  }
};

const process1Participant4Count = {
  total: 23,
  known: 23,
  unknown: 0,
  states: {
    'state-1-uuid': 23,
    'state-2-uuid': 0
  }
};

const processTotalCount = {
  id: mock.process1.id,
  total: process1Area1Count.total + process1Area2Count.total,
  known: process1Area1Count.known + process1Area2Count.known,
  unknown: process1Area1Count.unknown + process1Area2Count.unknown,
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
response.areas[mock.area1.id] = process1Area1Count;
response.areas[mock.area2.id] = process1Area2Count;
response.areas[mock.area3.id] = process1Area3Count;
response.areas[mock.area4.id] = process1Area4Count;
response.areas[mock.area5.id] = process1Area5Count;
response.areas[mock.area6.id] = process1Area6Count;

response.participants[mock.participant1.id] = process1Participant1Count;
response.participants[mock.participant2.id] = process1Participant2Count;
response.participants[mock.participant3.id] = process1Participant3Count;
response.participants[mock.participant4.id] = process1Participant4Count;

module.exports = Object.freeze({
  response,
  process1Area1Count,
  process1Area2Count,
  process1Participant1Count,
  processTotalCount
});

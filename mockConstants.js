const area1 = {
  id: 'area1',
  name: 'Penny Lane',
  type: 'Factory',
  description: 'Penny Lane is in my ears and in my eyes',
  count: {
    total: 6,
    known: 5,
    unknown: 1,
    states: {
      'state-1-uuid': 3,
      'state-2-uuid': 2
    }
  }
};

const area2 = {
  id: 'area2',
  name: 'Hotel California',
  type: 'Studio',
  description: 'Welcome to the hotel California'
};

const area3 = {
  id: 'area3',
  name: 'drum trucker',
  type: 'TRANSPORT',
  description: 'Just keep rollin'
};

const area4 = {
  id: 'area4',
  name: 'Hotel California',
  type: 'Studio',
  description: 'Welcome to the hotel California'
};

const area5 = {
  id: 'area5',
  name: 'Demo area 1',
  type: 'Studio',
  description: 'I like to sing my demo'
};

const area6 = {
  id: 'area6',
  name: 'Demo area 2',
  type: 'Studio',
  description: 'I like to sing my demo'
};
const process1 = {
  id: 'process1',
  name: 'Drum Manufacturing',
  type: 'PROCESS',
  description: 'Production of the E22 Drumset'
};

const process2 = {
  id: 'process2',
  name: 'Trumpet Manufacturer',
  type: 'PROCESS',
  description: 'Production of the Miles Davis'
};

const processState1 = {
  id: 'ps1',
  name: 'empty'
};

const device1 = {
  id: 'dev1'
};

const customer1 = {
  id: 'customer1'
};
const participant1 = {
  id: 'paOne',
  type: 'CONSUMER',
  name: 'Big Drum Co',
  description: 'The biggest drumming company in the world'
};

const participant2 = {
  id: 'paTwo',
  type: 'PRODUCER',
  name: 'Cymbol Crashers',
  description: 'Crash bang wallop'
};

const participant3 = {
  id: 'paThree',
  type: 'TRANSPORT',
  name: 'DHL Delivery',
  description: 'Delivering Fast'
};

const participant4 = {
  id: 'paFour',
  type: 'DEMO',
  name: 'Demo Participant',
  description: 'Demo Days'
};

const trackable1 = {
  id: 't1',
  type: 'TRACKABLE',
  name: 'Trackable 1',
  description:
    '01-002-0027 | 00124b0012b98887 | 722ae4c5-6510-4ea4-bfcb-f6147457640f'
};

const trackable2 = {
  id: 't2',
  type: 'TRACKABLE',
  name: 'Trackable 2',
  description:
    '01-002-0028 | 00124b0012b98887 | 722ae4c5-6510-4ea4-bfcb-f6147457640f'
};

const eventApiConstants = {
  eventTypes: {
    changeEvent: 'TRACKABLE_CHANGE_EVENT'
  },
  eventSubTypes: {
    areaChangeForTrackable: 'TRACKABLE_AREA_CHANGE_EVENT',
    connectionStatusChangeForTrackable:
      'TRACKABLE_CONNECTION_STATUS_CHANGE_EVENT'
  }
};

const event1 = {
  id: 'e1',
  timestamp: 1548838058630
};

module.exports = Object.freeze({
  customer1,
  event1,
  eventApiConstants,
  area1,
  area2,
  area3,
  area4,
  area5,
  area6,
  process1,
  process2,
  processState1,
  participant1,
  participant2,
  participant3,
  participant4,
  trackable1,
  trackable2,
  device1
});

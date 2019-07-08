const t1Response = require('./t1/?timestamp=19/mockResponse');
const t2Response = require('./t2/?timestamp=19/mockResponse');

const items = [t1Response.response, t2Response.response];

exports.response = {
  count: 2,
  items
};

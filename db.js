// Tracking Service
const mockAreas = require('./fixtures/areas/mockResponse');
const mockProcesses = require('./fixtures/processes/mockResponse');
const mockProcess1 = require('./fixtures/processes/process1/mockResponse');
const mockProcess1Count = require('./fixtures/processes/process1/count/mockResponse');
const mockProcess1CountV2 = require('./fixtures/processes/process1/count/mockResponseV2');
const mockProcess2 = require('./fixtures/processes/process2/mockResponse');
const mockProcess2Count = require('./fixtures/processes/process2/count/mockResponse');
const mockProcess2CountV2 = require('./fixtures/processes/process2/count/mockResponseV2');
const mockArea1 = require('./fixtures/areas/area1/mockResponse');
const mockArea2 = require('./fixtures/areas/area2/mockResponse');
const mockArea3 = require('./fixtures/areas/area3/mockResponse');
const mockArea4 = require('./fixtures/areas/area4/mockResponse');
const mockArea5 = require('./fixtures/areas/area5/mockResponse');
const mockArea6 = require('./fixtures/areas/area6/mockResponse');
const mockTrackables = require('./fixtures/trackables/mockResponse');
const mockTrackablesPaginated = require('./fixtures/trackables/mockResponsePaginated');
const mockTrackable1 = require('./fixtures/trackables/t1/?timestamp=19/mockResponse');
const mockTrackable2 = require('./fixtures/trackables/t2/?timestamp=19/mockResponse');
const mockEvents = require('./fixtures/events/mockResponse');

// Kpi file server
// process 1
const process1kpiCycleCountThreeMonths = require('./fixtures/kpi/v1/processes/process1/cycles/counts/?start_time=1529884800000&end_time=1535759999000&bucket=week/mockResponse');
const process1kpiCycleDurationThreeMonths = require('./fixtures/kpi/v1/processes/process1/cycles/duration/?start_time=1529884800000&end_time=1535759999000&bucket=week/mockResponse');
const process1kpiCycleOverview = require('./fixtures/kpi/v1/processes/process1/cycles/mockResponse');
const process1kpiTrackablesCountTwoWeeks = require('./fixtures/kpi/v1/processes/process1/cycles/trackables/count?start_time=1529877600000&end_time=1531087199999&bucket=week/mockResponse');
const process1kpiTrackablesDistributionTwoWeeks = require('./fixtures/kpi/v1/processes/process1/cycles/trackables/distribution?start_time=1529877600000&end_time=1531087199999&sample_period=minute/mockResponse');
const process1kpiTrackablesStationaryOneWeek = require('./fixtures/kpi/v1/processes/process1/cycles/trackables/stationary?start_time=1529877600000&end_time=1531087199999&bucket=week/mockResponse');
const process1kpiTrackablesDistributionWeek26 = require('./fixtures/kpi/v1/processes/process1/cycles/trackables/distribution?start_time=1529877600000&end_time=1530482399999&sample_period=minute/mockResponse');
const process1kpiTrackablesDistributionWeek27 = require('./fixtures/kpi/v1/processes/process1/cycles/trackables/distribution?start_time=1530482400000&end_time=1531087199999&sample_period=minute/mockResponse');

// process 2
const process2kpiCycleCountThreeMonths = require('./fixtures/kpi/v1/processes/process2/cycles/counts/?start_time=1529884800000&end_time=1535759999000&bucket=week/mockResponse');
const process2kpiCycleDurationThreeMonths = require('./fixtures/kpi/v1/processes/process2/cycles/duration/?start_time=1529884800000&end_time=1535759999000&bucket=week/mockResponse');
const process2kpiCycleOverview = require('./fixtures/kpi/v1/processes/process2/cycles/mockResponse');
const process2kpiTrackablesCountTwoWeeks = require('./fixtures/kpi/v1/processes/process2/cycles/trackables/count?start_time=1529877600000&end_time=1531087199999&bucket=week/mockResponse');
const process2kpiTrackablesDistributionTwoWeeks = require('./fixtures/kpi/v1/processes/process2/cycles/trackables/distribution?start_time=1529877600000&end_time=1531087199999&sample_period=minute/mockResponse');
const process2kpiTrackablesStationaryOneWeek = require('./fixtures/kpi/v1/processes/process2/cycles/trackables/stationary?start_time=1529877600000&end_time=1531087199999&bucket=week/mockResponse');
const process2kpiTrackablesDistributionWeek26 = require('./fixtures/kpi/v1/processes/process2/cycles/trackables/distribution?start_time=1529877600000&end_time=1530482399999&sample_period=minute/mockResponse');
const process2kpiTrackablesDistributionWeek27 = require('./fixtures/kpi/v1/processes/process2/cycles/trackables/distribution?start_time=1530482400000&end_time=1531087199999&sample_period=minute/mockResponse');

module.exports = () => {
  const data = {
    // tracking service
    areas: mockAreas,
    area1: mockArea1,
    area2: mockArea2,
    area3: mockArea3,
    area4: mockArea4,
    area5: mockArea5,
    area6: mockArea6,
    processes: mockProcesses,
    process1: mockProcess1,
    process1Count: mockProcess1Count,
    process1CountV2: mockProcess1CountV2,
    process2: mockProcess2,
    process2Count: mockProcess2Count,
    process2CountV2: mockProcess2CountV2,
    trackables: mockTrackables,
    trackablesPaginated: mockTrackablesPaginated,
    trackable1: mockTrackable1,
    trackable2: mockTrackable2,
    events: mockEvents,
    // kpi file server
    // process 1
    process1kpiTrackablesCountTwoWeeks,
    process1kpiTrackablesDistributionTwoWeeks,
    process1kpiTrackablesDistributionWeek26,
    process1kpiTrackablesDistributionWeek27,
    process1kpiTrackablesStationaryOneWeek,
    process1kpiCycleCountThreeMonths,
    process1kpiCycleDurationThreeMonths,
    process1kpiCycleOverview,
    // process 2
    process2kpiTrackablesCountTwoWeeks,
    process2kpiTrackablesDistributionTwoWeeks,
    process2kpiTrackablesDistributionWeek26,
    process2kpiTrackablesDistributionWeek27,
    process2kpiTrackablesStationaryOneWeek,
    process2kpiCycleCountThreeMonths,
    process2kpiCycleDurationThreeMonths,
    process2kpiCycleOverview
  };
  return data;
};

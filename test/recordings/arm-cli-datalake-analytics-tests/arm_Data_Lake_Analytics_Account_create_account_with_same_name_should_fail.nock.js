// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46153750-fa3b-4140-bf57-8beb7d5c971a',
    name: 'KonaMDI3_697842',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadla8446/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073?api-version=2015-10-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.DataLakeAnalytics/accounts/xplattestadla3073' under resource group 'xplattestadla8446' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'f5d8198b-e4e8-4b86-890e-1a7841a18205',
  'x-ms-correlation-request-id': 'f5d8198b-e4e8-4b86-890e-1a7841a18205',
  'x-ms-routing-request-id': 'WESTUS:20151121T004818Z:f5d8198b-e4e8-4b86-890e-1a7841a18205',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 21 Nov 2015 00:48:18 GMT',
  connection: 'close',
  'content-length': '175' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadla8446/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073?api-version=2015-10-01-preview')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.DataLakeAnalytics/accounts/xplattestadla3073' under resource group 'xplattestadla8446' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'f5d8198b-e4e8-4b86-890e-1a7841a18205',
  'x-ms-correlation-request-id': 'f5d8198b-e4e8-4b86-890e-1a7841a18205',
  'x-ms-routing-request-id': 'WESTUS:20151121T004818Z:f5d8198b-e4e8-4b86-890e-1a7841a18205',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 21 Nov 2015 00:48:18 GMT',
  connection: 'close',
  'content-length': '175' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadla8446/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073?api-version=2015-10-01-preview', '*')
  .reply(409, "{\"error\":{\"code\":\"ResourceConflicted\",\"message\":\"Resource Name is belong to another owner.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '93',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '13309389-d808-4531-9570-37d80e8b61ba',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'f6fe5b5e-5a7f-494b-ad68-554c149e17f7',
  'x-ms-routing-request-id': 'WESTUS:20151121T004821Z:f6fe5b5e-5a7f-494b-ad68-554c149e17f7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 21 Nov 2015 00:48:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/46153750-fa3b-4140-bf57-8beb7d5c971a/resourceGroups/xplattestadla8446/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3073?api-version=2015-10-01-preview', '*')
  .reply(409, "{\"error\":{\"code\":\"ResourceConflicted\",\"message\":\"Resource Name is belong to another owner.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '93',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '13309389-d808-4531-9570-37d80e8b61ba',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'f6fe5b5e-5a7f-494b-ad68-554c149e17f7',
  'x-ms-routing-request-id': 'WESTUS:20151121T004821Z:f6fe5b5e-5a7f-494b-ad68-554c149e17f7',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Sat, 21 Nov 2015 00:48:20 GMT',
  connection: 'close' });
 return result; }]];
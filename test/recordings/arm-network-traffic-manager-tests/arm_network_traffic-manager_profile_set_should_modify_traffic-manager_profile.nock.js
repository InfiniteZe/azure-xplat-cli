// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2015-11-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\",\"name\":\"test-profile\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/healthcheck.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '614',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'dfca3fcb-9051-41cd-8d45-57b2ad53ff7c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '79757f68-68c6-43c4-bc00-a01c73115056',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093326Z:79757f68-68c6-43c4-bc00-a01c73115056',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:33:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2015-11-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\",\"name\":\"test-profile\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\"},\"properties\":{\"profileStatus\":\"Enabled\",\"trafficRoutingMethod\":\"Performance\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":300},\"monitorConfig\":{\"profileMonitorStatus\":\"Inactive\",\"protocol\":\"HTTP\",\"port\":80,\"path\":\"\\/healthcheck.html\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '614',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'dfca3fcb-9051-41cd-8d45-57b2ad53ff7c',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '79757f68-68c6-43c4-bc00-a01c73115056',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093326Z:79757f68-68c6-43c4-bc00-a01c73115056',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:33:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\",\"name\":\"test-profile\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"profileStatus\":\"Disabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":400},\"monitorConfig\":{\"profileMonitorStatus\":\"Disabled\",\"protocol\":\"HTTPS\",\"port\":90,\"path\":\"\\/index.aspx\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '620',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '3f5947cd-44a8-465e-8f84-a80bf98fc6c8',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '22a14afa-b21d-41a4-a44e-2c6b7ef0a52a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093329Z:22a14afa-b21d-41a4-a44e-2c6b7ef0a52a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:33:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile?api-version=2015-11-01', '*')
  .reply(201, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\",\"name\":\"test-profile\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\",\"location\":\"global\",\"tags\":{\"tag1\":\"aaa\",\"tag2\":\"bbb\",\"tag3\":\"ccc\"},\"properties\":{\"profileStatus\":\"Disabled\",\"trafficRoutingMethod\":\"Weighted\",\"dnsConfig\":{\"relativeName\":\"test-profile-dns\",\"fqdn\":\"test-profile-dns.trafficmanager.net\",\"ttl\":400},\"monitorConfig\":{\"profileMonitorStatus\":\"Disabled\",\"protocol\":\"HTTPS\",\"port\":90,\"path\":\"\\/index.aspx\"},\"endpoints\":[]}}", { 'cache-control': 'private',
  'content-length': '620',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '3f5947cd-44a8-465e-8f84-a80bf98fc6c8',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '10799',
  'x-ms-correlation-request-id': '22a14afa-b21d-41a4-a44e-2c6b7ef0a52a',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093329Z:22a14afa-b21d-41a4-a44e-2c6b7ef0a52a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:33:29 GMT',
  connection: 'close' });
 return result; }]];
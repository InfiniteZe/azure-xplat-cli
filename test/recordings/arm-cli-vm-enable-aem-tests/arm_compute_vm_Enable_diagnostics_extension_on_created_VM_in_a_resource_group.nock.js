// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4be8920b-2978-43d7-ab14-04d8549c1d05',
    name: 'OSTC Shanghai Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension3624/providers/Microsoft.Compute/virtualMachines/xplatvmExt?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"1b15271e-148d-47ea-99f6-fcf03d8b21a4\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_A1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"ubuntuserver\",\r\n        \"sku\": \"14.04.3-LTS\",\r\n        \"version\": \"14.04.201512180\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clicb026f5a81b27b6e-os-1457671720120\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatstoragext2925.blob.core.windows.net/xplatstoragecntext6780/clicb026f5a81b27b6e-os-1457671720120.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatvmExt\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension3624/providers/Microsoft.Network/networkInterfaces/xplatnicExt\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatstoragext2925.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension3624/providers/Microsoft.Compute/virtualMachines/xplatvmExt\",\r\n  \"name\": \"xplatvmExt\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {}\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1626',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_131020203524715964',
  'x-ms-request-id': '8c1e3027-a7e6-4a55-89a4-98b40f405a56',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14989',
  'x-ms-correlation-request-id': '105ebd20-c830-4d80-88a2-1a560d9caa56',
  'x-ms-routing-request-id': 'WESTUS:20160311T045226Z:105ebd20-c830-4d80-88a2-1a560d9caa56',
  date: 'Fri, 11 Mar 2016 04:52:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension3624/providers/Microsoft.Storage/storageAccounts/xplatstoragext2925/listKeys?api-version=2015-06-15')
  .reply(200, "{\"key1\":\"D/Vd+e1Sf6skl710FRz4vrfnPf9+iMLI42k5Nz4+eHK6HD2ywGAl0GksKJu1urcbJHt81s6ZbzIb1A/+A3UaKQ==\",\"key2\":\"jkM0WDr/mKa3jPwXNOLHp5i8/S0z48t7b3Nc7LkfiYerxgsFNKT/rdYGZ7XzBffIkENuKkQAtMOOKhr8ipQ+xQ==\"}\n", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '198',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': 'b11bae72-920a-4b6d-bc35-02d3e8881d75',
  server: 'Microsoft-Azure-Storage-Resource-Provider/1.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b11bae72-920a-4b6d-bc35-02d3e8881d75',
  'x-ms-routing-request-id': 'WESTUS:20160311T045226Z:b11bae72-920a-4b6d-bc35-02d3e8881d75',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 11 Mar 2016 04:52:26 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension3624/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/LinuxDiagnostic?api-version=2015-06-15', '*')
  .reply(201, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.OSTCExtensions\",\r\n    \"type\": \"LinuxDiagnostic\",\r\n    \"typeHandlerVersion\": \"2.3\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"settings\": {\"xmlCfg\":\"PFdhZENmZz48RGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uIG92ZXJhbGxRdW90YUluTUI9IjQwOTYiPjxEaWFnbm9zdGljSW5mcmFzdHJ1Y3R1cmVMb2dzIHNjaGVkdWxlZFRyYW5zZmVyUGVyaW9kPSJQVDFNIiBzY2hlZHVsZWRUcmFuc2ZlckxvZ0xldmVsRmlsdGVyPSJXYXJuaW5nIi8+PFBlcmZvcm1hbmNlQ291bnRlcnMgc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMU0iPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzb3JcUGVyY2VudFByb2Nlc3NvclRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iQ1BVIHV0aWxpemF0aW9uIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzb3JcUGVyY2VudElkbGVUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSBpZGxlIHRpbWUiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvclxQZXJjZW50UHJpdmlsZWdlZFRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iQ1BVIHByaXZpbGVnZWQgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yXFBlcmNlbnRJbnRlcnJ1cHRUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSBpbnRlcnJ1cHQgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yXFBlcmNlbnREUENUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSBEUEMgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yXFBlcmNlbnRVc2VyVGltZSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJDUFUgdXNlciB0aW1lIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzb3JcUGVyY2VudE5pY2VUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSBuaWNlIHRpbWUiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvclxQZXJjZW50SU9XYWl0VGltZSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJDUFUgSU8gd2FpdCB0aW1lIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcUGVyY2VudFVzZWRNZW1vcnkiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IHVzZWQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE1lbW9yeVxVc2VkTWVtb3J5IiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJNZW1vcnkgdXNlZCAoYnl0ZXMpIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcUGVyY2VudEF2YWlsYWJsZU1lbW9yeSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJNZW1vcnkgYXZhaWxhYmxlIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcQXZhaWxhYmxlTWVtb3J5IiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJNZW1vcnkgYXZhaWxhYmxlIChieXRlcykiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE1lbW9yeVxQZXJjZW50VXNlZEJ5Q2FjaGUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IGNhY2hlZCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XFBlcmNlbnRVc2VkU3dhcCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJNZW1vcnkgc3dhcCB1c2VkIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcVXNlZFN3YXAiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBzd2FwIHVzZWQgKGJ5dGVzKSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XEF2YWlsYWJsZVN3YXAiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBzd2FwIGF2YWlsYWJsZSAoYnl0ZXMpIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcUGFnZXNQZXJTZWMiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJDb3VudFBlclNlY29uZCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBwYWdlcyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XFBhZ2VzUmVhZFBlclNlYyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50UGVyU2Vjb25kIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IHBhZ2UgcmVhZHMiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE1lbW9yeVxQYWdlc1dyaXR0ZW5QZXJTZWMiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJDb3VudFBlclNlY29uZCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBwYWdlIHdyaXRlcyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrXEF2ZXJhZ2VUcmFuc2ZlclRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJTZWNvbmRzIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayBhY3RpdmUgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrXEF2ZXJhZ2VSZWFkVGltZSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlNlY29uZHMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIGFjdGl2ZSByZWFkIHRpbWUiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlza1xBdmVyYWdlV3JpdGVUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iU2Vjb25kcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkRpc2sgYWN0aXZlIHdyaXRlIHRpbWUiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlza1xUcmFuc2ZlcnNQZXJTZWNvbmQiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJDb3VudFBlclNlY29uZCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkRpc2sgb3BlcmF0aW9ucyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrXFJlYWRzUGVyU2Vjb25kIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnRQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHJlYWQgb3BlcmF0aW9ucyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrXFdyaXRlc1BlclNlY29uZCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50UGVyU2Vjb25kIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayB3cml0ZSBvcGVyYXRpb25zIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2tcQnl0ZXNQZXJTZWNvbmQiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlc1BlclNlY29uZCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkRpc2sgc3BlZWQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlza1xXcml0ZUJ5dGVzUGVyU2Vjb25kIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXNQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHdyaXRlIHNwZWVkIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2tcQXZlcmFnZURpc2tRdWV1ZUxlbmd0aCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayBhdmVyYWdlIHF1ZXVlIGxlbmd0aCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTmV0d29ya0ludGVyZmFjZVxCeXRlc1RvdGFsIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIGJ5dGVzIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxOZXR3b3JrSW50ZXJmYWNlXEJ5dGVzVHJhbnNtaXR0ZWQiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik5ldHdvcmsgYnl0ZXMgc2VudCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTmV0d29ya0ludGVyZmFjZVxCeXRlc1JlY2VpdmVkIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIGJ5dGVzIHJlY2VpdmVkIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxOZXR3b3JrSW50ZXJmYWNlXFBhY2tldHNUcmFuc21pdHRlZCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTmV0d29yayBwYWNrZXRzIHNlbnQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE5ldHdvcmtJbnRlcmZhY2VcUGFja2V0c1JlY2VpdmVkIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIHBhY2tldHMgcmVjZWl2ZWQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE5ldHdvcmtJbnRlcmZhY2VcVG90YWxSeEVycm9ycyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTmV0d29yayBwYWNrZXRzIHJlY2VpdmVkIGVycm9ycyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTmV0d29ya0ludGVyZmFjZVxUb3RhbFR4RXJyb3JzIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIHBhY2tldHMgc2VudCBlcnJvcnMiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE5ldHdvcmtJbnRlcmZhY2VcVG90YWxDb2xsaXNpb25zIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIGNvbGxpc2lvbnMiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PC9QZXJmb3JtYW5jZUNvdW50ZXJzPjxNZXRyaWNzIHJlc291cmNlSWQ9Ii9zdWJzY3JpcHRpb25zLzRiZTg5MjBiLTI5NzgtNDNkNy1hYjE0LTA0ZDg1NDljMWQwNS9yZXNvdXJjZUdyb3Vwcy94cGxhdFRlc3RHRXh0ZW5zaW9uNTQ5OS9wcm92aWRlcnMvTWljcm9zb2Z0LkNvbXB1dGUvdmlydHVhbE1hY2hpbmVzL3hwbGF0dm1FeHQiPjxNZXRyaWNBZ2dyZWdhdGlvbiBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxSCIvPjxNZXRyaWNBZ2dyZWdhdGlvbiBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSIvPjwvTWV0cmljcz48L0RpYWdub3N0aWNNb25pdG9yQ29uZmlndXJhdGlvbj48L1dhZENmZz4=\",\"storageAccount\":\"xplatstoragext2925\"},\r\n    \"provisioningState\": \"Creating\"\r\n  },\r\n  \"id\": \"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension3624/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/LinuxDiagnostic\",\r\n  \"name\": \"LinuxDiagnostic\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '11472',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/providers/Microsoft.Compute/locations/eastus/operations/99481aae-a32c-40f5-a09a-ed46d63a337e?api-version=2015-06-15',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_131020203524715964',
  'x-ms-request-id': '99481aae-a32c-40f5-a09a-ed46d63a337e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'b4473f20-24a1-412c-98fe-6b21c82ec70d',
  'x-ms-routing-request-id': 'WESTUS:20160311T045228Z:b4473f20-24a1-412c-98fe-6b21c82ec70d',
  date: 'Fri, 11 Mar 2016 04:52:27 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/providers/Microsoft.Compute/locations/eastus/operations/99481aae-a32c-40f5-a09a-ed46d63a337e?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"99481aae-a32c-40f5-a09a-ed46d63a337e\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-11T04:52:27.6988512+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_131020203524715964',
  'x-ms-request-id': '583f3d2d-559a-42c8-91d0-fcf601a1778e',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'ad737f51-a378-4674-b08b-dc3be5d181c1',
  'x-ms-routing-request-id': 'WESTUS:20160311T045259Z:ad737f51-a378-4674-b08b-dc3be5d181c1',
  date: 'Fri, 11 Mar 2016 04:52:58 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/providers/Microsoft.Compute/locations/eastus/operations/99481aae-a32c-40f5-a09a-ed46d63a337e?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"99481aae-a32c-40f5-a09a-ed46d63a337e\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-11T04:52:27.6988512+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_131020203524715964',
  'x-ms-request-id': 'b1835c48-b297-447b-9cd5-91556a7e192f',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': 'fb208e8c-412b-4ddc-84a1-342928fbaaaa',
  'x-ms-routing-request-id': 'WESTUS:20160311T045329Z:fb208e8c-412b-4ddc-84a1-342928fbaaaa',
  date: 'Fri, 11 Mar 2016 04:53:29 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/providers/Microsoft.Compute/locations/eastus/operations/99481aae-a32c-40f5-a09a-ed46d63a337e?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"99481aae-a32c-40f5-a09a-ed46d63a337e\",\r\n  \"status\": \"InProgress\",\r\n  \"startTime\": \"2016-03-11T04:52:27.6988512+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '141',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_131020203524715964',
  'x-ms-request-id': '91d74ec6-67fb-41e9-af33-0901f5215a9a',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '770ab4c8-81b0-4bfc-b1ad-ea3536a4b9e8',
  'x-ms-routing-request-id': 'WESTUS:20160311T045400Z:770ab4c8-81b0-4bfc-b1ad-ea3536a4b9e8',
  date: 'Fri, 11 Mar 2016 04:53:59 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/providers/Microsoft.Compute/locations/eastus/operations/99481aae-a32c-40f5-a09a-ed46d63a337e?api-version=2015-06-15')
  .reply(200, "{\r\n  \"operationId\": \"99481aae-a32c-40f5-a09a-ed46d63a337e\",\r\n  \"status\": \"Succeeded\",\r\n  \"startTime\": \"2016-03-11T04:52:27.6988512+00:00\",\r\n  \"endTime\": \"2016-03-11T04:54:13.0432172+00:00\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '191',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_131020203524715964',
  'x-ms-request-id': '935b8f9e-40d1-4136-9188-dfb58f223448',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': '384a6607-2196-4c21-afa0-da531103d732',
  'x-ms-routing-request-id': 'WESTUS:20160311T045431Z:384a6607-2196-4c21-afa0-da531103d732',
  date: 'Fri, 11 Mar 2016 04:54:30 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension3624/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/LinuxDiagnostic?api-version=2015-06-15')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"publisher\": \"Microsoft.OSTCExtensions\",\r\n    \"type\": \"LinuxDiagnostic\",\r\n    \"typeHandlerVersion\": \"2.3\",\r\n    \"autoUpgradeMinorVersion\": true,\r\n    \"settings\": {\"xmlCfg\":\"PFdhZENmZz48RGlhZ25vc3RpY01vbml0b3JDb25maWd1cmF0aW9uIG92ZXJhbGxRdW90YUluTUI9IjQwOTYiPjxEaWFnbm9zdGljSW5mcmFzdHJ1Y3R1cmVMb2dzIHNjaGVkdWxlZFRyYW5zZmVyUGVyaW9kPSJQVDFNIiBzY2hlZHVsZWRUcmFuc2ZlckxvZ0xldmVsRmlsdGVyPSJXYXJuaW5nIi8+PFBlcmZvcm1hbmNlQ291bnRlcnMgc2NoZWR1bGVkVHJhbnNmZXJQZXJpb2Q9IlBUMU0iPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzb3JcUGVyY2VudFByb2Nlc3NvclRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iQ1BVIHV0aWxpemF0aW9uIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzb3JcUGVyY2VudElkbGVUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSBpZGxlIHRpbWUiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvclxQZXJjZW50UHJpdmlsZWdlZFRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iQ1BVIHByaXZpbGVnZWQgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yXFBlcmNlbnRJbnRlcnJ1cHRUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSBpbnRlcnJ1cHQgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yXFBlcmNlbnREUENUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSBEUEMgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUHJvY2Vzc29yXFBlcmNlbnRVc2VyVGltZSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJDUFUgdXNlciB0aW1lIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQcm9jZXNzb3JcUGVyY2VudE5pY2VUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iUGVyY2VudCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkNQVSBuaWNlIHRpbWUiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFByb2Nlc3NvclxQZXJjZW50SU9XYWl0VGltZSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJDUFUgSU8gd2FpdCB0aW1lIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcUGVyY2VudFVzZWRNZW1vcnkiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IHVzZWQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE1lbW9yeVxVc2VkTWVtb3J5IiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJNZW1vcnkgdXNlZCAoYnl0ZXMpIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcUGVyY2VudEF2YWlsYWJsZU1lbW9yeSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJNZW1vcnkgYXZhaWxhYmxlIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcQXZhaWxhYmxlTWVtb3J5IiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJNZW1vcnkgYXZhaWxhYmxlIChieXRlcykiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE1lbW9yeVxQZXJjZW50VXNlZEJ5Q2FjaGUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJQZXJjZW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IGNhY2hlZCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XFBlcmNlbnRVc2VkU3dhcCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlBlcmNlbnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJNZW1vcnkgc3dhcCB1c2VkIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcVXNlZFN3YXAiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBzd2FwIHVzZWQgKGJ5dGVzKSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XEF2YWlsYWJsZVN3YXAiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBzd2FwIGF2YWlsYWJsZSAoYnl0ZXMpIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxNZW1vcnlcUGFnZXNQZXJTZWMiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJDb3VudFBlclNlY29uZCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBwYWdlcyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTWVtb3J5XFBhZ2VzUmVhZFBlclNlYyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50UGVyU2Vjb25kIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTWVtb3J5IHBhZ2UgcmVhZHMiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE1lbW9yeVxQYWdlc1dyaXR0ZW5QZXJTZWMiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJDb3VudFBlclNlY29uZCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik1lbW9yeSBwYWdlIHdyaXRlcyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrXEF2ZXJhZ2VUcmFuc2ZlclRpbWUiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJTZWNvbmRzIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayBhY3RpdmUgdGltZSIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrXEF2ZXJhZ2VSZWFkVGltZSIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IlNlY29uZHMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIGFjdGl2ZSByZWFkIHRpbWUiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlza1xBdmVyYWdlV3JpdGVUaW1lIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iU2Vjb25kcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkRpc2sgYWN0aXZlIHdyaXRlIHRpbWUiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlza1xUcmFuc2ZlcnNQZXJTZWNvbmQiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJDb3VudFBlclNlY29uZCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkRpc2sgb3BlcmF0aW9ucyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrXFJlYWRzUGVyU2Vjb25kIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnRQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHJlYWQgb3BlcmF0aW9ucyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcUGh5c2ljYWxEaXNrXFdyaXRlc1BlclNlY29uZCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50UGVyU2Vjb25kIj48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayB3cml0ZSBvcGVyYXRpb25zIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2tcQnl0ZXNQZXJTZWNvbmQiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlc1BlclNlY29uZCI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9IkRpc2sgc3BlZWQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXFBoeXNpY2FsRGlza1xXcml0ZUJ5dGVzUGVyU2Vjb25kIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXNQZXJTZWNvbmQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJEaXNrIHdyaXRlIHNwZWVkIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxQaHlzaWNhbERpc2tcQXZlcmFnZURpc2tRdWV1ZUxlbmd0aCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iRGlzayBhdmVyYWdlIHF1ZXVlIGxlbmd0aCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTmV0d29ya0ludGVyZmFjZVxCeXRlc1RvdGFsIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIGJ5dGVzIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxOZXR3b3JrSW50ZXJmYWNlXEJ5dGVzVHJhbnNtaXR0ZWQiIHNhbXBsZVJhdGU9IlBUMTVTIiB1bml0PSJCeXRlcyI+PGFubm90YXRpb24gZGlzcGxheU5hbWU9Ik5ldHdvcmsgYnl0ZXMgc2VudCIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTmV0d29ya0ludGVyZmFjZVxCeXRlc1JlY2VpdmVkIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQnl0ZXMiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIGJ5dGVzIHJlY2VpdmVkIiBsb2NhbGU9ImVuLXVzIi8+PC9QZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uPjxQZXJmb3JtYW5jZUNvdW50ZXJDb25maWd1cmF0aW9uIGNvdW50ZXJTcGVjaWZpZXI9IlxOZXR3b3JrSW50ZXJmYWNlXFBhY2tldHNUcmFuc21pdHRlZCIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTmV0d29yayBwYWNrZXRzIHNlbnQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE5ldHdvcmtJbnRlcmZhY2VcUGFja2V0c1JlY2VpdmVkIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIHBhY2tldHMgcmVjZWl2ZWQiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE5ldHdvcmtJbnRlcmZhY2VcVG90YWxSeEVycm9ycyIgc2FtcGxlUmF0ZT0iUFQxNVMiIHVuaXQ9IkNvdW50Ij48YW5ub3RhdGlvbiBkaXNwbGF5TmFtZT0iTmV0d29yayBwYWNrZXRzIHJlY2VpdmVkIGVycm9ycyIgbG9jYWxlPSJlbi11cyIvPjwvUGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbj48UGVyZm9ybWFuY2VDb3VudGVyQ29uZmlndXJhdGlvbiBjb3VudGVyU3BlY2lmaWVyPSJcTmV0d29ya0ludGVyZmFjZVxUb3RhbFR4RXJyb3JzIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIHBhY2tldHMgc2VudCBlcnJvcnMiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PFBlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24gY291bnRlclNwZWNpZmllcj0iXE5ldHdvcmtJbnRlcmZhY2VcVG90YWxDb2xsaXNpb25zIiBzYW1wbGVSYXRlPSJQVDE1UyIgdW5pdD0iQ291bnQiPjxhbm5vdGF0aW9uIGRpc3BsYXlOYW1lPSJOZXR3b3JrIGNvbGxpc2lvbnMiIGxvY2FsZT0iZW4tdXMiLz48L1BlcmZvcm1hbmNlQ291bnRlckNvbmZpZ3VyYXRpb24+PC9QZXJmb3JtYW5jZUNvdW50ZXJzPjxNZXRyaWNzIHJlc291cmNlSWQ9Ii9zdWJzY3JpcHRpb25zLzRiZTg5MjBiLTI5NzgtNDNkNy1hYjE0LTA0ZDg1NDljMWQwNS9yZXNvdXJjZUdyb3Vwcy94cGxhdFRlc3RHRXh0ZW5zaW9uNTQ5OS9wcm92aWRlcnMvTWljcm9zb2Z0LkNvbXB1dGUvdmlydHVhbE1hY2hpbmVzL3hwbGF0dm1FeHQiPjxNZXRyaWNBZ2dyZWdhdGlvbiBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxSCIvPjxNZXRyaWNBZ2dyZWdhdGlvbiBzY2hlZHVsZWRUcmFuc2ZlclBlcmlvZD0iUFQxTSIvPjwvTWV0cmljcz48L0RpYWdub3N0aWNNb25pdG9yQ29uZmlndXJhdGlvbj48L1dhZENmZz4=\",\"storageAccount\":\"xplatstoragext2925\"},\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"id\": \"/subscriptions/4be8920b-2978-43d7-ab14-04d8549c1d05/resourceGroups/xplatTestGExtension3624/providers/Microsoft.Compute/virtualMachines/xplatvmExt/extensions/LinuxDiagnostic\",\r\n  \"name\": \"LinuxDiagnostic\",\r\n  \"type\": \"Microsoft.Compute/virtualMachines/extensions\",\r\n  \"location\": \"eastus\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '11473',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'e2ca12e2-ccfe-4511-976e-0015f520a426_131020203524715964',
  'x-ms-request-id': 'efe776c7-b282-4877-916c-8e210b34ec52',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '031f61f8-d979-4ac5-891b-ec6c0340aabd',
  'x-ms-routing-request-id': 'WESTUS:20160311T045432Z:031f61f8-d979-4ac5-891b-ec6c0340aabd',
  date: 'Fri, 11 Mar 2016 04:54:31 GMT' });
 return result; }]];
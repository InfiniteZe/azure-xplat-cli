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
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls3181.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlsclifolder01%2Fmovefile.txt?op=DELETE&recursive=false&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":false}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '816b2759-35c1-4a1c-8f70-69cfbc44a380',
  'server-perf': '[816b275935c14a1c8f7069cfbc44a380][ AuthTime::888.322430675993::PostAuthTime::207.859750268913 ][FsDelete :: 00:00:051 ms]%0a[CleanCacheDelete :: 00:00:000 ms]%0a[Delete :: 00:00:051 ms]%0a[DELETE :: 00:00:051 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:36 GMT',
  connection: 'close',
  'content-length': '17' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3181.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlsclifolder01%2Fmovefile.txt?op=DELETE&recursive=false&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":false}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '816b2759-35c1-4a1c-8f70-69cfbc44a380',
  'server-perf': '[816b275935c14a1c8f7069cfbc44a380][ AuthTime::888.322430675993::PostAuthTime::207.859750268913 ][FsDelete :: 00:00:051 ms]%0a[CleanCacheDelete :: 00:00:000 ms]%0a[Delete :: 00:00:051 ms]%0a[DELETE :: 00:00:051 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:36 GMT',
  connection: 'close',
  'content-length': '17' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3181.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlsclifolder01/movefile.txt [ead6ffc2bcda400d8ecec96297d4ac7f]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ead6ffc2-bcda-400d-8ece-c96297d4ac7f',
  'server-perf': '[ead6ffc2bcda400d8ecec96297d4ac7f][ AuthTime::865.238004606334::PostAuthTime::188.18819675076 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:039 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:039 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:37 GMT',
  connection: 'close',
  'content-length': '210' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3181.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlsclifolder01/movefile.txt [ead6ffc2bcda400d8ecec96297d4ac7f]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'ead6ffc2-bcda-400d-8ece-c96297d4ac7f',
  'server-perf': '[ead6ffc2bcda400d8ecec96297d4ac7f][ AuthTime::865.238004606334::PostAuthTime::188.18819675076 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:039 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:039 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:37 GMT',
  connection: 'close',
  'content-length': '210' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3181.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlsclifolder02?op=DELETE&recursive=true&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fae4b3e7-7566-48c9-8a2d-ec44a0f5bd93',
  'set-cookie': [ 'UserPrincipalSession=de25064a-2613-48db-934f-751da7f40467; path=/; secure; HttpOnly' ],
  'server-perf': '[fae4b3e7756648c98a2dec44a0f5bd93][ AuthTime::1848.49603334649::PostAuthTime::34716.3978534864 ][FsDelete :: 00:00:392 ms]%0a[CleanCacheDelete :: 00:00:000 ms]%0a[Delete : Recursive :: 00:00:393 ms]%0a[DELETE :: 00:00:393 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:38 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3181.azuredatalakestore.net:443')
  .delete('/webhdfs/v1/adlsclifolder02?op=DELETE&recursive=true&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fae4b3e7-7566-48c9-8a2d-ec44a0f5bd93',
  'set-cookie': [ 'UserPrincipalSession=de25064a-2613-48db-934f-751da7f40467; path=/; secure; HttpOnly' ],
  'server-perf': '[fae4b3e7756648c98a2dec44a0f5bd93][ AuthTime::1848.49603334649::PostAuthTime::34716.3978534864 ][FsDelete :: 00:00:392 ms]%0a[CleanCacheDelete :: 00:00:000 ms]%0a[Delete : Recursive :: 00:00:393 ms]%0a[DELETE :: 00:00:393 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:38 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls3181.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder02?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlsclifolder02 [49311a8ab10e4c93854649f084b6082f]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '49311a8a-b10e-4c93-8546-49f084b6082f',
  'server-perf': '[49311a8ab10e4c93854649f084b6082f][ AuthTime::887.892457233821::PostAuthTime::200.160727353289 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:068 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:068 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:38 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls3181.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder02?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlsclifolder02 [49311a8ab10e4c93854649f084b6082f]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '49311a8a-b10e-4c93-8546-49f084b6082f',
  'server-perf': '[49311a8ab10e4c93854649f084b6082f][ AuthTime::887.892457233821::PostAuthTime::200.160727353289 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:068 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:068 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 19 Nov 2015 22:07:38 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; }]];
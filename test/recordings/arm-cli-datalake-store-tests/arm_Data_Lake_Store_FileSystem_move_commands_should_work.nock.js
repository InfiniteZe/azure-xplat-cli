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
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?op=RENAME&destination=adlsclifolder01%2Fmovefile.txt&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bae8ee08-8add-469c-9954-94cf5ba36856',
  'set-cookie': [ 'UserPrincipalSession=121ee0ce-6c47-4aef-b094-8f9931ff631f; path=/; secure; HttpOnly' ],
  'server-perf': '[bae8ee088add469c995494cf5ba36856][ AuthTime::1966.11288747008::PostAuthTime::1228054.12562935 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[CleanCacheRename :: 00:00:002 ms]%0a[RENAME :: 00:00:278 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:17 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?op=RENAME&destination=adlsclifolder01%2Fmovefile.txt&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bae8ee08-8add-469c-9954-94cf5ba36856',
  'set-cookie': [ 'UserPrincipalSession=121ee0ce-6c47-4aef-b094-8f9931ff631f; path=/; secure; HttpOnly' ],
  'server-perf': '[bae8ee088add469c995494cf5ba36856][ AuthTime::1966.11288747008::PostAuthTime::1228054.12562935 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[CleanCacheRename :: 00:00:002 ms]%0a[RENAME :: 00:00:278 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:17 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447097470187,\"modificationTime\":1447097470393,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4f837c15-c460-4628-af15-2e8aa6216ba5',
  'server-perf': '[4f837c15c4604628af152e8aa6216ba5][ AuthTime::869.931919487245::PostAuthTime::188.613557764934 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:069 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:18 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fmovefile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447097470187,\"modificationTime\":1447097470393,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4f837c15-c460-4628-af15-2e8aa6216ba5',
  'server-perf': '[4f837c15c4604628af152e8aa6216ba5][ AuthTime::869.931919487245::PostAuthTime::188.613557764934 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:069 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:18 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlsclifolder01/concatfile.txt [4401cf8e033443c59a139d147aec1575]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4401cf8e-0334-43c5-9a13-9d147aec1575',
  'server-perf': '[4401cf8e033443c59a139d147aec1575][ AuthTime::896.876329864014::PostAuthTime::195.028901486882 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:038 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:18 GMT',
  connection: 'close',
  'content-length': '212' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlsclifolder01/concatfile.txt [4401cf8e033443c59a139d147aec1575]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4401cf8e-0334-43c5-9a13-9d147aec1575',
  'server-perf': '[4401cf8e033443c59a139d147aec1575][ AuthTime::896.876329864014::PostAuthTime::195.028901486882 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:038 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:18 GMT',
  connection: 'close',
  'content-length': '212' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01?op=RENAME&destination=adlsclifolder02&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a1f1c6c8-fe89-4659-9f4f-199dce47cecc',
  'set-cookie': [ 'UserPrincipalSession=9fb295af-7032-408a-a7e3-cf8c346259c9; path=/; secure; HttpOnly' ],
  'server-perf': '[a1f1c6c8fe8946599f4f199dce47cecc][ AuthTime::1987.49337609131::PostAuthTime::1246464.57561435 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[CleanCacheRename :: 00:00:003 ms]%0a[RENAME :: 00:00:337 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:20 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .put('/webhdfs/v1/adlsclifolder01?op=RENAME&destination=adlsclifolder02&api-version=2015-10-01-preview')
  .reply(200, "{\"boolean\":true}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a1f1c6c8-fe89-4659-9f4f-199dce47cecc',
  'set-cookie': [ 'UserPrincipalSession=9fb295af-7032-408a-a7e3-cf8c346259c9; path=/; secure; HttpOnly' ],
  'server-perf': '[a1f1c6c8fe8946599f4f199dce47cecc][ AuthTime::1987.49337609131::PostAuthTime::1246464.57561435 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[CleanCacheRename :: 00:00:003 ms]%0a[RENAME :: 00:00:337 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:20 GMT',
  connection: 'close',
  'content-length': '16' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder02?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":268435456,\"accessTime\":1447097434674,\"modificationTime\":1447097477644,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd1c7295d-0154-4d4b-8f72-d980c3da6da0',
  'server-perf': '[d1c7295d01544d4b8f72d980c3da6da0][ AuthTime::878.91314156917::PostAuthTime::188.185782136465 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:037 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:20 GMT',
  connection: 'close',
  'content-length': '227' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder02?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":0,\"pathSuffix\":\"\",\"type\":\"DIRECTORY\",\"blockSize\":268435456,\"accessTime\":1447097434674,\"modificationTime\":1447097477644,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd1c7295d-0154-4d4b-8f72-d980c3da6da0',
  'server-perf': '[d1c7295d01544d4b8f72d980c3da6da0][ AuthTime::878.91314156917::PostAuthTime::188.185782136465 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:037 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:20 GMT',
  connection: 'close',
  'content-length': '227' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlsclifolder01 [d18871c91cd44d868de691f90ccbaa1e]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd18871c9-1cd4-4d86-8de6-91f90ccbaa1e',
  'server-perf': '[d18871c91cd44d868de691f90ccbaa1e][ AuthTime::862.659257291866::PostAuthTime::182.625435232338 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:066 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:21 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(404, "{\"RemoteException\":{\"exception\":\"FileNotFoundException\",\"message\":\"File/Folder does not exist: /adlsclifolder01 [d18871c91cd44d868de691f90ccbaa1e]\",\"javaClassName\":\"java.io.FileNotFoundException\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd18871c9-1cd4-4d86-8de6-91f90ccbaa1e',
  'server-perf': '[d18871c91cd44d868de691f90ccbaa1e][ AuthTime::862.659257291866::PostAuthTime::182.625435232338 ][IsExist :: 00:00:000 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:066 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:21 GMT',
  connection: 'close',
  'content-length': '197' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder02?op=LISTSTATUS&$top=100&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"importfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447097456360,\"modificationTime\":1447097456650,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"},{\"length\":44,\"pathSuffix\":\"movefile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447097470187,\"modificationTime\":1447097470393,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '14c2e74c-9bc4-424d-984c-f74dabfa43ed',
  'server-perf': '[14c2e74c9bc4424d984cf74dabfa43ed][ AuthTime::840.848290182476::PostAuthTime::194.173511568079 ][FsEnumerateDirectory :: 00:00:054 ms]%0a[ListDirectory :: 00:00:054 ms]%0a[LISTSTATUS :: 00:00:054 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:22 GMT',
  connection: 'close',
  'content-length': '477' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls9026.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder02?op=LISTSTATUS&$top=100&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatuses\":{\"FileStatus\":[{\"length\":22,\"pathSuffix\":\"importfile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447097456360,\"modificationTime\":1447097456650,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"},{\"length\":44,\"pathSuffix\":\"movefile.txt\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1447097470187,\"modificationTime\":1447097470393,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}]}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '14c2e74c-9bc4-424d-984c-f74dabfa43ed',
  'server-perf': '[14c2e74c9bc4424d984cf74dabfa43ed][ AuthTime::840.848290182476::PostAuthTime::194.173511568079 ][FsEnumerateDirectory :: 00:00:054 ms]%0a[ListDirectory :: 00:00:054 ms]%0a[LISTSTATUS :: 00:00:054 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Mon, 09 Nov 2015 19:31:22 GMT',
  connection: 'close',
  'content-length': '477' });
 return result; }]];
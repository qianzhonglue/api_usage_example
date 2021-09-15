# clf_glumeter_server_api

ClfGlumeterApi - JavaScript client for clf_glumeter_server_api

- API version: 1.0.6
- Package version: 1.0.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Then install it via:

```shell
npm install clf_glumeter_server_api --save
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
import { ClfGlumeterApi } from 'clf_glumeter_server_api'

var api = new ClfGlumeterApi.DataApi()
var opts = { 
  'body': new ClfGlumeterApi.CountReq() // {CountReq} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getMeasureCountList(opts, callback);
```

## Documentation for API Endpoints

All URIs are relative to */GluMeterServer*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ClfGlumeterApi.DataApi* | [**getMeasureCountList**](docs/DataApi.md#getMeasureCountList) | **POST** /data/count | Get Measure Count List in a Device
*ClfGlumeterApi.DataApi* | [**getMeasureDataList**](docs/DataApi.md#getMeasureDataList) | **POST** /data | Get Measure Count List in a Device
*ClfGlumeterApi.DataApi* | [**getUserList**](docs/DataApi.md#getUserList) | **POST** /data/users | Get User List in a Device

## Documentation for Models

 - [ClfGlumeterApi.AccountName](docs/AccountName.md)
 - [ClfGlumeterApi.Count](docs/Count.md)
 - [ClfGlumeterApi.CountReq](docs/CountReq.md)
 - [ClfGlumeterApi.Data](docs/Data.md)
 - [ClfGlumeterApi.DataReq](docs/DataReq.md)
 - [ClfGlumeterApi.DevReq](docs/DevReq.md)

## Documentation for Authorization

 All endpoints do not require authorization.


# ClfGlumeterApi.DataApi

All URIs are relative to */GluMeterServer*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMeasureCountList**](DataApi.md#getMeasureCountList) | **POST** /data/count | Get Measure Count List in a Device
[**getMeasureDataList**](DataApi.md#getMeasureDataList) | **POST** /data | Get Measure Count List in a Device
[**getUserList**](DataApi.md#getUserList) | **POST** /data/users | Get User List in a Device

<a name="getMeasureCountList"></a>
# **getMeasureCountList**
> [Count] getMeasureCountList(opts)

Get Measure Count List in a Device

### Example
```javascript
import {ClfGlumeterApi} from 'glucose_meter_server_open_api_specification';

let apiInstance = new ClfGlumeterApi.DataApi();
let opts = { 
  'body': new ClfGlumeterApi.CountReq() // CountReq | 
};
apiInstance.getMeasureCountList(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CountReq**](CountReq.md)|  | [optional] 

### Return type

[**[Count]**](Count.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMeasureDataList"></a>
# **getMeasureDataList**
> [Data] getMeasureDataList(opts)

Get Measure Count List in a Device

### Example
```javascript
import {ClfGlumeterApi} from 'glucose_meter_server_open_api_specification';

let apiInstance = new ClfGlumeterApi.DataApi();
let opts = { 
  'body': new ClfGlumeterApi.DataReq() // DataReq | 
};
apiInstance.getMeasureDataList(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DataReq**](DataReq.md)|  | [optional] 

### Return type

[**[Data]**](Data.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserList"></a>
# **getUserList**
> [AccountName] getUserList(opts)

Get User List in a Device

### Example
```javascript
import {ClfGlumeterApi} from 'glucose_meter_server_open_api_specification';

let apiInstance = new ClfGlumeterApi.DataApi();
let opts = { 
  'body': new ClfGlumeterApi.DevReq() // DevReq | 
};
apiInstance.getUserList(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**DevReq**](DevReq.md)|  | [optional] 

### Return type

[**[AccountName]**](AccountName.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


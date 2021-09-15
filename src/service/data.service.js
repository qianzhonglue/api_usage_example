import { ClfGlumeterApi } from "clf_glumeter_server_api";

export const dataService = {
    getAccountList,
    getCountList,
    getDataList
};

function getAccountList(username, devid, devtoken, callback) {
    let api = new ClfGlumeterApi.DataApi();

    var body = new ClfGlumeterApi.DevReq("", username, devid, devtoken);
    var opts = { body: body };

    return api.getUserList(opts, callback);
}

function getCountList(username, devid, devtoken, accountname, callback) {
    let api = new ClfGlumeterApi.DataApi();

    var body = new ClfGlumeterApi.CountReq("", username, devid, devtoken);
    if (accountname) body.accountName = accountname;

    var opts = { body: body };

    return api.getMeasureCountList(opts, callback);
}

function getDataList(
    username,
    devid,
    devtoken,
    accountID,
    accountname,
    startDate,
    endDate,
    callback
) {
    let api = new ClfGlumeterApi.DataApi();

    var body = new ClfGlumeterApi.DataReq(
        "",
        username,
        devid,
        devtoken,
        accountID
    );

    if (accountname) body.accountName = accountname;
    if (startDate) body.startDate = startDate;
    if (endDate) body.endDate = endDate;

    var opts = { body: body };

    return api.getMeasureDataList(opts, callback);
}
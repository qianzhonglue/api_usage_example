import { dataService } from "../service";

const state = {
    accounts: {},
    counts: {},
    data: {},
    item: 0
};

const actions = {
    getAccountList({ dispatch, commit }, { username, devid, devtoken }) {
        commit("accountListRequest", devid);

        dataService.getAccountList(username, devid, devtoken, function(
            error,
            data,
            response
        ) {
            if (error) {
                commit("accountListFailure", error);
                dispatch("alert/error", error, { root: true });
            } else if (!response.ok) {
                commit("accountListFailure", devid);
                dispatch("alert/success", response, { root: true });
            } else {
                commit("accountListSuccess", data);
                dispatch("alert/clear");
            }
        });
    },

    getCountList({ dispatch, commit }, { username, devid, devtoken, accountname }) {
        commit("countListRequest", devid);

        dataService.getCountList(username, devid, devtoken, accountname, function(
            error,
            data,
            response
        ) {
            if (error) {
                commit("countListFailure", error);
                dispatch("alert/error", error, { root: true });
            } else if (!response.ok) {
                commit("countListFailure", devid);
                dispatch("alert/success", "Failed", { root: true });
            } else {
                commit("countListSuccess", data);
                dispatch("alert/clear");
            }
        });
    },

    getDataList({ dispatch, commit }, { username, devid, devtoken, accountid, accountname, startdate, enddate }) {
        commit("dataListRequest", accountid);

        dataService.getDataList(
            username,
            devid,
            devtoken,
            accountid,
            accountname,
            startdate,
            enddate,
            function(error, data, response) {
                if (error) {
                    console.log(error);
                    commit("dataListFailure", error);
                    dispatch("alert/error", error, { root: true });
                } else if (!response.ok) {
                    commit("dataListFailure", "Failed");
                    dispatch("alert/success", "Failed", { root: true });
                } else {
                    commit("dataListSuccess", data);
                    dispatch("alert/clear");
                }
            }
        );
    }
};
const mutations = {
    accountListRequest(state, devid) {
        state.accounts = { request: devid };
    },
    accountListFailure(state, error) {
        state.accounts = { accountError: error };
    },
    accountListSuccess(state, data) {
        var accounts = [];
        for (const account of data) {
            var acc = {
                DeviceID: account.devSecrete,
                ID: account.accountID,
                Name: account.accountName,
                Gender: account.gender == 0 ?
                    "Male" :
                    account.gender > 0 ?
                    "Female" :
                    "Unknown",
                Create: account.createDate,
                Update: account.updateDate,
                Remove: account.remove
            };
            accounts.push(acc);
        }
        state.accounts = { items: accounts };
        state.item = 1;
    },
    countListRequest(state, devid) {
        state.counts = { request: devid };
    },
    countListFailure(state, error) {
        state.counts = { countError: error };
    },
    countListSuccess(state, data) {
        var counts = [];
        for (const count of data) {
            var cnt = {
                DeviceID: count.devSecrete,
                ID: count.accountID,
                Name: count.accountName,
                Days: count.measureDays,
                Total: count.totalCount,
                Date: count.measureDate,
                Count: count.measureCount
            };
            counts.push(cnt);
        }

        state.counts = { items: counts };
        state.item = 2;
    },
    dataListRequest(state, accountid) {
        state.data = { request: accountid };
    },
    dataListFailure(state, error) {
        state.data = { dataError: error };
    },
    dataListSuccess(state, data) {
        var measures = [];
        for (const measure of data) {
            var item = {
                ID: measure.dataID,
                Name: measure.accountName,
                MealTime: measure.mealTime,
                MeasTime: measure.measTime,
                Hbr: measure.rate,
                Spo2: measure.spo2,
                Glucose: measure.glucose
            };
            measures.push(item);
        }

        state.data = { items: measures };
        state.item = 3;
    }
};

export const data = {
    namespaced: true,
    state,
    actions,
    mutations
};
<template>
  <md-card class="md-card-profile">
    <md-card-header :data-background-color="dataBackgroundColor">
      <h4 class="title">Input Information</h4>
      <p class="category">Complete Request</p>
    </md-card-header>

    <md-card-content>
      <div class="md-layout">
        <div class="md-layout-item md-small-size-100 md-size-100">
          <md-field>
            <label>User Name</label>
            <md-input v-model="username" type="text"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-100">
          <md-field>
            <label>Device ID</label>
            <md-input v-model="devid" type="text"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-100">
          <md-field>
            <label>Access Token</label>
            <md-input v-model="devtoken" type="text"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-50">
          <md-field>
            <label>Account ID</label>
            <md-input v-model="accountid" type="number"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-small-size-100 md-size-50">
          <md-field>
            <label>Account Name</label>
            <md-input v-model="accountname" type="text"></md-input>
          </md-field>
        </div>
      </div>
      <div class="places-buttons text-center">
        <md-button class="md-round md-success" @click="viewAccounts"
          >Accounts</md-button
        >
        <md-button class="md-round md-success" @click="viewCounts"
          >Counts</md-button
        >
        <md-button class="md-round md-success" @click="viewData"
          >Data</md-button
        >
      </div>
    </md-card-content>
  </md-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "input-card",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      username: "",
      devid: "",
      devtoken: "",
      accountid: 0,
      accountname: ""
    };
  },
  methods: {
    ...mapActions("data", ["getAccountList", "getCountList", "getDataList"]),
    viewAccounts() {
      const username = this.username;
      const devid = this.devid;
      const devtoken = this.devtoken;

      this.getAccountList({ username, devid, devtoken });
    },
    viewCounts() {
      const username = this.username;
      const devid = this.devid;
      const devtoken = this.devtoken;
      const accountname = this.accountname;

      this.getCountList({ username, devid, devtoken, accountname });
    },
    viewData() {
      const username = this.username;
      const devid = this.devid;
      const devtoken = this.devtoken;
      const accountid = this.accountid;
      const accountname = this.accountname;

      this.getDataList({ username, devid, devtoken, accountid, accountname });
    }
  }
};
</script>

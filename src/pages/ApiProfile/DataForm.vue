/* eslint-disable prettier/prettier */
<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Requset Result</h4>
            <p class="category">Here is a subtitle for this table</p>
          </md-card-header>
          <md-card-content>
            <md-table
              v-if="viewitem == 1"
              v-model="accounts"
              :table-header-color="tableHeaderColor"
            >
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="ID" md-numeric>{{
                  item.ID
                }}</md-table-cell>
                <md-table-cell md-label="Name" md-sort-by="Name">{{
                  item.Name
                }}</md-table-cell>
                <md-table-cell md-label="Gender">{{
                  item.Gender
                }}</md-table-cell>
                <md-table-cell md-label="Created">{{
                  item.Create
                }}</md-table-cell>
                <md-table-cell md-label="Updated">{{
                  item.Update
                }}</md-table-cell>
                <md-table-cell md-label="Removed">{{
                  item.Remove
                }}</md-table-cell>
              </md-table-row>
            </md-table>
            <md-table
              v-if="viewitem == 2"
              v-model="counts"
              :table-header-color="tableHeaderColor"
            >
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="ID">{{ item.ID }}</md-table-cell>
                <md-table-cell md-label="Name">{{ item.Name }}</md-table-cell>
                <md-table-cell md-label="Days">{{ item.Days }}</md-table-cell>
                <md-table-cell md-label="Total">{{ item.Total }}</md-table-cell>
                <md-table-cell md-label="Date">{{ item.Date }}</md-table-cell>
                <md-table-cell md-label="Count">{{ item.Count }}</md-table-cell>
              </md-table-row>
            </md-table>

            <md-table
              v-if="viewitem == 3"
              v-model="data"
              :table-header-color="tableHeaderColor"
            >
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="Name">{{ item.Name }}</md-table-cell>
                <md-table-cell md-label="Meal">{{
                  item.MealTime
                }}</md-table-cell>
                <md-table-cell md-label="Time">{{
                  item.MeasTime
                }}</md-table-cell>
                <md-table-cell md-label="Hbr">{{ item.Hbr }}</md-table-cell>
                <md-table-cell md-label="Spo2">{{ item.Spo2 }}</md-table-cell>
                <md-table-cell md-label="Bgl">{{ item.Glucose }}</md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>
        </md-card>

        <div v-if="alert.type == 'alert-danger' && alert.message">
          <p>{{ alert.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "data-form",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    },
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  computed: {
    ...mapState({
      accounts: state => state.data.accounts.items,
      counts: state => state.data.counts.items,
      data: state => state.data.data.items,
      viewitem: state => state.data.item,
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions({
      clearAlert: "alert/clear"
    })
  }
};
</script>

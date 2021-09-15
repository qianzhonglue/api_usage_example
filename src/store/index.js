import Vue from "vue";
import Vuex from "vuex";

import { alert } from "./alert.module";
import { data } from "./data.module";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    alert,
    data
  }
});

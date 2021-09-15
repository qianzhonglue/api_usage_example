<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <sidebar-link to="/api">
        <md-icon>unarchive</md-icon>
        <p>HowtoApi</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import DashboardContent from "./Content.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
  components: {
    DashboardContent,
    FixedPlugin
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg")
    };
  },
  computed: {
    ...mapState({
      alert: state => state.alert
    })
  },
  methods: {
    ...mapActions({
      clearAlert: "alert/clear"
    }),
    notifyVue(message) {
      var color = 1;
      this.$notify({
        message: message,
        icon: "add_alert",
        horizontalAlign: "top",
        verticalAlign: "center",
        type: "info"
      });
    }
  },
  watch: {
    alert() {
      if (this.state.type == "alert-danger" && this.alert.message) {
        this.notifyVue(this.alert.message);
        this.clearAlert();
      }
    }
  }
};
</script>

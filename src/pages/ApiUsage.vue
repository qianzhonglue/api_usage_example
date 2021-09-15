<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-55">
        <data-form
          data-background-color="green"
          tableHeaderColor="black"
        ></data-form>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-45">
        <input-card> </input-card>
      </div>
    </div>
  </div>
</template>

<script>
import { DataForm, InputCard } from "@/pages";

export default {
  components: {
    DataForm,
    InputCard
  },
  data() {
    return {
      message: "How to Use Api"
    };
  }
};
</script>

<template>
  <div id="app">
    <router-link to="/404">Go to Foo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import request from "@/utils/request.js";
export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    const peopleData = request.get("/people");
    peopleData
      .then(() => {})
      .catch(err => {
        alert(err);
      });
  }
};
</script>
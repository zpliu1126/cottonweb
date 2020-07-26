<template>
  <div id="app">
    <router-link to="/404">Go to Foo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  created() {
    this.$store
      .dispatch("user/login", {
        username: "zpliu",
        password: "123456",
      })
      .then(() => {
        alert("登录成功");
      })
      .catch(() => {
        alert("登录失败");
      });
  },
};
</script>
<style lang="scss" scoped>
</style>
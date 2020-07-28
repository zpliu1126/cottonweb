<template>
  <div>
    <cotton-navbar></cotton-navbar>
    <app-main></app-main>
    <cotton-footer></cotton-footer>
  </div>
</template>

<script>
import cottonNavbar from "./NavBar";
import AppMain from "./APPmain";
import cottonFooter from "./footer";
export default {
  name: "home",
  components: {
    cottonNavbar,
    AppMain,
    cottonFooter,
  },
};
</script>
<style lang='' scoped>
</style>
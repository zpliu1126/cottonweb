<template>
  <div id="app">
    <transition enter-active-class="animate__animated animate__fadeInUp">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: "APP",
};
</script>
<style lang="scss" >
body {
  margin: 0 0;
  padding: 0 0;
}
</style>
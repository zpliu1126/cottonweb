<template>
  <div>
    <transition enter-active-class="animate__animated animate__fadeInDown">
      <router-view :key="key" />
    </transition>
  </div>
</template>

<script>
export default {
  name: "Appmain",
  computed: {
    key() {
      return this.$router.path;
    },
  },
};
</script>
<style lang='' scoped>
</style>
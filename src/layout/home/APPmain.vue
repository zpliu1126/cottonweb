<template>
  <div>
    <transition>
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
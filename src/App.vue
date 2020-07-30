<template>
  <div id="app">
    <transition enter-active-class="animate__animated animate__fadeInUp">
      <router-view />
    </transition>
    <!-- 滑动到顶部 -->
    <el-backtop :bottom="200">
      <div
        style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
      >UP</div>
    </el-backtop>
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
.text-underscore {
  width: 140px;
  border-bottom: 5px solid;
  border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
  h2 {
    margin-block-end: 0.5em;
  }
  margin-bottom: 20px;
}
</style>
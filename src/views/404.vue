/*
 * @Author: zpliu 
 * @Date: 2020-07-21 15:39:00 
 * @Last Modified by: zpliu
 * @Last Modified time: 2020-07-21 20:39:36
 * reference https://codepen.io/Navedkhan012/pen/vrWQMY
 * forward router with 404
 */
<template>
  <section class="page_404">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="12">
        <div class="four_zero_four_bg">
          <h1 class="text-center">404</h1>
        </div>
        <div class="contant_box_404">
          <h3 class="h2">Look like you're lost</h3>

          <p>the page you are looking for not avaible!</p>

          <el-button type="success" @click="handlegoHome">Go to Home</el-button>
        </div>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  name: "page404",
  methods: {
    handlegoHome() {
      this.$router.push({
        path: "/",
        name: "home"
      });
    }
  }
};
</script>
<style lang='scss' scoped>
/*======================
 404 page
 =======================*/
.page_404 {
  padding: 40px 0;
  background: #fff;
  font-family: "Arvo", serif;
  text-align: center;
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
}
.contant_box_404 {
  margin-top: -50px;
}
</style>
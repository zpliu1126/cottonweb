<template>
  <div>
    <router-link to="/404">Go404</router-link>
    <el-form ref="loginForm">
      <el-input type="text" v-model="loginForm.username"></el-input>
      <el-input type="password" v-model="loginForm.password"></el-input>
      <el-button @click.native.prevent="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script>
import cryptPw from "@/utils/md5.js";
export default {
  name: "home",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      var password = cryptPw(this.loginForm.password);
      this.$store
        .dispatch("user/login", {
          username: this.loginForm.username,
          password: password,
        })
        .then((reponse) => {
          if (reponse.code == 2) {
            this.$message({
              message: "账号或密码错误",
              type: "error",
            });
          } else {
            this.$router.push({ path: "/404", name: "pge404" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang='' scoped>
</style>
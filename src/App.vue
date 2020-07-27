<template>
  <div id="app">
    <router-link to="/404">Go to Foo</router-link>
    <el-form status-icon ref="loginForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="密码" prop="pass">
        <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="checkPass">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handelLogin('loginForm')">提交</el-button>
      </el-form-item>
    </el-form>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    handelLogin(form) {
      console.log(form);
      this.$store
        .dispatch("user/login", this.loginForm)
        .then(() => {
          alert("登录成功");
        })
        .catch(() => {
          alert("登录失败");
        });
    },
  },
  created() {},
};
</script>
<style lang="scss" scoped>
</style>
<template>
  <div class="cotton-footer">
    <el-row>
      <el-divider></el-divider>
      <el-col :md="6" :sm="24" class="footer-item">
        <el-avatar :size="40" src="https://biocottonhub.gitee.io/codeHub/uploads/themeImg/logo.png">
          <img src="https://biocottonhub.gitee.io/codeHub/uploads/themeImg/logo.png" />
        </el-avatar>
      </el-col>
      <el-col :md="6" :sm="24" class="footer-item">
        <div>
          <h2>About</h2>
          <div>
            <ul>
              <li>
                <router-link to="/404">测试</router-link>
              </li>
              <li>
                <router-link to="/404">测试</router-link>
              </li>
              <li>
                <router-link to="/404">测试</router-link>
              </li>
              <li>
                <router-link to="/404">测试</router-link>
              </li>
              <li>
                <router-link to="/404">测试</router-link>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "cotton-footer",
};
</script>
<style lang='scss' scoped>
.cotton-footer {
  margin-top: 40px;
  border-bottom: 5px solid;
  margin-bottom: 5px;
  border-image: linear-gradient(#353b48, #2f3640, #718093, #273c75, #192a56) 3;
}
.footer-item {
  display: flex;
  justify-content: center;
}
</style>
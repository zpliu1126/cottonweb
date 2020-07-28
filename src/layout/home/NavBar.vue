<template>
  <div class="cotton-navbar">
    <el-row type="flex" justify="center">
      <el-col :md="8" :xs="16" class="cotton-avatar">
        <el-avatar :size="40" src="https://biocottonhub.gitee.io/codeHub/uploads/themeImg/logo.png">
          <img src="https://biocottonhub.gitee.io/codeHub/uploads/themeImg/logo.png" />
        </el-avatar>
        <span>Code Hub</span>
      </el-col>
      <el-col :md="12" :xs="8" :offset="4">
        <el-menu mode="horizontal">
          <el-menu-item index="1">Home</el-menu-item>
          <el-submenu index="2">
            <template slot="title">Genome</template>
            <el-menu-item index="2-1">Gossypium arboreum</el-menu-item>
            <el-menu-item index="2-2">Gossypium raimondii</el-menu-item>
            <el-menu-item index="2-3">Gossypium hirsutum</el-menu-item>
            <el-menu-item index="2-4">Gossypium barbadense</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">Tools</template>
            <el-menu-item index="3-1">
              <el-link
                :underline="false"
                target="_blank"
                href="http://cotton.hzau.edu.cn/tools/jbrowse/"
              >JBrowse</el-link>
            </el-menu-item>
            <el-menu-item index="3-2">Blast</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">Search</template>
            <el-menu-item index="4-1">search by gene id</el-menu-item>
            <el-menu-item index="4-2">search Primer</el-menu-item>
            <el-menu-item index="4-2">search CRISPR</el-menu-item>
          </el-submenu>
          <el-menu-item index="5">Download</el-menu-item>
          <el-menu-item index="6">Login</el-menu-item>
          <el-menu-item index="7">Register</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "cotton-navbar",
};
</script>
<style lang='scss' scoped>
.cotton-navbar {
  .el-row {
    border-top: 10px solid;
    border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
    margin-bottom: 20px;
  }
}
.cotton-avatar {
  display: flex;
  font-family: "Helvetica Neue", "微软雅黑", Arial, sans-serif;
  justify-content: center;
  span {
    font-weight: bold;
    margin-left: 4px;
    align-self: center;
  }
}
</style>
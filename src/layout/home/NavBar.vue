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
          <el-menu-item index="1">
            <el-link href="#/home">Home</el-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">Genome</template>
            <el-menu-item index="2-1">
              <el-link href="#/A2">Gossypium arboreum</el-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <el-link href="#/D5">Gossypium raimondii</el-link>
            </el-menu-item>
            <el-menu-item index="2-3">
              <el-link href="#/A1D1">Gossypium hirsutum</el-link>
            </el-menu-item>
            <el-menu-item index="2-4">
              <el-link href="#/A2D2">Gossypium barbadense</el-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">Tools</template>
            <el-menu-item index="3-1">
              <el-link href="#/tools/jbrowse">JBrowse</el-link>
            </el-menu-item>
            <el-menu-item index="3-2">
              <el-link href="#/tools/blast">Blast+</el-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">Search</template>
            <el-menu-item index="4-1">
              <el-link href="#/search/geneId">Gene&Transcript</el-link>
            </el-menu-item>
            <el-menu-item index="4-2">
              <el-link href="#/search/primer">Primer</el-link>
            </el-menu-item>
            <el-menu-item index="4-2">
              <el-link href="#/search/crispr">CRISPR</el-link>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="5">
            <el-link href="#/download">Download</el-link>
          </el-menu-item>
          <el-menu-item index="6">
            <el-link href="#/login">Login</el-link>
          </el-menu-item>
          <el-menu-item index="7">
            <el-link href="#/register">Register</el-link>
          </el-menu-item>
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
    // border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
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
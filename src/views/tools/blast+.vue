<template>
  <div>
    <!-- blast+内容部分 -->
    <el-row type="flex" justify="center">
      <el-col :md="18" :xs="23">
        <el-col :span="24" :offset="2">
          <div class="text-underscore">
            <h2>
              <i class="el-icon-cpu"></i>
              Blast+
            </h2>
          </div>
        </el-col>
        <el-col :span="24">
          <iframe src="http://cotton.hzau.edu.cn/tools/blast/" frameborder="0"></iframe>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "cottonBlast",
};
</script>
<style lang='scss' scoped>
iframe {
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  height: 960px;
}
</style>
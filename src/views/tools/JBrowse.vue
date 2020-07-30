<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :md="18" :sm="20">
        <el-col :span="24">
          <div class="text-underscore">
            <h2>
              <i class="el-icon-s-grid"></i>JBrowse
            </h2>
          </div>
        </el-col>
        <el-col :span="24" :offset="2">
          <el-collapse v-model="value">
            <el-collapse-item v-for="item in genome" :key="item.type" :name="item.type">
              <template slot="title">
                <h3>{{item.type}}</h3>
              </template>
              <ul v-for="genome in item.genomes" :key="genome.name">
                <li>
                  <el-link
                    target="__blank"
                    type="primary"
                    :href="'http://cotton.hzau.edu.cn/tools/jbrowse/?data=data/'+genome.name"
                    :disabled="genome.Disable"
                  >{{genome.name}}</el-link>
                </li>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "cottonJBrowse",
  data() {
    return {
      value: ["Diploid", "Allopolyploid"],
      genome: [
        {
          type: "Diploid",
          genomes: [
            { src: "", name: "Garboreum_CRI_genome_v1.0", Disable: false },
            { src: "", name: "Graimondii_JGI_genome_v2.1", Disable: false },
          ],
        },
        {
          type: "Allopolyploid",
          genomes: [
            { src: "", name: "Ghirsutum_genome_HAU_v1.1", Disable: false },
            { src: "", name: "Gbarbadense_genome_HAU_v2.0", Disable: true },
          ],
        },
      ],
    };
  },
};
</script>
<style lang='scss' scoped>
</style>
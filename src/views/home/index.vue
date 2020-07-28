<template>
  <div class="cotton-home">
    <!-- 走马灯 -->
    <el-row type="flex" justify="center">
      <el-col :span="23">
        <el-carousel indicator-position="outside">
          <el-carousel-item v-for="item in carouselImage" :key="item.imgUrl">
            <el-col :span="12">
              <el-image :src="item.imgUrl"></el-image>
            </el-col>
            <el-col :span="12">
              <h3>{{item.Dec}}</h3>
            </el-col>
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <show-people></show-people>
  </div>
</template>

<script>
import showPeople from "@/views/people/showPeople";
export default {
  name: "home",
  components: { showPeople },
  data() {
    return {
      carouselImage: [
        {
          imgUrl:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          Dec: "Vue",
        },
        {
          imgUrl: "https://s1.ax1x.com/2020/04/17/JEWsOI.md.jpg",
          Dec: "element-ui",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.cotton-home {
  margin-top: 10px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
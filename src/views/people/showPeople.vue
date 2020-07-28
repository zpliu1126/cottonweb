<template>
  <!-- 内容展示标题 -->
  <el-row class="show-people" type="flex" justify="center">
    <el-col :span="23">
      <el-col :span="24">
        <div class="text-underscore">
          <h2>
            <i class="el-icon-user-solid"></i>
            people
          </h2>
        </div>
      </el-col>
      <el-col
        class="people-item"
        :md="4"
        :sm="6"
        :xs="16"
        :offset="3"
        v-for=" item in people"
        :key="item.src"
      >
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.src" class="image" />
          <div class="people-name">
            <span>
              <h3>{{item.name}}</h3>
            </span>
          </div>
        </el-card>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "showPeople",
  data() {
    return {
      currentDate: new Date(),
      people: [
        {
          src: "https://s1.ax1x.com/2020/04/17/JVIKcF.png",
          name: "zpliu",
        },
        {
          src: "https://s1.ax1x.com/2020/04/17/JZgfpQ.png",
          name: "yxlong",
        },
        {
          src: "https://avatars2.githubusercontent.com/u/67858280?s=460&v=4",
          name: "xingchang-web",
        },
      ],
    };
  },
};
</script>
<style lang='scss' scoped>
.text-underscore {
  width: 120px;
  border-bottom: 5px solid;
  border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;
  h2 {
    margin-block-end: 0.5em;
  }
}
.people-item {
  margin-top: 20px;

  .image {
    // 卡片中图片样式
    width: 100%;
  }
  .people-name {
    text-align: center;
  }
}
</style>
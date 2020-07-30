<template>
  <div id="cottonbar" style="width: 600px;height:400px;"></div>
</template>

<script>
var echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  name: "cotton-line",
  props: {},
  mounted() {
    var myChart = echarts.init(document.getElementById("cottonbar"));
    // 绘制图表
    myChart.setOption({
      tooltip: {
        formatter(params) {
          return params.value;
          ///
        },
      },
      xAxis: {
        type: "category",
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "FPKM",
          type: "line",
          data: [5, 20, 36, 10, 10, 20],
          smooth: true,
        },
      ],
    });
  },
};
</script>
<style lang='' scoped>
</style>
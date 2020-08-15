<template>
  <div class="lazyload-container">
    <img src="https://f4.bcbits.com/img/a2667576910_16.jpg" alt />
    <img data-src="https://f4.bcbits.com/img/a0104089494_16.jpg" alt />
    <img data-src="https://f4.bcbits.com/img/a1300276762_16.jpg" alt />
  </div>
</template>

<script>
export default {
  name: "lazyload",
  afterCreate() {
    var imgs = document.querySelectorAll("img");
    // console.log(imgs[0]);
    // console.log(document.documentElement.clientHeight);
    // console.log(document.documentElement.scrollTop);
    // console.log(document.documentElement.offsetTop);
    // function getTop(e) {
    //   var T = e.offsetTop;
    //   console.log(T);
    //   while (e == e.offsetParent) {
    //     T += e.offsetTop;
    //   }
    //   return T;
    // }
    console.log(imgs[2]);
    console.log(imgs);
    function lazyLoad(imgs) {
      // var H = document.documentElement.clientHeight; //获取可视区域高度
      // var S = document.documentElement.scrollTop || document.body.scrollTop;
      for (var i = 0; i < imgs.length; i++) {
        // console.log(imgs[i]);
        // if (H + S > getTop(imgs[i])) {
        //   imgs[i].src = imgs[i].getAttribute("data-src");
        // }
      }
    }

    window.onload = window.onscroll = function () {
      //onscroll()在滚动条滚动的时候触发
      lazyLoad(imgs);
    };
  },
};
</script>
<style lang='scss' scoped>
.lazyload-container {
  border-top: 100px solid red;
}
</style>
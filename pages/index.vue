<template>
  <div class="container">
    <van-swipe class="swipe-section" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "http://5b0ac94f2e8b013556eeb5a93229e674.jfdl.juming.com:8668/jf/images/banner.png",
        "http://5b0ac94f2e8b013556eeb5a93229e674.jfdl.juming.com:8668/jf/images/banner.jpg"
      ]
    };
  }
};
</script>

<style lang="less">
@import '../assets/css/index/index.less';
</style>


<template>
  <div class="container">
    <van-swipe class="swipe-section" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <van-grid class="navs-wrapper" square :border="false">
      <van-grid-item v-for="(item, idx) in navs" :key="idx" :icon="item.icon" :text="item.text" />
    </van-grid>

    <van-notice-bar class="notice-wrapper" :left-icon="noticeTitle" :scrollable="false">
      <van-swipe vertical class="notice-swipe" :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="item in notices" :key="item.id">
          <nuxt-link :to="item.id">{{ item.name }}</nuxt-link>
        </van-swipe-item>
      </van-swipe>
    </van-notice-bar>

    <div class="choiceness-commodity">
        <div class="commodity-panel">
          <div class="rqjx-panel panel">
            <div class="title">
              <h2>人气精选</h2>
              <span class="subhead">品质好物</span>
            </div>
            <van-grid class="commodity-list" :border="false" :column-num="2">
              <van-grid-item>
                <van-image lazy-load src="http://jfimg.juming.com/upload/img/0925445f03cf18574b6pPkdFd.jpg" />
              </van-grid-item>
              <van-grid-item>
                <van-image lazy-load src="http://jfimg.juming.com/upload/img/0906465f03caa62ef6fRlG6td.jpg" />
              </van-grid-item>
            </van-grid>
          </div>
          <div class="zxsj-panel panel">
            <div class="title">
              <h2>最新上架</h2>
              <span class="subhead">NEW</span>
            </div>
            <van-grid class="commodity-list" :border="false" :column-num="2">
              <van-grid-item>
                <van-image lazy-load src="http://jfimg.juming.com/upload/img/0930055f03d01dc8a9eZPEn3i.jpg" />
              </van-grid-item>
              <van-grid-item>
                <van-image lazy-load src="http://jfimg.juming.com/upload/img/0916345f03ccf2e9102HFyc5Z.jpg" />
              </van-grid-item>
            </van-grid>
          </div>
        </div>
        <div class="dfsp-panel panel">
          <div class="title">
            <h2>低分商品</h2>
            <span class="subhead">1积分抢1000聚查点</span>
          </div>
          <van-grid class="commodity-list" :border="false" :column-num="4">
            <van-grid-item>
              <van-image lazy-load src="http://jfimg.juming.com/upload/img/1611005e201a949434crbMAGo.jpg" />
            </van-grid-item>
            <van-grid-item>
              <van-image lazy-load src="http://jfimg.juming.com/upload/img/1602305e69ec96e3a526q3QbT.png" />
            </van-grid-item>
            <van-grid-item>
              <van-image lazy-load src="http://jfimg.juming.com/upload/img/1603585e69ecee16f55GOOwUq.png" />
            </van-grid-item>
            <van-grid-item>
              <van-image lazy-load src="http://jfimg.juming.com/upload/img/1900195e4137c364ca5Xi3mgz.jpg" />
            </van-grid-item>
          </van-grid>
        </div>
        <div class="dhdt-panel">3</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "http://5b0ac94f2e8b013556eeb5a93229e674.jfdl.juming.com:8668/jf/images/banner.png",
        "http://5b0ac94f2e8b013556eeb5a93229e674.jfdl.juming.com:8668/jf/images/banner.jpg"
      ],
      navs: [
        {
          text: "本站产品",
          icon: require("@/assets/image/bzcp-icon.png")
        },
        {
          text: "虚拟卡币",
          icon: require("@/assets/image/xnkb-icon.png")
        },
        {
          text: "商品百货",
          icon: require("@/assets/image/spbh-icon.png")
        },
        {
          text: "吃喝玩乐",
          icon: require("@/assets/image/chwl-icon.png")
        },
        {
          text: "商品分类",
          icon: require("@/assets/image/spfl-icon.png")
        },
        {
          text: "我能兑换",
          icon: require("@/assets/image/wndh-icon.png")
        },
        {
          text: "热门商品",
          icon: require("@/assets/image/rmsp-icon.png")
        },
        {
          text: "低分商品",
          icon: require("@/assets/image/dfsp-icon.png")
        }
      ],
      noticeTitle: require("@/assets/image/notice-title.png"),
      notices: [
        {
          id: "1",
          name: "特惠商品上架"
        },
        {
          id: "2",
          name: "关于积分商城改版上线的通知"
        },
        {
          id: "3",
          name: "关于端午礼盒发放问题"
        }
      ]
    };
  }
};
</script>

<style lang="less">
@import "../assets/css/index/index.less";
</style>


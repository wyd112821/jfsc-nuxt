<template>
  <div>
    <nav-bar :title="title"></nav-bar>

    <van-tree-select :items="items" :main-active-index.sync="active" class="spfl-wrapper">
      <template #content>
        <div class="spbq-box" v-if="active === 0">
            <h3>商品标签</h3>
            <div class="tags-content">
                <ul>
                    <li><nuxt-link to="/">不限</nuxt-link></li>
                    <li><nuxt-link to="/">笔记本电脑</nuxt-link></li>
                    <li><nuxt-link to="/">远程摄像头</nuxt-link></li>
                    <li><nuxt-link to="/">不限</nuxt-link></li>
                </ul>
            </div>
        </div>
        <div class="spbq-box" v-if="active === 1">1</div>
        <div class="spbq-box" v-if="active === 2">2</div>
        <div class="spbq-box" v-if="active === 3">3</div>
        <div class="spbq-box" v-if="active === 4">4</div>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import NavBar from "@/components/public/navBar/index";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      title: "商品分类",
      active: 0,
      items: [{ text: "全部" }, { text: "本站产品" }, { text: "虚拟卡币" }, { text: "商品百货" }, { text: "吃喝玩乐" }]
    };
  }
};
</script>

<style lang="less">
@import "../assets/css/classify/index.less";
</style>

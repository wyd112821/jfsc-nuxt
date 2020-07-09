<template>
    <div>
        <nav-bar :title="title" ref="navBar"></nav-bar>

        <van-tree-select
            :height="height"
            :items="items"
            :main-active-index.sync="active"
            class="spfl-wrapper"
            @click-nav="clickNav"
        >
            <template #content>
                <div class="spbq-box" v-if="active === 0" ref="spbqBox">
                    <h3>商品标签</h3>
                    <div class="tags-content">
                        <ul>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">笔记本电脑</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">远程摄像头</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">笔记本电脑</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">远程摄像头</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">笔记本电脑</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">远程摄像头</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">笔记本电脑</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">远程摄像头</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">笔记本电脑</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">远程摄像头</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">笔记本电脑</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">远程摄像头</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">笔记本电脑</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">远程摄像头</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">笔记本电脑</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">远程摄像头</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">笔记本电脑</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">远程摄像头</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">笔记本电脑</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">远程摄像头</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">笔记本电脑</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">远程摄像头</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">笔记本电脑</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">远程摄像头</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">不限</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="spbq-box" v-if="active === 1" ref="spbqBox">
                    <h3>商品标签</h3>
                    <div class="tags-content"></div>
                </div>
                <div class="spbq-box" v-if="active === 2" ref="spbqBox">
                    <h3>商品标签</h3>
                </div>
                <div class="spbq-box" v-if="active === 3" ref="spbqBox">
                    <h3>商品标签</h3>
                </div>
                <div class="spbq-box" v-if="active === 4" ref="spbqBox">
                    <h3>商品标签</h3>
                </div>
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
            height: 300,
            title: "商品分类",
            active: 0,
            items: [
                { text: "全部", id: "1" },
                { text: "本站产品", id: "2" },
                { text: "虚拟卡币", id: "3" },
                { text: "商品百货", id: "4" },
                { text: "吃喝玩乐", id: "5" }
            ],
            tags: [{ mc: "不限" }]
        };
    },
    methods: {
        clickNav: function() {
            const spbqWrap = document.querySelector(
                ".van-tree-select__content"
            );
            let scrollTop = spbqWrap.scrollTop;
            if (scrollTop > 0) {
                spbqWrap.scrollTop = 0;
            }
        }
    },
    async mounted() {
        let {
            status,
            data: {
                code,
                data: {}
            }
        } = await this.$axios.get("http://192.168.1.182/main/flList");

        let {
            status: status2,
            data: {
                code: code2,
                data: {}
            }
        } = await this.$axios.get("http://192.168.1.182/main/bqList");

        let h =
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight; //浏览器高度
        let navBarH = this.$refs["navBar"].$el.offsetHeight; //navBar高度
        this.height = h - navBarH;
    }
};
</script>

<style lang="less">
@import "../assets/css/classify/index.less";
</style>

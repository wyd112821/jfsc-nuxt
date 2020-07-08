<template>
    <div class="container">
        <van-swipe class="swipe-section" :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>

        <van-grid class="navs-wrapper" square :border="false">
            <van-grid-item
                v-for="(item, idx) in navs"
                :key="idx"
                :icon="item.icon"
                :text="item.text"
            />
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
                        <van-grid-item v-for="item in rqjxList" :key="item.id">
                            <nuxt-link :to="item.id">
                                <van-image lazy-load :src="item.img" />
                            </nuxt-link>
                        </van-grid-item>
                    </van-grid>
                </div>
                <div class="zxsj-panel panel">
                    <div class="title">
                        <h2>最新上架</h2>
                        <span class="subhead">NEW</span>
                    </div>
                    <van-grid class="commodity-list" :border="false" :column-num="2">
                        <van-grid-item v-for="item in zxsjList" :key="item.id">
                            <nuxt-link :to="item.id">
                                <van-image lazy-load :src="item.img" />
                            </nuxt-link>
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
                    <van-grid-item v-for="item in dfspList" :key="item.id">
                        <nuxt-link :to="item.id">
                            <van-image lazy-load :src="item.img" />
                        </nuxt-link>
                    </van-grid-item>
                </van-grid>
            </div>
            <van-notice-bar class="dhdt-panel" :left-icon="dhdtTitle" :scrollable="false">
                <van-swipe vertical class="dhdt-swipe" :autoplay="3000" :show-indicators="false">
                    <van-swipe-item v-for="item in dhdt" :key="item.id">
                        <nuxt-link :to="item.id">{{ item.name }}</nuxt-link>
                    </van-swipe-item>
                </van-swipe>
            </van-notice-bar>
        </div>

        <van-tabs class="jftabs-wrapper" v-model="active" swipeable>
            <van-tab v-for="(item, idx) in flsp" :key="idx">
                <template #title>
                    <h3 class="m-tit">{{ item.name }}</h3>
                    <p class="m-desc">{{ item.desc }}</p>
                </template>

                <list :list="item.list"></list>
                <nuxt-link class="more-btn" :to="item.id" tag="p">点击查看更多</nuxt-link>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>
import List from "@/components/index/list.vue";
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
            ],
            rqjxList: [
                {
                    id: "1",
                    img:
                        "http://jfimg.juming.com/upload/img/1611005e201a949434crbMAGo.jpg!145"
                },
                {
                    id: "2",
                    img:
                        "http://jfimg.juming.com/upload/img/1854575e413681ab518OVlWby.jpg!145"
                }
            ],
            zxsjList: [
                {
                    id: "1",
                    img:
                        "http://jfimg.juming.com/upload/img/0930055f03d01dc8a9eZPEn3i.jpg"
                },
                {
                    id: "2",
                    img:
                        "http://jfimg.juming.com/upload/img/0916345f03ccf2e9102HFyc5Z.jpg"
                }
            ],
            dfspList: [
                {
                    id: "1",
                    img:
                        "http://jfimg.juming.com/upload/img/1611005e201a949434crbMAGo.jpg"
                },
                {
                    id: "2",
                    img:
                        "http://jfimg.juming.com/upload/img/1602305e69ec96e3a526q3QbT.png"
                },
                {
                    id: "3",
                    img:
                        "http://jfimg.juming.com/upload/img/1603585e69ecee16f55GOOwUq.png"
                },
                {
                    id: "4",
                    img:
                        "http://jfimg.juming.com/upload/img/1900195e4137c364ca5Xi3mgz.jpg"
                }
            ],
            dhdtTitle: require("@/assets/image/dhdt-title.png"),
            dhdt: [
                {
                    id: "1",
                    name: "ID****   聚查点兑换(1积分=1000聚查点)"
                },
                {
                    id: "2",
                    name: "ID****   聚查点兑换(1积分=1000聚查点)"
                },
                {
                    id: "3",
                    name: "ID****   聚查点兑换(1积分=1000聚查点)"
                }
            ],
            flsp: [
                {
                    id: "1",
                    name: "本站产品",
                    desc: "小聚力荐",
                    list: [
                        {
                            id: "10",
                            mc:
                                "小米手环4 NFC版智能蓝牙男女款计步器微信天气心率睡眠监测手表",
                            dhjf: "19900",
                            img:
                                "http://jfimg.juming.com/upload/img/1815555e1ee65b5dd77SiIQlV.png",
                            nums: "15"
                        },
                        {
                            id: "11",
                            mc:
                                "小米手环4 NFC版智能蓝牙男女款计步器微信天气心率睡眠监测手表",
                            dhjf: "19900",
                            img:
                                "http://jfimg.juming.com/upload/img/1815555e1ee65b5dd77SiIQlV.png",
                            nums: "15"
                        },
                        {
                            id: "13",
                            mc: "早晚读书21天会员",
                            dhjf: "190900",
                            img:
                                "http://jfimg.juming.com/upload/img/1919155e2046b34da9fiXxChr.png",
                            nums: "5"
                        }
                    ]
                },
                {
                    id: "2",
                    name: "虚拟卡币",
                    desc: "超值好货",
                    list: [
                        {
                            id: "20",
                            mc: "聚名公仔（对）",
                            dhjf: "300",
                            img:
                                "http://jfimg.juming.com/upload/img/1505215e2551314a78fY6WUOS.jpg",
                            nums: "115"
                        },
                        {
                            id: "21",
                            mc:
                                "小米手环4 NFC版智能蓝牙男女款计步器微信天气心率睡眠监测手表",
                            dhjf: "19900",
                            img:
                                "http://jfimg.juming.com/upload/img/1815555e1ee65b5dd77SiIQlV.png",
                            nums: "15"
                        }
                    ]
                },
                {
                    id: "3",
                    name: "商品百货",
                    desc: "大牌好物",
                    list: []
                },
                {
                    id: "4",
                    name: "吃喝玩乐",
                    desc: "畅享生活",
                    list: []
                }
            ],
            active: 0
        };
    },
    components: {
        List
    }
};
</script>

<style lang="less">
@import "../assets/css/index/index.less";
</style>


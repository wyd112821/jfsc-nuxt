<template>
    <div class="menu-bar">
        <van-tabbar v-model="active">
            <van-tabbar-item to="/">
                <span>首页</span>
                <template #icon="props">
                    <i class="iconfont icontubiao-06"></i>
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/home">
                <span>分类</span>
                <template #icon="props">
                    <i class="iconfont icontubiao-05"></i>
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/home">
                <span>购物车</span>
                <template #icon="props">
                    <i class="iconfont icontubiao-07"></i>
                </template>
            </van-tabbar-item>
            <van-tabbar-item to="/home">
                <span>我的</span>
                <template #icon="props">
                    <i class="iconfont icontubiao-08"></i>
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        };
    }
};
</script>

<style lang="less">
@import "../../../assets/css/public/menuBar/index.less";
</style>

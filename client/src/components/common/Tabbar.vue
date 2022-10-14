<template>
    <div class="tabbar">
        <ul>
            <li v-for="item in routerList" :key="item.path" @click="switchTab(item.path)">
                <i class="iconfont img" :class="[item.icon, $route.path.includes(item.path) ? 'select':'']"></i>
                <span :class="$route.path.includes(item.path) ? 'select':''">{{item.title}}</span>
            </li>

        </ul>
    </div>
</template>

<script>
export default {
    name: 'Tabbar',
    data() {
        return {
            routerList: [
                {
                    title: '首页', path: '/home', icon: 'icon-home',
                },
                {
                    title: '分类', path: '/list', icon: 'icon-voiceshopping',
                },
                {
                    title: '购物车', path: '/cart', icon: 'icon-cart',
                },
                {
                    title: '我的', path: '/my', icon: 'icon-nickname',
                },
            ]
        }
    },
    methods: {
        switchTab(path) {
            this.$router.push(path)
        }
    }
}
</script>

<style lang="scss" scoped>
.tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 999;
    width: 100%;
    height: 1.111111rem;
    background-color: #fff;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;

        li {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .img {
                font-size: 0.516666rem;

                &.select {
                    font-size: 0.516666rem;
                    color: #f30320;

                }
            }



            span {
                font-size: 0.266666rem;

                &.select {
                    color: #f30320;

                }
            }
        }
    }
}
</style>
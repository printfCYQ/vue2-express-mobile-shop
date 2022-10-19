<template>
    <div class="tabbar">
        <van-tabbar v-model="active" :route="true" active-color="#ee2923">
            <van-tabbar-item v-for="item in routerList" :key="item.path" :icon="item.icon" :to="item.path">
                {{item.name}}
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { Notify } from 'vant';
export default {
    name: 'Tabbar',
    data() {
        return {
            active: 0,
            routerList: [
                {
                    name: '首页', path: '/home', icon: 'home-o',
                },
                {
                    name: '分类', path: '/list', icon: 'apps-o',
                },
                {
                    name: '购物车', path: '/cart', icon: 'shopping-cart-o',
                },
                {
                    name: '我的', path: '/my', icon: 'user-o',
                },
            ]
        }
    },
    methods: {
    }
}
</script>
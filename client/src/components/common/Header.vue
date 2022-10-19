<template>
    <van-search v-model="keyword" show-action shape="round" background="#ee2923" placeholder="请输入搜索关键词"
        @search="onSearch">
        <template #left>
            <img class="logo" src="../../assets/bilibili-logo.png" alt="">
        </template>
        <template #action>
            <van-icon name="service-o" color="#fff" size=".35rem" />
        </template>
    </van-search>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        onSearch() {
            console.log(1);
        }
    },
}
</script>

<style lang="scss" scoped>
.logo {
    height: 34px;
    width: 75px;
    padding-right: 10px;
}
</style>
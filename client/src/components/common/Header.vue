<template>
  <van-search
    show-action
    shape="round"
    background="#ee2923"
    placeholder="请输入搜索关键词"
    @focus="onFocus"
  >
    <template #left>
      <img class="logo" src="../../assets/bilibili-logo.png" alt="" />
    </template>
    <template #action>
      <van-icon
        class="service-icon"
        name="service-o"
        color="#fff"
        size=".35rem"
      />
    </template>
  </van-search>
</template>
客服
<script>
export default {
  name: "Header",
  methods: {
    onFocus() {
      this.$router.push("/search");
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  height: 34px;
  width: 75px;
  padding-right: 10px;
}

.service-icon {
  padding-left: 10px;
}
</style>

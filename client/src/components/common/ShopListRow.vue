<template>
  <div class="shop-list-row">
    <van-card
      v-for="item in 5"
      :key="item"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      origin-price="10.00"
      @click="onDetial"
    >
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  name: "ShopListRow",
  methods: {
    onDetial() {
      this.$router.push("/detail");
    },
  },
};
</script>

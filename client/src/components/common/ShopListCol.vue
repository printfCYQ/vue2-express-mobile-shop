<template>
  <div class="shop-list-col">
    <van-grid :column-num="2">
      <van-grid-item v-for="item in 5" :key="item">
        <img
          class="shop-img"
          src="https://img01.yzcdn.cn/vant/ipad.jpeg"
          alt=""
        />
        <div class="shop-title">商品标题商品标题商品标题</div>
        <div class="shop-desc">描述信息</div>
        <div class="shop-price">¥3.00</div>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "ShopListCol",
};
</script>

<style lang="scss" scoped>
.shop-list-col {
  .shop-img {
    width: 100%;
  }

  .shop-title {
    width: 100%;
    font-size: 0.3rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }

  .shop-desc {
    width: 100%;
    font-size: 0.2rem;
    max-height: 20px;
  }

  .shop-price {
    width: 100%;
    color: #ee2923;
    text-align: right;
    font-size: 0.3rem;
  }
}
</style>

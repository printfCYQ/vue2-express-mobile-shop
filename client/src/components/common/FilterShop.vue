<template>
  <div class="filter-shop">
    <div
      class="filter-item"
      :class="select === 0 ? 'active' : ''"
      @click="choose(0)"
    >
      综合
    </div>
    <div
      class="filter-item"
      :class="select === 1 ? 'active' : ''"
      @click="choose(1)"
    >
      销量
    </div>
    <div
      class="filter-item item-price"
      :class="select === 2 || select === 3 ? 'active' : ''"
      @click="choose()"
    >
      价格
      <van-icon
        :class="select === 3 ? 'rotate' : ''"
        class="price-icon"
        name="refund-o"
        size=".3rem"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterShop",
  data() {
    return {
      select: 0, // 0 综合，1 销量，2 价格降序，3 价格升序
    };
  },
  methods: {
    choose(val) {
      console.log(val);
      if (val !== undefined) {
        this.select = val;
        return;
      }
      if (this.select === 3) {
        this.select = 2;
      } else {
        this.select = 3;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-shop {
  display: flex;
  align-items: center;
  padding: 5px 0 10px 0;
  border-bottom: #d2c9c8 1px solid;

  .filter-item {
    flex: 1;
    text-align: center;
    cursor: pointer;

    &.active {
      font-weight: 700;
      color: #ee2923;
    }
  }

  .item-price {
    display: flex;
    justify-content: center;
    align-items: center;

    .price-icon {
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: all ease-in-out 0.5s;

      &.rotate {
        transform: rotateZ(180deg);
      }
    }
  }
}
</style>

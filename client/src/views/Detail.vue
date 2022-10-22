<template>
  <div class="detail-page">
    <div class="nav-bar-fixed" :style="{ opacity: 1 - opacity }">
      <van-icon
        class="nav-bar-fixed-icon"
        name="revoke"
        size=".3rem"
        color="#fff"
      />
      213
      <van-icon
        class="nav-bar-fixed-icon"
        name="share-o"
        size=".3rem"
        color="#fff"
      />
    </div>
    <div class="nav-bar" :style="{ opacity: opacity }">
      <van-icon class="nav-bar-icon" name="revoke" size=".3rem" color="#fff" />
      <van-icon class="nav-bar-icon" name="share-o" size=".3rem" color="#fff" />
    </div>

    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img class="swiper-img" v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="shop-info">
      <div>青岛纯生</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>
      <div>balabalabalabalabalabala</div>

      <div>¥88.88</div>
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee2923" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
      <van-goods-action-button type="warning" text="加入购物车" />
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      images: [
        "https://img01.yzcdn.cn/vant/apple-1.jpg",
        "https://img01.yzcdn.cn/vant/apple-2.jpg",
      ],
      opacity: 1,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll(e) {
      let scrollTop = e.target.children[0].scrollTop;
      console.log(scrollTop);
      if (scrollTop >= 100) {
        this.opacity = 0;
      } else if (scrollTop === 0) {
        this.opacity = 1;
      } else {
        this.opacity = scrollTop / 100;
      }
      console.log(this.opacity);
    },
  },
};
</script>

<style lang="scss" scoped>
.detail-page {
  padding-bottom: 50px;

  .nav-bar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
    padding: 10px 20px;
    box-sizing: border-box;
    height: 50px;
    align-items: center;
    transition: all ease-in-out 0.1s;

    &-icon {
      background-color: #8c8c8c;
      padding: 5px;
      border-radius: 50%;
    }
  }

  .nav-bar-fixed {
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 99;
    padding: 10px 20px;
    box-sizing: border-box;
    height: 50px;
    align-items: center;
    background-color: #ee2923;
    color: #fff;

    &-icon {
      padding: 5px;
      border-radius: 50%;
    }
  }

  .swiper-img {
    width: 100%;
    height: 6rem;
  }
}
</style>

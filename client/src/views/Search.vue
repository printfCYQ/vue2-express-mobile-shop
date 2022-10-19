<template>
  <div class="search-page">
    <van-search
      class="search-bar"
      ref="search"
      v-model="keyword"
      show-action
      shape="round"
      background="#ee2923"
      placeholder="请输入搜索关键词"
      :autofocus="true"
    >
      <template #left>
        <van-icon
          class="back-icon"
          name="arrow-left"
          color="#fff"
          size=".35rem"
          @click="onBack"
        />
      </template>
      <template #action>
        <div class="search-btn" @click="onSearch">搜索</div>
      </template>
    </van-search>
    <div class="history">
      <h3 class="histroy-title">
        <div>
          <van-icon name="clock-o" size=".3rem" color="#ee2923" />
          历史搜索
        </div>
        <van-icon name="delete-o" size=".3rem" @click="onDeleteHistory" />
      </h3>
      <van-skeleton title :row="3" :loading="skeletonLoading">
        <van-tag
          v-for="item in 20"
          :key="item"
          class="tag-item"
          plain
          size="large"
          >标签{{ item }}</van-tag
        >
      </van-skeleton>
    </div>
    <div class="hot">
      <h3>
        <van-icon name="fire-o" size=".3rem" color="#ee2923" />
        热门搜索
      </h3>
      <van-skeleton title :row="3" :loading="skeletonLoading">
        <van-tag
          v-for="item in 20"
          :key="item"
          class="tag-item"
          plain
          size="large"
          >标签{{ item }}</van-tag
        >
      </van-skeleton>
    </div>
    <div class="recommend">
      <h3>
        <van-icon name="thumb-circle-o" size=".3rem" color="#ee2923" />
        推荐商品
      </h3>
    </div>
    <van-skeleton title :row="5" :loading="skeletonLoading">
      <van-grid class="recommend-list" :column-num="2">
        <van-grid-item v-for="item in 5" :key="item">
          <img
            class="recommend-shop-img"
            src="https://img01.yzcdn.cn/vant/ipad.jpeg"
            alt=""
          />
          <div class="recommend-shop-title">商品标题商品标题商品标题</div>
          <div class="recommend-shop-desc">描述信息</div>
          <div class="recommend-shop-price">¥3.00</div>
        </van-grid-item>
      </van-grid>
    </van-skeleton>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
      skeletonLoading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.skeletonLoading = false;
    }, 500);
  },
  mounted() {
    const searchEle = document.querySelector(".van-field__control");
    searchEle?.focus();
  },
  methods: {
    onSearch() {},
    onDeleteHistory() {
      this.$dialog
        .alert({
          title: "提示",
          message: "清空历史记录？",
          showCancelButton: true,
        })
        .then((e) => {
          console.log("确认");
        })
        .catch((e) => {
          console.log("取消");
        });
    },
    onBack() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.search-page {
  .search-bar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;

    .back-icon {
      padding-right: 10px;
      cursor: pointer;
    }

    .search-btn {
      color: #fff;
      padding-left: 10px;
    }
  }

  .history {
    padding: 0 0.2rem;
    margin-top: 64px;

    .histroy-title {
      display: flex;
      justify-content: space-between;
    }

    .tag-item {
      cursor: pointer;
      margin-right: 0.1rem;
      margin-top: 0.1rem;
    }
  }

  .hot {
    padding: 0 0.2rem;

    .tag-item {
      cursor: pointer;
      margin-right: 0.1rem;
      margin-top: 0.1rem;
    }
  }

  .recommend {
    padding: 0 0.2rem;
  }

  .recommend-list {
    .recommend-shop-img {
      width: 100%;
    }

    .recommend-shop-title {
      width: 100%;
      font-size: 0.3rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }

    .recommend-shop-desc {
      width: 100%;
      font-size: 0.2rem;
      max-height: 20px;
    }

    .recommend-shop-price {
      width: 100%;
      color: #ee2923;
      text-align: right;
      font-size: 0.3rem;
    }
  }
}
</style>

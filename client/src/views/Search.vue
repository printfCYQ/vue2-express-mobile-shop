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
      @input="onSearchChange"
      @search="onSearch"
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
        <div v-if="hasSearch">
          <van-icon
            v-if="shopListType === 0"
            class="back-icon"
            name="orders-o"
            color="#fff"
            size=".4rem"
            @click="onChangeListType(1)"
          />
          <van-icon
            v-if="shopListType === 1"
            class="back-icon"
            name="apps-o"
            color="#fff"
            size=".4rem"
            @click="onChangeListType(0)"
          />
        </div>
        <div v-else class="search-btn" @click="onSearch">搜索</div>
      </template>
    </van-search>
    <div v-if="hasSearch" class="shop-list">
      <ShopListRow v-if="shopListType === 0"></ShopListRow>
      <ShopListCol v-else></ShopListCol>
    </div>
    <div v-else>
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
            @click="clickTag(item)"
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
            @click="clickTag(item)"
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
        <ShopListCol></ShopListCol>
      </van-skeleton>
    </div>
  </div>
</template>

<script>
import ShopListCol from "@/components/common/ShopListCol.vue";
import ShopListRow from "@/components/common/ShopListRow.vue";
export default {
  name: "Search",
  components: {
    ShopListCol,
    ShopListRow,
  },
  data() {
    return {
      keyword: "", // 搜索关键字
      skeletonLoading: true, // 骨架屏开关
      hasSearch: false, // 是否已经搜索
      shopListType: 0, // 商品列表状态 0/1
    };
  },
  created() {
    setTimeout(() => {
      this.skeletonLoading = false;
    }, 500);
  },
  mounted() {
    const searchEle = document.querySelector(".van-field__control");
    searchEle?.focus(); // 进入页面自动获取焦点
  },
  methods: {
    // 监听输入框的值变化
    onSearchChange(e) {
      if (e === "") {
        this.hasSearch = false;
      }
    },

    //点击搜索按钮
    onSearch() {
      if (this.keyword === "") {
        this.$notify({
          type: "warning",
          message: "请输入内容",
          duration: 1000,
        });
        return;
      }
      this.hasSearch = true;
    },

    // 点击清空历史记录图标
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

    // 点击切换商品列表展示类型
    onChangeListType(val) {
      this.shopListType = val;
    },

    // 点击历史记录/热门推荐tag
    clickTag(item) {
      this.keyword = item + "";
      this.onSearch();
    },

    // 返回
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

    .van-search__action {
      line-height: 0;
    }

    .back-icon {
      padding-right: 10px;
      cursor: pointer;
    }

    .search-btn {
      color: #fff;
      padding-left: 10px;
    }
  }

  .shop-list {
    margin-top: 64px;
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

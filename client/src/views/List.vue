<template>
  <div class="list-page">
    <div class="list-warp">
      <van-sidebar v-model="activeKey" @change="onSidebarChange">
        <van-sidebar-item
          v-for="item in dataList"
          :key="item.title"
          :title="item.title"
        />
      </van-sidebar>
      <div ref="list" class="list-warp-content">
        <div class="content-item" v-for="item in dataList" :key="item.title">
          <div class="content-title">
            <van-icon name="award-o" size=".35rem" color="#ee2923" />
            {{ item.title }}
            <van-icon name="award-o" size=".35rem" color="#ee2923" />
          </div>
          <van-grid class="grid-warp" :column-num="3" :border="false">
            <van-grid-item v-for="(i, index) in item.shopList" :key="index">
              <!-- <img class="shop-img" v-lazy="url" /> -->
              <img class="shop-img" :src="url" />
              <div class="shop-title">商品标题</div>
            </van-grid-item>
          </van-grid>
        </div>
      </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import Tabbar from "@/components/common/Tabbar.vue";
export default {
  name: "List",
  components: {
    Tabbar,
  },
  data() {
    return {
      activeKey: 0,
      url: "https://img01.yzcdn.cn/vant/ipad.jpeg",
      dataList: [
        { title: "青岛啤酒", shopList: [{}, {}, {}, {}, {}] },
        {
          title: "燕京啤酒",
          shopList: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        },
        { title: "喜力啤酒", shopList: [{}, {}, {}, {}, {}] },
        {
          title: "进口啤酒",
          shopList: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
        },
      ],
      itemHeightArr: [],
    };
  },

  mounted() {
    let eleArr = this.$refs.list.querySelectorAll(".content-item");
    let itemHeightArr = [0];
    let height = 0;
    Array.from(eleArr).map((item) => {
      height += item.clientHeight;
      itemHeightArr.push(height);
    });
    console.log(itemHeightArr);
    this.itemHeightArr = itemHeightArr;
    window.addEventListener("scroll", this.handleScroll, true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    // 点击sidebar
    onSidebarChange(e) {
      this.$refs.list.scrollTop = this.itemHeightArr[e];
    },

    // 监听页面滚动
    handleScroll(e) {
      console.log(e.target.scrollTop);
      console.log(this.$refs.list.scrollTop);
      let scrollTop = this.$refs.list.scrollTop;
      for (let i = 0; i < this.itemHeightArr.length; i++) {
        if (
          scrollTop > this.itemHeightArr[i] &&
          scrollTop < this.itemHeightArr[i + 1]
        ) {
          this.activeKey = i;
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.list-page {
  .list-warp {
    display: flex;
    height: calc(100vh - 50px);

    .van-sidebar {
      height: calc(100vh - 50px);
    }

    &-content {
      height: calc(100vh - 50px);
      overflow: scroll;
      flex: 1;

      .content-title {
        text-align: center;
        padding: 10px 0;
      }

      .shop-img {
        width: 100%;
        height: 100%;
      }

      .shop-title {
        width: 100%;
        text-align: center;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
    }
  }
}
</style>

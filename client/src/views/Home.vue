<template>
  <div class="home">
    <Header class="header-warp"></Header>
    <van-tabs class="tab-warp" color="#ee2923" title-active-color="#ee2923" animated swipeable>
      <van-tab v-for="item in tabList" :key="item.id" :title="'标签 ' + item.title  ">
        <div v-if="item.id ===0">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
              <img class="swipe-img" v-lazy="image" />
            </van-swipe-item>
          </van-swipe>
          <van-grid class="grid-warp" :column-num="5" :border="false">
            <van-grid-item v-for="item in gridList" :key="item.id" :icon="item.icon" :text="item.title" />
          </van-grid>
          <div class="recommend-warp">
            <h2 class="recommend-title">
              <van-icon name="hot-o" size=".35rem" color="#ee2923" />
              爆款推荐
              <van-icon name="hot-o" size=".35rem" color="#ee2923" />
            </h2>
            <van-card v-for="item in 5" :key="item" tag="标签" price="2.00" desc="描述信息" title="商品标题"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00">
              <template #tags>
                <van-tag plain type="danger">标签</van-tag>
                <van-tag plain type="danger">标签</van-tag>
              </template>
            </van-card>
          </div>

          <div class="like-warp">
            <h2 class="like-title">
              <van-icon name="flower-o" size=".35rem" color="#ee2923" />
              猜你喜欢
              <van-icon name="flower-o" size=".35rem" color="#ee2923" />
            </h2>
            <van-grid :column-num="2">
              <van-grid-item v-for="item in 5" :key="item">
                <img class="like-shop-img" src="https://img01.yzcdn.cn/vant/ipad.jpeg" alt="">
                <div class="like-shop-title">商品标题商品标题商品标题</div>
                <div class="like-shop-desc">描述信息</div>
                <div class="like-shop-price">¥3.00</div>
              </van-grid-item>
            </van-grid>
          </div>
        </div>
      </van-tab>
    </van-tabs>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/common/Tabbar.vue'
import Header from '@/components/common/Header.vue'

export default {
  name: "Home", components: {
    Tabbar,
    Header
  },
  data() {
    return {
      tabList: [
        { id: 0, title: '1', },
        { id: 1, title: '2', },
        { id: 2, title: '3', },
        { id: 3, title: '4', },
        { id: 4, title: '5', },
        { id: 5, title: '6', },
      ],
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
      gridList: [
        { id: 0, title: '1', icon: 'gem' },
        { id: 1, title: '2', icon: 'gift' },
        { id: 2, title: '333333', icon: 'hot' },
        { id: 3, title: '4', icon: 'award' },
        { id: 4, title: '5', icon: 'music' },
      ]
    }
  },
};
</script>
<style lang="scss" scoped>
.home {
  .header-warp {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }

  .tab-warp {
    ::v-deep .van-tabs__wrap {
      position: fixed;
      top: 54px;
      width: 100%;
      z-index: 99;
    }

    ::v-deep .van-tabs__content {
      margin-top: 98px;

      .swipe-img {
        width: 100%;
        height: 3rem;
      }

      .van-grid-item__content {
        background-color: #fafafa;
      }

      .van-grid-item__icon {
        color: #ee2923;
      }

      .recommend-warp {
        .recommend-title {
          text-align: center;
        }

        .van-card__bottom {
          text-align: right;

          .van-card__price {
            color: #ee2923;
          }
        }
      }

      .like-warp {
        .like-title {
          text-align: center;
        }

        .like-shop-img {
          width: 100%;
        }

        .like-shop-title {
          width: 100%;
          font-size: .3rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;

        }

        .like-shop-desc {
          width: 100%;
          font-size: .2rem;
          max-height: 20px;
        }

        .like-shop-price {
          width: 100%;
          color: #ee2923;
          text-align: right;
          font-size: .3rem;
        }
      }
    }
  }
}
</style>

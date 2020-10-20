<!--  -->
<template>
  <div id="home">
    <nav-bar class="navbar">
      <template v-slot:middle>
        <div>Tcgogo</div>
      </template>
    </nav-bar>

    <scroll
      class="content"
      ref="scroller"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="pullingUp"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommends-view :recommends="recommends"></recommends-view>
      <feature-view></feature-view>
      <tab-control
        :titles="titles"
        class="tab"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar/NavBar";
import scroll from "components/common/scroll/scroll";

import TabControl from "components/content/TabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/BackTop/BackTop";

import { getHomeMulidata, getHomeGoods } from "network/home";

import HomeSwiper from "views/home/childComponents/HomeSwiper";
import FeatureView from "views/home/childComponents/FeatureView";
import RecommendsView from "views/home/childComponents/RecommendsView";

export default {
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendsView,
    FeatureView,
    TabControl,
    GoodsList,
    scroll,
    BackTop,
  },
  created() {
    //1.请求多个数据
    this.getHomeMulidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     *
     */

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backClick() {
      this.$refs.scroller.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      this.isShow = position.y <= -680 ? true : false;
    },
    async pullingUp() {
      await this.getHomeGoods(this.currentType);
      this.$refs.scroller.finishPullUp();
      this.$refs.scroller.scroll.refresh();
    },
    /**
     * 网络请求
     */
    async getHomeMulidata() {
      await getHomeMulidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
      this.$refs.scroller.scroll.refresh();
    },
    async getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      await getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
      this.$refs.scroller.scroll.refresh();
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  color: #fff;
  background-color: #ff8198;
  font-size: 18px;
}

.tab {
  position: sticky;
  top: 43px;
  z-index: 9;
}

.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
</style>
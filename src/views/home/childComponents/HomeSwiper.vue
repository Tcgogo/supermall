<!--  -->
<template>
  <div>
    <swiper>
      <swiper-item v-for="item in banners" :key="item.title">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  data() {
    return {};
  },
  props: {
    banners: {
      type: Array,
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
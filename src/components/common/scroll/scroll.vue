<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";

BScroll.use(Pullup);

export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      },
      pullUpLoad: {
        type: Boolean,
        default() {
          return true;
        },
      },
    },
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    initBscroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        pullUpLoad: true,
        click: true,
      });

      this.scroll.on("scroll", (position) => {
        // console.log(position.y)
        this.$emit("scroll", position);
      });

      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    },
  },
  mounted() {
    this.initBscroll();
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
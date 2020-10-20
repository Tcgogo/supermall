<!--  -->
<template>
  <div>
    <div class="tab-bar-item" @click='itemClick'>
      <slot v-if="!isActive" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    styleActive: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.startsWith(this.path);
    },
    activeStyle(){
      return this.isActive ? { color: this.styleActive } : {};
    }
  },
  methods: {
    itemClick(){
      this.$router.replace(this.path);
    }
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
  }

  .tab-bar-item img {
    height: 60%;
    width: 60%;
    margin-top: 3px;
  }
  .active {
    color: red;
  }
</style>
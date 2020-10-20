<!--  -->
<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-item" @click="changeActive(index)">
      <span :class="{active: currentIndex == index}">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    changeActive(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index);
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
  .tab-control {
    display: flex;
    top: 0;
    right: 0;
    left: 0;
    background-color: #fff;
    z-index: 9;
  }
  .tab-item {
    text-align: center;
    flex: 1;
    height: 44px;
    line-height: 44px;
    font-size: 17px;
  }

  .active {
    padding: 5px;
    color: rgb(235, 62, 91);
    border-bottom: 3px solid rgb(235, 62, 91);
  }
</style>
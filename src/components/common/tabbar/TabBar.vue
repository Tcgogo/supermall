<!--  -->
<template>
  <div id="tab-bar" >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */

  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0 -3px 1px rgba(238, 229, 229, 0.5);
    z-index: 99;
  }

</style>
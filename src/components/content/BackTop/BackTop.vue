<!--  -->
<template>
  <div class="back-top">
    <img src="~assets/images/home/backtop.svg" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
  .back-top {
    position: fixed;
    bottom: 65px;
    right: 25px;
    width: 35px;
    height: 35px;
    z-index: 20;
  }
  .back-top img{
    width: 100%;
    height: 100%;
  }
</style>
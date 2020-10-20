<!--  -->
<template>
  <div class="recommends">
    <div class="recommend-item" v-for="item in recommends" :key="item.sort">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */

  .recommends  {
    display: flex;
    width: 100%;
    text-align: center;
    padding: 10px;
    border-bottom: 10px solid #eee;
    font-size: 15px;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img{
    width: 70px;
    height: 65px;
    border-radius: 100%;

  }

</style>
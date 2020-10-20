<!--  -->
<template>
  <div class="good-list">
    <goods-list-item
      v-for="(item, index) of goods"
      :key="index"
      :goods-item="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem";

export default {
  data() {
    return {};
  },
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      defalut() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: var(--color-background);

  padding: 2px;
}
</style>
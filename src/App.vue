<template>
  <div id="app">
    <router-view/>
    <main-tar-bar></main-tar-bar>
  </div>
</template>

<script>
import MainTarBar from 'components/content/MainTabBar/MainTabBar'

export default {
  components: {
    MainTarBar
  }
}
</script>

<style>
  @import url(assets/css/base.css);
</style>

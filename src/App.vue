<template>
  <div id="app">

    <!-- 引入模板框架 -->
    <!-- 引入头部组件 -->
    <HerosTop></HerosTop>
    <div class="container-fluid">
      <div class="row">
        <HerosSlider></HerosSlider>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HerosTop from "@/components/HerosTop.vue";
import HerosSlider from "@/components/HerosSlider.vue";

export default {
  components: {
    HerosTop,
    HerosSlider,
  }
};
</script>

<style>
</style>

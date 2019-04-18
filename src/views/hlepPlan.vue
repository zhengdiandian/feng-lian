<template>
  <div class="wrap">

    <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0" >
      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)"></mu-icon>
      </mu-button>
      <div class="text-center">互助计划</div>
    </mu-appbar>
    <div class="banner">
      <img src="http:\\placehold.it\350x160" alt="">
    </div>
    <mu-sub-header>终身重大疾病互助计划</mu-sub-header>

  </div>
</template>

<script>
  export default {
    name: 'hlepPlan'
  }
</script>

<style lang="scss" scoped>
  .banner{
    width: 100%;
    height: $banner-h;
    img{
      height: 100%;
      width: 100%;
    }
  }
</style>

<template>
  <div class="banner">
    <img src="../../assets/PNG/视频.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'BannerImg',
    props:{
      videoImg:{
        type: String,
        default: '../../assets/PNG/视频.png'
      }
    }
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

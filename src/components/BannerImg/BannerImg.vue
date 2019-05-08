<template>
  <div class="banner">
    <img :src="videoImg" alt="">
  </div>
</template>

<script>
  export default {
    name: 'BannerImg',
    props:{
      videoImg:{
        default: 'https:placehold.it/200'
      }
    },
    data() {
      return {
        // videoImg: require('../../assets/PNG/视频.png')
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

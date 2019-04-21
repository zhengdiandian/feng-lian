<template>
  <div class="owe">
    <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)"></mu-icon>
      </mu-button>
      感恩有你
      <mu-button icon slot="right" >
        <mu-icon value=":iconfont iconshubanshenglvehao" size="24"></mu-icon>
      </mu-button>
    </mu-appbar>
    <div class="img-wrap page-nav-margin">
      <img src="../assets/PNG/感恩有你.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'owe'
  }
</script>

<style lang="scss" scoped>

  .owe, .img-wrap{
    width: 100%;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>

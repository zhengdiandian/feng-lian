<template>
  <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
    <mu-button icon slot="left" @click="$router.go(-1)">
      <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)"></mu-icon>
    </mu-button>
    健康告知
    <mu-button icon slot="right"  :ripple="false">
    </mu-button>
  </mu-appbar>
</template>

<script>
  export default {
    name: 'Inform'
  }
</script>

<style scoped>

</style>

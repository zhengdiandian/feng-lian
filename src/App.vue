<template>
  <div id="app">
    <keep-alive>
      <router-view/>      
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'app',
  created () {

  }
}
</script>
<style lang="scss">
@import url('./global/fuXie.scss');
#app>div{
  height: 100%;
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.title-font{
  font-size: 15px;
}
html,body{
  font-size: 14px;
  font-family:SourceHanSansCN-Normal, 'Avenir', Helvetica, Arial, sans-serif;
  color: $c-black;
  height: 100%;
}
</style>

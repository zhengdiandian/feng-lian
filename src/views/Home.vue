<template>
  <div>
    <router-view class="home-wrap"></router-view>
  <!--<mu-container style="max-width: 400px; width:100%;" name="home" color="primary" z-depth="0">-->
    <mu-bottom-nav class="bottom-nav" :value.sync="shift"  >

      <mu-bottom-nav-item value="movies" active-class="active-item" title="首页" to="/home"  icon=":iconfont iconshouye1 "></mu-bottom-nav-item>
      <mu-bottom-nav-item value="music"  active-class="active-item" title="公告" to="/notice/newNotice" icon=":iconfont icongonggao"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="books" active-class="active-item" title="我的" to="/my"  icon=":iconfont iconwode"></mu-bottom-nav-item>
    </mu-bottom-nav>

  <!--</mu-container>-->
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      shift: 'movies'
    }
  },
  components: {

  }
}
</script>
<style scoped lang="scss">
  .mu-bottom-nav{
    position: fixed;
    width: 100%;
    height: 50px;
    left: 0px;
    bottom: 0px;
  }
 .home-wrap{
   margin-bottom: 50px;
 }
  .active-item{
    color: $c-cheng;
  }
</style>

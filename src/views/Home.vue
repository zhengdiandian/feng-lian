<template>
  <div>
    <router-view></router-view>
  <mu-container style="max-width: 400px; width:100%;" color="primary">
    <mu-bottom-nav :value.sync="shift"  >
      <!--<mu-icon size="36" value=":mudocs-icon-communication-phone" color="red"></mu-icon>-->

      <mu-bottom-nav-item value="movies" title="首页"  icon=":iconfont iconshouye1 "></mu-bottom-nav-item>
      <mu-bottom-nav-item value="music" title="公告" icon=":iconfont icongonggao"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="books" title="我的"  icon=":iconfont iconwode"></mu-bottom-nav-item>
    </mu-bottom-nav>
  </mu-container>
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

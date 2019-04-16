<template>
  <div>
    <router-view></router-view>
    <mu-container style="max-width: 400px; width:100%;">
      <mu-bottom-nav :value.sync="shift" shift>
        <mu-bottom-nav-item value="movies" title="首页" icon="home"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="music" title="公告" icon="assignment"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="books" title="我的"  icon="person"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
// @ is an alias to /src


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

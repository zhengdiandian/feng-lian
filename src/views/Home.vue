<template>
  <div>
    <router-view class="home-wrap"></router-view>
  <!--<mu-container style="max-width: 400px; width:100%;" name="home" color="primary" z-depth="0">-->
    <mu-bottom-nav class="bottom-nav" @change="open" :value.sync="shift" >

      <mu-bottom-nav-item value="movies" active-class="active-item" title="首页" to="/home"  icon=":iconfont iconshouye1 " ></mu-bottom-nav-item>
      <mu-bottom-nav-item value="music"  active-class="active-item" title="公告" to="/notice" icon=":iconfont icongonggao"></mu-bottom-nav-item>
      <mu-bottom-nav-item value="my" :class="{'active-item': $route.fullPath == '/my' || $route.fullPath == '/mynot'}" active-class="active-item" @click="open" title="我的" icon=":iconfont iconwode"></mu-bottom-nav-item>
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
  methods:{
    open(value){
      console.log(this.shift)
      if(this.shift !=='my')return
      let token = localStorage.getItem('token')
      if(token){
        this.$router.push('/my')
      } else{
        this.$router.push('/mynot')
      }
    }
  },
  components: {

  },
  created() {

  },
  mounted() {

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
   padding-bottom: 50px;
 }
  .active-item{
    color: $c-cheng;
  }
  // .mu-bottom-item-active{
  //   color: $c-cheng;
  // }
</style>

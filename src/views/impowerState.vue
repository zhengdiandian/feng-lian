<template>
    <div>
      <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
        <mu-button icon slot="left" @click="close">
          <mu-icon value=":iconfont iconfanhui"></mu-icon>
        </mu-button>
        授权确认
        <!-- icon slot="right" :ripple="false"> -->
          <mu-button icon slot="right" @click="close">
          <span >关闭</span>

        </mu-button>

      </mu-appbar>
      <div class="wrap">
        <div class="content page-margin-top">
          <div class="state"><img class="state-img" :src="state" alt=""><div class="state-text">{{text}}</div></div>
        </div>
      </div>

    </div>
</template>

<script>
  export default {
    name: 'impowerState',
    data() {
      return {
        imglist:{
          '200': require('../assets/img/成功.svg'),
          '300': require('../assets/img/失败.svg'),
        },
        state: '',
        text: ''

      }
    },
    methods: {
      close() {
        let path =decodeURI(decodeURI(this.$route.query.fullPath))
        this.$router.replace(path)
      },
      go() {
        debugger
        this.$router.push(decodeURI(this.$route.query.fullPath))
      }
    },
    created() {
      let state = this.$route.query.state
      this.state = this.imglist[state]
      // this.state =state
      this.text = state == '200' ? '授权成功': '授权失败'
      this.$axios.post('v1/user/info/personalInfo').then(res => {
        debugger
        if(res.data.code !==200){
                this.$toast.error(res.data.msg)
                return
          }

        this.$store.commit('set_userInfo',res.data.data)
      })
    },
    watch: {
      // $route(){
      //   debugger
      // this.state = this.imglist[this.$route.query.state]
      // this.text = this.state === 'succeed' ? '授权成功': '授权失败'
      // }
    },
  }
</script>

<style lang="scss" scoped>
.mu-icon-button {
    line-height: 1;
    width: auto;
    font-size:$f15;
}
.state{
  padding-top: 20px;
  display: flex;
  // flex-flow: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .state-img{
    width: 100px;
    height: 100px
  }
  .state-text{
    text-align: center;
    color: $c-black;
  }
}
</style>

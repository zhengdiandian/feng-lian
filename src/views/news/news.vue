<template>
    <div>
        <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
        <mu-button icon slot="left" @click="$router.go(-1)">
          <mu-icon value=":iconfont iconfanhui"></mu-icon>
        </mu-button>
        消息中心
        <mu-button icon slot="right" >
           <!-- <span style="font-size:12px;">保</span><span style="font-size:12px;">存</span> -->
        </mu-button>
      </mu-appbar>
      <main>
          <div class="list-li" @click="$router.push('/PlatformNews')">
            <div class="list-img-text" >
              <div class="list-img" ><i class="iconfont iconpingtai"></i></div>
              <span class="position-r">平台消息</span>
            </div>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
          <div class="list-li" @click="$router.push('/SystemNews')">
            <div class="list-img-text">
              <div class="list-img" ><i class="iconfont icongonggaoxiaoxixitongxiaoxi"></i></div>
              <span class="position-r">系统消息</span>
            </div>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
          <div class="list-li" @click="$router.push('/myPlanNews')">
            <div class="list-img-text" >
              <div class="list-img" ><i class="iconfont iconjihua"></i></div>
              <span class="position-r">我的计划消息</span>
            </div>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
      </main>
      <footer>
        <a :href="'tel:'+CustomerService" class="customer">
            <mu-icon value=":iconfont iconlianxikefu"></mu-icon>
            <span>联系客服</span>
        </a>
    </footer>
    </div>
</template>

<script>
    export default {
        name: 'news',
        data() {
            return {
                CustomerService: ''
            }
        },
        mounted() {
            this.$axios.post('v1/manage/config/getTextList',{
            "keys": 'CustomerService'
            }).then(res=>{
                if(res.data.code !==200){
                        this.$toast.error(res.data.msg)
                        return
                }
                this.CustomerService = res.data.data.CustomerService
            })
        }
    }
</script>

<style lang="scss" scoped>
// #app>div{
//   background-color: $c-hui;
// }
main{
    padding-top: 60px;
}
.list-li {
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #fff;
    .iconyou1{
    position: absolute;
    right: 12px;
    font-size: 20px;
    color: #EF9B1E;
    }
}
.list-img-text{
  text-align: center;
  display: flex;
  line-height: 26px;
  margin-left: 12px;
  font-size: $f14;
  .iconfont{
      font-size: 25px;
  }
}
.position-r{
    margin-left:12px;
    padding-top: 2px;
}
footer{
    // position: absolute;
    // bottom: 0px;
    width: 100%;
    .customer{
        display: block;
        width:123px;
        height:33px;
        border:1px solid rgba(239,162,32,1);
        border-radius:25px;
        // position: absolute;
        // bottom: 0px;
        // left: 113px;
        margin: 12px auto;
        text-align: center;
        line-height: 33px;
        color: #EFA220;
        display: flex;
        justify-content: center;
        .iconlianxikefu{
            padding-right: 6px;
        }
    }
}
</style>
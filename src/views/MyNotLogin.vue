<template>
<div id="MyCenter">
  <PopBox v-if="showPoP">
    <div class="pop">
      <div>
        <div>
          <div class="heart">
            您还没有登录您的账号现在去登录吗？
          </div>
        </div>
      </div>
      <div style="position: absolute;width: 100%;bottom: 0;">
        <button @click="showPoP=false">不，谢谢</button>
        <button class="btn-join" @click="$router.push('/login')">现在登陆</button>
      </div>
    </div>
  </PopBox>
    <header>
        <div class="header-title">我的蜂链</div>
    </header>
    <main>
        <section class="please-login">
            <div class="login-img" @click="$router.push('/login')">
                <div class="icon">
                  <mu-icon value=":iconfont iconwode1"></mu-icon>
                </div>
                <span>请登录</span>
            </div>
        </section>
        <section class="please-list-tongzhi">
          <div  @click="showPoP=true">
            <div class="list-li">
            <div style="text-align: center;">
              <img src="../assets/image/我的计划-选中.svg" alt="">
              <span class="position-r" style="margin-left:12px">我的计划</span>
            </div>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
          </div>
          <div  @click="showPoP=true">
            <div class="list-li">
            <div style="text-align: center;">
              <img src="../assets/image/记录.svg" alt="">
              <span class="position-r" style="margin-left:12px">互助记录</span>
            </div>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
          </div>
          <div  @click="showPoP=true">
            <div class="list-li">
            <div style="text-align: center;">
              <img src="../assets/image/邀请.svg" alt="">
              <span class="position-r" style="margin-left:12px">邀请好友</span>
            </div>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
          </div>
            <div  @click="showPoP=true">
              <div class="list-li">
              <div style="text-align: center;">
              <img src="../assets/image/通知.svg" alt="">
                <span class="position-r" style="margin-left:12px">通知</span>
              </div>
              <mu-icon value=":iconfont iconyou1"></mu-icon>
            </div>
            </div>
            <div  @click="showPoP=true">
              <div class="list-li">
              <div style="text-align: center;">
              <img src="../assets/image/设置.svg" alt="">
                <span class="position-r" style="margin-left:12px">设置</span>
              </div>
              <mu-icon value=":iconfont iconyou1"></mu-icon>
            </div>
            </div>
        </section>
    </main>
</div>
</template>
<script>
import PopBox from '../components/PopBox/PopBox'
export default {
  name: 'mynotlogin',
  data() {
    return {
      list: [
        "我的计划",
        "互助计划",
        "邀请好友",
        "通知",
        "设置"
      ],
      showPoP: false
    }
  },
  components: {
    PopBox
  }
}
</script>
<style scoped lang="scss">
.pop{
    width: 250px;
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    text-align: center;
    position: relative;
    & >div:last-child{
      // height: 40px;
      // background-color: $c-cheng;
      // color: $c-bai;
      // line-height: 40px;
      // font-size: 18px;
      // align-self: flex-end;
    }
    &>div{
      width: 100%;
      text-align: center;
    }
    align-items: center;
    .iconfont{
      font-size: 45px;
    }
    .heart{
      display: inline-block;
      width: 170px;
      height: 80px;
      font-size: 16px;
    }
    button{
      border: none;
      width: 50%;
      height: 50px;
      border-top: 1px solid $c-hui;
      background-color: #fff;
      border-right: 1px solid $c-hui;
    }
    .btn-join{
      color: $c-lang
    }
  }.pop{
    width: 250px;
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    text-align: center;
    position: relative;
    & >div:last-child{
      // height: 40px;
      // background-color: $c-cheng;
      // color: $c-bai;
      // line-height: 40px;
      // font-size: 18px;
      // align-self: flex-end;
    }
    &>div{
      width: 100%;
      text-align: center;
    }
    align-items: center;
    .iconfont{
      font-size: 45px;
    }
    .heart{
      display: inline-block;
      width: 170px;
      height: 80px;
      font-size: 16px;
    }
    button{
      border: none;
      width: 50%;
      height: 50px;
      border-top: 1px solid $c-hui;
      background-color: #fff;
      border-right: 1px solid $c-hui;
    }
    .btn-join{
      color: $c-lang
    }
  }
header {
width: $gw;
.header-title {
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  background: #fff;
}
}
main {
  background-color: #f5f5f5;
  .icon{
    width:50px;
    height:50px;
    background:rgba(207,207,207,1);
    border:2px solid rgba(207, 207, 207, 1);
    border-radius:50%;
    margin-left: 14px;
  }
    .login-img {
      width:351px;
      height:74px;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 3px 0px rgba(0, 0, 0, 0.1);
      border-radius:5px;
      margin: 11px auto;
      display: flex;
      align-items: center;
      .iconwode1{
        font-size: 35px;
        color: #FFFFFF;
        position: relative;
        top: 8px;
        left: 6px;
      }
      span {
        display: inline-block;
        height:12px;
        font-size:14px;
        font-family:Adobe Heiti Std R;
        font-weight:normal;
        color:rgba(239,162,32,1);
        margin-left: 12px;
      }
    }
.please-list-tongzhi{
width:351px;
height:93px;
background:rgba(255,255,255,1);
box-shadow:0px 0px 3px 0px rgba(0, 0, 0, 0.1);
border-radius:5px;
margin: 10px auto;
}
.list-li {
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #fff;
    img{
        width: 20px;
        height: 20px;
        margin-left: 14px;
    }
    .iconfont {
      color: #358EFD;
      font-size: 20px;
      margin-left: 14px;
    }
    .iconyou1{
      position: absolute;
      right: 20px;
      font-size: 20px;
      color: #EF9B1E;
    }
  }
}
</style>

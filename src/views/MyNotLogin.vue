<template>
<div id="MyCenter">
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
          <router-link tag="div" to="/myplan">
            <div class="list-li">
            <div style="text-align: center;">
              <img src="../assets/图标/我的计划-选中.svg" alt="">
              <span class="position-r" style="margin-left:12px">我的计划</span>
            </div>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
          </router-link>
          <router-link tag="div" to="/assis">
            <div class="list-li">
            <div style="text-align: center;">
              <img src="../assets/图标/记录.svg" alt="">
              <span class="position-r" style="margin-left:12px">互助记录</span>
            </div>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
          </router-link>
          <router-link tag="div" to="/">
            <div class="list-li">
            <div style="text-align: center;">
              <img src="../assets/图标/邀请.svg" alt="">
              <span class="position-r" style="margin-left:12px">邀请好友</span>
            </div>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
          </router-link>
            <router-link tag="div" to="/">
              <div class="list-li">
              <div style="text-align: center;">
              <img src="../assets/图标/通知.svg" alt="">
                <span class="position-r" style="margin-left:12px">通知</span>
              </div>
              <mu-icon value=":iconfont iconyou1"></mu-icon>
            </div>
            </router-link>
            <router-link tag="div" to="/setup">
              <div class="list-li">
              <div style="text-align: center;">
              <img src="../assets/图标/设置.svg" alt="">
                <span class="position-r" style="margin-left:12px">设置</span>
              </div>
              <mu-icon value=":iconfont iconyou1"></mu-icon>
            </div>
            </router-link>
        </section>
    </main>
</div>
</template>
<script>
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
      ]
    }
  }
}
</script>
<style scoped lang="scss">
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
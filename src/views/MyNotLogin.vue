<template>
<div id="MyCenter">
    <header>
        <div class="header-title">我的蜂链</div>
    </header>
    <main>
        <section class="please-login">
            <div class="login-img">
                <div style="width: 50px;height: 50px;background-color: #ccc; border-radius: 50%;">
                  <img src="" alt="">
                </div>
                <span>请登录</span>
            </div>
        </section>
        <section class="please-list">
          <div class="list-li" v-for="li in list" :key="li">
            <div style="width: 30px;height: 30px;background-color: #ccc;">
              <img src="" alt="">
            </div>
            <span>{{li}}</span>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </section>
    </main>
</div>
</template>
<script>
export default {
  name: 'mycenter',
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
    .login-img {
      width: 90%;
      height: 65px;
      background-color: #fff;
      margin: 10px auto;
      display: flex;
      align-items: center;
      span {
        color: yellow;
      }
    }
    .list-li {
      width: 90%;
      height: 50px;
      margin: auto;
      display: flex;
      align-items: center;
      background-color: #fff;
      .iconyou1{
        position: absolute;
        right: 20px;
        font-size: 20px;
      }
    }
}
</style>
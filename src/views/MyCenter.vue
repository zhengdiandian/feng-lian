<template>
<div id="MyCenter">
    <header>
        <div class="header-title">我的蜂链</div>
    </header>
    <main>
      <div class="headerNav">
        <div class="headerLogin"><img src="" alt=""></div>
        <router-link tag="div" to="/perinfor">
        <section class="information">
          <span>姓名：{{name}}</span><span class="state">已实名</span>
          <div class="number">188 5001 6569</div>
          <div class="integral">积分 {{5000}}</div>
          <div class="autograph">海内存知己，天涯若比邻</div>
        </section>
        </router-link>
        <div class="you">
         <mu-icon value=":iconfont iconyou1"></mu-icon>
        </div>
      </div>
      <div class="apply">
        <mu-icon value=":iconfont iconaixin" color="red"></mu-icon>
        <span>申请成为爱心大使</span>
        <div class="apply-click">立即申请</div>
      </div>
      <section class="please-list" style="margin: 10px auto; width: 90%">
        <router-link tag="div" to="/welfareagency">
          <div class="list-li">
            <div style="width: 30px;height: 30px;background-color: #ccc;">
              <img src="" alt="">
            </div>
            <span>福利社</span>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </router-link>
          <router-link tag="div" to="/">
          <div class="list-li">
            <div style="width: 30px;height: 30px;background-color: #ccc;">
              <img src="" alt="">
            </div>
            <span>我的卡包</span>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </router-link>
        <router-link tag="div" to="/myplan">
          <div class="list-li">
            <div style="width: 30px;height: 30px;background-color: #ccc;">
              <img src="" alt="">
            </div>
            <span>我的计划</span>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </router-link>
        <router-link tag="div" to="/">
          <div class="list-li">
            <div style="width: 30px;height: 30px;background-color: #ccc;">
              <img src="" alt="">
            </div>
            <span>我的申请</span>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </router-link>
        <router-link tag="div" to="/">
          <div class="list-li">
            <div style="width: 30px;height: 30px;background-color: #ccc;">
              <img src="" alt="">
            </div>
            <span>我的蜂蜜</span>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </router-link>
        <router-link tag="div" to="/assis">
          <div class="list-li">
            <div style="width: 30px;height: 30px;background-color: #ccc;">
              <img src="" alt="">
            </div>
            <span>互助记录</span>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </router-link>
        <router-link tag="div" to="/">
          <div class="list-li">
            <div style="width: 30px;height: 30px;background-color: #ccc;">
              <img src="" alt="">
            </div>
            <span>邀请好友</span>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </router-link>
        </section>
        <section class="please-list" style="margin: 10px auto; width: 90%">
          <router-link tag="div" to="/">
            <div class="list-li">
              <div style="width: 30px;height: 30px;background-color: #ccc;">
                <img src="" alt="">
              </div>
              <span>通知</span>
              <mu-icon value=":iconfont iconyou1"></mu-icon>
            </div>
          </router-link>
          <router-link tag="div" to="/setup">
            <div class="list-li">
              <div style="width: 30px;height: 30px;background-color: #ccc;">
                <img src="" alt="">
              </div>
              <span>设置</span>
              <mu-icon value=":iconfont iconyou1"></mu-icon>
            </div>
          </router-link>
        </section>
    </main>
</div>
</template>
<script>
export default {
  name: 'mycenter',
  data() {
    return {
      name: 'Bryant.zZ',
      list: [
        "福利社",
        "我的卡包",
        "我的计划",
        "我的申请",
        "我的蜂蜜",
        "互助记录",
        "邀请好友"
      ],
      listSet: [
        "通知",
        "设置"
      ]
    }
  },
  methods: {
    jump() {
       this.$router.push('/per')
    }
  }
}
</script>
<style scoped lang="scss">
header {
width: $gw;
.header-title {
  width: $gw;
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  background-color: #fff;
}
}
.headerNav{
  width: 90%;
  height: 100px;
  background: #fff;
  margin: 10px auto;
  display: flex;
  align-items: center;
  position: relative;
  .headerLogin{
    width: 50px;
    height: 50px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
    border: 2px solid yellow;
  }
  .state{
    display: inline-block;
    width: 40px;
    height: 15px;
    background-color: black;
    color: #fff;
    font-size: 12px;
  }
  .you{
    width: 30px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 0;
    color: blue;
    .iconyou1{
      font-size: 30px;
    }
  }
}
.apply {
  display: flex;
  align-items: center;
  width: 90%;
  height: 30px;
  background-color: rgb(243, 172, 172);
  border-radius: 20px;
  margin: auto;
  position: relative;
  span {
    font-size: 12px;
    color: red;
    margin-left: 15px;
  }
  .iconaixin{
    font-size: 40px;
    position: relative;
    top: -12px;
  }
  .apply-click{
    font-size: 12px;
    color: red;
    position: absolute;
    right: 25px;
  }
}
.list-li {
      width: 90%;
      height: 50px;
      display: flex;
      align-items: center;
      background-color: #fff;
      .iconyou1{
        position: absolute;
        right: 20px;
        font-size: 20px;
        color: yellow;
      }
    }
</style>

<template>
<div id="MyCenter">
    <header>
        <div class="header-title">我的蜂链</div>
    </header>
    <main>
      <div class="headerNav">
        <div class="headerLogin"><img src="../assets/切图PNG/个人资料头像.png" alt=""></div>
        <router-link tag="div" to="/perinfor">
        <section class="information">
          <span class="name">姓名：{{name}}</span><span class="state">已实名</span>
          <div class="number"><span>18800004239</span></div>
          <div class="integral">积分 {{5000}}</div>
          <div class="autograph">海内存知己，天涯若比邻</div>
        </section>
        </router-link>
         <mu-icon value=":iconfont iconyou1"></mu-icon>
      </div>
      <div class="apply">
        <mu-icon value=":iconfont iconaixin"></mu-icon>
        <span>申请成为爱心大使</span>
        <div class="apply-click">
          <span>立即申请</span>
          <mu-icon value=":iconfont iconyou"></mu-icon>
        </div>
      </div>
      <section class="please-list" style="margin: 10px auto; width: 90%">
        <router-link tag="div" to="/welfareagency">
          <div class="list-li">
            <div style="text-align: center;">
              <mu-icon value=":iconfont iconfulihui"></mu-icon>
            </div>
            <span>福利社</span>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </router-link>
          <router-link tag="div" to="/">
          <div class="list-li">
            <div style="text-align: center;">
              <mu-icon value=":iconfont iconqiabao"></mu-icon>
            </div>
            <span>我的卡包</span>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </router-link>
        <router-link tag="div" to="/myplan">
          <div class="list-li">
            <div style="text-align: center;">
              <mu-icon value=":iconfont iconjihua"></mu-icon>
            </div>
            <span>我的计划</span>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </router-link>
        <router-link tag="div" to="/">
          <div class="list-li">
            <div style="text-align: center;">
              <mu-icon value=":iconfont iconshenqing"></mu-icon>
            </div>
            <span>我的申请</span>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </router-link>
        <router-link tag="div" to="/">
          <div class="list-li">
            <div style="text-align: center;">
              <mu-icon value=":iconfont iconkehu"></mu-icon>
            </div>
            <span>我的蜂蜜</span>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </router-link>
        <router-link tag="div" to="/assis">
          <div class="list-li">
            <div style="text-align: center;">
              <mu-icon value=":iconfont iconjilu"></mu-icon>
            </div>
            <span>互助记录</span>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </router-link>
        <router-link tag="div" to="/">
          <div class="list-li">
            <div style="text-align: center;">
              <mu-icon value=":iconfont iconyaoqing"></mu-icon>
            </div>
            <span>邀请好友</span>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </router-link>
        </section>
        <section class="please-list" style="margin: 10px auto; width: 90%">
          <router-link tag="div" to="/">
            <div class="list-li">
              <div style="text-align: center;">
                <mu-icon value=":iconfont icontongzhi"></mu-icon>
              </div>
              <span>通知</span>
              <mu-icon value=":iconfont iconyou1"></mu-icon>
            </div>
          </router-link>
          <router-link tag="div" to="/setup">
            <div class="list-li">
              <div style="text-align: center;">
                <mu-icon value=":iconfont iconshezhi"></mu-icon>
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
  height: 41px;
  line-height: 41px;
  font-size: 16px;
  background-color: #fff;
}
}
.headerNav{
  width:328px;
  height:100px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  position: relative;
  .headerLogin{
    width:56px;
    height:56px;
    border-radius:50%;
    background:rgba(207,207,207,1);
    border:2px solid rgba(239, 162, 32, 1);
    margin-left: 11px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .information{
    margin-left: 13px;
    .name{
      width:108px;
      height:14px;
      font-size:13px;
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(51,51,51,1);
    }
    .number{
      width: 75px;
      height: 10px;
      font-size:10px;
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(112,112,112,1);
      font-size: 10px;
    }
    .integral{
      width:62px;
      height:12px;
      font-size:12px;
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(239,162,32,1);
      margin-top: 10px;
    }
    .autograph{
      width:130px;
      height:11px;
      font-size:11px;
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(112,112,112,1);
      margin-top: 5px;
    }
  }
  .state{
    display: inline-block;
    width:40px;
    height:15px;
    line-height: 15px;
    background:rgba(239,162,32,1);
    border:0px solid rgba(255,255,255,1);
    font-size:11px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    margin-left: 6px;
  }
    .iconyou1{
      width:6px;
      height:11px;
      position: absolute;
      right: 13px;
      color: #EF9B1E;
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
    display: inline-block;
    width:124px;
    height:12px;
    font-size:12px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(255,0,0,1);
    text-align: center;
    margin-left: 12px;
    line-height: 12px;
  }
  .iconaixin{
    font-size: 49px;
    position: relative;
    bottom: 15px;
  }
  .apply-click{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    span{
      width:50px;
      height:12px;
      font-size:12px;
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(255,0,0,1);
      line-height: 12px;
      margin-right: 5px;
    }
    .iconyou{
      font-size: 20px;
      color:rgba(255,0,0,1);
    }
  }
}
.please-list{
  width:328px;
  height:323px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius:5px;
}
.list-li {
      height: 50px;
      display: flex;
      align-items: center;
      background-color: #fff;
      .iconfont {
        color: #358EFD;
        font-size: 20px;
      }
      .iconyou1{
        position: absolute;
        right: 20px;
        font-size: 20px;
        color: yellow;
      }
    }
</style>

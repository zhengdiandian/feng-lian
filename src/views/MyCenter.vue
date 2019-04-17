<template>
<div id="MyCenter">
    <header>
        <div class="header-title">我的蜂链</div>
        <div class="personal" v-on:click="jump">
          <section class="personal-img"><img src="" alt=""></section>
          <section class="personal-name-number">
            <div class="name">Bryant.zZ</div>
            <span class="real-name"></span>
            <span class="number">188 9900 2266</span>
            <section class="integral">
              <div class="integral-number">积分 5000</div>
              <span>海内存知已，天涯若比邻</span>
            </section>
          </section>
          <div class="icon-you">
            <img style="width: 50px; " src="../assets/you.png" alt="">
          </div>
        </div>
        <div class="apply">
          <section class="apply-img"><img src="" alt=""></section>
          <section class="apply-text">
            <div style="font-weight: bolder">申请即可成为爱心大使</div>
            <div class="line"></div>
            <div style="font-weight: bolder; color: #cc9933">立即申请</div>
          </section>
        </div>
    </header>
    <div class="list" v-for="item in list" :key="item">
        <div class="list-img-single">
          <div class="list-img"><img src="" alt=""></div>
          <div class="list-single">{{item}}</div>
        </div>
    </div>
    <div style="margin: 5px 0 20px 0;">
      <div class="list" v-for="item in listSet" :key="item">
          <div class="list-img-single">
            <div class="list-img"><img src="" alt=""></div>
            <div class="list-single">{{item}}</div>
          </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'mycenter',
  data() {
    return {
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
#MyCenter {
  background: #f2f2f2;
}
header {
width: $gw;
height: 250px;
// background-color: #f2f2f2;
.header-title {
  width: $gw;
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: bolder;
}
.personal {
  display: flex;
  align-items: center;
  justify-content: center;
  width: $gw;
  height: 120px;
  .personal-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .personal-name-number {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    .name {
      font-weight: bolder;
      font-size: 16px;
    }
    .number {
      font-size: 10px;
      font-weight: bolder;
    }
    .integral {
      margin-top: 20px;
      .integral-number {
        font-weight: bolder;
        font-size: 16px;
      }
      span {
        color: #99a4af;
        font-size: 12px;
      }
    }
  }
}
.apply {
  width: $gw;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  .apply-img {
    width: 60px;
    height: 60px;
    background-color: white;
    border-radius: 50%;
  }
  .apply-text{
    width: 70%;
    height: 40px;
    background-color: white;
    margin-left: -8px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .line {
    height: 40px;
    width: 1px;
    background-color: black;
    margin: 0 15px 0 15px;
  }
}
}
.list {
  background-color: white;
  .list-img-single{
    display: flex;
    align-items: center;
    width: 90%;
    height: 50px;
    margin: auto;
    border-bottom: 1px solid #e6e6e6;
  }
  .list-single{
    margin-left: 10px;
  }
  .list-img{
    width: 30px;
    height: 30px;
    border: 1px solid #e6e6e6;
    border-radius: 50%;
  }
}
</style>

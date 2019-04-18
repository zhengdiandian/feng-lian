<template>
  <div class="wrap">

    <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0" >
      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)"></mu-icon>
      </mu-button>
      <div class="text-center">互助计划</div>
    </mu-appbar>
    <banner-img></banner-img>
    <mu-sub-header>终身重大疾病互助计划</mu-sub-header>
    <div class="chat-wrap">
      <div class="chat-content item-content">
        <div class="chat-title">已加入人数 (人)</div>
        <div class="chat-info">23124</div>
      </div>
      <div class="xian"></div>
      <div class="chat-content item-content">
        <div class="chat-title">已互助金额 (元)</div>
        <div class="chat-info">936000</div>
      </div>
      <div class="chat-content item-content">
        <div class="chat-title">互助事件</div>
        <div class="chat-info">492</div>
      </div>
    </div>
    <icon-bar left-text="预存48元加入" right-text="加入" >
      <span class="hot"></span>
    </icon-bar>
  </div>
</template>

<script>
  import BannerImg from '../components/BannerImg/BannerImg'
  import IconBar from '../components/IocnBar/IConBar'
  export default {
    name: 'hlepPlan',
    components: {
      BannerImg,
      IconBar
    }
  }
</script>

<style lang="scss" scoped>
  .hot{
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url('../assets/img/加入我们.svg') center  no-repeat ;
    background-size: 100%;

  }
  .banner{
    width: 100%;
    height: $banner-h;
    img{
      height: 100%;
      width: 100%;
    }
  }
  .chat-wrap{
    width: 100%;
    height: 30px;
    display: flex;

    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    justify-items: center;
    .item-content{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
    }
    .chat-content{
      width: 33.33%;
      margin-left: -1px;
    }

    .chat-title{
      width: 100%;
      text-align: center;
    }
    .xian{
      /*margin-top: 25%;*/
      /*flex: 1;*/
      width: 0px;
      box-sizing: border-box;
      height: auto;
      align-self: center;
      height: 100%;
      /*justify-items: center;*/
      border-left: 1px solid #666666;
    }
  }
</style>

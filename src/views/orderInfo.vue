<template>
  <div>
    <!-- <mu-appbar style="width: 100%;" color="primary" text-color="#666"  z-depth="0">
      <mu-button icon slot="left"  @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)" size="24"></mu-icon>
      </mu-button>
      订单确认
      <mu-button icon slot="right"  :ripple="false">

      </mu-button>
    </mu-appbar> -->
    <pageHeader :title="title"></pageHeader>
    <div class="title page-margin-top">
      <mu-sub-header>订单详情</mu-sub-header>
    </div>
    <div class="order">
      <div class="order-list">商品名称: <span class="margin-left">终身重大疾病互助计划</span></div>
      <div class="order-list">订单编号: <span class="margin-left">BC2019040913256432</span></div>
      <div class="order-list">商品价格: <span class="margin-left">48.00元</span></div>
      <mu-divider></mu-divider>
      <div class="order-list">支付金额: <span class="margin-left">48.00元</span></div>
      <div class="order-list">奖励金: <span style="margin-left: 22px;">0.00元</span></div>
    </div>
    <div class="title">
      <mu-sub-header>支付方式</mu-sub-header>
    </div>
    <div>
      <li><span class="iconfont iconweixin"></span>微信支付<mu-divider></mu-divider>
      </li>
      <li><span class="iconfont iconzhifubao" style="margin-left: 30px;"></span>支付宝支付<mu-divider></mu-divider>
      </li>
      <li><span class="iconfont iconweixin"></span>银联支付<mu-divider></mu-divider>
      </li>
    </div>
    <div class="big-btn" @click="$router.push('/planInitial')"> 去支付</div>
  </div>
</template>

<script>
import pageHeader from '../components/PageHeader/PageHeader'
  export default {
    name: 'orderInfo',
    components:{
      pageHeader
    },
    data() {
      return {
        title: '订单确认'
      }
    }
  }
</script>

<style lang="scss" scoped>
.order {
  font-size:12px;
  font-family:SourceHanSansCN-Normal;
  font-weight:400;
  color:rgba(51,51,51,1);
  background: #fff;
  .order-list{
    height: 50px;
    line-height: 50px;
    margin-left: 12px;
  }
}
    .title{
      background-color: $c-hui;
    }
  li{
    list-style: none;
    height: 50px;
    line-height: 50px;
    background: #fff;
    .iconfont{
      vertical-align: middle;
      margin-left: 25px;
      margin-right: 18px;
    }
    span{
      display: inline-block;

      font-size: 24px;
      vertical-align: middle;
    }
  }
  .big-btn{
    width: 100%;
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: $c-cheng;
    color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .iconweixin{
    color: rgb(53,178,25);
  }
  .iconzhifubao{
    color: rgb(17, 159, 233);
  }

</style>

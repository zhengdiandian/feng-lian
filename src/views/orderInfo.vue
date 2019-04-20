<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary" text-color="#666"  z-depth="0">
      <mu-button icon slot="left"  @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)" size="24"></mu-icon>
      </mu-button>
      订单确认
      <mu-button icon slot="right"  :ripple="false">

      </mu-button>
    </mu-appbar>
    <div class="title">
      <mu-sub-header>订单详情</mu-sub-header>
    </div>
    <ul class="order">
      <li>商品名称: </li>
      <li>商品名称: </li>
      <li>商品名称: </li>
      <mu-divider></mu-divider>
      <li>商品名称: </li>
      <li>商品名称: </li>
    </ul>
    <div class="title">
      <mu-sub-header>支付方式</mu-sub-header>
    </div>
    <ul>
      <li><span class="iconfont iconweixin"  ></span>微信支付      <mu-divider></mu-divider>
      </li>
      <li><span class="iconfont iconzhifubao"></span>支付宝支付      <mu-divider></mu-divider>
      </li>
      <li><span class="iconfont iconweixin"></span>银联支付      <mu-divider></mu-divider>
      </li>
    </ul>
    <div class="big-btn">去支付</div>
  </div>
</template>

<script>
  export default {
    name: 'orderInfo'
  }
</script>

<style lang="scss" scoped>
    .title{
      background-color: $c-hui;
    }
  ul{
    list-style: none;
    .iconfont{
      vertical-align: middle;
    }
    span{
      display: inline-block;

      font-size: 24px;
      vertical-align: middle;
    }
  }
  .big-btn{
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    background-color: $c-cheng;
    color: #fff;
  }
  .iconweixin{
    color: rgb(53,178,25);
  }
  .iconzhifubao{
    color: rgb(17, 159, 233);
  }

</style>

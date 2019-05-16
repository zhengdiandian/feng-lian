<template>
  <div>
    <!-- <mu-appbar style="width: 100%;" color="primary" text-color="#666"  z-depth="0">
      <mu-button icon slot="left"  @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)" size="24"></mu-icon>
      </mu-button>
      订单确认
      <mu-button icon slot="right"  :ripple="false">

      </mu-button>
    </mu-appbar>-->

    <div class="title page-margin-top">
      <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
        <mu-button icon slot="left" @click="$router.go(-1)">
          <mu-icon value=":iconfont iconfanhui"></mu-icon>
        </mu-button>订单详情
        <mu-button icon slot="right" :ripple="false"></mu-button>
      </mu-appbar>
    </div>
    <div class="order">
      <div class="order-list">
        商品名称:
        <span class="margin-left">{{
          decodeURI(decodeURI(order.goodsName))}}</span>
      </div>
      <div class="order-list">
        订单编号:
        <span class="margin-left">{{order.orderNo}}</span>
      </div>
      <div class="order-list">
        商品价格:
        <span class="margin-left">{{order.unitPrice}}元</span>
      </div>
      <mu-divider></mu-divider>
      <div class="order-list">
        支付金额:
        <span class="margin-left">{{order.payAmount}}元</span>
      </div>
      <div class="order-list">
        奖励金:
        <span style="margin-left: 22px;">{{order.bounty}}元</span>
      </div>
    </div>
    <div class="title">
      <mu-sub-header>支付方式</mu-sub-header>
    </div>
    <ul>
      <li>
        <span class="iconfont iconweixin"></span>微信支付
        <mu-divider></mu-divider>
      </li>
      <!--<li><span class="iconfont iconzhifubao" style="margin-left: 30px;"></span>支付宝支付<mu-divider></mu-divider>-->
      <!--</li>-->
      <!--<li><span class=" iconfont"> <span class="icon"></span></span>银联支付<mu-divider></mu-divider>-->
      <!--</li>-->
    </ul>
    <!--<ul v-for="icon in pay" :key="icon.id">-->
    <!--<li>-->
    <!--<img class="margin-left margin-top margin-right" style="width: 20px; height: 20px;" :src="icon.icon" alt=""> 微信支付 <mu-divider></mu-divider>-->
    <!--</li>-->
    <!--<li>-->
    <!--<img class="margin-left margin-top margin-right" style="width: 20px; height: 20px;" :src="icon.icon" alt=""> 支付宝支付 <mu-divider></mu-divider>-->
    <!--</li>-->
    <!--<li>-->
    <!--<img class="margin-left margin-top margin-right" style="width: 20px; height: 20px;" :src="icon.icon" alt=""> 银联支付 <mu-divider></mu-divider>-->
    <!--</li>-->
    <!--</ul>-->
    <div class="big-btn" @click="topay">去支付</div>
  </div>
</template>

<script>
// import pageHeader from '../components/PageHeader/PageHeader'
export default {
  name: "orderInfo",
  components: {},
  data() {
    return {
      title: "订单确认",
      order: [],
      payment: [],
      planId: "",
      productId: "",
      pay: []
    };
  },
  methods: {
    topay() {
      // this.$axios.post('/v1/mutually/plan/addPayOrder',{
      //   "orderNo":this.order.orderNo,
      //   "channelId": 123465 //支付渠道ID
      // }).then(res=>{
      //   console.log(res)
      //   this.planId = res.data.data.planId
      //   this.productId = res.data.data.productId
      //   console.log(this.planId)
      debugger;
      this.$axios
        .get(
          `v1/mutually/payOrder/wxPay?openId=${this.$route.query.openId}&orderNo=${
            this.$route.query.orderNo
          }`
        )
        .then(res => {
          debugger
          if(res.data.code!==200){
            this.$toast.error(res.data.msg)
            return
          }
          if (res.data.data.type === 1) {
            debugger;
            window.location = res.data.data.payUrl;
          }
          if (res.data.data.type === 2) {
            let {
              appId,
              timeStamp,
              nonceStr,
              signType,
              paySign
            } = res.data.data.payInfo;
            let slef = this
            let onBridgeReady = function() {
              console.log(WeixinJSBridge)
              // slef.$toast.error(WeixinJSBridge)
              WeixinJSBridge.invoke(
                "getBrandWCPayRequest",
                {
                  "timeStamp": timeStamp,
                  "package": res.data.data.payInfo.package,
                  "paySign": paySign,
                  "appId": appId,
                  "signType": signType,
                  "nonceStr": nonceStr
                },
                (res) => {
                  console.log('huidiao',res)
                  debugger
                  slef.$toast.error(JSON.stringify(res))
                  slef.$toast.error('进入回调')

                  if (res.err_msg == "get_brand_wcpay_request:ok") {
                      slef.$router.push({name: 'planInitial',query:{
                          planNo: slef.$route.query.planNo

                        }})
                    this.$toast.error('get_brand_wcpay_request:ok')

                    // 使用以上方式判断前端返回,微信团队郑重提示：
                    //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
                  }
                }
              );
            };
            if (typeof WeixinJSBridge == "undefined") {
              // this.$toast.error('no')

              if (document.addEventListener) {
                document.addEventListener(
                  "WeixinJSBridgeReady",
                  onBridgeReady,
                  false
                );
              } else if (document.attachEvent) {
                document.attachEvent("WeixinJSBridgeReady", onBridgeReady);
                document.attachEvent("onWeixinJSBridgeReady", onBridgeReady);
              }
            } else {
              // this.$toast.error('ok11111')
              onBridgeReady();
              // this.$toast.error('ok22222')
            }
          }

          // res.redi
          console.log("zhifu", res.data.data);
        });
      // }
      // this.$router.push({
      //   name: 'planInitial',
      //   params:{
      //     // productCode: this.$route.params.productCode
      //     planNo: this.planId
      //   }
      // })
      // })
    }
  },
  mounted() {
    // this.$axios.post('/v1/mutually/plan/checkOrder',{
    //   "contacs": "",  // 姓名
    //   "contacsIdNo": "", // 身份证
    //   "inviteCode": "", // 邀请码
    //   "orderAmount": 123, // 金额
    //   "productId": 456, // 产品ID
    //   "relationShip": 0, // 0=自己 1=父母
    //   "type": 1, //0 = 年费 1= 互助金
    // }).then((res)=>{
    //   this.order = res.data.data
    // })
    // this.$axios.post('/v1/pay/channel/channelList').then(res=>{
    //   this.payment = res.data.data[0]
    //   // console.log(this.payment)
    // })
    this.order = this.$route.query;
    // this.$axios.post('v1/pay/channel/channelList').then(res=>{
    //   debugger
    //   console.log('play',res)
    //   this.pay = res.data.data
    // })
  }
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0px;
  padding: 0px;
}
.order {
  font-size: 12px;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  background: #fff;
  .order-list {
    height: 50px;
    line-height: 50px;
    margin-left: 12px;
  }
}
.title {
  background-color: $c-hui;
}
li {
  list-style: none;
  height: 50px;
  line-height: 50px;
  background: #fff;
  span {
    display: inline-block;
    width: 50px;
  }
  .iconfont {
    vertical-align: middle;
    margin-left: 25px;
    margin-right: 18px;
  }
  .icon {
    /*width: 50px;*/
    display: inline-block;
    width: 37px;
    height: 25px;
    background: url("../assets/img/银联.svg") center no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
  span {
    display: inline-block;

    font-size: 24px;
    vertical-align: middle;
  }
}
.big-btn {
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
.iconweixin {
  color: rgb(53, 178, 25);
}
.iconzhifubao {
  color: rgb(17, 159, 233);
}
</style>

<template>
  <div>
    <!-- <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)"></mu-icon>
      </mu-button>
      <div class="text-center">加入计划</div>
    </mu-appbar> -->
    <header>
      <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
        <mu-button icon slot="left" @click="$router.go(-1)">
          <mu-icon value=":iconfont iconfanhui"></mu-icon>
        </mu-button>
        加入计划
        <mu-button icon slot="right" :ripple="false">
        </mu-button>
      </mu-appbar>
    </header>
    <!--<pop-box v-if="showPoP">-->
      <!--<div class="pop">-->
        <!--<div>-->
          <!--<div>-->
            <!--<div class="heart">-->
              <!--您还没有完成实名认证,现在去认证吗？-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div style="position: absolute;width: 100%;bottom: 0;">-->
          <!--<button @click="showpop=false">不，谢谢</button>-->
          <!--<button class="btn-join" @click="$router.push('/login')">现在认证</button>-->
        <!--</div>-->
      <!--</div>-->
    <!--</pop-box>-->
    <main>
      <div class=" mu-header">终身重大疾病互助计划</div>
      <div class="plan-info wrap">
        <li>
          <span>互助内容：{{MutualRule.content}}</span>
        </li>
        <li>
          <span>加入年龄：{{MutualRule.crowdRange}}</span>
        </li>
        <li>
          <span>最高互助金：{{MutualRule.highestHelped}}</span>
        </li>
        <li>
          <span>加入人数：{{MutualRule.joinCount}}</span>
        </li>
        <li>
          <span>已捐助：{{MutualRule.supportCount}}人</span>
        </li>
        <li>
          <span>已捐助金额：{{MutualRule.supportAmount}}</span>
        </li>

      </div>
      <!-- <mu-divider style="height:5px"></mu-divider> -->
      <div class="info-form margin-left">
        <span>资料填写</span>
        <div class="input-wrap">
          <label for>姓 &nbsp; 名：</label>
          <input :disabled="!showPoP" type="text" placeholder="请输入您的姓名" :value="contacs ">
        </div>
        <div class="input-wrap">
          <label for>身份证：</label>
          <input :disabled="!showPoP" type="text" :value="contacsIdNo" placeholder="请输入您的身份证号" >
        </div>
        <div class="warning">
          <!-- <mu-icon v-show="!ShowID" value=":iconfont icontanhao" size="24"></mu-icon>  <span v-show="!ShowID" style="color: #FF0C0C">身份证信息不可修改, 请正确填写</span> -->
        </div>
      </div>
      <!-- <mu-divider style="height:5px;"></mu-divider> -->
      <div class="yaoQing margin-top wrap">
        <div class="input-wrap">
          <label for>邀请码</label>
          <input  style="vertical-align: middle" type="text" @keyup="agentUserCode=agentUserCode.replace(/[\W]/g,'')"  :disabled="flag" placeholder="请联系客服获得邀请码" v-model="agentUserCode" >
          <span class="" @click="obtain">
            <a :href="'tel:'+CustomerService" class="btn">
            <span>获取邀请码</span>
          </a></span>
        </div>
        <div class="warning">
          <mu-icon  value=":iconfont icontanhao" size="24"></mu-icon> <span>邀请码信息不可修改, 请正确填写</span>
        </div>
      </div>
    <!-- <mu-divider style="height:5px;"></mu-divider> -->
    <div class="select-wrap">
       <div class="font margin-bottom margin-top">选择关系</div>
      <div class="select-items">
        <div class="item" v-for="(item, i) in familyList"  :key="i" :class="{'active': activeIndex == i}" @click="activeIndex=i">{{item.contacs}}</div>
          <div v-if="addFlag" class="item active"  @click="toAddFamily" >添加家人</div>

      </div>

<!--      <div class="font margin-top">预计使用10个月</div>-->
      <!--<mu-slider class="demo-slider" v-model="normal.value1"></mu-slider>-->
      <!--<mu-slider class="demo-slider" :display-value="false" :step="10" v-model="sliderVal"></mu-slider>-->
      <!--<mu-slider class="demo-slider" disabled v-model="normal.value3"></mu-slider>-->
      <div class="stepper-wrap">
        <mu-stepper :linear="false" :active-step="activeStep"  class="mu-stepper">
          <mu-step v-for="i in 5" :key="i" @click="activeStep=i-1" >
            <mu-step-label >
            </mu-step-label>
          </mu-step>

        </mu-stepper>
        <ul class="stepper-step">
          <li v-for="sum in sums" :key="sum">{{sum}}元</li>
        </ul>
      </div>
<!--      <div class="buy-info margin-top" style="position: relative;">-->
<!--        使用时间: <span class="margin-left font-min">{{serviceTime}}个月</span>-->
<!--        &lt;!&ndash; <div class="estimate"><span style="font-size: 14px;">预计到期时间2020年2月9日</span></div> &ndash;&gt;-->
<!--        <mu-divider></mu-divider>-->
<!--      </div>-->
      <div class="buy-info  margin-top">
        服务费: <span class="margin-left font-min"> &nbsp;&nbsp;{{MutualRule.annualPrice}}</span>
        <mu-divider></mu-divider>
      </div>
      <div class="buy-info">
        合计: <span class="margin-left font-min">&nbsp;&nbsp;&nbsp;&nbsp;{{amount}}元</span>
        <mu-divider></mu-divider>
      </div>
      <div class="tongYi">
        <label class="iconfont iconxuanze" :style="tongYiStyle" for="tongYi"></label><input v-model="tongYi"  id="tongYi" type="checkbox"> 我已阅读并同意  <span @click="$router.push('/AssistanceConvention')"> 《 蜂链互助计划公约》 </span>
      </div>
    </div>
      <div class="big-btn" v-promise-btn :class="{'disable-btn': !tongYi}" @click="btnHandleClick" style="z-index: 888888">去支付</div>
    </main>
  </div>
</template>

<script>
// import headpage from '../components/PageHeader/PageHeader'
import { debug } from 'util';
import { mapState } from 'vuex'
// import  popBox from '../components/PopBox/PopBox'
export default {
  name: "joinPlan",
  data() {
    return {
      // showPoP: true,
      name:'',
      ID:'',
      contacsIdNo: '',
      contacs: '',
      InvitationCode:'',
      sliderVal: '',
      tongYi: false,
      activeStep: 0,
      ShowID: false,
      CustomerService: '',
      btnList: [
        '自己', '父母', '配偶', '子女'
      ],
      // MutualRule: this.$route.params.MutualRule,
      sums:[
        10,
        20,
        50,
        100,
        200
      ],
      activeIndex: 0,
      order: [],
      agentUserCode: '',
      familyList: [],
      flag: false,
      addFlag: 0
    }
  },
  computed: Object.assign({
    showPoP() {
      return this.userInfo.state === 100
    },
    tongYiStyle () {
      return this.tongYi ? {color: '#f8b62d'}: {}
    },
    serviceTime() {
      return this.sums[this.activeStep] / this.MutualRule.suit
    },
    amount() {
      return this.serviceTime * this.MutualRule.suit + this.MutualRule.annualPrice
    }
  }, mapState(['userInfo', 'MutualRule'])
  ),
  methods: {
    toAddFamily(){
      debugger
      if(this.familyList[0].joinFlag){
        this.$router.push('/selectAddFamily')
      }else {
        this.$toast.error('您还没加入计划')
      }
    },
    obtain(){

    },
      btnHandleClick (i) {
        // var cPReg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
        // if (!cPReg.test(this.ID)) {
        //   this.ShowID = true
        //   return
        // }
        if(!this.tongYi){
          this.$toast.error('必须阅读并同意才可执行')
          return
        }
        debugger
        return this.$axios.post('v1/mutually/plan/checkOrder',{
              "contacs": this.userInfo.contacs,
              "contacsIdNo": this.userInfo.contacsIdNo ,
              "inviteCode": this.agentUserCode,
              "orderAmount": this.amount, // 金额
              "productCode": this.MutualRule.productCode,
              "relationShip": this.familyList[this.activeIndex].relation,
              "stageCount": this.serviceTime,
              "relationCode": this.familyList[this.activeIndex].userCode, // 自己， 父母 ，子女 ，配偶
              "type": 2
            }).then((res)=> {
              debugger
                if(res.data.code!==200){
                  this.$toast.error(res.data.msg)
                  return
                }
              if(res.data.code===200){
                debugger
                this.order = res.data.data
                debugger
                window.location = `${this.$axios.defaults.baseURL}/v1/mutually/payOrder/orderCheck?orderNo=${this.order.orderNo}&goodsName=${this.order.goodsName}&unitPrice=${this.order.unitPrice}&payAmount=${this.order.payAmount}&bounty=${this.order.bounty}&productCode=${this.$route.params.productCode}`
                console.log(res)
                // this.$axios.post('v1/mutually/payOrder/orderCheck',{
                //   orderNo: this.$route.params.productCode,
                //   goodsName: this.order.goodsName,
                //   unitPrice: this.order.unitPrice,
                //   payAmount: this.order.payAmount,
                //   bounty: this.order.bounty

                // })
                // localStorage.setItem('order',this.order)
                // this.$router.push({
                //   name: 'orderInfo',
                //   params: {
                //     productCode: this.$route.params.productCode,
                //     order: res.data.data,
                //     // stageCount: this.serviceTime
                //   }
                // })
              }

            })
      },
  },
  watch: {
    activeIndex() {
      debugger
      this.contacsIdNo = this.familyList[this.activeIndex].contacsIdNo
      this.contacs  =  this.familyList[this.activeIndex].contacs
      this.agentUserCode =  this.familyList[this.activeIndex].referCode
      if(!this.agentUserCode){
        this.flag = false
      }else {
        this.flag = true
      }


        }

  },
  components: {
    // headpage,
    // popBox
  },
  created() {
    this.$axios.post('v1/user/info/personalInfo').then(res => {
      this.$store.commit('set_userInfo',res.data.data)
    })
    // this.$axios.post('v1/user/info/getCertifyInfo').then(res => {
    //   debugger
    //   if(res.data.data.code){
    //     this.$toast(res.data.data.msg)
    //   }
    //   this.agentUserCode = res.data.data.userCode
    //   if(this.agentUserCode !== ''){
    //
    //     this.flag = true
    //   }
    //
    // })
    this.$axios.post('v1/family/info/familyList').then(res => {
      if(res.data.code !== 200){
        this.$toast(res.data.data.msg)
      }
      this.familyList = res.data.data
      this.contacsIdNo = this.familyList[this.activeIndex].contacsIdNo
      this.contacs  =  this.familyList[this.activeIndex].contacs
      this.agentUserCode =  this.familyList[this.activeIndex].referCode
      this.flag = this.agentUserCode ? true : false
      this.addFlag = this.familyList[0].addFlag

      // this.familyList.unshift({
      //   relation: 0,
      //   relationDesc: '自己',
      //   userCode: this.userInfo.userCode

      // })
      console.log('family',res)
    }).catch(e => {
      // this.familyList.unshift({
      //   relation: 0,
      //   relationDesc: '自己',
      //   userCode: this.userInfo.userCode

      // })
    })
  },
  mounted() {
    this.$axios.post('v1/manage/config/getTextList',{
            "keys": 'CustomerService'
        }).then(res=>{
            if(res.data.code !==200){
                    this.$toast.error(res.data.msg)
                    return
            }
            this.CustomerService = res.data.data.CustomerService
        })
    // this.$axios.post('/v1/user/info/getCertifyInfo').then(res=>{
    //   if(res.data.code == 900) {
    //     alert('还没实名认证')
    //     this.$router.push('/real')
    //   }
    // })
    // this.$axios.post('/v1/mutually/plan/checkOrder',{
    //           "contacs":"黄溢东",
    //           "contacsIdNo":"124124243",
    //           "inviteCode":"136750423931",
    //           "orderAmount": "1",
    //           // "orderAmount": this.sums[this.activeStep], // 金额
    //           // "productCode": this.$route.params.productCode,
    //           "productCode": "test1234567890",
    //           "relationShip": "0",
    //           "stageCount": "1",
    //           // "relationShip": this.activeIndex, // 自己， 父母 ，子女 ，配偶
    //           "type": 2
    //         }).then((res)=> {
    //           this.order = res.data.data
    //           console.log(this.order)
    //           // localStorage.setItem('order',this.order)
    //           // this.$router.push({
    //           //   name: 'orderInfo',
    //           //   params: {
    //           //     order: this.order
    //           //   }
    //           // })
    //         })
  }
};
</script>

<style scoped lang='scss'>
 /* .pop{
    width: 300px;
    height: 200px;
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
  }*/
main{
  padding-bottom: 70px;
}
.mu-header{
  padding: 56px 0 12px 12px;
  font-size:$f15;
  font-weight:bold;
  color:rgba(51,51,51,1);
}
  .stepper-step{
    margin: -45px -10px 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    li{
    padding: 0;
      margin-left: -10px;
      color: $c-black;
    }
  }
.wrap {
  padding: 0 20px;
}
.estimate{
  float: right;
  margin-right: 10px;
  margin-top: 5px;
  width: 85px;
  // background-color: red;
  font-size: $f14;
  text-align: center;
  line-height: 15px;
}
.plan-info  {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #fff;
  li {
    /*width: 150px;*/
    width: 100%;
    text-align: left;
    color: $c-cheng;
    height: 20px;
    margin: 8px auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span {
      /*width: 100%;*/
      color: #000;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: $f14;
    }
  }
}
.input-wrap {
  height: 50px;
  background: #fff;
  line-height: 50px;
  input {
    border: none;
    padding-left: 20px;
    line-height: 1;
    outline: none;
    font-size: $f14;
    background-color: #fff;

  }
}
.warning {
  .iconfont {
    vertical-align: middle;
  }
  color: $c-warning;
}
.yaoQing {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
  .input-wrap {
    display: flex;
    box-sizing: border-box;
    padding: 0px 6px;
    justify-content: center;
    width:351px;
    height:33px;
    border:1px solid rgba(239,162,32,1);
    border-radius:17px;
    line-height: 33px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  input {

    // width: 150px;
    // box-sizing: border-box;
    // padding-left: 10px;
    // border: none;
    // width: 50%;
    // outline: none;
  }
  .warning {
    padding-top: 5px;
  }
}

.info-form{
  span{
    font-size:$f15;
    font-weight:bold;
    color:rgba(51,51,51,1);
    display: inline-block;
    padding: 12px 0 0 12px;
  }
}

.select-wrap{
  width: 351px;
  /*height: 300px;*/
  margin: auto;
  /*padding-bottom: 50px;*/
  .select-items{
    display: flex;
      flex-wrap: wrap;
    justify-content: start;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: content-box;
      width: 18%;
      padding: 6px;
      background-color: $c-hui;
        margin-right: 10px;
        margin-bottom: 10px;
      border-radius: 5px;
      color: #fff;
    }
    .item.active{
      background-color: $c-cheng;

    }
  }
  .buy-info{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #fff;
  }

  .mu-stepper{
    position:relative;
    top: -20px;
  }
  .tongYi{
    margin-top: 10px;
    .iconfont{
      vertical-align: middle;
    }
    input[type=checkbox]{
      visibility: hidden;
      /*margin-bottom: 20px;*/
    }
    span{
      color: cornflowerblue;
    }
  }
}
  .big-btn{
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: $c-cheng;
    color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    &.disable-btn{
      background-color: #999999;
      /*color: $c-cheng;*/
    }
  }
  .stepper{
    width: 100%;
  }
</style>

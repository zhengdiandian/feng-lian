<template>
  <div class="g-bg">
    <PopBox v-if="showPoP">
    <!-- <div class="pop-content"> -->
      <div class="pop-btn">
        <!-- <button @click="showPoP = false">帮助中心</button> -->
        <!-- <mu-divider></mu-divider> -->
        <button  style="color: rgba(234,234,234,1)" @click="refund">申请退款</button>
<!--        <mu-button icon slot="right" :ripple="false">-->
<!--        </mu-button>-->

      </div>
    <!-- </div> -->
      <div>
    </div>
  </PopBox>
  <PopBox v-if="showpop">
    <div class="pop">
      <div>
        <div>
          <div class="heart">
            退款后即失去互助资格
            <div>请您确认是否退款</div>
          </div>
        </div>
      </div>
      <div style="position: absolute;width: 100%;bottom: 0;">
        <button @click="refundSuc" style="color: #d0d0d0"  v-promise-btn>退款</button>
        <button class="btn-join" @click="showpop = false">取消</button>
      </div>
    </div>
  </PopBox>
    <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
      <mu-button icon slot="left" @click="$router.push('/home')" >
        <mu-icon value=":iconfont iconfanhui" size="24" ></mu-icon>
      </mu-button>
      我的互助计划详情
      <mu-button v-if="flag" icon slot="right" :ripple="false" @click="showTui">
        <!-- <img src="../assets/省略号.png" alt=""> -->
        <i class="iconfont iconshubanshenglvehao"></i>
      </mu-button>
      <mu-button  v-else icon slot="right" :ripple="false" >
        <!--<mu-icon value=":iconfont iconshubanshenglvehao" size="24"></mu-icon>-->
      </mu-button>
    </mu-appbar>
    <div class=" xian page-margin-top">
      <div class="wrap">
        <div class="balance-card">
          <div class="title">
            账户余额（元）
          </div>
          <div class="balance">{{panned.balance}}</div>
          <div class="balance-warning">{{panned.accountStateDesc}}</div>
          <div class="btn-wrap" v-if="title">
            <div class="btn" @click="rechargeTo">计划充值</div>
            <div class="btn" @click="$router.push('/owe')">感恩有你</div>
          </div>
        </div>
      </div>
      <div class="title">
        电子凭证
      </div>

      <div class="text-info"><span>凭证编号：</span><span>{{panned.planNo}}</span></div>
      <div class="title">终身重大疾病互助计划 | 等待期剩余{{panned.leftWattingDays}}天</div>
      <div class="text-info"><span>互助计划:</span><span>{{panned.productName}}</span></div>
      <div class="text-info"><span>最高获取:</span><span>{{panned.highestHelped}}</span></div>
      <div class="text-info"><span>互助会员:</span><span>{{panned.contacs}}</span></div>
      <div class="text-info"><span>身份证号:</span><span>{{panned.contacsIdNo}}</span></div>
      <div class="text-info"><span>购买日:</span><span>{{panned.joinDate}}</span></div>
      <div class="text-info"><span>支付方式:</span><span>{{panned.payTypeDesc}}</span></div>
      <div class="text-info" style="display: flex"><span>上链信息</span><span style="flex: 2; overflow: hidden;text-overflow: ellipsis; white-space: nowrap">{{panned.eosLink}}</span> <span class="btn text-blue" :data-clipboard-text="panned.eosLink" @click="$toast.success('复制成功')">点击复制</span></div>
    </div>
    <div class="help-list">
      <mu-list  class="list" toggle-nested="">
        <mu-list-item button :ripple="false" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''"     v-for="(item,i) in issue" :key="i">
          <mu-list-item-title style="font-size: 15px;">{{i+1}}、{{item.title}} </mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down" ></mu-icon>
          </mu-list-item-action>
          <p slot="nested" v-html="item.content"></p>
          <!--<mu-list-item button :ripple="false" slot="nested">-->
          <!--<mu-list-item-title>{{item.content}}</mu-list-item-title>-->
          <!--</mu-list-item>-->
        </mu-list-item>
      </mu-list>
    </div>

    <div v-if="title" class="next-btn" @click="$router.push('/home')">再去看看</div>
    <div v-else class="next-btn" @click="rechargeTo">立即充值</div>
  </div>
</template>

<script>
  import PopBox from '../components/PopBox/PopBox'
  import Clipboard from 'clipboard';

  export default {
    name: 'PlanInitial',
    data() {
      return {
        panned: [],
        issue: [],
        showPoP: false,
        showpop: false,
        title: this.$route.query.title,
        productCode: this.$route.query.productCode,
        planNo: this.$route.query.planNo,
        position: 'bottom',               // 弹出的位置
        time: 2000,                       // 显示的时长
        closeIcon: 'close',               // 关闭的图标
        close: true,                      // 是否显示关闭按钮
        successIcon: 'check_circle',      // 成功信息图标
        infoIcon: 'info',                 // 信息信息图标
        warningIcon: 'priority_high',     // 提醒信息图标
        errorIcon: 'warning',              // 错误信息图标,
        flag: false
      }
    },
    components:{
      PopBox
    },
    mounted() {
      const btnCopy = new Clipboard('.btn');

     

    },
    created() {
       this.$axios.post('/v1/mutually/plan/planDetail',{
        "planNo": this.$route.query.planNo
      }).then((res)=> {
        if(res.data.code!==200){
          this.$toast.error(res.data.msg)
          return
        }
        debugger
        this.panned = res.data.data
        this.$axios.post('v1/product/product/issue',{
          productCode: res.data.data.productCode
        }).then(res => {
          if(res.data.code!==200){
            this.$toast.error(res.data.msg)
            return
          }
          this.issue = res.data.data
          this.$nextTick(() => {
           this.flag = res.data.data.refundFlag === 0 ? false : true
          })
        })
        
        console.log(this.panned)
      })
      // this.$axios.post('v1/user/info/index').then(res => {
      //   if(res.data.code !==200){
      //     this.$toast.error(res.data.msg)
      //     return
      //   }
      //   debugger
      //   this.flag = res.data.data.scoreType === 0 ? true : false
      // })
    },
    methods:{
      open(){

      },
      rechargeTo() {
        this.$router.push({
          name: 'recharge',
          query: {
            productCode: this.productCode,
            planNo: this.planNo,
            rechargeAnnualAmount: this.panned.rechargeAnnualAmount
          }
        })
      },
      showTui() {
        if(!this.showPoP&&this.showpop)return
        this.showPoP = !this.showPoP
      },
      refund() {
        debugger
        this.showPoP = false
        this.showpop = true
      },
      refundSuc() {
        this.showpop = false
        debugger
        // if(!this.panned.refundFlag){
        //   this.$toast.warning('需要购买人才可发起退款')
        //   return
        // }
        return this.$axios.post('v1/mutually/plan/refund',{
          planNo: this.$route.query.planNo
        }).then(res => {
          if(res.data.code!==200){
            this.$toast.error(res.data.msg)
            return
          }
          this.$toast.success('退款成功');
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .text-blue{
    color: $c-lang;
    padding-left: 6px;
  }
  .g-bg{
    background-color: $c-hui;
  }
  .pop-btn{
    position: absolute;
    top: 48px;
    right: 10px;
    display: flex;
    flex-direction: column;
    button{
      width: 200px;
      height: 45px;
      outline: none;
      border: none;
      background-color: rgba(234,234,234,0.87)
    }
  }

    .wrap{
      padding: 12px 12px 0px;
    }
  .xian{
    padding-bottom: 12px;
  }
  .balance-card{
    &>div{
      width: 100%;
      line-height: 12px;
    }
    width: 100%;
    height:177px;
    padding: 18px 17px 13px;
    background:rgba(255,255,255,1);
    border-radius:10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;

    .btn-wrap{
      display: flex;
      justify-content: space-between;
      .btn{
        width:150px;
        height:33px;
        line-height: 33px;
        color: $c-cheng;
        border:1px solid $c-cheng;
        border-radius:17px;
      }
    }
  .balance{
    line-height: 30px;
    font-size:30px;
    font-family:ArialMT;
    font-weight:400;
    &-warning{
     color: $c-cheng;
    }

  }
  }
    .text-info{
      padding: 0 12px;
      width:375px;
      height:33px;
      line-height: 33px;
      background:rgba(255,255,255,1);
      & span:first-child{
        min-width: 60px;
        display: inline-block;
        margin-right: 12px;
      }
    }
  .title{
    padding: 12px ;
    font-size:$f15;

    font-weight:bold;
    &+.text-info{
      width:375px;
      height:33px;
      background:rgba(255,255,255,1);
      &+.title{
        font-size: $f14;
        color: $c-cheng;
        text-align: right;
        &~.text-info{
          border: 0.5px solid $c-hui;

        }
      }
    }
  }
  .help-list{
    background-color: #fff;
    /*margin-top: 12px;*/
    padding: 0 12px;
    padding-bottom: 62px;

    & /deep/ .mu-list{
      padding-top: 0px;
    }
    & /deep/ .mu-item{
      border-bottom: .5px solid $c-hui;
      /*padding: 0px 13px;*/
      padding: 0px;
      .mu-item-action{
        color: $c-cheng;
      }
    }
  }
  .next-btn{
    position: fixed;
    left: 0px;
    bottom: 0px;
    margin-top: 14px;
    width:375px;
    height:50px;
    text-align: center;
    line-height: 50px;
    color: $c-bai;
    background:rgba(239,162,32,1);
    position: fixed;
    bottom: 0;
    z-index: 111;
  }
  .pop{
    width: 249px;
    height: 150px;
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
      // width: 140px;
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
  }
</style>

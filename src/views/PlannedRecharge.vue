<template>
  <div class="g-bg">
    <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
      <mu-button icon slot="left" @click="$router.go(-1)" >
        <mu-icon value=":iconfont iconfanhui" size="24" @click.stop="$router.go(-1)"></mu-icon>
      </mu-button>
      计划充值
      <mu-button icon slot="right" :ripple="false">
      </mu-button>
    </mu-appbar>
    <div class=" xian page-margin-top">
      <div class="wrap">
        <div class="balance-card">
          <div class="title">
            账户余额（元）
          </div>
          <div class="balance">{{panned.balance}}</div>
          <div class="balance-warning">余额充足</div>
          <div class="btn-wrap">
            <div class="btn">计划充值</div>
            <div class="btn" @click="$router.push('/owe')">感恩有你</div>
          </div>
        </div>
      </div>
      <div class="title">
        电子凭证
      </div>

      <div class="text-info"><span>凭证编号：</span><span>{{panned.planNo}}</span></div>
      <div class="title">终身重大疾病互助计划 | 等待期剩余{{panned.leftWattingDays}}天</div>
      <div class="text-info"><span>凭证编号:</span><span>{{panned.planNo}}</span></div>
      <div class="text-info"><span>最高获取:</span><span>{{panned.highestHelped}}</span></div>
      <div class="text-info"><span>互助会员:</span><span>FL20190115490963220251</span></div>
      <div class="text-info"><span>身份证号:</span><span>{{panned.contacsIdNo}}</span></div>
      <div class="text-info"><span>购买日:</span><span>{{panned.joinDate}}</span></div>
      <div class="text-info"><span>支付方式:</span><span>{{panned.payType}}</span></div>
    </div>
    <div class="help-list">
      <mu-list  class="list" toggle-nested="">
        <mu-list-item button :ripple="false" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''"     v-for="i in 7" :key="i">
          <mu-list-item-title>申请互助</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down" ></mu-icon>
          </mu-list-item-action>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 1</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 2</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 3</mu-list-item-title>
          </mu-list-item>
        </mu-list-item>
      </mu-list>
    </div>
    <router-link tag="div" to="/recharge">
    <div class="next-btn">立即充值</div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'PlanInitial',
    data() {
      return {
        panned: []
      }
    },
    mounted() {
      this.$axios.post('/v1/support/plan/planDetail').then((res)=> {
        this.panned = res.data.data
      })
    },
    methods:{
      open(){

      }
    }
  }
</script>

<style lang="scss" scoped>
  .g-bg{
    background-color: $c-hui;

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
      justify-content: space-evenly;
      .btn{
        width:150px;
        height:33px;
        line-height: 33px;
        color: $c-lang;
        border:1px solid $c-lang;
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
    font-size:14px;
    font-family:SourceHanSansCN-Normal;
    font-weight:bold;
    &+.text-info{
      width:375px;
      height:33px;
      background:rgba(255,255,255,1);
      &+.title{
        font-size: 12px;
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
    margin-top: 14px;
    width:375px;
    height:50px;
    text-align: center;
    line-height: 50px;
    color: $c-bai;
    background:rgba(239,162,32,1);
  }
</style>

<template>
    <div class="card">
      <div class="top-content">
       <div class="touXiang">
         <img :src="img" alt="">
       </div>
        <div class="right-wrap" >
          <div class="name" >姓名：{{name}} <span>{{state}}</span></div>
          <slot name="data"></slot>
          <div class="date content-center"> <span>{{purchase}}</span>{{date}}</div>
          <slot name="FilingDate"></slot>
          <slot name="AuditPass"></slot>
        </div>
      </div>
      <slot name="lable"></slot>
      <div class="bottom-content">
        <div class="one">
          <div style="height:20px;">产品名称:</div>
          <div style="height:20px;">{{waitingperiod}}</div>
          <div style="height:20px;">{{amount}}:</div>
        </div>
        <div class="tow">
          <div style="height:20px;">{{productName}}</div>
          <div style="height:20px;">{{waiting}}</div>
          <div style="height:20px;">{{amountMoney}}元</div>
        </div>
        <div class="btn-wrap">
          <div class="btn content-center" @click="open">查看计划</div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Card',
    data() {
      return {
      }
    },
    props: {
      title: {
        type: String,
        default: '峰链互助公式'
      },
      img:{
        default: require('@/assets/PNG/头像.png')
      },
      name:{
        type: String,
        default: 'Bywz.zZ'
      },
      state:{
        type: String,
        default: '已实名'
      },
      productName:{
        type: String,
        default: '终身重大疾病互助计划'
      },
      amount:{
        type: String,
        default: '余额'
      },
      amountMoney:{
        type: Number,
        default: 10
      },
      waiting:{
        
      },
      purchase: {
        type: String,
        default: '购买日'
      },
      date:{
        type: String,
        default: ''
      },
      waitingperiod:{
        type: String,
        // default: '等待期：'
      },
      // supporlist: {
      //   type: Array,
      //   default: {}
      // },
      open: {
        type: Function,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    // justify-items: flex-start;
    // justify-content: flex-start;
    // flex-wrap: wrap;
    /*box-sizing: border-box;*/
    width: 351px;
    /*height: 140px;*/
    background: url("../../assets/PNG/8-1我的互助计划_03.png") center no-repeat;
    border-radius: 5px;
    background-size: 100%;
    padding: 12px;
    // margin-bottom: 10px;
    color:rgba(255,255,255,1);
    position: relative;
    margin: 0;
    .top-content{
      display: flex;
      // justify-items: flex-start;
      // justify-content: flex-start;
      // flex-wrap: nowrap;
      // padding-top: 12px;
      position: absolute;
      top: 20px;

    }
    .bottom-content{
      width: 100%;
      // padding-top: 16px;
      display: flex;
      // justify-items: flex-start;
      // justify-content: flex-start;
      // flex-wrap: nowrap;
      /*padding-left: 12px;*/
      position: absolute;
      top: 90px;
      
      font-size:11px;
      font-family:SourceHanSansCN-Normal;
      font-weight:400;
      .tow{
        padding-left: 13px;
        /*&>div{*/
          /*padding-bottom: 10px;*/
        /*}*/
      }
      .one ,.tow{
        &>div{
          line-height: 1.75;
        }
      }
      .btn-wrap{
        flex: 2;
        /*width: 100%;*/
        display: flex;
        // justify-content: flex-end;
        position: absolute;
        right: 20px;
      }
      .btn{
        padding: 0px;
        // justify-self: flex-end;
        // justify-self: self-end;
        // align-self: flex-end;
        margin-top: 24px;
        width:80px;
        height:33px;
        /*margin-left: 74px;*/
        background:rgba(255,255,255,1);
        border-radius:9px;
        color: $c-cheng;
      }
    }

    .touXiang img{
      width:44px;
      height:44px;
      border-radius:50%;
    }
    .right-wrap{
      padding-left: 12px;
      .name{
        font-size:13px;
        font-family:SourceHanSansCN-Normal;
        font-weight:bold;
        color:rgba(255,255,255,1);
        padding-bottom: 7px;
        span{
          margin-left: 6px;
          font-size:12px;
          font-family:SourceHanSansCN-Normal;
          font-weight:400;
          border:1px solid rgba(255,255,255,1);
          color:rgba(255,255,255,1);
        }
      }
      
    }
  }
  .date{
        // width:150px;
        width:fit-content;
        // width:-webkit-fit-content;
        // width:-moz-fit-content;
        // max-width: 300px;
        min-width: 150px;
        word-wrap: break-word;
        height:22px;
        background:rgba(246,176,59,1);
        border-radius:11px;
        font-size:12px;
        font-family:SourceHanSansCN-Normal;
        font-weight:400;
      }
</style>

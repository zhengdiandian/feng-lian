<template>
    <div class="card">
      <div class="top-content">
       <div class="touXiang">
         <img :src="img" alt="">
       </div>
        <div class="right-wrap" >
          <div class="name" >姓名：{{name}} <span class="name-state">{{state}}</span></div>
          <slot name="data"></slot>
          <div class="date"> <span>{{purchase}}</span>{{date}}</div>
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
        <slot name="btnOpen"></slot>
        <!-- <div class="btn-wrap">
          <div class="btn content-center" @click="open">查看计划</div>
        </div> -->
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
    width: 351px;
    background: url("../../assets/PNG/8-1我的互助计划_03.png") center no-repeat;
    border-radius: 5px;
    background-size: 100%;
    // padding: 12px;
    color:rgba(255,255,255,1);
    position: relative;
    margin: 0;
    .top-content{
      display: flex;
      padding-top: 12px;
      padding-left: 12px;
    }
    .right-wrap{
      padding-left: 12px;
    }
    .touXiang {
      width:44px;
      height:44px;
      border-radius:50%;
      overflow: hidden;
    }
    .name-state{
      font-size: 12px;
      border: 1px solid $c-bai;
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 1px 0 1px;

    }
  }
  .date{
        // word-wrap: break-word;
        height:20px;
        border-radius:11px;
        font-size: 12px;
        background-color: #F6B03B;
        padding: 0 10px 0 10px;
        line-height: 20px;
        margin-top: 5px;
        text-align: center;
      }
      .bottom-content{
        display: flex;
        position: absolute;
        bottom: 18px;
        left: 12px;
        .tow{
          padding-left: 12px;
        }
      }
      // .btnOpen{
      //   width:80px;
      //   height:33px;
      //   background:$c-bai;
      //   border-radius:10px;
      //   position: absolute;
      //   z-index: 111;
      // }
</style>

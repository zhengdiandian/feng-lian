<template>
    <div class="card">
      <div class="top-content">
       <div class="touXiang">
         <img src="@/assets/PNG/头像.png" alt="">
       </div>
        <div class="right-wrap">
          <div class="name">姓名：Bryant.ZZ <span>已实名</span></div>
          <div class="date content-center">购买日：2019.03.20</div>
        </div>
      </div>
      <div class="bottom-content">
        <div class="one">
          <div>产品名称:</div>
          <div>等待期:</div>
          <div>余额:</div>
        </div>
        <div class="tow">
          <div>终身重大疾病互助计划</div>
          <div>180天</div>
          <div>10元</div>
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
    props: {
      title: {
        type: String,
        default: '峰链互助公式'
      },
      open: {
        type: Function,
      }
    },
  }
</script>

<style lang="scss" scoped>
  .card {
    display: flex;
    justify-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    /*box-sizing: border-box;*/
    width: 351px;
    /*height: 140px;*/
    background: url("../../assets/PNG/8-1我的互助计划_03.png") center no-repeat;
    border-radius: 5px;
    background-size: 100%;
    padding: 12px;
    margin-bottom: 10px;
    color:rgba(255,255,255,1);

    .top-content{
      display: flex;
      justify-items: flex-start;
      justify-content: flex-start;
      flex-wrap: nowrap;

    }
    .bottom-content{
      width: 100%;
      padding-top: 16px;
      display: flex;
      justify-items: flex-start;
      justify-content: flex-start;
      flex-wrap: nowrap;
      /*padding-left: 12px;*/
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
        justify-content: flex-end;
      }
      .btn{
        padding: 0px;
        justify-self: flex-end;
        /*justify-self: self-end;*/
        align-self: flex-end;
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
      .date{

        width:150px;
        height:22px;
        background:rgba(246,176,59,1);
        border-radius:11px;
        font-size:12px;
        font-family:SourceHanSansCN-Normal;
        font-weight:400;
      }
    }
  }
</style>

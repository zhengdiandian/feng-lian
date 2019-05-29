<template>
    <div class="card">
      <div class="title">蜂链互助公示</div>
      <div class="dateInfo">2019年4月1期</div>
      <div class="info-wrap">
        <div>
          <div><span>0</span> 人</div>
          <div>本期公示人数</div>
        </div>
        <div class="xian"></div>
        <div>
          <div><span>0</span> 人</div>
          <div>预计分摊总额</div>
        </div>
        <div class="xian"></div>
        <div>
          <div><span>0</span> 人</div>
          <div>分摊人数</div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'NoticeCard'
  }
</script>

<style lang="scss" scoped>
  .mu-sub-header {
    color: $c-bai;
    font-size: 3.733vw;
    line-height: 1.5;
    padding-left: 4.267vw;
    width: 100%;
    content: "viewport-units-buggyfill; font-size: 3.733vw; line-height: 12.8vw; padding-left: 4.267vw";
  }
  .card  .title {
    color: #fff;
    // font-family: SourceHanSansCN-Normal;
    font-weight: 700;
    padding: 0px !important;
    font-size: 14px;
  }
  .card{
    color: #fff ;
    font-size: 12px;
    /*width:351px;*/
    /*max-height:126px;*/
    background:rgba(239,162,32,1);
    border-radius:5px;
    padding: 12px 20px 13px 12px;
    background: url("../../assets/gongshi.png") center no-repeat;
    background-size: 100% 100%;
    background-origin: padding-box;
    color: $c-bai;
    .dateInfo{
      margin: 12px 0 18px 0px;
      width:100px;
      height:22px;
      background:rgba(255,255,255,.2);
      border-radius:11px;
      text-align: center;
      line-height: 21px;
      background:rgba(255,255,255,.2);
    }
    .info-wrap{
      display: flex;
      overflow: hidden;
      // padding-top: 40px;
      height: auto;
      justify-content: space-between;
      &>div{
        & span{
          font-size:18px;
            
          font-weight:bold;
        }
        text-align: center;
        /*width: 33%;*/


      }
      .xian{
        /*height: 33px;*/
        border-right: 1px solid $c-bai;
      }
      & > div:last-of-type{
      border: none;
    }
    }
  }
</style>

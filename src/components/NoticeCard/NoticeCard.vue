<template>
    <div class="card">
      <mu-sub-header>蜂链互助公示</mu-sub-header>
      <div class="dateInfo">2019年4月1期</div>
      <div class="info-wrap">
        <div>
          <div><span>88 </span> 人</div>
          <div>本期公示人数</div>
        </div>
        <div class="xian"></div>
        <div>
          <div><span>88 </span> 人</div>
          <div>预计分摊总额</div>
        </div>
        <div class="xian"></div>
        <div>
          <div><span>88 </span> 人</div>
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

  .mu-appbar .mu-appbar-title, .wrap .mu-sub-header {
    color: #fff;
    font-family: SourceHanSansCN-Normal;
    font-weight: 700;
    padding: 0px;
    font-size: 14px;
  }
  .card{
    font-size: 12px;
    width:351px;
    /*max-height:126px;*/
    background:rgba(239,162,32,1);
    border-radius:5px;
    padding: 12px 20px 13px 12px;
    background: url("../../assets/PNG/公示背景.png") center no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
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

      height: auto;
      justify-content: space-between;
      &>div{
        & span{
          font-size:18px;
          font-family:SourceHanSansCN-Normal;
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

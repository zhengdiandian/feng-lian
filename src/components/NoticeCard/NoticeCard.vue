<template>
    <div class="card">
      <mu-sub-header>蜂链互助公示</mu-sub-header>
      <div class="dateIofo">2019年4月1期</div>
      <div class="info-wrap">
        <div>
          <div><span>88 </span> 人</div>
          <div>本期公示人数</div>
        </div>
        <div>
          <div><span>88 </span> 人</div>
          <div>预计分摊总额</div>
        </div>
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
  }
  .card{
    padding: 11px 11px 13px;
    background: url("../../assets/PNG/公示背景.png") center no-repeat;
    -webkit-background-size: 100%;
    background-size: 100%;
    color: $c-bai;
    .dateInfo{
      margin: 12px 0 18px 0px;
      width:110px;
      height:21px;
      text-align: center;
      line-height: 21px;
      background:rgba(255,255,255,.2);
      border-radius:10px;
    }
  }
</style>

<template xmlns="http://www.w3.org/1999/html">
  <div class="">
    <!--<mu-sub-header>我的购买计划</mu-sub-header>-->
    <div class="wrap">
      <card></card>
      <div class="hlep-notice">
        本期共0起互助事件，分摊总额（互助金）0元。共
        0人参与，人均分摊0元。
      </div>
      <div class="notice-content">
        <div class="parent-list">
          <div class="parent-wrap active">
            <img src="http:\\placehold.it\33x33" alt="" class="part" />
          </div>
          <div class="parent-wrap " v-for="i in 4" :key="i">
            <img src="http:\\placehold.it\33x33" alt="" class="part" />
          </div>
        </div>
        <div class="notice-info">
          <div class="title">霍貂蝉<span>已实名</span></div>
          <div class="title">肝癌▪申请10万元互助金</div>
          <div class="text">已加入蜂链互助572天，参与27次分摊，话费7.88元</div>
          <div class="info-btn-wrap">
            <div class="info-btn">查看详情</div>
          </div>
        </div>
      </div>
    </div>
    <mu-divider></mu-divider>
    <div class="wrap">
      <mu-sub-header>蜂链互助资金公示</mu-sub-header>
      <div class="notice-card">
        <div class="card-row">
          <div>截止2019年3月31日</div>
          <div>共互助0人，分摊0亿元</div>
        </div>
        <p class="card-row">本期剩余互助金 <span>￥0元</span></p>
        <div class="card-btn">点击查看详情</div>
      </div>
      <div class="contact-wrap">
        <div class="contact"><span class="iconfont iconlianxikefu"></span>联系客服</div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../../components/NoticeCard/NoticeCard";
export default {
  name: "NewNotice",
  components: {
    Card
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  padding: 12px;

  .mu-sub-header {
    padding: 0px;
  }
  .hlep-notice {
    width: 351px;
    height: 41px;
    margin-top: 8px;
    background: rgba(255, 227, 179, 1);
    border-radius: 2px;
    line-height: 1.5;
  }
}
.notice-content {
  margin-top: 13px;
  width: 351px;
  height: 185px;
  border: 1px solid rgba(220, 220, 220, 1);
  border-radius: 5px;
  .parent-list {
    display: flex;
    flex-wrap: nowrap;
    padding: 12px 12px 18px;
    border-bottom: 1px solid rgba(220, 220, 220, 1);
    .parent-wrap {
      position: relative;
      margin-right: 12px;
      width: 33px;
      box-sizing: content-box;
      height: 33px;
      background: rgba$c-cheng;
      border: 2px solid $c-cheng;
      &.active:after {
        position: absolute;
        bottom: -9px;
        left: 50%;
        content: "";
        transform: translate(-50%, 50%);
        border: 10px solid transparent;
        display: inline-block;
        border-top: 10px solid $c-cheng;
      }
      border-radius: 50%;
      img {
        width: 33px;
        height: 33px;
        border: 2px solid rgba(239, 162, 32, 1);
        border-radius: 50%;
      }
    }
  }
}
.notice-info {
  display: flex;
  flex-wrap: wrap;
  padding: 11px 14px 13px 12px;
  min-height: 120px;
  /*justify-content:start;*/
  /*align-content: space-between;*/
  .title {
    width: 100%;
    font-size: 13px;
    font-family: SourceHanSansCN-Normal;
    font-weight: bold;
    color: $c-black;
    & > span {
      width: 40px;
      height: 15px;
      margin-left: 7px;
      border: 1px solid $c-cheng;
      font-size: 12px;
      font-family: SourceHanSansCN-Normal;
      font-weight: 400;
      color: $c-cheng;
    }
  }
  .text {
    width: 100%;
    font-size: 12px;
    font-family: SourceHanSansCN-Normal;
    font-weight: 400;
    color: rgba(112, 112, 112, 1);
  }
  .info-btn-wrap {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  .info-btn {
    width: 67px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border: 1px solid rgba(239, 162, 32, 1);
    border-radius: 13px;
    color: $c-cheng;
    /*justify-self: flex-end;*/
  }
}

  .notice-card{
    display: flex;
    flex-wrap: wrap;
    margin-top: 13px;
    padding-bottom: 12px;
    flex-direction: row-reverse;
    align-items: flex-end;
    justify-content: center;
    width:351px;
    height:136px;
    background:rgba(255,255,255,1);
    /*border:1px solid rgba(220,220,220,1);*/
    border-radius:5px;
    background: url("../../assets/PNG/资金公示背景.png") center no-repeat;
    background-size: 100% 100%;
    p.card-row{
      margin: 0px;
    }
    .card-row{

      width: 100%;
      /*margin-top: 60px;*/
      text-align: center;
      span{
        color: $c-cheng;
      }
      /*flex: 2;*/
    }
    .card-btn{
      width:225px;
      height:33px;
      line-height: 33px;
      text-align: center;
      background:rgba(239,162,32,.7);
      color: $c-bai;
      border-radius:17px;
    }
  }
  .contact-wrap{
    color: $c-cheng;
    width: 100%;
    margin-top: 13px;
    display: flex;
    justify-content: center;
  }
  .contact{
    span.iconfont{
      font-size: 24px;
      vertical-align: middle;
      padding-right: 13px;
    }
    width:132px;
    height:35px;
    line-height: 35px;
    text-align: center;
    border: 1px solid $c-cheng;
    border-radius:17px;
  }

</style>

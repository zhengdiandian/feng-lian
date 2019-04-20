<template>
  <div class="wrap">
    <mu-sub-header>我的购买计划</mu-sub-header>
    <card></card>
    <div class="hlep-notice">
      本期共5起互助事件，分摊总额（互助金）7000000.00元。共
      399088人参与，人均分摊0.17元。
    </div>
    <div class="notice-content">
      <div class="parent-list">
          <div class="parent-wrap active">
            <img src="http:\\placehold.it\33x33" alt="" class="part">
          </div>
        <div class="parent-wrap " v-for="i in 4" :key="i">
          <img src="http:\\placehold.it\33x33" alt="" class="part">
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Card from '../../components/NoticeCard/NoticeCard'
  export default {
    name: 'NewNotice',
    components: {
      Card
    }
  }
</script>

<style lang="scss" scoped>
  .wrap{
    padding: 11px 11px 14px;
    .mu-sub-header{
      padding: 0px;
    }
    .hlep-notice{

      width:351px;
      height:41px;

      background:rgba(255,227,179,1);
      border-radius:2px;
      line-height: 1.5;
    }
  }
  .notice-content{
    margin-top: 13px;
    width:351px;
    height:185px;
    border:1px solid rgba(220,220,220,1);
    border-radius:5px;
    .parent-list{
      display: flex;
      flex-wrap: nowrap;
      padding: 12px 12px 18px;
      border-bottom:1px solid rgba(220,220,220,1);
      .parent-wrap{
        position: relative;
        margin-right: 12px;
        width:33px;
        box-sizing: content-box;
        height:33px;
        background:rgba$c-cheng;
        border:2px solid $c-cheng;
        &.active:after{
          position: absolute;
          bottom: -9px;
          left: 50%;
          content: '';
          transform: translate(-50%, 50%);
          border: 10px solid transparent;
          display: inline-block;
          border-top: 10px solid $c-cheng;
        }
        border-radius:50%;
        img{
          width:33px;
          height:33px;
          border:2px solid rgba(239, 162, 32, 1);
          border-radius:50%;
        }
      }
    }
  }

</style>

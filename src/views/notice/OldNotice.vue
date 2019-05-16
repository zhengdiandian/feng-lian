<template>
  <div>
    <div class="title-date">
      2019
    </div>
    <ul>
      <li v-for="i in 3" :key="i">
        <card></card>
      </li>
    </ul>
    <div class="contact-wrap">
      <div class="contact"><span class="iconfont iconlianxikefu"></span>联系客服</div>
    </div>
  </div>
</template>

<script>
  import Card from "../../components/NoticeCard/NoticeCard";
  export default {
    name: 'oldNotice',
    components:{
      Card
    }
  }
</script>

<style lang="scss" scoped>
  .title-date{
    padding: 12px;
    font-size:14px;
      
    font-weight:bold;
    color:$c-black;
  }
ul{
  list-style: none;
  margin: 0px;
  padding: 0px;
  color: $c-cheng;
  margin-left: 28px;
  li{
    position: relative;
    padding-bottom: 12px;
    &:before{
      position: absolute;
      left: -14px;
      top: 50%;
      transform: translate(-50%, -50%);
      content: '';
      display: inline-block;
      width:10px;
      height:10px;
      background:rgba(239,162,32,1);
      border-radius:50%;

    }
  }
}
  .card{
    width: 333px;

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

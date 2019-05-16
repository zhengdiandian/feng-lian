<template>
  <div class="pop-wrap">
    <PopBox style="bottom: 6.2%">
      <div class="pop-content">
        <div>
            <div style="color:#f8b62d;margin-bottom:24px;">温馨提示</div>
          <div>
          </div>
          <div style=" color:#707070">尊敬的蜂链会员您好：</div>
          <div style=" color:#707070">我们正在努力建设美好的家园</div>
          <!-- <div>敬请期待！</div> -->
        </div>
        <div style="color:#707070">敬请期待</div>
      </div>
    </PopBox>

    <mu-appbar style="width: 100%; position: initial" color="primary" text-color="#666" z-depth="0">
      <mu-button icon slot="right" @click="$router.go(-1)" >
        <mu-icon value=":iconfont iconxinxi" size="24" @click.stop="$router.go(-1)"></mu-icon>
      </mu-button>
      公示
      <mu-button icon slot="left" :ripple="false">
      </mu-button>
    </mu-appbar>
    <div class="notice-select" >
      <router-link class="select" to="/notice/newNotice">最新公示</router-link>
      <router-link class="select" to="/notice/oldNotice">往期公示</router-link>
    </div>

    <router-view class=""></router-view>
  </div>
</template>

<script>
  import PopBox from '../components/PopBox/PopBox'
  export default {
    name: 'Notice',
    components: {
      PopBox
    }
  }
</script>

<style lang="scss" scoped>
  .pop-wrap{
    position: relative;
    height: 100%;

  }
  .pop-content{
    width: 250px;
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    text-align: center;
    & >div:last-child{
      color: $c-cheng;
      font-size: 18px;
    }
    &>div{
      width: 100%;
      text-align: center;
    }
    align-items: center;
    .iconfont{
      font-size: 45px;
    }
    .heart{
      display: inline-block;
      width: 60px;
      height: 60px;
      background: url("../assets/img/爱心.svg") center no-repeat;
      -webkit-background-size: 100% 100%;
      background-size: 100% 100%;
    }
  }
  .notice-select{

    width: $gw;
    height:37px;
    background:rgba(255,255,255,1);
    display: flex;
    flex-wrap: nowrap;

    .select{
      border-bottom: 1px solid transparent;
      width: 50%;
      line-height: 37px;
      text-align: center;
      &.router-link-active{
        color: $c-cheng;
        border-color: $c-cheng;
      }
    }
  }
</style>

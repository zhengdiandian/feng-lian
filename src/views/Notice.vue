<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
      <mu-button icon slot="right" @click="$router.go(-1)" >
        <mu-icon value=":iconfont iconxinxi" size="24" @click.stop="$router.go(-1)"></mu-icon>
      </mu-button>
      我的互助计划
      <mu-button icon slot="left" :ripple="false">
      </mu-button>
    </mu-appbar>
    <div class="notice-select page-margin-top" >
      <router-link class="select" to="/notice/newNotice">最新公示</router-link>
      <router-link class="select" to="/notice/oldNotice">往期公示</router-link>
    </div>

    <router-view class=""></router-view>

  </div>
</template>

<script>
  export default {
    name: 'Notice'
  }
</script>

<style lang="scss" scoped>
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

<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
      <mu-button icon slot="left" @click="$router.go(-1)" >
        <mu-icon value=":iconfont iconfanhui" size="24" @click.stop="$router.go(-1)"></mu-icon>
      </mu-button>
      计划生成
      <mu-button icon slot="right" :ripple="false">
      </mu-button>
    </mu-appbar>
    <div class=" page-margin-top">
      <div class="wrap">
        <div class="balance-card">
          <div class="title">
            账户余额（元）
          </div>
          <div class="balance">10.00</div>
          <div class="balance-warning">余额充足</div>
          <div class="btn-wrap">
            <div class="btn">计划充值</div>
            <div class="btn" @click="$router.push('/owe')">感恩有你</div>
          </div>
        </div>
      </div>
      <div class="title">
        电子凭证
      </div>
      <div class="text-info"></div>
      <div class="title"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PlanInitial'
  }
</script>

<style lang="scss" scoped>
  .page-margin-top{
    background-color: $c-hui;

  }
    .wrap{
      padding: 12px;
    }

  .balance-card{
    &>div{
      width: 100%;
      line-height: 12px;
    }
    width: 100%;
    height:177px;
    padding: 18px 17px 13px;
    background:rgba(255,255,255,1);
    border-radius:10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;

    .btn-wrap{
      display: flex;
      justify-content: space-evenly;
      .btn{
        width:150px;
        height:33px;
        line-height: 33px;
        color: $c-lang;
        border:1px solid $c-lang;
        border-radius:17px;
      }
    }
  .balance{
    line-height: 30px;
    font-size:30px;
    font-family:ArialMT;
    font-weight:400;
    &-warning{
     color: $c-cheng;
    }

  }
  }
    .text-info{
      padding: 0 12px;
      width:375px;
      height:33px;
      background:rgba(255,255,255,1);
    }
  .title{
    padding: 12px ;
    font-size:14px;
    font-family:SourceHanSansCN-Normal;
    font-weight:bold;
    &+.text-info{
      width:375px;
      height:33px;
      background:rgba(255,255,255,1);
    }
  }
</style>

<template>
  <div class="wrap">
    <div class="banner">
      <img src="../assets/PNG/750_329.png" alt="" />
    </div>
    <div class="content-wrap">
      <div class="input-wrap">
        <!--<div class="input-content">
          <span class="iconfont iconzhanghao"></span
          ><input placeholder="请输入您的手机号码" type="text" />
        </div>
        <div class="input-content msg-input-content">
          <span class="iconfont iconzhanghao"></span
          ><input placeholder="请输入您的手机号码" type="text" />
          <span class="msg"> 获取验证码</span>
        </div>-->
        <div class="btn"
        @click="toLink"

        >立即注册</div>
        <div class="btn" style="margin-top: 10px"
        @click="$router.push('/login')"

        >已有账号, 立即登入</div>
      </div>
      <div class="info-content">
        <div class="title">享“邀请有礼”现金红包奖励</div>
        <div class="text" v-for="(text, i) in textList" :key="i">
          {{text}}
        </div>
      </div>
        <div class="info-content">
            <div class="title">邀请赢好礼</div>
            <div class="info">邀请细则</div>
            <div class="info-text-wrap">
                <div class="info-text">1.蜂链会员用户通过分享服务号内“邀请有礼”的活动详情页面给好友；</div>
                <div class="info-text">2.会员每成功邀请1名好友（新用户）注册入驻并购买蜂链互助任意一款保障计划，可获得平台20元现金红包奖励（红包只用于分摊互助金，不可提现）；</div>
                <div class="info-text">3.成功邀请入驻的会员数越多，获得的现金红包奖励则越多，奖励上不封顶。</div>
            </div>
        </div>
        <div class="rule">
            详细规则请见 <span @click="showPoP=true">《活动规则》</span>
        </div>
    </div>
      <pop-box v-if="showPoP" class="pop">
          <div class="rule-content">
            <div class="title">
                <span></span>
            </div>
              <div class="content">
                  <div>1.被邀请人加入计划时的手机号，或支付账号等若与任一曾经加入过计划的会员相同，平台视为非首次加入计划，不给予邀请人奖励；</div>
                  <div>2.若被邀请人加入计划后又退出该计划，蜂链互助将不发放奖励并有权收回已发放的奖励；</div>
                  <div>3.若发现骗取奖励行为，蜂链互助有权取消、收回奖励金额并取消相关会员的会员资格；</div>
                  <div>4.蜂链互助保留对此活动的最终解释权。</div>
              </div>
              <div class="btn" @click="showPoP=false">我知道了</div>
          </div>
      </pop-box>
  </div>
</template>
<script>
  import PopBox from '../components/PopBox/PopBox'
  import {mapState} from 'vuex'
  export default {
  name: "invitation",
  data() {
    return {
      showPoP: false,
      user_code: '',
      textList: ["一直很感谢大家的支持和信任，", "有你们的团结与付出，","才有了今天的蜂链大家庭。", "每一个蜂链家人们，", "你们都是英雄。", "蜂链强大了，", "也努力地想要，", "社会上每一个弱小群体也强大起来。", , "我们希望：", "让蜂链互助和蜂链家人们共同成长！", "为了回馈新老用户，","蜂链推出了邀请大礼包，","蜂链家人们只要邀请新用户入驻成为蜂链会员，", "就能获得相应奖励哦。"],
    };
  },
  methods: {
    toLink() {
      window.location = `http://test.wxapi.fenglianhz.com/h5/v1/user/login/weixinLogin?userCode=${this.user_code}`
    }
  },
  created() {
    debugger

    this.user_code = this.$route.query.userCode
  },
  components:{
    PopBox
  }
};
</script>

<style lang="scss" scoped>
    .pop /deep/ .center{
        border-radius: 15px ;
    }
    .banner{
        width:375px;
        height:165px;
    }
    .rule-content{
        width:303px;
        height:339px;
        padding: 12px;
        background:rgba(255,248,229,1);
        border-radius:15px;
        .btn{
            margin: 25px auto 0px;
            width:110px;
            height:33px;
            line-height: 33px;
            font-size:13px;
            font-family:SourceHanSansCN-Regular;
            font-weight:400;
            background:rgba(255,201,59,1);
            border-radius:15px;
            color: $c-bai;
            text-align: center;
        }
        .title{
            /*display: flex;*/
            /*justify-content: center;*/
            position: relative;;
            width:100%;
            height:42px;
            line-height: 42px;
            background:rgba(255,201,59,1);
            border-radius:10px 10px 0px 0px;
            text-align: center;
            span{
                position: absolute;
                top:50%;
                left: 50%;
                transform: translate(-50%, -50%);
                vertical-align: center;
                display:inline-block;;
                width:70px;
                height:42px;
                background: url("../assets/img/活动细则.png") center no-repeat;
                background-size: 100%;
                /*line-height: 42px;*/
                img{

                    width: 100%;
                    /*height: 100%;*/
                }
            }

        }
        .content{
            margin-top: 24px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width:275px;
            height:192px;
            font-size:12px;
            font-family:SourceHanSansCN-Regular;
            font-weight:400;
            color: rgba(56, 26, 21, 1);
            line-height:18px;
        }
    }
.content-wrap {
  width: $gw;
  padding: 12px;
  /*background-color: rgb();*/
  background-color: rgb(255, 162, 44);
  .input-wrap {
    width: 100%;
    padding: 12px;
    background: rgba(254, 213, 159, 1);
    border-radius: 3px;
    .input-content {
      position: relative;
      box-sizing: content-box;
      padding-bottom: 12px;
      width: 100%;
      height: 33px;
      line-height: 33px;
      input {
        width: 100%;
        height: 100%;
        padding-left: 40px;
      }
      .iconfont {
        font-size: 16px;
        position: absolute;
        padding-left: 15px;
      }
    }
    .msg-input-content {
      input {
        width: 243px;
        vertical-align: middle;
      }
      .msg {
        text-align: center;
        vertical-align: middle;
        display: inline-block;
        margin-left: 7px;
        width: 77px;
        height: 33px;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(248, 182, 45, 1);
        border-radius: 2px;

        font-size: 12px;
        font-family: SimSun;
        font-weight: 400;
        color: $c-cheng;
      }
    }
    .btn {
      text-align: center;
      width: 100%;
      height: 33px;
      line-height: 33px;
      background: rgba(248, 182, 45, 1);
      border-radius: 2px;
      font-size: 12px;
      font-family: SimSun;
      color: $c-bai;
    }
  }
  .info-content {
    margin-top: 12px;
    padding: 12px;
    width: 100%;
    /*height:308px;*/
    background: rgba(254, 213, 159, 1);
    border-radius: 3px;
    .title {
      padding-bottom: 12px;
      text-align: center;
      font-size: 14px;
      font-family: SourceHanSansCN-Bold;
      font-weight: bold;
      color: rgba(56, 26, 21, 1);
    }
      .info{
          &:before,&:after{
              content: '';
              display: inline-block;
              vertical-align: middle;
              width:5px;
              height:5px;
              background:rgba(56,26,21,1);
              border-radius:50%;
              margin: 0 20px;

          }
          margin: 0 auto;
          width:180px;
          height:22px;
          text-align: center;
          background:linear-gradient(-56deg,rgba(255,157,51,1) 0%,rgba(255,202,62,1) 100%);
          border-radius:11px;
          font-size:12px;
          font-family:SourceHanSansCN-Normal;
          font-weight:400;
          color:rgba(56,26,21,1);
      }
      .info-text-wrap{
          margin: 18px auto 0px;
        display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          width:300px;
          height:156px;

  }
      .info-text{
          font-size:12px;
          font-family:SourceHanSansCN-Normal;
          font-weight:400;
          color:rgba(56,26,21,1);
          /*line-height: 1.25;*/
          /*width: 300px;*/
          /*margin: 0 auto;*/
      }
    .text {
      text-align: center;
      /*margin: 0 auto;*/
      /*width: 181px;*/
      line-height: 2;
    }
  }
}
    .rule{
        padding-top: 12px ;
        font-size:12px;
        font-family:SourceHanSansCN-Normal;
        font-weight:400;
        color: $c-bai;
        span{
            color: rgba(56, 26, 21, 1);
            font-weight: bold;
        }
    }
</style>

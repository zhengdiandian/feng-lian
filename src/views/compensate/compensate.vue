<template>
  <div class="wrap" >
    <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)"></mu-icon>
      </mu-button>
        申请秒赔
      <mu-button icon slot="right" :ripple="false" >
        <!--<mu-icon value=":iconfont iconshubanshenglvehao" size="24"></mu-icon>-->
      </mu-button>
    </mu-appbar>
    <div class="content  ">
        <div class="step-wrap">
            <mu-stepper :active-step="activeStep" :linear="false">
                <mu-step v-for="i in 3" :key="i" :class="[  i <=activeStep ? 'active-step': '']" class="">
                    <mu-step-label  class="cladsfdasf"> </mu-step-label>

                </mu-step>
            </mu-stepper>

        </div>
        <div class="step-title">
            <span class="title">初审阶段</span>
            <span class="title">支付费用</span>
            <span class="title">公示划款</span>
        </div>

        <router-view></router-view>
<!--        <input-form></input-form>-->
    </div>
<!--      <div class="form-content">-->
<!--            <div class="title">请如实填写以下信息</div>-->
<!--            <div class="input-box"><label >姓名:</label><input placeholder="请填写您的姓名" type="text"></div>-->
<!--            <div class="input-box"><label >身份证号码:</label><input placeholder="请填写您的身份证号码" type="text"></div>-->
<!--            <div class="input-box"><label >手机号:</label><input placeholder="请填写您的手机号码" type="text"></div>-->
<!--            <div class="input-box"><label >邮箱：</label><input placeholder="请填写您的邮箱地址" type="text"></div>-->
<!--    </div>-->
<!--      <div class="input-box-line"></div>-->
<!--      <div class="content">-->
<!--         <div class="input-box"><label >职业:</label><input placeholder="请填写您的职业" type="text"></div>-->
<!--         <div class="input-box"><label >工作单位/学校:</label><input placeholder="请填写受助人工作单位或学校" type="text"></div>-->
<!--      </div>-->
<!--      <div class="input-box-line"></div>-->
<!--      <div class="content">-->
<!--          <div class="input-box"><label >地区:</label><div class="select"><span></span><span></span></div></div>-->
<!--          <div class="input-box"><label >详细地址:</label><input placeholder="海兰子胡同6条22号" type="text"></div>-->
<!--      </div>-->
<!--      <div class="input-box-line"></div>-->


  </div>
</template>
<script>
    // import InputForm from '../components/InputForm'
export default {
  name: "compensate",
  // components: { InputForm },
  // component: {
  //   InputForm
  // },
  data() {
    return {
      activeStep: 0
    };

  },
};
</script>
<style lang="scss" scoped>

.wrap {
    .content{
        /*padding: 12px 12px 6px;*/
        background-color: $c-bai;
        &:after{

        }
    }
    .step-wrap {
        width: 70%;
        padding-top: 10px;
        margin: 10px auto 0px;

    }
    .step-title{
        width: 83%;
        display: flex;
        margin: -20px auto 0px;
        justify-content: space-between;
    }
}

    .input-box-line{
        width: 100%;
        padding-bottom: 6px;
        /*height: .5px;*/
        background-color: $c-hui;

    }
.input-box{
    width: 100%;
    /*height:36px;*/
    display: flex;
    flex-wrap: wrap;
    &:after{
        width: 100%;
        height: 1px;
        transform: scaleY(0.5);
        transform-origin: 50% 100%;
        /*height: .5px;*/
        content: '';
        display: block;
        z-index: 6666;
        background-color: $c-hui;
        /*<!--border-bottom: .5px solid $c-hui;-->*/
    }
    .select{
        flex: 2;
       line-height: 36px;
        height: 36px;
    }
    label {
        white-space: nowrap;
        display: inline-block;
        width: 100px;
        line-height: 36px;
        height: 36px;
        background-color: $c-bai;
    }
    input{
        flex: 2;
        border: none;
        outline: none;
        width: auto;
        height: 36px;
    }
}
    .form-content{
        padding-top: 23px;
        .title{
            padding-bottom: 12px;
            font-size:$f16;
            font-family:SourceHanSansCN-Normal;
            font-weight:bold;
            color:rgba(51,51,51,1);
        }


    }
</style>


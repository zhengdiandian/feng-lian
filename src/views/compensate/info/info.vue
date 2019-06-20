<template>
  <div class="wrap" >
    <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
      <mu-button icon slot="left" @click="$router.push('/myplan')">
        <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)"></mu-icon>
      </mu-button>
      申请详情
      <mu-button icon slot="right" :ripple="false" >
        <!--<mu-icon value=":iconfont iconshubanshenglvehao" size="24"></mu-icon>-->
      </mu-button>
    </mu-appbar>
    <div class="content  ">
      <div class="step-wrap">
        <mu-stepper :active-step="activeStep" :linear="false">
          <mu-step v-for="i in num" :key="i" :class="[  i <=activeStep ? 'active-step': '']" class="">
            <mu-step-label  class="cladsfdasf"> </mu-step-label>

          </mu-step>
        </mu-stepper>

      </div>
      <div class="step-title">
        <span class="title">初审阶段</span>
        <span class="title" v-if="$route.query.type ===1">首次划款</span>
        <span class="title">支付费用</span>
        <span class="title">公示划款</span>
      </div>
      <div class="info-step">
        申请进度 <span>{{stepText}}</span>
      </div>
      <defrayment :show-btn="flag" btn-text="去支付">
        <div>
          <div class="input-box-line"></div>

          <div class="form-info">

            <div class="title">提交材料</div>
            <div class="tong">
              <label class="iconfont iconxuanze"  for="tongYi"></label><input  id="tongYi" type="checkbox"> 1、缴费凭证  <span class="status">已上传</span>
            </div>
            <div class="tong">
              <label class="iconfont iconxuanze"  for="tongYi"></label><input   id="tongYi" type="checkbox"> 2、申请表填写完成后拍照上传  <span class="status">已上传</span>
            </div>

            <div class="tong">
              <label class="iconfont iconxuanze"  for="tongYi"></label><input   id="tongYi" type="checkbox"> 3、病例报告  <span class="status">已上传</span>
            </div>
            <div class="tong">
              <label class="iconfont iconxuanze"  for="tongYi"></label><input   id="tongYi" type="checkbox"> 4、诊断证明  <span class="status">已上传</span>
            </div>
            <div class="tong">
              <label class="iconfont iconxuanze"  for="tongYi"></label><input   id="tongYi" type="checkbox"> 5、身份证正反面照片  <span class="status">已上传</span>
            </div>
            <div class="tong">
              <label class="iconfont iconxuanze"  for="tongYi"></label><input   id="tongYi" type="checkbox"> 6、上传银行卡照片  <span class="status">已上传</span>
            </div>


          </div>
          <div class="help-btn-wrap">
            <a :href="'tel:'+CustomerService" class="btn">
              <span class="iconfont iconlianxikefu"></span>
              <span>联系客服</span>
            </a>

          </div>
        </div>

      </defrayment>

<!--      <router-view></router-view>-->
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
  import  defrayment from '../components/defrayment'
  export default {
    name: "compensateInfo",

    components:{
      defrayment
    },
    data() {
      return {
        activeStep: 0,
        stepText: '',
        flag: false,
        CustomerService: ''
      };

    },
    computed: {
      num() {
        if(this.$route.query.type === 1) {
          return 4
    }else {
          return 3
        }
      }
    },
    created () {
      this.$axios.post('v1/manage/config/getTextList',{
        "keys": 'CustomerService'
      }).then(res=>{
        if(res.data.code !==200){
          this.$toast.error(res.data.msg)
          return
        }
        this.CustomerService = res.data.data.CustomerService
      })
      this.$axios.post('v1/mutually/compensate/compensateDetail',{
        orderNo: this.$route.query.orderNo
      }).then(res => {
        debugger
        if(res.data.code!==200){
          this.$toast.error(res.data.msg)
          return
        }
        // debugger
        let state = res.data.data.state
        let stage = res.data.data.stage
        this.stepText = res.data.data.stateDesc
        switch(stage) {
          case '初审阶段':
            this.activeStep = 0
            break
          case '首次划款':
            if(this.$route.query.type){
              this.activeStep = 1

            }else {
              this.activeStep = 0
            }
            // this.activeStep = 1
            break
          case '支付费用':
             this.flag = true
            if(this.$route.query.type){
              this.activeStep = 2

            }else {
              this.activeStep =1
            }
            break
            case '公示划款':
              if(this.$route.query.type){
              this.activeStep = 3

            }else {
              this.activeStep =2
            }



        }

        // switch (state) {
        //   case 100:
        //     this.stepText = ('初审审核中')
        //     // this.activeStep = 0
        //     break
        //   case 150:
        //     this.stepText = '驳回'
        //     // this.activeStep = 0
        //     break
        //   case 200:
        //     this.stepText = ('等待首次划款中')
        //     // this.activeStep = 1
        //     break
        //   case 300:
        //     this.stepText = ('人工审核中')
        //     this.activeStep = 1
        //     break
        //   case 400:
        //     this.stepText = '等待支付审核费'
        //     this.flag = true
        //     if(this.$route.query.type){
        //       // this.activeStep = 2
        //
        //     }else {
        //       // this.activeStep =1
        //     }
        //     break
        //   case 450:
        //     this.stepText = ('人工审核已被驳回')
        //     // this.activeStep = 1
        //     break
        //   case 500:
        //     this.stepText = ('待公示')
        //     // this.activeStep = 3
        //     // if(this.$route.query.type){
        //     //   // this.activeStep = 3
        //
        //     // }else {
        //     //   // this.activeStep =2
        //     // }
        //     break
        //   case 600:
        //     this.stepText = ('公示期')
        //     // this.activeStep = 3
        //     // if(this.$route.query.type){
        //     //   // this.activeStep = 3
        //
        //     // }else {
        //     //   // this.activeStep =2
        //     // }
        //     break
        //   case 700:
        //     this.stepText = ('等待赔付')
        //     // // this.activeStep = 3
        //     // if(this.$route.query.type){
        //     //   this.activeStep = 2
        //
        //     // }else {
        //     //   this.activeStep =1
        //     // }
        //     break
        //   case 750:
        //     this.stepText = ('公示驳回')
        //     // if(this.$route.query.type){
        //     //   this.activeStep = 3
        //
        //     // }else {
        //     //   this.activeStep =2
        //     // }
        //     break
        //   case 800:
        //     this.stepText = ('已赔付')
        //     // this.activeStep = 3
        //
        //     break
        //   case  900:
        //     this.stepText = ('关闭')
        //     // this.activeStep = 3
        //
        //
        // }
      })
    }
  };
</script>
<style lang="scss" scoped>
  .help-btn-wrap{
    display: flex;
    justify-content: space-around;
    align-items: center;
    a{
      background-color: #fff;
      color: $c-cheng;
      span{

      }
    }
    .btn{
      width:132px;
      height:35px;
      border:1px solid $c-cheng;
      border-radius:17px;
      text-align: center;
      line-height: 35px;
      color: $c-cheng;
      border-radius: 25px;
      margin-bottom: 12px;
      display: flex;
      justify-content: center;
      font-size: 14px;
      .iconfont{
        padding-right: 5px;
      }
    }
  }
  .tong{
    margin-top: 10px;
    vertical-align: middle;
    display: flex;
    align-items: center;
    /*justify-items: center;*/
    .iconfont{
      vertical-align: middle;
    }
    input[type=checkbox]{
      visibility: hidden;
      /*margin-bottom: 20px;*/
    }
    span.status{
      margin-left: 6px;
      padding: 2px;
      vertical-align: middle;
      border:1px solid rgba(220,220,220,1);
      font-family:SourceHanSansCN-Normal;
      font-weight:400;
      color:rgba(112,112,112,1);
    }
    .iconxuanze{
      color: $c-cheng;

    }
    span{
      color: cornflowerblue;
    }
  }

  .input-box-line{
    width: 100%;
    padding-bottom: 6px;
    /*height: .5px;*/
    background-color: $c-hui;

  }
  .form-info{
    /*margin-top: 5px;*/
    padding: 12px;
    .title{
      font-size:14px;
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(51,51,51,1);
    }
  }
  .info-step{
    text-align: center;
    padding: 15px 0px 0px;
    margin-bottom:  -10px;
    /*margin: 10px auto;*/
    font-family:SourceHanSansCN-Normal;
    font-weight:bold;
    color:rgba(112,112,112,1);
    span{
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color: $c-cheng;
      font-size: $f15;
    }
  }
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


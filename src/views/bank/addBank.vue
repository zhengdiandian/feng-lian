<template>
  <div class="wrap page-margin-top">
    <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui"></mu-icon>
      </mu-button>
      添加银行卡
      <mu-button icon slot="right" >
        <!-- <span style="font-size:12px;">保</span><span style="font-size:12px;">存</span> -->
      </mu-button>
    </mu-appbar>
    <div class="content">
      <div class="input-wrap">
        <label>持卡人</label><input placeholder="持卡人姓名" type="text">
      </div>
      <div class="input-wrap">
        <label>银行卡号</label><input v-model="cardNo" placeholder="请填写您的银行卡号" type="number">
      </div>
      <div class="input-wrap" @click="showAddress = true">
        <label>所属地区</label>
        <span class="text">{{province}}{{city}}</span>
        <!--<input placeholder="" type="text">-->
        <!--<ul><li>dsfdsa</li></ul>-->
        <span class="iconfont iconxiangshangshouqi1 right"></span>
      </div>
      <div class="input-wrap" @click="showBank=true">
        <label>所属银行</label><span class="text">{{bankName}}</span>
        <!--<input placeholder="" type="text">-->
        <!--<ul><li>dsfdsa</li></ul>-->
        <span class="iconfont iconxiangshangshouqi1 right"></span>
      </div>

      <div class="input-wrap">
        <label>预留手机号</label><input  v-model="account" placeholder="请输入银行预留手机号" type="number">
      </div>
      <div class="input-wrap">
        <label>短信验证码</label><input v-model="smsCode" placeholder="请输入短信验证码" type="text" > <span class="right" v-if="flag===0" @click="getMsg">获取验证码</span><span class="right timer" v-else>{{flag}}</span>
      </div>
    </div>
    <div class="btn" @click="addBank">完成</div>
    <vue-picker
            :show="showAddress"
            :columns="2"
            :link='true'
            @cancel="showAddress=false"
            @confirm="confirmFn"
    ></vue-picker>
    <vue-picker
            :show="showBank"
            :columns="1"
            :select-data="bankData"
            @cancel="showBank=false"
            @confirm="confirmFn1"
    ></vue-picker>
  </div>

</template>

<script>
  import vuePicker from "../../components/vuePickers/vuePicker";
  export default {
    name: 'addBank',
    components: { vuePicker},
    data() {
      return {
        inputData: {
          value1: [],
          value2: [],
          value3: []
        },
        showAddress: false,
        showBank: false,
        flag: 0,
        province: '',
        provinceValue: '',
        city: '',
        cityValue: '',
        bankData:{
          data1: []
        },
        account: '',
        token: '',
        cardNo: '',
        smsCode: '',
        bankName: '',
        province: '',
        city: ''

      }
    },
    created() {
      this.$axios.get('/v1/manage/common/getBankList').then(res => {
        if(res.data.code !==200){
          this.$toast.error(res.data.msg)
        }
        this.bankData.data1= res.data.data
      })
    },
    methods: {
      // numberChange() {
      //   debugger
      //   this.account = e.target.value.replace(/[^\d]/g,'')
      // },
      confirmFn(val) {
        debugger
        this.showAddress = false;

        this.province = val.select1.text
        this.city = val.select2.text
        this.provinceValue = val.select1.value
        this.cityValue = val.select2.value
        // this.defaultData = [val.select1];
      },
      confirmFn1(val) {
        debugger
        this.showBank = false;

        // this.province = val.select1.text.substring(0,val.select1.text.length -1)
        // this.city = val.select2.text.substring(0,val.select2.text.length -1 )
        this.bankName = val.select1.value
        // this.cityValue = val.select2.value
        // this.defaultData = [val.select1];
      },
      addBank() {
        if(!this.account) {
          this.$toast.error('手机号码不能为空')
          return
        }
        if(!this.cardNo) {
          this.$toast.error("信号卡不能为空")
        }
        if(!this.bankName) {
          this.$toast('请选择所属银行')
        }
        if(!this.cardProv || !this.cardCity) {
          this.$toast('请选择所属地区')
        }
        debugger
        this.$axios.post('v1/card/debitCard/updateCard',{
          phone: this.account,
          token: this.token,
          cardNo: this.Util.encrypt(this.cardNo.toString()),
          smsCode: this.smsCode,
          cardProv: this.provinceValue,
          cardCity: this.cityValue,
          bankName: this.bankName

        }).then(res => {
          if(res.data.code!==200){
            this.$toast.error(res.data.msg)
            return
          }
          this.$toast.success('绑定成功')
          setTimeout(() => {
            this.$router.push('/my')
          },3000)
        })
      },
      getMsg() {
        const accountReg = /^1[3456789]\d{9}$/
        if(!accountReg.test(this.account)) {
          this.$toast.error('请输入正确的手机号码')
          return
        }
        this.$axios.post('v1/manage/common/sendMsg',{
          account: this.account,
          type: 3
        }).then(res => {
          if(res.data.code!==200){
            this.$toast.error(res.data.msg)
            return
          }
          debugger
          this.token = res.data.data.token
        })
        this.flag = 60
        let timer = setInterval(() => {
          this.flag--
          if(this.flag ===0){
            this.flag = 0
            clearInterval(timer)
            // return
          }
        }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .right{
    display: inline-block;
    height: 44px;
    line-height: 44px;
    float: right;
    font-size:13px;

    font-weight:400;
    &.timer{
      color: $c-hui !important;
    }
  }
  ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
    li{
      height: 25px;
    }
  }
  .wrap{
    padding-top: 6px;
    background-color: $c-hui;
  }
  .content{
    /*margin-top: 6px;*/
    background-color: $c-bai;
    padding: 0px 12px;
    .input-wrap{
    //  display: flex;
      span.text{
        color: rgba(0, 0, 0, 0.87)!important;
      }
      width: 100%;
      // flex-wrap: nowrap;
      // flex-direction: column;
      /*height:44px;*/
      /*box-sizing: content-box;*/
      /*line-height: 100%;*/
      z-index: 22;
      &:after{
        content: '';
        display: block;
        width: 100%;
        padding-top: 1px;
        border-bottom: .5px solid $c-hui;
      }
      label,input{
        height: 44px;
        /*line-height: 44px;*/
        vertical-align: middle;
      }
      span{
        color: $c-cheng;
      }
      label{
        line-height: 43.5px;
        display: inline-block;
        min-width:77px;
        font-size:13px;

        font-weight:400;
        /*padding-right: 11px;*/
      }
      input{
        width: auto;
        border: none;
        outline: none;
      }
    }
  }
  .btn{
    width:350px;
    height:33px;
    margin: 25px auto 0px;
    text-align: center;
    line-height: 33px;
    color: $c-bai;
    background:rgba(248,182,45,1);
    border-radius:17px;
  }
</style>

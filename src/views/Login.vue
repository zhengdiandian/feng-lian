<template>
  <div class="wrap">
    <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
      <mu-button flat slot="right">跳过此步</mu-button>
    </mu-appbar>
    <div class="content">
      <div class="img"></div>
      <div class="user-wrap">
        <mu-text-field
          v-model="account"
          label-float
          label="请输入您的手机号码"
          icon=":iconfont iconzhanghao"
          :error-text="accountErr"
        >
          <div slot="append">
            <router-link tag="div" to="/register" style="color: #347fe8;">立即注册</router-link>
          </div>
        </mu-text-field>
      </div>
      <div class="pwd">
       <mu-text-field v-model="pwd" label="请输入密码" label-float  icon=":iconfont iconmima"
       :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"
       >
       </mu-text-field>
      </div>
      <div class="bottom-nav">
          <router-link tag="div" to="/register" style="color: #347fe8; font-size: 13px">短信验证码登陆</router-link>
          <router-link tag="div" to="/forgetPassword" style="color: #347fe8; font-size: 13px">忘记密码?</router-link>
      </div>
      <mu-button round class="login-btn" color="success" @click="login">登 &nbsp; 陆</mu-button>
      <div class="show" v-show="show">
        <span>网络异常</span>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Loing",
  data() {
    return {
      account: '',
      accountErr: '',
      pwd: "",
      visibility: false,
      pwdErr: "",
      show: false,
      usernameRules: [
        { validate: (val) => !!val, message: '必须填写用户名'},
        { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须填写密码'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
      ],
    }
  },
  watch: {
    show () {
      if(this.show) {
        setTimeout(() =>{
          this.show = false
        },3000)
      }
    }
  },
  methods: {
    login() {
      // if(!this.account){
      //   this.accountErr = '用户名不能为空'
      //   return
      // }
      // if(!this.pwd){
      //   this.pwd = '密码不能为空'
      //   return
      // }
      // const accountReg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
      // if(!accountReg.test(this.account)) {
      //   this.accountErr = '请输入正确的手机号码'
      //   return
      // }
      // if(this.pwd.length < 6 ) {
      //   this.pwdErr = '账号长度必须大于6位'
      //   return
      // }
      // if(this.pwd.length > 16 ) {
      //   this.pwdErr = '账号长度必须小于16位'
      //   return
      // }
      // this.accountErr = '账号错误'
      // this.pwdErr = '密码错误'
      this.$axios.post('/v1/user/login/login',{
      "account": "",	//手机号码
      "appId": "",	//appid,用于直接登录
      "loginPassword": "",	//登陆密码
      "smsCode": "",	//type=0时，短信验证码
      "token": "",	//type=0时，短信token
      "type": 0,	//0=短信登陆，1=密码登陆
  }).then(res=>{
    const {authToken} = res.data.data
    console.log(res)
        this.$store.commit('set_authToken', authToken)
        this.$router.push(this.$route.query.redirect)
  }).catch(err => {
    this.show = true
      })
    }
},

};
</script>
<style lang="scss" scoped>
.content {
  width: $gw;
  padding: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color: #fff;
}
.img {
  width: 76px;
  height: 70px;
  background-image: url('../assets/PNG/logo图.png');
  background-size: 100% 100%;
  margin-bottom: 64px;
  margin-top: 75px;
}
.bottom-nav{
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: space-between;
}
.mu-input.has-icon {
  box-sizing: border-box;

  margin-left: -7*3.5px;
}
  .login-btn{
    margin-top: 20px;
    width: 100%;
  }
  .mu-input {
    font-size: 12px;
  }
  .show{
    position: fixed;
    top: 300px;
    width: 200px;
    height: 50px;
    background: rgba(0,0,0,.5);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
//   .mu-input.has-icon{
//     padding: 25px 30px 0px 40px;
// }
.login-btn{
  background: linear-gradient(to right, #e99317 , #fbb830) !important;
  margin-top: 51px;
}
</style>



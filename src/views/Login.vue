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
      show: false
    }
  },
  methods: {
    login() {
      this.accountErr = '账号错误'
      this.pwdErr = '密码错误'
      this.show = true
      this.$axios.post('/v1/user/login/login',{
      "account": "",	//手机号码
      "appId": "",	//appid,用于直接登录
      "loginPassword": "",	//登陆密码
      "smsCode": "",	//type=0时，短信验证码
      "token": "",	//type=0时，短信token
      "type": 0,	//0=短信登陆，1=密码登陆
  }).then(res=>{
    console.log(res)
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



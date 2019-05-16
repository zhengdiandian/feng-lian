<template>
  <div class="wrap">
    <mu-appbar
      style="width: 100%;"
      color="primary"
      text-color="#fff"
      z-depth="0"

    >

    <div class="login-title" v-if="codepwd">密码登录</div>
    <div class="login-title" v-else>验证码登录</div>
      <mu-button icon slot="left" :ripple="false"></mu-button>
      <mu-button flat slot="right" @click="$router.push('/home')">跳过此步</mu-button>
    </mu-appbar>

    <div class="content">
      <div class="img"></div>
      <div class="user-wrap">
        <mu-text-field
          v-model.number="account"
          label-float
          label="请输入您的手机号码"
          icon=":iconfont iconzhanghao"
          :error-text="accountErr"
        >
          <div slot="append">
            <router-link tag="div" to="/register" style="color: #fff;"
              >立即注册</router-link
            >
          </div>
        </mu-text-field>
      </div>
      <div class="pwd">
        <mu-text-field
          v-if="codepwd"
          v-model.trim="pwd"
          label="请输入6-16位数字+字母的密码"
          label-float
          icon=":iconfont iconmima"
          :error-text="pwdErr"
          :action-icon="visibility ? 'visibility_off' : 'visibility'"
          :action-click="() => (visibility = !visibility)"
          :type="visibility ? 'text' : 'password'"
        ></mu-text-field>
        <mu-text-field
          v-else
          v-model.trim="pwd"
          label="请输入验证码"
          label-float
          icon=":iconfont iconmima"
          type="text"

        >
          <div  slot="append">
            <div v-show="show1" style="color: #fff;" @click="getMsgHandleClick">
              获取验证码
            </div>
            <span v-show="!show1" class="count">{{ count }} s</span>
          </div>
        </mu-text-field>
      </div>
      <div class="bottom-nav">
        <div
          style="color: #fff; font-size: 13px"
          @click="
            codepwd = !codepwd;
            pwd='';
          "
        >
          {{loginTypeText}}
        </div>
        <router-link
          tag="div"
          to="/forgetPassword"
          style="color: #fff; font-size: 13px"
          >忘记密码?</router-link
        >
      </div>
      <mu-button round class="login-btn" color="success" @click="login"
        >登 &nbsp; 录</mu-button
      >
      <div class="show" v-show="show">
        <span>{{errorMsg}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { decode } from "punycode";

export default {
  name: "Loing",
  data() {
    return {
      account: "",
      accountErr: "",
      pwd: "",
      visibility: false,
      pwdErr: "",
      show: false,
      show1: true,
      count: "",
      timer: null,
      codepwd: true,
      codepwd1: false,
      errorMsg: '',
      usernameRules: [
        { validate: val => !!val, message: "必须填写用户名" },
        { validate: val => val.length >= 3, message: "用户名长度大于3" }
      ],
      passwordRules: [
        { validate: val => !!val, message: "必须填写密码" },
        {
          validate: val => val.length >= 3 && val.length <= 10,
          message: "密码长度大于3小于10"
        }
      ]
    };
  },
  watch: {
    show() {
      if (this.show) {
        setTimeout(() => {
          this.show = false;
        }, 3000);
      }
    }
  },
  computed: {
    loginTypeText() {
      if(!this.codepwd) return '密码登录'
      return '短信验证码登录'
    },
  },
  methods: {
    toRegister() {
      window.location = 'http://test.wxapi.fenglianhz.com/h5/v1/user/login/weixinLogin?userCode=""'
    },
    typeLogin(type) {
      var data ={
        account: this.account, //手机号码
        // "appId": "test",	//appid,用于直接登录
        loginPassword: this.pwd, //登陆密码
        // smsCode:  this.pwd,	//type=0时，短信验证码
        	//type=0时，短信token
        type:  type //0=短信登陆，1=密码登陆
      }
      debugger
      if(type===0) {
         data = {
          account: this.account, //手机号码
            // "appId": "test",	//appid,用于直接登录
            // loginPassword: this.pwd, //登陆密码
          smsCode:  this.pwd,	//type=0时，短信验证码
           token:  this.msgToken,                    // "token": "",	//type=0时，短信token
          type:  type //0=短信登陆，1=密码登陆
        }
      }
      this.$axios
        .post("/v1/user/login/login", data)
        .then(res => {
          debugger
          if(res.data.code!==200){
            this.show = true;
            this.errorMsg = res.data.msg
            return
          }
          debugger;
          const { authToken } = res.data.data;
          console.log(res);
          this.$store.commit("set_authToken", authToken);
          this.$axios.post('v1/user/info/personalInfo').then(res => {
            debugger
            this.$store.commit('set_userInfo',res.data.data)
          })
          debugger
          if(this.$route.query.redirect){
            this.$router.replace(this.$route.query.redirect);
          }else {
            this.$router.push('/home')
          }
        })
        // .catch(err => {
        //   debugger
        //   this.show = true;
        //   this.errorMsg = err.data.msg
        // });
    },
    msgLogin() {},
    login() {
      if (!this.account) {
        this.accountErr = "用户名不能为空";
        return;
      }
      if (!this.pwd) {
        this.pwd = "密码不能为空";
        return;
      }
      const accountReg = /^1[3456789]\d{9}$/;
      if (!accountReg.test(this.account)) {
        this.accountErr = "请输入正确的手机号码";
        return;
      }
      if (this.pwd.length < 6) {
        this.pwdErr = "密码长度必须大于6位";
        return;
      }
      if (this.pwd.length > 16) {
        this.pwdErr = "密码长度必须小于16位";
        return;
      }
      debugger

      let type
      this.codepwd? type=1: type = 0
      this.typeLogin(type)
      // this.accountErr = '账号错误'
      // this.pwdErr = '密码错误'
    },
    getMsgHandleClick() {
      //   debugger
      debugger

      if (!this.account) return;
      this.$axios
        .post("/v1/manage/common/sendMsg", {
          type: 1,
          account: this.account
        })
        .then(res => {
          if(res.data.code!==200){
            this.show = true;
            this.errorMsg = res.data.msg
          }
          debugger
          console.log(res);
          this.msgToken = res.data.data.token;
          this.getCode()
        });
    },
    getCode() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show1 = false;
        this.timer = setInterval(() => {
          if(this.count===0){
            clearInterval(this.timer)
          }
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            this.show1 = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
  .wrap{
    height: 100%;
    background-color: $c-cheng;
  }
.content {
  width: $gw;
  padding: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color: $c-cheng;

}
.mu-appbar{
  background-color: $c-cheng;
}
.mu-input{
  color: #fff !important;
}
.mu-primary-color{
  color: $c-cheng;
}
.img {
  width: 76px;
  height: 70px;
  background-image: url("../assets/logo.svg");
  background-size: 100% 100%;
  margin-bottom: 64px;
  margin-top: 75px;
}
.bottom-nav {
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-between;
}
.mu-input.has-icon {
  box-sizing: border-box;


  margin-left: -7 * 3.5px;
}
.login-btn {
  margin-top: 20px;
  width: 100%;
}
.mu-input {
  font-size: 12px;
  color: #fff;
}
.show {
  position: fixed;
  top: 300px;
  width: 200px;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
//   .mu-input.has-icon{
//     padding: 25px 30px 0px 40px;
// }
.login-btn {
  background: #fff !important;
  margin-top: 51px;
  color: $c-cheng;
}
.login-title{
  position: absolute;
    top: -6px;
    left: 42%;
    color: $c-bai;
    // font-size: 16px;
    font-size: 15px;
}
</style>

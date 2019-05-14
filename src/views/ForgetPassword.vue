<template>
  <div>
    <!-- <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0" >
        <mu-button icon slot="left" @click="$router.go(-1)">
          <mu-icon value=":iconfont iconfanhui"@click="$router.go(-1)"></mu-icon>
        </mu-button>
        <div class="text-center">忘记密码</div>
        <mu-button flat slot="right">跳过此步骤</mu-button>
      </mu-appbar> -->
    <header>
      <pageHeader :title="title"></pageHeader>
    </header>
    <div class="page-margin-top"></div>
    <main>
      <mu-text-field
        v-model="account"
        label="请输入您的手机号码"
        label-float
        :error-text="accountErr"
        icon=":iconfont iconzhanghao"
      >
      </mu-text-field>
      <mu-text-field
        v-model="pwd"
        label="请输入验证码"
        label-float
        error-text=""
        icon=":iconfont iconmima"
      >
        <div slot="append">
          <!--<div style="color: #347fe8"  @click="sendMsg">{{count}}</div>-->
          <div v-show="show1" style="color: #347fe8;" @click="sendMsg">
            获取验证码
          </div>
          <span v-show="!show1" class="count">{{ count }}s </span>
        </div>
      </mu-text-field>
      <mu-button
        round
        :class="{ 'login-btn': disabled }"
        class="login disabled"
        color="success"
        @click="next"
        >完&nbsp;成</mu-button
      >
    </main>
  </div>
</template>
<script>
import pageHeader from "../components/PageHeader/PageHeader";
export default {
  name: "forgetpassword",
  data() {
    return {
      title: "忘记密码",
      pwd: "",
      visibility: false,
      pwdErr: "123",
      account: "",
      msgToken: "",
      accountErr: "",
      count: "获取验证码",
      timer: "",
      show1: true
    };
  },
  computed: {
    disabled() {
      return !!this.account && this.pwd.length > 4;
    }
  },
  methods: {
    sendMsg() {
      this.getCode();
      this.$axios
        .post("v1/manage/common/sendMsg", {
          type: 2,
          account: this.account
        })
        .then(res => {
          debugger;
          if (res.data.code !== 200) {
            this.$toast.error(res.data.msg);
            return;
          }
          this.msgToken = res.data.data.token;
        });
    },
    getCode() {
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show1 = false;
        this.timer = setInterval(() => {
          if (this.count === 0) {
            clearInterval(this.timer);
          }
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--;
          } else {
            // this.show1 = true;
            this.show1 = true;
            // this.count= 0
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },

    next() {
      debugger
      const accountReg = /^1[3456789]\d{9}$/;
      if (!accountReg.test(this.account)) {
        this.accountErr = "您输入的手机号码有误，请重新输入";
        return;
      }
      debugger
      this.$router.push({
        name: "reset",
        params: {
          token: this.msgToken,
          account: this.account,
          smsCode: this.pwd
          // Token: encodeURIComponent(this.token)
        }
      });
      // this.$axios.post('v1/user/login/setPwd', {
      //     type: 2,
      //     account: this.account
      // }).then(res => {
      //     if(res.data.code!==200){
      //         this.$toast.error(res.data.msg)
      //         return
      // }
      //     this.msgToken = res.data.data.token
      // })
    }
  },
  components: {
    pageHeader
  }
};
</script>
<style lang="scss" scoped>
/*.disabled{*/
/*&:before{*/
/*content: '';*/
/*position: absolute;*/
/*top: 0px;*/
/*left: 0px;*/
/*width: 100%;*/
/*height: 100%;*/
/*background-color: rgba(0, 0,0, .3);*/
/*}*/

/*}*/
.mu-input {
  width: 80%;
  margin: auto;
  font-size: 12px !important;
  border: none !important;
}
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 79px !important;
}
.iconbiyan {
  margin-right: 8px;
  font-size: 20px;
}
.login.login-btn {
  background: linear-gradient(to right, #e99317, #fbb830) !important;
  margin-top: 85px;
  width: 80%;
  color: $c-bai ;
}
.login {
  margin-top: 85px;
  width: 80%;
  color: rgba(0,0,0,.3);
  cursor: not-allowed;
  background-color: #e6e6e6
}
.mu-input.has-icon {
  padding: 25px 30px 0px 40px;
}
</style>

<template>
  <div>
    <header>
      <pageHeader :title="title"></pageHeader>
    </header>
    <main class="page-margin-top">
      <div class="user-wrap pwd-wrap">
        <mu-text-field
          v-model="account"
          label-float
          label="输入6-16位数字+字母的密码"
          icon=":iconfont iconmima"
          :error-text="accountErr"
          :action-icon="visibility ? 'visibility_off' : 'visibility'"
          :action-click="() => (visibility = !visibility)"
          :type="visibility ? 'text' : 'password'"
          @input="accountErr = ''"
        >
          <!--<div slot="append">-->
          <!--<mu-icon value=":iconfont iconbiyan"></mu-icon>-->
          <!--</div>-->
        </mu-text-field>
      </div>
      <div class="pwd-wrap">
        <mu-text-field
          v-model="pwd"
          @input="accountErr = ''"
          label="输入6-16位数字+字母的密码"
          label-float
          icon=":iconfont iconmima"
          :action-icon="visibility ? 'visibility_off' : 'visibility'"
          :action-click="() => (visibility = !visibility)"
          :type="visibility ? 'text' : 'password'"
          :error-text="accountErr"
        >
        </mu-text-field>
      </div>
      <!--<mu-button round class="login-btn" color="success" @click="login()">修&nbsp;改&nbsp;并&nbsp;登&nbsp;陆</mu-button>-->
      <mu-button
        round
        :class="{ 'login-btn': disabled }"
        class="login disabled"
        color="success"
        @click="login"

        >修&nbsp;改&nbsp;并&nbsp;登&nbsp;录</mu-button
      >
    </main>
  </div>
</template>
<script>
import pageHeader from "../components/PageHeader/PageHeader";
export default {
  name: "resetpassword",
  data() {
    return {
      title: "重新设置密码",
      pwd: "",
      visibility: false,
      pwdErr: "123",
      account: "",
      pwd: "",
      accountErr: ""
      // visibility: false
    };
  },
  computed: {
    disabled() {
      return this.account.length >= 6 && this.pwd.length >= 6;
    }
  },
  methods: {
    login() {
      const accountPwdReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/
      if (!accountPwdReg.test(this.account)) {
        this.accountErr = "请输入6-16的密码";
        return;
      }

      if (this.pwd !== this.account) {
        this.accountErr = "您两次输入的密码不同，请重新输入";
        return;
      }
      debugger
      this.$axios
        .post("v1/user/login/setPwd", {
          token: this.$route.params.token,
          account: this.$route.params.account,
          smsCode: this.$route.params.smsCode,
          newPwd: this.pwd
        })
        .then(res => {
          if (res.data.code !== 200) {
            this.$toast.error(res.data.msg);
            return;
          }
          debugger
          this.$store.commit("set_authToken", res.data.data.authToken);
          this.$router.replace("/home");
        });
    }
  },
  components: {
    pageHeader
  }
};
</script>
<style lang="scss" scoped>
#app>div{
  background-color: $c-cheng;
}
.mu-input {
  width: 95%;
  margin: auto;
  font-size: 12px !important;
  border: none !important;
}
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 79px;
}
.iconbiyan {
  margin-right: 8px;
  font-size: 20px;
}
.login.login-btn {
  background: $c-bai !important;
  margin-top: 85px;
  width: 80%;
  color: $c-cheng ;
}
.login {
  margin-top: 85px;
  width: 80%;
  color: $c-cheng;
  cursor: not-allowed;
  background-color: #fff
}
.mu-input{
  color: #fff;
}
.mu-input__focus{
  color: #fff !important;
}
</style>

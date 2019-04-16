<template>
  <div class="wrap">
    <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
      <mu-button flat slot="right">跳过此步骤</mu-button>
    </mu-appbar>
    <div class="content">
      <div class="img"></div>
      <div class="user-wrap">
        <mu-text-field
          v-model="value13"

          label-float
          placeholder="用户名为6-12长度的字符"
          icon="account_circle"
        >
          <div slot="append">
            <router-link to="/">注册</router-link>
          </div>
        </mu-text-field>
      </div>
      <div class="pwd-wrap">
        <mu-text-field
          v-model="pwd"
          icon="person"
          :error-text="pwdErr"
          :action-icon="visibility ? 'visibility_off' : 'visibility'"
          :action-click="() => (visibility = !visibility)"
          :type="visibility ? 'text' : 'password'"
        ></mu-text-field>
      </div>
      <div class="bottom-nav">
          <router-link to="/">忘记密码?</router-link>
          <router-link to="/">忘记密码?</router-link>
      </div>
      <mu-button round class="login-btn" color="success" @click="login">登入</mu-button>


    </div>
  </div>
</template>
<script>
export default {
  name: "Loing",
  data() {
    return {
      pwd: "",
      visibility: false,
      pwdErr: ''
    }
  },
  methods: {
    login() {
      this.pwdErr = '密码错误'
    }
}

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
}
.img {
  width: 200px;
  height: 200px;
  background-color: red;
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

    width: 100%;
  }
</style>



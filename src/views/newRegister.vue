<template>
    <div>
        <header>
            <pageHeader :title="title"></pageHeader>
        </header>
        <main class="page-margin-top">
            <div class="user-wrap pwd-wrap">
                <mu-text-field
                        type="number"
                        v-model="user"
                        label-float
                        @keydown="phoneKey"
                        @input="phoneChange"
                        label="请输入您的手机号码"
                        icon=":iconfont iconzhanghao"
                        :error-text="accountErr"
                >
                </mu-text-field>
            </div>
            <div class="pwd-wrap">
                <mu-text-field v-model="pwd" @input="inputChange($event)" maxlength="6"  label="请输入验证码" label-float  icon=":iconfont iconyanzhengma" :error-text="pwdErr">
                    <div  slot="append">

                        <div v-show="show" style="color: #fff; font-size: 14px" @click="getCode">获取验证码</div>
                        <span v-show="!show" class="count">{{count}} s</span>
                    </div>
                </mu-text-field>
            </div>
            <div class="user-wrap pwd-wrap">
                <mu-text-field
                        v-model="pwd1"
                        label-float
                        label="设置6-16位数字+字母的密码"
                        @input="val => pwd1=val.slice(0,16)"
                        icon=":iconfont iconmima"
                        :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"
                        :error-text="err2"
                >
                    <!--<div slot="append">-->
                        <!--<mu-icon value=":iconfont iconbiyan"></mu-icon>-->
                    <!--</div>-->
                </mu-text-field>
            </div>
            <div class="pwd-wrap">
                <mu-text-field v-model="pwd2" label="设置6-16位数字+字母的密码" label-float  icon=":iconfont iconmima"
                          @input="val => pwd2=val.slice(0,16)"
                          :action-icon="visibility1 ? 'visibility_off' : 'visibility'" :action-click="() => (visibility1 = !visibility1)" :type="visibility1 ? 'text' : 'password'"
                          :error-text="err2"
                >
                </mu-text-field>
                <div class="tongYi">
                  <label class="iconfont iconxuanze" :style="tongYiStyle" for="tongYi"></label><input v-model="tongYi"  id="tongYi" type="checkbox"> 我已阅读并同意  <span @click="$router.push('/MemberConvention')"> 《会员公约》 </span>
                </div>
            </div>


            
            <!--<div class="user-wrap pwd-wrap">-->
                <!--<mu-text-field-->
                        <!--v-model="code"-->
                        <!--label-float-->
                        <!--label="请输入您的得到的邀请码"-->
                        <!--icon=":iconfont iconzhanghao"-->
                        <!--error-text=""-->
                <!--&gt;-->
                <!--</mu-text-field>-->
            <!--</div>-->
            <div>
                <mu-button round :class="{ 'login-btn': disabled }" class="login" color="success" @click="registerHandleClick">完 &nbsp; 成</mu-button>
            </div>
        </main>
        <!--<div class="show" v-if="show">-->
        <!--<div class="show-main">-->
        <!--<div style="width: 100%;  height: 120px;  display: flex;justify-content: center;align-items: center;"><span>您还没有设置登录密码请您确认是否离开</span></div>-->
        <!--<div style="position: absolute;bottom: 0; width: 100%;">-->
        <!--<input style="color: #707070" type="button" value="去意已决" @click="open">-->
        <!--<input style="color: #4999f5" type="button" value="去设置密码" @click="open">-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
    </div>
</template>
<script>
  import pageHeader from '../components/PageHeader/PageHeader'
  export default {
    name: 'register',
    components: {
      pageHeader
    },
    data() {
      return {
        title: '注册',
        user: '',
        pwd: '',
        show: false,
        token: '',
        msgToken: '',
        show: true,
        count: '',
        timer: null,
        pwdErr: '',
        accountErr: '',
        pwd1: '',
        pwd2:'',
        visibility: false,
        visibility1: false,
        err2: '',
        code: '',
        tongYi: false
      }
    },
    computed: {
      disabled() {
        return  this.code && this.user && this.pwd && this.pwd1 && this.pwd2
      },
      tongYiStyle () {
      return this.tongYi ? {color: '#fff'}: { color: '#666'}
    },
    },
    created() {
      const code = this.$route.query.userCode
      const openId = this.$route.query.openId
      if(openId){
        localStorage.setItem('openId', openId)
      }
      if(code){
        this.code = this.$route.query.userCode

      }
      // else{
      //   // this.$alert('请向客服获得邀请码')
      //   // this.$alert('Hello world', 'Alert');
      //   this.$alert('请向客服获得邀请码', '提示', {
      //     okLabel: '知道了'
      //   })
      // }
    },
    methods: {
      phoneChange(e) {
      this.user = this.user.trim().replace(/[^0-9' ']/g,'').slice(0, 13)
    },
     phoneKey(e) {
      //  alert('dsfa')
            var phoneNum = this.user.trim();
           
            //如果是删除按键，则什么都不做
            if (e.keyCode === 8) {
                this.user = phoneNum;
                return;
            }
 
            var len = phoneNum.length;
            if (len === 3 || len === 8) {
                phoneNum += ' ';
                this.user = phoneNum;
            }
        },
      inputChange(e) {
        // debugger
        this.pwd = e.slice(0,6)

      },
      registerHandleClick() {
        if(!this.tongYi){
          this.$toast.error('必须阅读并同意才可执行')
          return
        }
        debugger
        const user = this.user.replace(/[\D]/g,'')
        const accountReg = /^1[3456789]\d{9}$/
        if(!accountReg.test(user)) {
          this.accountErr = '请输入正确的手机号码'
          return
        }
        if (this.pwd == '') {
          this.pwdErr = '请输入验证码'
          return
        }
        const pwd1Reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
        if (!pwd1Reg.test(this.pwd1)) {
          this.err2 = '请输入字母加数字组合6-16的密码'
          return
        }
        const pwdReg = /[\w]/g;
        if (!pwdReg.test(this.pwd)) {
          this.$toast.error('请输入正确的验证码')
          return
        }
        if(this.pwd1 !== this.pwd2){
          this.err2 = '两次输入的密码不相同'
          return
        }
        debugger
        //更改
        debugger
        this.$axios.post('/v1/user/login/register',{
          "openId": this.$route.query.openId ,         // 微信appid
          "account": this.user.replace(/[\D]/g,''), // 手机
          "smsCode": this.pwd,  // 短信验证码
          "token": this.msgToken, // 短信token
          "inviteCode":  this.code,
          'loginPwd': this.pwd2
        }).then((res)=> {
          debugger
          if(res.data.code!==200){
            this.$toast.error(res.data.msg)
            return
          }
          debugger
          // this.token = res.data.data.authToken
          console.log(res)
          this.$store.commit("set_authToken", res.data.data.authToken);
          this.$axios.post('v1/user/info/personalInfo').then(res => {
            debugger
            this.$store.commit('set_userInfo',res.data.data)
            this.$router.replace('/home')
          })
          // setTimeout(() => {
          //
          // }, 1000)


        })
        // this.$router.push({
        //   name: 'setpwd',
        //   params: {
        //     token: this.msgToken,
        //     account: this.user,
        //     smsCode: this.pwd,
        //     code: this.$route.query.user_code
        //     // Token: encodeURIComponent(this.token)
        //   }
        // })
        //   this.$axios.post('/v1/user/login/register',{
        //     "openId": "test",          // 微信appid
        //     "account": this.user, // 手机
        //     "smsCode": this.pwd,  // 短信验证码
        //     "token": this.msgToken, // 短信token
        //     "inviteCode":  '136750423931',
        //     'loginPwd': '12345678'
        //   }).then((res)=> {
        //       debugger
        //     // this.token = res.data.data.authToken
        //     console.log(this.token)

        //   })
      },
      getMsgHandleClick() {
        //   debugger

        if(!this.user&&this.show)return
        this.$axios.post('/v1/manage/common/sendMsg',{
          type: 0,
          account: this.user
        }).then(res =>{
          if(res.data.code!==200){
            this.$toast.error(res.data.msg)
            return
          }
          // debugger
          console.log(res)
          this.msgToken = res.data.data.token
        })
      },
      // open() {
      // // debugger
      // // this.show = true
      // this.$router.push({
      //     name: 'setpwd',
      //     params: {
      //         token: this.token,
      //
      //     }
      // })
      // },
      getCode(){
        const accountReg = /^1[3456789]\d{9}$/
        if(!accountReg.test(this.user)) {
          this.accountErr = '请输入正确的手机号码'
          return
        }
        this.getMsgHandleClick()
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      }
      // setCode() {
      //   console.log(11)
      // }
    },
    mounted(){

    }
  }
</script>
<style lang="scss" scoped>
#app>div{
  background-color: $c-cheng;
}
.mu-appbar{
  background-color: $c-cheng;
}
.mu-input{
  color: #fff !important;
}
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // margin-top: 79px !important;
        padding-top: 40px;
        background-color: $c-cheng;
        .pwd-wrap{
            width: 80%;
        }
    }
    .mu-input {
        width: 95%;
        margin: auto;
        font-size: 12px !important;
        border: none !important;
    }
    .login.login-btn {
        width: 200px;
        background: #fff !important;
        // margin-top: 85px;
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);

        /*width: 80%;*/
        color: $c-cheng ;
    }
    .login {
        width: 300px;
        margin-top: 50px;
        /*width: 80%;*/
        color: $c-cheng;
        // cursor: not-allowed;
        background-color: $c-bai;
        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
    }
    /*.login-btn{*/
        /*background: linear-gradient(to right, #e99317 , #fbb830) !important;*/
        /*margin-top: 85px;*/
        /*width: 100%;*/
    /*}*/
    .show {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .show-main{
        width: 90%;
        height: 180px;
        background: #fff;
        opacity: 1;
        text-align: center;
        position: relative;
        span{
            display: inline-block;
            width: 150px;
            margin-top: 40px;
        }
        input{
            font-size: $f12;
            width: 50%;
            height: 40px;
            border: none;
            background: none;
            outline: none;
        }
        input:active{
            background-color: #cccccc;
        }
    }
    .tongYi{
    margin-top: 10px;
    margin-left: 4.333vw;
    font-size: $f14;
    color: $c-bai;
    .iconfont{
      vertical-align: middle;
    }
    input[type=checkbox]{
      visibility: hidden;
      /*margin-bottom: 20px;*/
      padding-right: 5px;
    }
    span{
      color: cornflowerblue;
    }
  }
</style>

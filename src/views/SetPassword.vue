<template>
    <div>
      <p-op-box v-if="showPop">
        <div class="pop-content">
          <div>
            <div>
              您还没有设置登录密码
            </div>
            请您确认是否离开
          </div>
          <div>
            <div @click="$router.go(-1)">去意已决</div>
            <div @click="showPop=false">去设置密码</div>
          </div>
        </div>
      </p-op-box>
        <header>
           <mu-appbar style="width: 100%;position: initial" color="primary" text-color="#666" z-depth="0">
            <mu-button icon slot="left" @click="showPop=true">
              <mu-icon value=":iconfont iconfanhui" ></mu-icon>
            </mu-button>
             <mu-button icon slot="right"  :ripple="false">
            </mu-button>
      <div class="text-center">设置密码</div>
    </mu-appbar>
        </header>
        <main class="page-margin-top">
            <div class="user-wrap pwd-wrap">
                <mu-text-field
                v-model="value13"
                label-float
                label="请输入新密码"
                icon=":iconfont iconmima"
                :error-text="err1"
                >
                    <div slot="append">
                        <mu-icon value=":iconfont iconbiyan"></mu-icon>
                    </div>
                </mu-text-field>
            </div>
            <div class="pwd-wrap">
                <mu-text-field v-model="pwd" label="请确认密码" label-float  icon=":iconfont iconmima"
                :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"
                :error-text="err2"
                >
                </mu-text-field>
            </div>
            <div style="width: 75%" >
                <mu-button round class="login-btn" v-promise-btn @click="setPwd"  color="success" >注&nbsp;册&nbsp;并&nbsp;登&nbsp;陆</mu-button>
            </div>
        </main>
    </div>
</template>
<script>
import pageHeader from '../components/PageHeader/PageHeader'
import POpBox from '../components/PopBox/PopBox'
import { debug } from 'util';
export default {
    name: 'setpassword',
    data() {
        return {
            showPop: false,
            title: '设置密码',
            pwd: "",
            visibility: false,
            pwdErr: "123",
            value13: '',
            value14: '',
            err1: '',
            err2: ''
        }
    },
    props: ['account', "smsCode", 'token', 'code'],
    components: {
        pageHeader,
        POpBox
    },
    methods: {
      setPwd () {
        debugger
        this.err1 = this.err2 = ''
        if(this.value13.length < 6){
          return this.err1 = '密码长度需要大于6个字符'
        }
        if(this.value13.length > 16){
          return this.err = '密码长度需要小于16个字符'
        }
        if(!this.value13.length){
          return this.err1 = '密码不可以为空'
        }
        if(!this.pwd.length){
          return this.err2 = '密码不可以为空'
        }
        if(this.value13!==this.pwd){
          return  this.err1 = '您两次输入的密码不同，请重新输入'
        }
         return this.$axios.post('/v1/user/login/register',{
            "openId": "test",          // 微信appid
            "account": this.account, // 手机
            "smsCode": this.smsCode,  // 短信验证码
            "token": this.token, // 短信token
            "inviteCode":  this.code,
            'loginPwd': this.pwd
          }).then((res)=> {
           if(res.data.code!==200){
             this.$toast.error(res.data.msg)
             return
           }
            // this.token = res.data.data.authToken
            console.log(res)
            this.$store.commit("set_authToken", res.data.data.authToken);
            this.$router.replace('/home')


          })
      //   this.$axios.post('/v1/user/login/setPwd',{
      //   "token": decodeURIComponent(this.token),	//登陆token	string
      //   "newPwd": this.value14,	//新密码,
      //   smsCode: decodeURIComponent(this.	smsCode),
      //   account: decodeURIComponent(this.account)
      // }).then(res=>{
      //   debugger
      //   localStorage.setItem('token', res.data.data)
      //   console.log(res);

      // })
      }
    },
    mounted() {

    }

}
</script>
<style lang="scss" scoped>
  .nav-bar /deep/ nav{
    position: initial;
  }
  .pop-content{
    width:250px;
    height:150px;
    background:rgba(255,255,255,1);
    border:1px solid rgba(220,220,220,1);
    border-radius:2px;
    display: flex;
    flex-wrap: wrap;
    /*justify-items: stretch;*/
    /*align-items: center;*/
    text-align: center;
    font-size:16px;

    font-weight:400;
    &>div:first-child{
      align-self:center;
      padding-top: 20px;
      line-height: 1.5;
      color:rgba(51,51,51,1)
    }
    & >div:last-child{
      align-self: flex-end;
      color:rgba(112,112,112,1);
      &>div{
        border:1px solid rgba(220,220,220,1);
        display: inline-block;
        width: 50%;
        height:48px;
        line-height: 48px;
      }
      & div:last-child{
        color: $c-lang;
        border-left: 0px solid transparent;
      }


    }
    &>div{
      width: 100%;
      text-align: center;
    }
    align-items: center;
    .iconfont{
      font-size: 45px;
    }
    .heart{
      display: inline-block;
      width: 80px;
      height: 80px;
      background: url("../assets/img/爱心.svg") center no-repeat;
      -webkit-background-size: 100% 100%;
      background-size: 100% 100%;
    }
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
    margin-top: 79px !important;
}
.iconbiyan {
    margin-right: 8px;
    font-size: 20px;
}
.login-btn{
    background: linear-gradient(to right, #e99317 , #fbb830) !important;
    margin-top: 85px;
    width: 100%;
}
</style>

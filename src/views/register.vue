<template>
    <div>
        <header>
            <pageHeader :title="title"></pageHeader>
        </header>
        <main class="page-margin-top">
            <div class="user-wrap pwd-wrap">
                <mu-text-field
                v-model="user"
                label-float
                label="请输入您的手机号码"
                icon=":iconfont iconzhanghao"
                :error-text="accountErr"
                >
                </mu-text-field>
            </div>
            <div class="pwd-wrap">
                <mu-text-field v-model="pwd" label="请输入验证码" label-float  icon=":iconfont iconmima" :error-text="pwdErr">
                    <div @click="getMsgHandleClick" slot="append">

                        <div v-show="show" style="color: #347fe8;" @click="getCode">获取验证码</div>
                        <span v-show="!show" class="count">{{count}} s</span>
                    </div>
                </mu-text-field>
            </div>
            <div style="width: 75%">
                <mu-button round class="login-btn" color="success" @click="registerHandleClick">完 &nbsp; 成</mu-button>
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
            accountErr: ''
        }
    },
    methods: {
        registerHandleClick() {
            const accountReg = /^1[3456789]\d{9}$/
            if(!accountReg.test(this.user)) {
                this.accountErr = '请输入正确的手机号码'
                return
            }
            if (this.pwd == '') {
                this.pwdErr = '请输入验证码'
                return
            }
            const pwdReg = /^\d*\.?\d+$/;
            if (!pwdReg.test(this.pwd)) {
                return
            }
            debugger
        this.$router.push({
            name: 'setpwd',
            params: {
                token: this.msgToken,
                account: this.user,
                smsCode: this.pwd,
                code: this.$route.query.user_code
                // Token: encodeURIComponent(this.token)
            }
        })
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
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 79px !important;
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
.login-btn{
    background: linear-gradient(to right, #e99317 , #fbb830) !important;
    margin-top: 85px;
    width: 100%;
}
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
        font-size: $f14;
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
</style>

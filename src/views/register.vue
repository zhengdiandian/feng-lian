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
                label="请输入您的手机号码"
                icon=":iconfont iconzhanghao"
                >
                </mu-text-field>
            </div>
            <div class="pwd-wrap">
                <mu-text-field v-model="pwd" label="请输入验证码" label-float  icon=":iconfont iconmima">
                    <div slot="append">
                        <router-link tag="div" to="/register" style="color: #347fe8;">获取验证码</router-link>
                    </div>
                </mu-text-field>
            </div>
            <router-link style="width: 75%" tag="div" to="/home">
                <mu-button round class="login-btn" color="success" @click="open">完 &nbsp; 成</mu-button>
            </router-link>
        </main>
        <div class="show" v-if="show">
            <div class="show-main">
                <div style="width: 100%;  height: 120px;  display: flex;justify-content: center;align-items: center;"><span>您还没有设置登录密码请您确认是否离开</span></div>
                <div style="position: absolute;bottom: 0; width: 100%;">
                    <input style="color: #707070" type="button" value="去意已决" @click="open">
                    <input style="color: #4999f5" type="button" value="去设置密码" @click="open">
                </div>
            </div>
        </div>
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
            value13: '',
            value14: '',
            show: false
        }
    },
    methods: {
        open() {
            this.show = true
        },
        setCode() {
          console.log(11)
        }
    }
}
</script>
<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    margin-top: 40px;
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
        font-size: 12px;
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
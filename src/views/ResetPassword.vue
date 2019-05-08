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
                label="请输入新密码"
                icon=":iconfont iconmima"
                :error-text="accountErr"
                >
                    <div slot="append">
                        <mu-icon value=":iconfont iconbiyan"></mu-icon>
                    </div>
                </mu-text-field>
            </div>
            <div class="pwd-wrap">
                <mu-text-field v-model="pwd" label="请确认密码" label-float  icon=":iconfont iconmima"
                :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"
                error-text="您两次输入的密码不同，请重新输入"
                >
                </mu-text-field>
            </div>
                <mu-button round class="login-btn" color="success" @click="login()">修&nbsp;改&nbsp;并&nbsp;登&nbsp;陆</mu-button>
        </main>
    </div>
</template>
<script>
import pageHeader from '../components/PageHeader/PageHeader'
export default {
    name: 'resetpassword',
    data() {
        return {
            title: '重新设置密码',
            pwd: "",
            visibility: false,
            pwdErr: "123",
            account: '',
            pwd: '',
            accountErr: ''
        }
    },
    methods: {
        login() {
            const accountReg = /^1[34578]\d{9}$/;
            if (!accountReg.test(this.account)) {
                this.accountErr = "请输入正确的手机号码";
                return;
            }
            this.$axios.post('v1/user/login/setPwd').then(res => {
                if(res.data.code!==200){
                    this.$toast.error(res.data.msg)
                    return
            }
            })
        }
    },
    components: {
        pageHeader
    },

}
</script>
<style lang="scss" scoped>
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
    width: 80%;
}
</style>
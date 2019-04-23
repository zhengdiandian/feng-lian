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
                error-text="您输入的密码不够安全，请慎重"
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
            <router-link style="width: 75%" tag="div" to="/home">
                <mu-button round class="login-btn" color="success">注&nbsp;册&nbsp;并&nbsp;登&nbsp;陆</mu-button>
            </router-link>
        </main>
    </div>
</template>
<script>
import pageHeader from '../components/PageHeader/PageHeader'
export default {
    name: 'setpassword',
    data() {
        return {
            title: '设置密码',
            pwd: "",
            visibility: false,
            pwdErr: "123",
            value13: '',
            value14: ''
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
    width: 100%;
}
</style>
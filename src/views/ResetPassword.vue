<template>
    <div>
        <header>
            <pageHeader :title="title"></pageHeader>
        </header>
        <main>
            <mu-text-field
            v-model="value13"
            label="请设置新密码"
            label-float
            error-text="您输入的密码不够安全，请慎重"
            icon=":iconfont iconmima"
            :type="visibility ? 'text' : 'password'"
            >
            <div slot="append">
                <mu-icon value=":iconfont iconbiyan"></mu-icon>
                </div>
            </mu-text-field>
            <mu-text-field
                v-model="value14"
                label="请确认密码"
                label-float
                error-text="您两次输入的密码不用，请重新输入"
                icon=":iconfont iconmima"
                :action-icon="visibility ? 'visibility_off' : 'visibility'"
                :action-click="() => (visibility = !visibility)"
                :type="visibility ? 'text' : 'password'"
                ></mu-text-field>
                <mu-button round class="login-btn" color="success">修&nbsp;改&nbsp;并&nbsp;登&nbsp;陆</mu-button>
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
}
.iconbiyan {
    margin-right: 8px;
    font-size: 20px;
}
.login-btn{
    background: linear-gradient(to right, #e99317 , #fbb830) !important;
    margin-top: 40px;
    width: 80%;
}
</style>
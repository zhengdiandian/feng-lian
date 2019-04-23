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
            v-model="value13"
            label="请输入您的手机号码"
            label-float
            error-text="您输入的手机号码有误，请重新输入"
            icon=":iconfont iconmima"
            >
            </mu-text-field>
            <mu-text-field
                v-model="value14"
                label="请输入验证码"
                label-float
                error-text="您输入的验证码有误，请重新输入"
                icon=":iconfont iconmima"
                >
                <div slot="append">
                    <div style="color: #347fe8" >获取验证码</div>
                </div>
                </mu-text-field>
                <mu-button round class="login-btn" color="success">完&nbsp;成</mu-button>
        </main>
    </div>
</template>
<script>
import pageHeader from '../components/PageHeader/PageHeader'
export default {
    name: 'forgetpassword',
    data() {
        return {
            title: '忘记密码',
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
.login-btn{
    background: linear-gradient(to right, #e99317 , #fbb830) !important;
    margin-top: 85px;
    width: 80%;
}
.mu-input.has-icon{
    padding: 25px 30px 0px 40px;
}
</style>

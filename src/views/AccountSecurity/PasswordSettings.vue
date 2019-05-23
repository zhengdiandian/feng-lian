<template>
    <div>
        <header>
            <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
                <mu-button icon slot="left" @click="$router.go(-1)">
                <mu-icon value=":iconfont iconfanhui"></mu-icon>
                </mu-button>
                密码设置
                <mu-button icon slot="right"  :ripple="false">
                </mu-button>
            </mu-appbar>
        </header>
        <main>
            <section class="main-top">
                <div>设置蜂链账号密码可以更好的保证您的资金与财产安全。</div>
                <span>温馨提示：请勿将您的账号密码泄露给他人</span>
            </section>
            <section class="main-input">
                <div class="rule margin-left">
                    <span class="width-left">手机号：</span><span ><input type="text" v-model="phone"></span>
                    <!-- <mu-divider></mu-divider> -->
                </div>
                <div class="rule margin-left">
                    <span class="width-left">旧密码：</span><span ><input type="text" v-model="oldpwd" placeholder="请填写旧密码"></span>
                    <!-- <mu-divider></mu-divider> -->
                </div>
                <div class="rule margin-left">
                    <span class="width-left">新密码：</span><span ><input type="text" v-model="newpwd" placeholder="请输入新密码"></span>
                    <!-- <mu-divider></mu-divider> -->
                </div>
                <div class="rule margin-left">
                    <span class="width-left">确认密码：</span><span ><input type="text" v-model="confirmpwd" placeholder="请再次输入新密码"></span>
                    <!-- <mu-divider></mu-divider> -->
                </div>
            </section>
            <section class="footer-text">
                <div class="text">密码规则：</div>
                <div class="text1">1、密码必须至少6位字符，包含数字、字母、符号、特殊符号除外；</div>
                <div class="text2">2、密码中不可有5位以上包含5位的连续相同字符</div>
            </section>
            <section class="forget" @click="$router.push('/forgetPassword')">忘记密码</section>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'PasswordSettings',
        data() {
            return {
                phone: '',
                oldpwd: '',
                newpwd: '',
                confirmpwd: ''
            }
        },
    }
</script>

<style lang="scss" scoped>
main{
    padding-top: 60px;
    .main-top{
        padding-left: 12px;
        font-size: $f14;
        color: #707070;
        &>div{
            padding-bottom: 5px;
        }
    }
}
.main-input{
    background-color: #fff;
    padding-top: 20px;
}
.rule{
    overflow: hidden;
    line-height: 50px;
    position: relative;
    box-sizing: content-box;
    border-bottom: .5px solid $c-hui;
    span{
        height: 100%;
    }
    input{
    flex: 2;
    height: 100%;
    width: 249px;
    outline: none;
    border: none;
    }
    .width-left{
    display: inline-block;
    width: 80px;
}
}
.footer-text{
    padding-left: 12px;
    padding-top: 12px;
    color: #707070;
    .text{
        font-weight: 600;
        font-size: $f15;
        padding-bottom: 12px;
    }
}
.forget{
    margin-top: 12px;
    margin-left: 14px;
    width:59px;
    height:21px;
    font-size: $f14;
    color: #F8B62D;
    border-bottom: 1px solid #F8B62D;
}
</style>
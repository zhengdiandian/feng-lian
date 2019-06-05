<template>
    <div>
        <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
          <mu-button icon slot="left" @click="$router.go(-1)">
            <mu-icon value=":iconfont iconfanhui"></mu-icon>
          </mu-button>
          <span v-if="id == 0" class="text">设置提现密码</span>
          <!-- 未设置 -->
          <span v-if="id == 1" class="text">修改提现密码</span>
          <!-- 已设置 -->
          <span v-if="forget" class="text">修改提现密码</span>
          <span v-if="newpwd" class="text">修改提现密码</span>
          <span v-if="again" class="text">修改提现密码</span>
          <span v-if="getpwd || forgetagain" class="text">修改提现密码</span>
          <mu-button icon slot="right" :ripple="false">
          </mu-button>
        </mu-appbar>
        <main>
            <div class="pwd-text">
                <span v-if="id == 0" class="text">设置支付密码</span>
                <span v-if="id == 1" class="text">请输入当前密码</span>
                <span v-if="newpwd"  class="text">请输入新密码</span>
                <span v-if="again"  class="text">再次输入</span>
                <span v-if="getpwd"  class="text">请输入新密码</span>
                <span v-if="forgetagain"  class="text">再次输入</span>
                <div class="phone-text" v-if="forget">
                    <div v-if="forgetText">我们已发送短信验证码到你的手机号</div>
                    <span>{{userInfo.account}}</span>
                </div>
                
            </div>
        </main>
        <!-- <pay></pay> -->
        <div class="input">
            <div v-for="(item,index) in inputList" :key="index">
                <input type="password" v-model="item.val" maxlength="1"  class="border-input" @keyup="nextFocus($event,index)">
            </div>
        </div>

        <div class="Tips" v-if="tips">
            <div>温馨提示：</div>
            <span>请妥善保管您的支付密码</span>
        </div>
        <section v-if="id == 1" class="forget" @click="forgetpwd">忘记密码</section>

        <div class="forgetTrue" @click="Getcode" v-if="forgetcode">
            <span>获取验证码</span>
        </div>

        <footer>
            <button v-if="id == 0 && inpuVal.length == 6" style="background: #EFA220" @click="NewInputPwd">完成</button>
            <!-- //设置新的提现密码 -->
            <button v-if="id == 0 && inpuVal.length !== 6 " style="background: #707070">完成</button>
            <!-- //设置新的提现密码 -->


            <button v-if="id == 1 && inpuVal.length == 6" style="background: #EFA220" @click="inputopen">下一步</button>
            <!-- 输入旧的密码 -->
            <button v-if="id == 1 && inpuVal.length !== 6 " style="background: #707070" >下一步</button>
            <!-- 输入新的密码 -->
            <button v-if="newpwd" style="background: #EFA220" @click="inputNext">下一步</button>
            <!-- 重新输入新的密码 -->
            <button v-if="again" style="background: #EFA220" @click="becomeInput">完成</button>
            <!-- // 修改的新密码 -->



            <!-- 忘记密码、修改提现密码 -->
            <button v-if="forget && inpuVal.length !== 6 " style="background: #707070" >下一步</button>
            <button v-if="forget && inpuVal.length == 6" style="background: #EFA220" @click="inputNext2">下一步</button>
            <!-- 忘记密码 -->
            <button v-if="getpwd" style="background: #EFA220" @click="getpwdClick">下一步</button>
            <button v-if="forgetagain" style="background: #EFA220" @click="forgetagainClick">完成</button>
        </footer>
    </div>
</template>

<script>
import { timingSafeEqual } from 'crypto';
 import { mapState } from 'vuex'
    export default {
        name: 'withdrawalPassword',
        data() {
            return {
                inputList: [{val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}],
                pwd: false,
                id: this.$route.query.id,
                newpwd: false, //新密码开关
                again: false, // 再次输入开关
                tips: true, // 温馨提示开关
                forget: false, // 忘记提现密码开关
                forgetText: false, // 已发送文本开关
                forgetcode: false, // 获取验证码开关
                getpwd: false, //忘记密码 - 输入新密码
                forgetagain: false, //忘记密码 - 再次输入-完成
                oldPwd: '',   //旧密码
                currentPwd: '', //当前密码
                againNewPwd1: '', //新密码
                againNewPwd2: '', //确认新密码
                forgetpassword: '', //验证码
                pwdtoken: ''
            }
        },
        methods: {
            // inputChange() {
            //     if(inputList[5].val !== '')return
            // },
            nextFocus(el,index) {
                var dom = document.getElementsByClassName("border-input"),
                    currInput = dom[index],
                    nextInput = dom[index + 1],
                    lastInput = dom[index - 1];
                /*这里的keyCode 根据不同的平台或许不同,安卓就是不是8*/
                if (el.keyCode != 8) {
                    if (index < (this.inputList.length - 1)) {
                        nextInput.focus();
                    } else {
                        currInput.blur();
                    }
                }else{
                    if (index !=0) {
                        lastInput.focus();
                    }
                }
            },
            NewInputPwd(){ //设置新密码
                console.log(this.inpuVal)
                if (this.inpuVal.length == 6) {
                    this.$axios.post('v1/finance/account/setWithdrawPwd',{
                        "withdrawPwd": this.inpuVal
                    }).then(res=>{
                        console.log(res)
                    })
                }
                this.$router.push('/AccountSecurity')
            },
            inputopen() { //旧密码
                this.oldPwd = this.inpuVal
                console.log('旧密码',this.oldPwd)
                if (this.inpuVal.length !== 6) {
                    this.$toast.error('请输入六位数的密码');
                }
                if (this.inpuVal.length == 6) {
                    this.id = 2
                    this.newpwd = true
                    this.inputList[0].val = ''
                    this.inputList[1].val = ''
                    this.inputList[2].val = ''
                    this.inputList[3].val = ''
                    this.inputList[4].val = ''
                    this.inputList[5].val = ''
                }
            },
            inputNext() { //新密码
                if (this.inpuVal.length == 6) {
                    this.newpwd = false
                    this.again = true
                    this.againNewPwd1 = this.inpuVal
                    console.log('新密码a',this.againNewPwd1)
                    this.inputList[0].val = ''
                    this.inputList[1].val = ''
                    this.inputList[2].val = ''
                    this.inputList[3].val = ''
                    this.inputList[4].val = ''
                    this.inputList[5].val = ''
                }
            },
            becomeInput() { //从旧密码到完成新密码
                this.againNewPwd2 = this.inpuVal
                console.log('新密码b',this.againNewPwd2)
                if (this.againNewPwd2 !== this.againNewPwd1) {
                    this.$toast.error('您输入的密码不一致');
                    return
                }
                this.$axios.post('/v1/finance/account/updateOldWithdrawPwd',{ //修改提现密码接口
                    "oldPwd": this.oldPwd,
                    "newPwd": this.againNewPwd2
                }).then(res=> {
                    if (res.data.code !==200) {
                        this.$toast.error(res.data.msg)
                        return
                    }
                    if (res.data.code === 200) {
                        this.$toast.success('修改成功')
                        this.$router.push('/AccountSecurity')
                    }
                })
            },
            forgetpwd() { //忘记密码事件
                this.id = 2,
                this.forget = true,
                this.tips = false,
                this.forgetcode = true,
                this.inputList[0].val = ''
                this.inputList[1].val = ''
                this.inputList[2].val = ''
                this.inputList[3].val = ''
                this.inputList[4].val = ''
                this.inputList[5].val = ''
            },
            // inputopen(){
            //     this.inpuVal = this.inputList[0].val + this.inputList[1].val + this.inputList[2].val + this.inputList[3].val + this.inputList[4].val + this.inputList[5].val
            //     console.log(this.inpuVal)
            // }

            Getcode() {
                this.forgetText = true
                this.forgetcode = false
                this.$axios.post('/v1/manage/common/sendMsg',{
                    "account": this.userInfo.account,
                    "type": 4
                }).then(res=> {
                    if (res.data.code !==200) {
                        this.$toast.error(res.data.msg)
                        return
                    }
                    console.log(res.data.data.token)
                    this.pwdtoken = res.data.data.token
                    console.log(this.pwdtoken)
                })
            },

            inputNext2() { //再次输入
                if (this.forgetcode == true) {
                    this.$toast.error('请获取验证码');
                    return
                }
                this.forgetpassword = this.inpuVal
                console.log('验证码',this.forgetpassword)
                if (this.forgetpassword.length !== 6 ) {
                    this.$toast.error('请输入正确的验证码');
                    return
                }
                if (this.forgetpassword.length == 6) {
                    this.forget = false
                    this.getpwd = true
                    this.tips = true
                    this.inputList[0].val = ''
                    this.inputList[1].val = ''
                    this.inputList[2].val = ''
                    this.inputList[3].val = ''
                    this.inputList[4].val = ''
                    this.inputList[5].val = ''
                }
            },
            getpwdClick() {
                this.againNewPwd1 = this.inpuVal
                console.log('忘记密码-输入新的密码',this.againNewPwd1)
                this.inputList[0].val = ''
                this.inputList[1].val = ''
                this.inputList[2].val = ''
                this.inputList[3].val = ''
                this.inputList[4].val = ''
                this.inputList[5].val = ''
                this.getpwd = false
                this.forgetagain = true
            },
            forgetagainClick(){
                this.againNewPwd2 = this.inpuVal
                console.log('忘记密码-再次输入',this.againNewPwd1)
                if (this.againNewPwd2 !== this.againNewPwd1) {
                    this.$toast.error('您输入的密码不一致');
                    return
                }
                this.$axios.post('/v1/finance/account/updateWithdrawPwd',{ //忘记提现密码接口
                    "withdrawPwd": this.againNewPwd2,
                    "smsCode": this.forgetpassword,
                    "token": this.pwdtoken
                }).then(res=> {
                    if (res.data.code !==200) {
                        this.$toast.error(res.data.msg)
                        return
                    }
                    if (res.data.code === 200) {
                        this.$toast.success('修改成功')
                        this.$router.push('/AccountSecurity')
                    }
                })
            },
            
        },
        computed: {
            inpuVal() {
                return this.inputList[0].val + this.inputList[1].val + this.inputList[2].val + this.inputList[3].val + this.inputList[4].val + this.inputList[5].val
            },
            ...mapState(['userInfo']),
        }
    }
</script>

<style lang="scss" scoped>
main{
    padding-top: 60px;
    padding-bottom: 12px;
}
.phone-text{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &>div{
        font-size: $f14;
        padding-bottom: 10px;
    }
    &>span{
        font-size: 24px;
        text-align: center;
    }
}
.pwd-text{
    width:375px;
    height:90px;
    background:$c-bai;
    display: flex;
    justify-content: center;
    align-items: center;
    .text{
        font-size:24px;
        font-weight:400;
        color: #333333;
    }
}
.Tips{
    padding-left: 12px;
    padding-top: 25px;
    &>div{
        font-size:15px;
        font-weight: 400;
        padding-bottom: 13px;
    }
    &>span{
        font-size:14px;
        font-weight:400;
        color: #707070;
    }
}
footer{
    position: fixed;
    bottom: 0;
    left: 0;
    button{
        width:375px;
        height:50px;
        background: $c-cheng;
        color: $c-bai;
        outline: none;
        border: none;
    }
}
.input{
    display: flex;
    justify-content: center;
    input{
        width: 40px;
        height: 40px;
        border: 1px solid black;
        text-align: center;
        margin-left: 5px;
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
.forgetTrue{
    width: 100%;
    padding-top: 20px;
    color: $c-cheng;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        border-bottom: 1px solid $c-cheng;
        padding-bottom: 2px;
    }
}
</style>
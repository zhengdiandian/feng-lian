<template>
    <div>
        <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
          <mu-button icon slot="left" @click="$router.go(-1)">
            <mu-icon value=":iconfont iconfanhui"></mu-icon>
          </mu-button>
          <span v-if="id == 1" class="text">设置提现密码</span>
          <span v-if="id == 2" class="text">修改提现密码</span>
          <span v-if="newpwd" class="text">修改提现密码</span>
          <span v-if="again" class="text">修改提现密码</span>
          <mu-button icon slot="right" :ripple="false">
          </mu-button>
        </mu-appbar>
        <main>
            <div class="pwd-text">
                <span v-if="id == 1" class="text">设置支付密码</span>
                <span v-if="id == 2" class="text">请输入当前密码</span>
                <span v-if="newpwd"  class="text">请输入新密码</span>
                <span v-if="again"  class="text">再次输入</span>
            </div>
        </main>
        <!-- <pay></pay> -->
        <div class="input">
            <div v-for="(item,index) in inputList" :key="index">
                <input type="password" v-model="item.val" maxlength="1"  class="border-input" @keyup="nextFocus($event,index)">
            </div>
        </div>

        <div class="Tips">
            <div>温馨提示：</div>
            <span>请妥善保管您的支付密码</span>
        </div>
        <section v-if="id == 2" class="forget">忘记密码</section>
        <footer>
            <button v-if="id == 1 && inpuVal.length == 6" style="background: #EFA220" @click="NewInputPwd">完成</button>
            <!-- //设置新的提现密码 -->
            <button v-if="id == 1 && inpuVal.length !== 6 " style="background: #707070">完成</button>
            <!-- //设置新的提现密码 -->
            <button v-if="id == 2 && inpuVal.length == 6" style="background: #EFA220" @click="inputopen">下一步</button>
            <!-- 输入旧的密码 -->
            <!-- //修改提现密码 -->
            <button v-if="id == 2 && inpuVal.length !== 6 " style="background: #707070" >下一步</button>
            <!-- 输入新的密码 -->
             <!-- //修改提现密码 -->
            <button v-if="newpwd" style="background: #EFA220" @click="inputNext">下一步</button>
            <!-- 重新输入新的密码 -->
            <!-- // 修改的新密码 -->
            <button v-if="again" style="background: #EFA220" @click="becomeInput">完成</button>
            <!-- // 修改的新密码 -->
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'withdrawalPassword',
        data() {
            return {
                inputList: [{val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}],
                pwd: false,
                id: this.$route.params.id,
                newpwd: false,
                again: false,
                againNewPwd1: '',
                againNewPwd2: ''
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
            NewInputPwd(){
                console.log(this.inpuVal)
                this.$router.push('/AccountSecurity')
            },
            inputopen() {
                if (this.inpuVal.length !== 6) {
                    this.$toast.error('请输入六位数的密码');
                }
                if (this.inpuVal.length == 6) {
                    this.id = 0
                    this.newpwd = true
                    this.inputList[0].val = ''
                    this.inputList[1].val = ''
                    this.inputList[2].val = ''
                    this.inputList[3].val = ''
                    this.inputList[4].val = ''
                    this.inputList[5].val = ''
                }
            },
            inputNext() {
                if (this.inpuVal.length == 6) {
                    this.newpwd = false
                    this.again = true
                    this.againNewPwd1 = this.inpuVal
                    console.log(this.againNewPwd1)
                    this.inputList[0].val = ''
                    this.inputList[1].val = ''
                    this.inputList[2].val = ''
                    this.inputList[3].val = ''
                    this.inputList[4].val = ''
                    this.inputList[5].val = ''
                }
            },
            becomeInput() {
                this.againNewPwd2 = this.inpuVal
                console.log(this.againNewPwd2)
                if (this.againNewPwd2 == this.againNewPwd1) {
                    this.$router.push('/AccountSecurity')
                }else{
                    this.$toast.error('您输入的密码不一致');
                    return
                }
            }
            // inputopen(){
            //     this.inpuVal = this.inputList[0].val + this.inputList[1].val + this.inputList[2].val + this.inputList[3].val + this.inputList[4].val + this.inputList[5].val
            //     console.log(this.inpuVal)
            // }
        },
        computed: {
            inpuVal() {
                return this.inputList[0].val + this.inputList[1].val + this.inputList[2].val + this.inputList[3].val + this.inputList[4].val + this.inputList[5].val
            }
        }
    }
</script>

<style lang="scss" scoped>
main{
    padding-top: 60px;
    padding-bottom: 12px;
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
</style>
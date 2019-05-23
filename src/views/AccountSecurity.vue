<template>
    <div>
      <div class="title page-margin-top">
        <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
          <mu-button icon slot="left" @click="$router.go(-1)">
            <mu-icon value=":iconfont iconfanhui"></mu-icon>
          </mu-button>
          账号与安全
          <mu-button icon slot="right" :ripple="false">
          </mu-button>
        </mu-appbar>
      </div>
        <main>
            <div class="setList">
                    <span class="version-number">蜂链ID</span>
                    <span class="numberID">{{ID}}</span>
            </div>
            <div>
                <!-- <div class="setList" @click="$router.push('/replacePhone')">
                    <span class="version-number">手机号</span>
                    <span class="number">{{infor.account}}</span>
                    <mu-icon value=":iconfont iconyou1"></mu-icon>
                </div> -->
                <div class="setList" @click="$router.push('/PasswordSettings')">
                    <span class="version-number">登陆密码设置</span>
                    <span class="state">已设置</span>
                    <mu-icon value=":iconfont iconyou1"></mu-icon>
                </div>
                <div class="setList" @click="$router.push({name: 'withdrawalPassword', params: {id: '2'}})">
                    <span class="version-number">提现密码设置</span>
                    <span class="state">已设置</span>
                    <mu-icon value=":iconfont iconyou1"></mu-icon>
                </div>
            </div>
            <!-- <div style="margin-top: 10px;">
                <div class="setList">
                    <span>账号与安全</span>
                    <mu-icon value=":iconfont iconyou1"></mu-icon>
                </div>
                <div class="setList">
                    <span>账号与安全</span>
                    <mu-icon value=":iconfont iconyou1"></mu-icon>
                </div>
            </div>
            <div style="margin-top: 10px;">
                <div class="setList">
                    <span>账号与安全</span>
                    <span style="float: right;">1.0.0.1</span>
                </div>
            </div> -->
            <!--<button class="setBtn">解除绑定</button> -->
            <!-- <button class="setBtn" @click="quit">安全退出</button> -->
        </main>
    </div>
</template>
<script>
import pageHeader from '../components/PageHeader/PageHeader'
export default {
    name: 'AccountSecurity',
    data() {
        return {
            infor: [],
            ID: ''
        }
    },
    components: {
        pageHeader
    },
    methods: {
        // quit(){
        //     localStorage.clear()
        //     this.$router.replace('/home')
        // }
    },
    created() {
        this.$axios.post('v1/user/info/index').then(res=>{
          if(res.data.code !==200){
            this.$toast.error(res.data.msg)
            return
            }
            this.infor = res.data.data
            console.log(this.infor)
      })
      this.$axios.post('v1/user/info/personalInfo').then(res=>{
          if(res.data.code !==200){
            this.$toast.error(res.data.msg)
            return
            }
            this.ID = res.data.data.userCode
      })
    }

}
</script>
<style lang="scss" scoped>
main{
    padding-top: 12px;
}
.setList {
    width:375px;
    height:44px;
    background:rgba(255,255,255,1);
    line-height: 44px;
    // margin-top: 6px;
    .version-number{
        display: inline-block;
        // width:50px;
        line-height:12px;
        font-size:$f14;

        font-weight:400;
        color:rgba(51,51,51,1);
        margin-left: 15px;
    }
    .number{
        width:38px;
        height:9px;
        font-size:$f14;
        font-weight:400;
        color:rgba(51,51,51,1);
        margin-right: 12px;
    }
    .iconyou1{
        position: absolute;
        right: 12px;
        color: $c-cheng;
    }
    .state{
        position: absolute;
        right: 40px;
    }
    .number{
        position: absolute;
        right: 75px;
    }
    .numberID{
        position: absolute;
        right: 12px;
    }
}
.setBtn{
    width:375px;
    height:44px;
    background:rgba(255,255,255,1);
    border: none;
    outline: none;
    margin-top: 10px;
    font-size:$f14;

}
</style>

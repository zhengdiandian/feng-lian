<template>
    <div>
      <div class="title page-margin-top">
        <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
          <mu-button icon slot="left" @click="$router.push('/my')">
            <mu-icon value=":iconfont iconfanhui"></mu-icon>
          </mu-button>
          设置
          <mu-button icon slot="right" :ripple="false">
          </mu-button>
        </mu-appbar>
      </div>
        <main>
            <div class="setList">
                    <span class="version-number">当前版本</span>
                    <span class="number" style="float: right;">1.0.0.1</span>
            </div>
            <div style="margin-top: 10px;">
                <div class="setList" @click="$router.push('/HelpCenter')">
                    <span class="version-number">帮助中心</span>
                    <mu-icon value=":iconfont iconyou1"></mu-icon>
                </div>
                <div class="setList" @click="$router.push({name: 'UnderstandUs',params:{title: '关于蜂链'}})">
                    <span class="version-number">关于蜂链</span>
                    <mu-icon value=":iconfont iconyou1"></mu-icon>
                </div>
                <div class="setList" @click="$router.push('/AccountSecurity')">
                    <span class="version-number">账号与安全</span>
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
            <button class="setBtn" @click="quit">安全退出</button>
        </main>
    </div>
</template>
<script>
import pageHeader from '../components/PageHeader/PageHeader'
export default {
    name: 'setup',
    data() {
        return {
        }
    },
    components: {
        pageHeader
    },
    methods: {
        quit(){
            localStorage.clear()
            this.$router.replace('/home')
        }
    }

}
</script>
<style lang="scss" scoped>
.setList {
    width:375px;
    height:44px;
    background:rgba(255,255,255,1);
    line-height: 44px;
    margin-top: 6px;
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
        float: right;
        padding-right: 12px;
        color: $c-cheng;
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

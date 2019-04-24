<template>
    <div class="card">
        <header>
            <nav>
                <mu-icon value=":iconfont iconfanhui" @click="open"></mu-icon>
                <div class="title">{{title}}</div>
            </nav>
        </header>
        <main>
            <div class="head-name">
                <section class="hear-infor">
                    <img :src="code.headPortrait" alt="">
                    <div>
                        <span style="font-size:14px;">{{code.nickname}}</span>
                        <span style="display: inline-block; width:50px;height:20px;text-align: center;color: #fff;margin-left: 5px;background:rgba(239,162,32,1);border:1px solid rgba(255,255,255,1); line-height: 20px;" >{{code.state == 100 ? '未认证':'已认证'}}</span>
                    </div>
                    <span style="color:rgba(112,112,112,1);">{{code.motto}}</span>
                </section>
                <section class="code">
                    <img src="../assets/PNG/中青年.png" alt="">
                </section>
                <section class="preservation">
                    <span class="margin-top margin-bottom" style="color: #EFA220">保存二维码</span>
                    <span style="font-weight:bold;">我的邀请码：{{code.inviteCode}}</span>
                </section>
            </div>
        </main>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'qrcode',
    data() {
        return {
           title: '我的二维码',
           name: 'Bryant.zZ',
           stata: '已实名',
           autograph: '海内存知己，天涯若比邻',
           imgUrl: require('../assets/PNG/head.png'),
           code: [],
        }
    },
    methods: {
        open() {
            this.$router.go(-1)
        }
    },
    mounted(){
        this.$axios.post('/v1/user/user/myQrcode').then((res)=>{
            this.code = res.data.data
            console.log(res)
        })
    }
}
</script>
<style scoped lang="scss">
html,body{
    width: 100%;
    height: 100%;
}
.card{
    width: 375px;
    height: 100%;
    background: url("../assets/PNG/codebackground.png") center no-repeat;
    background-size: 100% 100%;
}
nav {
    width: $gw;
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    color: #fff;
    .iconfanhui{
        font-size: 20px;
        margin-left: 5px;
        position: absolute;
        left: 12px;
    }
    .title {
        span{
            width:62px;
            height:14px;
            font-size:15px;
            font-family:SourceHanSansCN-Normal;
            font-weight:bold;
            color:rgba(51,51,51,1);
        }
    }
}
main{
    width: 100%;
    .head-name{
        height: 150px;
        .hear-infor{
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 16%;
            left: 50%;
            transform: translate(-50%, -16%);
            text-align: center;
            img{
            width:75px;
            height:75px;
            background:rgba(255,255,255,1);
            border:2px solid rgba(255,255,255,1);
            border-radius:50%;
            position: relative;
            left: 30px;
        }
        }
        
    }
    .code{
        width:180px;
        height:180px;
        background:rgba(255,255,255,1);
        border:10px solid rgba(255,162,228,1);
        opacity:0.5;
        margin: auto;
        margin-top: 180px;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.preservation{
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
}
</style>

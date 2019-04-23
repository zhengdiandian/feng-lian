<template>
<div>
    <header>
        <nav>
            <span style="display: inline-block; width: 20px; height: 50px; text-align: center; line-height: 50px; " @click="returnx"><mu-icon value=":iconfont iconfanhui"></mu-icon></span>
            
            <div class="title">{{title}}</div>
        </nav>
        <div class="reward">
            <span style="width:57px;height:26px;font-size:36px;font-family:SourceHanSansCN-Normal;font-weight:bold;color:rgba(255,255,255,1);">670</span>
            <div style="letter-spacing:3px;font-size:12px;font-family:SourceHanSansCN-Normal;color:rgba(255,255,255,1); padding-top: 25px;">近7天获得奖励{{20}}元</div>
        </div>
    </header>
    <main>
        <div class="historical-bill">历史账单</div>
        <div>
            <div style="height:11px;font-size:11px;font-family:SourceHanSansCN-Normal;font-weight:400;color:rgba(51,51,51,1); margin: 6px 0 6px 12px">2019年4月</div>
            <div style="height:11px;font-size:11px;font-family:SourceHanSansCN-Normal;font-weight:400;color:rgba(51,51,51,1); margin: 6px 0 6px 12px">共获得￥80.00</div>
            <div class="reward-money">
                <div class="headimg"><img src="../assets/PNG/分享头像.png" alt=""></div>
                <div style="display: flex; flex-direction: column; font-size:12px;font-family:SourceHanSansCN-Normal;color:rgba(51,51,51,1); margin-left: 12px;">
                    <span style="font-weight:bold;">大兵</span>
                    <span > 4月9日 0000</span>
                </div>
                <div class="right">
                    <span>+20.00元</span>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <button @click="open">提现</button>
    </footer>
    <div class="show" v-if="show">
        <div class="show-main">
            <div style="width: 100%;  height: 120px;  display: flex;justify-content: center;align-items: center;"><span>您还没有绑定银行卡</span></div>
            <div style="position: absolute;bottom: 0; width: 100%;">
                <input style="color: #707070" type="button" value="再等等" @click="out">
                <input style="color: #4999f5" type="button" value="现在绑卡">
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'myreward',
    data() {
        return {
            title: '我的奖励',
            show: false
        }
    },
    methods: {
        returnx() {
            this.$router.go(-1)
        },
        open() {
            this.show = true
        },
        out() {
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped lang="scss">
header{
    width:375px;
    height:152px;
    background:rgba(242,181,77,1);
    background-image: url('../assets/PNG/我的奖励背景.png');
    nav{
        display: flex;
        height: 50px;
        align-items: center;
        justify-content: center;
        .iconfanhui{
            font-size: 20px;
            color: white;
        }
        .title{
            width: 95%;
            text-align: center;
            color: white;
            margin-left: -20px;
        }
    }
    .reward{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 15px;
    }
}
.historical-bill{
    width:375px;
    height:44px;
    background:rgba(255,255,255,1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px 0 10px 0;
}
.reward-money{
    width:375px;
    height:50px;
    background:rgba(255,255,255,1);
    display: flex;
    align-items: center;
    position: relative;
    .headimg{
        width: 33px;
        height: 33px;
        background: #ccc;
        border-radius: 50%;
        margin-left: 12px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
.right{
    position: absolute;
    right: 20px;
}
.show {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.show-main{
    width: 90%;
    height: 180px;
    background: #fff;
    opacity: 1;
    text-align: center;
    position: relative;
    span{
        display: inline-block;
        width: 150px;
        margin-top: 40px;
    }
    input{
        font-size: 12px;
        width: 50%;
        height: 40px;
        border: none;
        background: none;
        outline: none;
    }
    input:active{
        background-color: #cccccc;
    }
}
footer{
    position: absolute;
    bottom: 0;
    button{
        width:375px;
        height:49px;
        background:rgba(239,162,32,1);
        margin: auto;
        border: none;
        outline: none;
    }
}
</style>

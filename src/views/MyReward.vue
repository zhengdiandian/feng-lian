<template>
<div>
    <header>
        <nav>
            <mu-icon value=":iconfont iconfanhui" @click="openReturn"></mu-icon>
            <div class="title" style="font-size: 16px;">{{title}}</div>
        </nav>
        <div class="reward">
            <span style="height:26px;font-size:36px;color:rgba(255,255,255,1);">{{reward.withdrawBalance}} <span style="font-size:12px">元</span> </span>
            <div style="font-size:12px;font-family:SourceHanSansCN-Normal;color:rgba(255,255,255,1); padding-top: 40px; padding-bottom: 20px;">
                可提现金额{{reward.totalBalance}}元
            </div>
        </div>
    </header>
    <main>
        <div class="historical-bill">历史账单</div>
        <div>
            <div style="height:11px;font-size:11px;font-family:SourceHanSansCN-Normal;font-weight:400;color:rgba(51,51,51,1); margin: 6px 0 6px 12px">{{date.lastMonth.date}}</div>
            <div style="height:11px;font-size:11px;font-family:SourceHanSansCN-Normal;font-weight:400;color:rgba(51,51,51,1); margin: 6px 0 6px 12px">共获得￥{{date.lastMonth.totalAmount}}</div>
            <div class="reward-money">
                <div class="headimg"><img :src="lastMonth.icon" alt=""></div>
                <div style="display: flex; flex-direction: column; font-size:12px;font-family:SourceHanSansCN-Normal;color:rgba(51,51,51,1); margin-left: 12px;">
                    <span style="font-weight:bold;">{{lastMonth.contacs}}</span>
                    <span > {{lastMonth.profitDate}}</span>
                </div>
                <div class="right">
                    <span>+{{lastMonth.profitAmount}}元</span>
                    <!-- <span>-{{lastMonth.profitAmount}}元</span> -->
                </div>
            </div>
        </div>
        <div>
            <div style="height:11px;font-size:11px;font-family:SourceHanSansCN-Normal;font-weight:400;color:rgba(51,51,51,1); margin: 6px 0 6px 12px">{{date.thisMonth.date}}</div>
            <div style="height:11px;font-size:11px;font-family:SourceHanSansCN-Normal;font-weight:400;color:rgba(51,51,51,1); margin: 6px 0 6px 12px">共获得￥{{date.lastMonth.totalAmount}}</div>
            <div class="reward-money">
                <div class="headimg"><img :src="thisMonth.icon" alt=""></div>
                <div style="display: flex; flex-direction: column; font-size:12px;font-family:SourceHanSansCN-Normal;color:rgba(51,51,51,1); margin-left: 12px;">
                    <span style="font-weight:bold;">{{thisMonth.contacs}}</span>
                    <span > {{thisMonth.profitDate}}</span>
                </div>
                <div class="right">
                    <span>+{{thisMonth.profitAmount}}元</span>
                    <!-- <span>-{{thisMonth.profitAmount}}元</span> -->
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
            <mu-divider></mu-divider>
            <div style="position: absolute;bottom: 0; width: 100%;">
                <input style="color: #707070" type="button" value="再等等" @click="show = false">
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
            show: false,
            reward: [],
            date: {},
            lastMonth: [],
            thisMonth:[]
        }
    },
    methods: {
        openReturn() {
            this.$router.go(-1)
        },
        open() {
            this.show = true
        },
        out() {
            this.$router.go(-1)
        }
    },
    mounted() {
        this.$axios.post('v1/finance/profit/profitList').then(res=>{
            this.reward = res.data.data
            this.date = res.data.data.list
            this.lastMonth = res.data.data.list.lastMonth.profitList
            this.thisMonth = res.data.data.list.thisMonth.profitList
            console.log(res.data.data.list)
        })
    }
}
</script>
<style scoped lang="scss">
header{
    // height: 155px;
    background-image: url('../assets/PNG/我的奖励背景.png');
    background-size: 100% 100%;
}
nav {
    width: $gw;
    height: 44px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    color: white;
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
            font-family:SourceHanSansCN-Normal;
            font-weight: bold;
            color:rgba(51,51,51,1);
        }
    }
}
.reward{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #ffffff;
        margin-top: 20px;
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
        overflow: hidden;
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
        border-right: .5px solid $c-hui;
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

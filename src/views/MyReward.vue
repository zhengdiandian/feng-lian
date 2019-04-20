<template>
<div>
    <header>
        <nav>
            <mu-icon value=":iconfont iconfanhui" @click="openReturn"></mu-icon>
            <div class="title">{{title}}</div>
        </nav>
        <div class="reward">
            <span style="font-size: 50px;">0</span>
            <span style="font-size: 14px;">近7天获得奖励{{20}}元</span>
        </div>
    </header>
    <main>
        <div class="historical-bill">历史账单</div>
        <div>
            <div>2019年4月</div>
            <div>共获得￥80.00</div>
            <div class="reward-money">
                <div class="headimg"><img src="" alt=""></div>
                <div style="display: flex; flex-direction: column;">
                    <span>大兵</span>
                    <span> 4月9日 0000</span>
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
                <input style="color: #707070" type="button" value="再等等">
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
        openReturn() {
            this.$router.go(-1)
        },
        open() {
            this.show = true
        },
    }
}
</script>
<style scoped lang="scss">
header{
    width: $gw;
    height: 200px;
    background-color: #eea31f;
    box-sizing: border-box;
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
        width: $gw;
        height: 160px;
        align-items: center;
        padding-top: 60px;
        color: white;
    }
}
.historical-bill{
    width: 100%;
    height: 50px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
.reward-money{
    width: 100%;
    height: 50px;
    background-color: #eea31f;
    display: flex;
    align-items: center;
    position: relative;
    .headimg{
        width: 30px;
        height: 30px;
        background: #ccc;
        border-radius: 50%;
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
        width: $gw;
        height: 50px;
        margin: auto;
        border: none;
        outline: none;
        background-color: red;
    }
}
</style>

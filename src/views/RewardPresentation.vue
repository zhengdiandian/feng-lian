<template>
    <div>
        <header>
            <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
                <mu-button icon slot="left" @click="$router.go(-1)">
                <span style="font-size: 12px;">取</span>
                <span style="font-size: 12px;">消</span>
                </mu-button>
                奖励提现
                <mu-button icon slot="right" >
                    <i class="iconfont iconshubanshenglvehao"></i>
                </mu-button>
            </mu-appbar>
        </header>
        <main style="padding-top: 60px;">
            <div class="Presentation">
                <section class="tation-top">
                    <div class="text">到账银行卡：</div>
                    <div class="top-img">
                        <img src="" alt="">
                    </div>
                    <div class="top-bank">
                        <div class="bank">中国银行</div>
                        <div class="last-number">尾号：{{1234}}</div>
                    </div>
                    
                    <div class="top-right">
                        <div @click="$router.push('/CardBag')">请选择</div>
                        <i class="iconfont iconyou1"></i>
                    </div>
                </section>
                <mu-divider></mu-divider>
                <section class="tation-and">
                    <div class="tationAmount">提现金额</div>
                    <div class="tation-and-input">
                        <div>￥</div><input type="text" name="" id="" v-model="Amount">
                    </div>
                </section>
                <section class="tation-down">
                    <div class="wholeAmount">
                        <span>可提现金额￥{{withdrawBalance}}，</span>
                        <span style="color:#f8b62d" @click="Amounts">全部提现</span>
                    </div>
                    <div  v-if="msg != ''" style="color:#FF0B0B;padding-bottom: 12px;">{{msg}}</div>
                    <div class="wholeAmount-btn">
                        <button class="wholeAmount-btn" @click="whole">提现</button>
                    </div>
                </section>
            </div>
        </main>
        <div style="margin-left: 12px; margin-top: 12px;color:#707070;font-size:12px">提现手续费为5元一笔，最低提现额为100元</div>
    </div>
</template>

<script>
    export default {
        name: 'RewardPresentation',
        data() {
            return {
                Amount: '',
                AmountErr: '',
                msg: '',
                withdrawBalance: ''
            }
        },
        methods: {
            whole() {
                this.$axios.post('/v1/finance/account/withdraw',{
                'amount': this.Amount,
                "cardId": 1
            }).then(res=>{
                console.log(res)
                if (res.data.code == 900) {
                    this.msg = res.data.msg
                }
            })
            },
            Amounts() {
                this.Amount = this.withdrawBalance
            }
        },
        created(){
            this.$axios.post('v1/finance/profit/profitList').then(res=>{
                this.withdrawBalance = res.data.data.withdrawBalance
            })
        }
    }
</script>

<style lang="scss" scoped>
#app>div{
    background-color: #f5f5f5;
}
.Presentation{
    width:351px;
    height:251px;
    background: $c-bai;
    margin: auto;
    // margin-top: 50px;
    .tation-top{
        height: 51px;
        display: flex;
        align-items: center;
        position: relative;
        font-size: 12px;
        .text{
            padding-left: 12px;
            // padding-right: 5px;
        }
        .top-img{
            width: 33px;
            height: 33px;
            background-color: $c-hui;
            border-radius: 50%;
            margin-right: 12px;
        }
        .top-bank{
            display: flex;
            flex-direction: column;
        }
        .top-right{
            position: absolute;
            right: 15px;
            display: flex;
            align-items: center;
        }
    }
    .tation-and{
        height: 100px;
        .tationAmount{
            padding: 12px;
        }
        .tation-and-input{
            display: flex;
            margin-left: 12px;
            // padding-top: 12px;
            position: relative;
            &>div{
                position: absolute;
                font-size: 25px;
                bottom: 0;
            }
            input{
                width: 100%;
                border: none;
                border-bottom: 1px solid $c-hui;
                outline: none;
                padding-left: 30px;
                font-size: 25px;
            }
        }
    }
    .tation-down{
        margin-top: -10px;
        margin-left: 12px;
        font-size: 12px;
        .wholeAmount{
            padding-bottom: 12px;
        }
        .wholeAmount-btn{
            width:260px;
            height:33px;
            background:$c-cheng;
            border-radius:17px;
            margin: auto;
            outline: none;
            border: none;
        }
    }
}
</style>
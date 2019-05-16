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
                    <div class="top-img" v-if="Bank.img">
                        <img :src="Bank.img" alt="">
                    </div>
                    <div class="top-bank" >
                        <div class="bank">{{Bank.bankName}}</div>
                        <div class="last-number">{{Bank.cardNo}}</div>
                    </div>
                    
                    <!-- <div class="top-right">
                        <div>请选择</div>
                        <i class="iconfont iconyou1"></i>
                    </div> -->
                </section>
                <mu-divider></mu-divider>
                <section class="tation-and">
                    <div class="tationAmount">提现金额</div>
                    <div class="tation-and-input">
                        <div>￥</div><input type="number" name="" id="" v-model="Amount">
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
        <div class="show" v-if="show_bind_card">
            <div class="show-main">
                <div style="width: 100%;  height: 120px;  display: flex;justify-content: center;align-items: center;"><span>您还没有绑定银行卡</span></div>
                <mu-divider></mu-divider>
                <div class="show-btn">
                    
                    <input style="color: #4999f5" type="button" value="返回检查" @click="$router.go(-1)">
                </div>
            </div>
        </div>

        <div class="show" v-if="show_success">
            <div class="show-main">
                <div style="width: 100%;  height: 120px;  display: flex;justify-content: center;align-items: center;"><span>你的提现申请已提交<br>请等待客服审核</span></div>
                <mu-divider></mu-divider>
                <div class="show-btn">
                    
                    <input style="color: #4999f5" type="button" value="好的" @click="$router.go(-1)">
                </div>
            </div>
        </div>
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
                withdrawBalance: '',
                Bank: {},
                show_bind_card: false,
                show_success: false,
            }
        },
        methods: {
            whole() {
                if (this.withdrawBalance < this.Amount) {
                    this.msg = '输入金额小于可提现金额';
                    return;
                }
                this.$axios.post('/v1/finance/account/withdraw',{
                'amount': this.Amount,
                "bindedNo": this.Bank.bindedNo
            }).then(res=>{
                console.log(res)
                if (res.data.code == 900) {
                    this.msg = res.data.msg
                }else if(res.data.code == 200){
                    this.show_success = true;
                }
            })
            },
            Amounts() {
                this.Amount = this.withdrawBalance
            }
        },
        created(){
            this.$axios.post('v1/finance/profit/profitList').then(res=>{
                this.withdrawBalance = res.data.data.withdrawBalance;
            })
            this.$axios.post('/v1/card/debitCard/getCardList').then(res=>{
                if(res.data.data.length > 0){
                    this.show_bind_card = false;
                    this.Bank =  res.data.data[0];
                }else{
                    this.show_bind_card = true;
                }
                
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
            img{
                width: 100%;
                height: 100%;
            }
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
            color: $c-bai;
        }
    }
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
    width: 65%;
    // height: 180px;
    background: #fff;
    opacity: 1;
    text-align: center;
    border: none;
    .show-btn{
        height: 50px;
    }
    span{
        display: inline-block;
        margin-top: 20px;
    }
    input{
        height: 100%;
        width: 50%;
        border: none;
        background: none;
        outline: none;
        border-right: .5px solid $c-hui;
    }
    input:active{
        background-color: #cccccc;
    }
}
</style>
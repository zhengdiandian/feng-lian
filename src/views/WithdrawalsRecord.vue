<template>
    <div>
        <header>
        <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
            <mu-button icon slot="left" @click="$router.go(-1)">
            <mu-icon value=":iconfont iconfanhui"></mu-icon>
            </mu-button>
            提现记录
            <mu-button icon slot="right"  :ripple="false">
            </mu-button>
        </mu-appbar>
        </header>
        <main style="padding-top: 60px;">
            <div class="iconkong" v-if=" record.length <= 0 || !record">
                <img src="../assets/空页面.png" alt="">
                <span>暂无数据</span>
            </div>
            <div class="Withdrawals" v-for="(item,i) in record" :key="i">
                <div class="Withdrawals-main">
                    <div class="top">
                        <div class="left">{{item.applyTime}}</div>
                        <div v-if="item.state == 100" class="right" style="color:#2DA4F8">{{item.stateDesc}}</div>
                        <div v-if="item.state == 200" class="right" style="color: #F8B62D">{{item.stateDesc}}</div>
                        <div v-if="item.state == 300" class="right" style="color: #F82D2D">{{item.stateDesc}}</div>
                    </div>
                    <div class="record">
                        <div class="record-img"><img :src="item.headPortrait" alt=""></div>
                        <div class="record-name">{{item.contacs}}</div>
                        <div class="AmountMoney">
                            <span>{{item.amount}}</span>
                            <span style="font-size: 14px;">元</span>
                        </div>
                    </div>
                        <div  class="remark" v-if="item.remark && item.state == 100" style="color:#2DA4F8">备注：{{item.remark}}</div>
                        <div class="remark" v-if="item.remark && item.state == 200" style="color: #F8B62D">备注：{{item.remark}}</div>
                        <div class="remark" v-if="item.remark && item.state == 300" style="color: #F82D2D">备注：{{item.remark}}</div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'WithdrawalsRecord',
        data() {
            return {
                record: []
            }
        },
        created() {
            this.$axios.post('/v1/finance/account/withdrawList',{
                "page": 1,
                "pageSize": 15
            }).then(res=>{
                if(res.data.code !==200){
<<<<<<< HEAD
                    this.$toast.error(res.data.msg)
                    return
                }
=======
                this.$toast.error(res.data.msg)
                return
          }
>>>>>>> b2d3a3e1d12421866f0cbd4d026eeb25221d3afe
                this.record = res.data.data
                // this.record.push(this.record[0]);//test
                console.log(this.record[0].state)
            })
        }
    }
</script>

<style lang="scss" scoped>
#app>div{
    background-color: #f5f5f5;
}
.iconkong{
    width: 100px;
    height: 100px;
    margin: auto;
    span{
        display: inline-block;
        width: 100px;
        height: 100px;
        text-align: center;
        color: #707070;
    }
    img{
        width: 100%;
        height: 100%;
    }
}
.Withdrawals{
    width: 95%;
    // height: 75px;
    margin: auto;
    background-color: $c-bai;
    margin-bottom: 10px;
    border-radius: 2px;
    .top{
        display: flex;
        height: 35px;
        line-height: 35px;
        border-bottom: 1px solid $c-hui;
        position: relative;
        .left{
            position: absolute;
            left: 12px;
            color: #707070;
        }
        .right{
            position: absolute;
            right: 12px;
        }
    }
    .record{
        display: flex;
        align-items: center;
        position: relative;
        .record-img{
            width:33px;
            height:33px;
            border-radius:50%;
            background-color: $c-hui;
            margin-left: 12px;
            overflow: hidden;
        }
        .record-name{
            margin-left: 12px;
            font-size: 13px;
            height: 50px;
            line-height: 50px;
        }
        .AmountMoney{
            font-size:20px;
            color: #F2B54D;
            position: absolute;
            right: 12px;
            height: 50px;
            line-height: 50px;
        }
        
    }
    .remark{
            height: 35px;
            line-height: 35px;
            padding: 0px 12px 12px 12px;
            color: #F82D2D;
        }
}
</style>
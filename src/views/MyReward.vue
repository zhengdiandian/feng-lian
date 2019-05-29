<template>
<div>
    <header>
        <nav>
            <mu-icon value=":iconfont iconfanhui" @click="openReturn"></mu-icon>
            <div class="title font-16">{{title}}</div>
            <div class="record" @click="$router.push('/WithdrawalsRecord')">提现记录</div>
        </nav>
        <div class="reward">
            <span class="Total-sum">{{reward.totalBalance}} <span class="font-12" >元</span> </span>
            <div class="font-12t Withdrawable" >
                可提现金额{{reward.withdrawBalance}}元
            </div>
        </div>
    </header>
    <main class="main">
        <div class="historical-bill">历史账单</div>
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
            <mu-container ref="container" class="demo-loadmore-content">
                <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
                <mu-list>
                    
                    <div v-for="(list,i) in reward.list" :key="i">
                            <div class="Month" >
                                <div  class="font-11 month-date">{{i}}</div>
                                <div  class="font-11 month-date month-date-weight" >共获得￥{{list.totalAmount}}</div>
                            </div>
                            <div class="reward-money" v-for="(item,j) in list.profitList" :key="j">
                                <div class="headimg"><img :src="item.icon" alt=""></div>
                                <div class="font-12 header-name-date">
                                    <span style="font-weight:bold;">{{item.contacs}}</span>
                                    <span > {{item.profitDate}}</span>
                                </div>
                                <div class="right">
                                    <span v-if="item.changeType == 1">+&nbsp;{{item.profitAmount}}元</span>
                                    <span v-else>-&nbsp;{{item.profitAmount}}元</span>
                                </div>
                            </div>
                    </div>
                    
                </mu-list>
                </mu-load-more>
            </mu-container>
        </mu-paper>
        

        <!-- <div>
            <div class="Month">
                <div class="font-11 month-date" >{{listDate.lastMonth.date}}</div>
                <div class="font-11 month-date month-date-weight">共获得￥{{listDate.lastMonth.totalAmount}}</div>
            </div>
            <div class="reward-money" v-for="(item,index) in listDate.lastMonth.profitList" :key="index">
                <div class="headimg"><img :src="item.icon" alt=""></div>
                <div class="font-12 header-name-date">
                    <span style="font-weight:bold;">{{item.contacs}}</span>
                    <span > {{item.profitDate}}</span>
                </div>
                <div class="right">
                    <span v-if="item.changeType == 1">+&nbsp;{{item.profitAmount}}元</span>
                    <span v-else>-&nbsp;{{item.profitAmount}}元</span>
                </div>
            </div>
        </div> -->
    </main>
    <footer>
        <button @click="open">提现</button>
    </footer>
    <div class="show" v-if="show">
        <div class="show-main">
            <div class="show-main-text"><span>您还没有绑定银行卡</span></div>
            <mu-divider></mu-divider>
            <div class="show-btn">
                <input style="color: #707070" type="button" value="再等等" @click="show = false">
                <input style="color: #4999f5" type="button" value="现在绑卡" @click="$router.push('/CardBag')">
            </div>
        </div>
    </div>
</div>
</template>
<script>
  // import  PopBox from '../components/PopBox/PopBox'
export default {
    name: 'myreward',
    data() {
        return {
            title: '我的奖励',
            show: false,
            reward: [],
            listDate: '',
            profitList: [],
            debitCardState: '',
            refreshing: false,
            loading: false,
            date: '',
            page: 1,
            pageSize: 8,
        }
    },
    methods: {
        openReturn() {
            this.$router.go(-1)
        },
        open() {
            if (this.debitCardState == 0) {
                this.show = true
            }else {
                if(this.reward.withdrawBalance > 0){
                    this.$router.push('/RewardPresentation')
                }else{
                    this.$toast.warning('可提现余额不足')
                }

            }
        //   this.$toast.warning('金额需要大于100元才可提现')
        },
        out() {
            this.$router.go(-1)
        },
        refresh () {
            
            // this.refreshing = true;
            // this.page = 1
            
            // this.$refs.container.scrollTop = 0;
            // this.get_reward()
            // setTimeout(() => {
            //     this.refreshing = false;
            // }, 2000)
        },
        load () {
            debugger
            this.loading = true;
            this.page++
            this.get_reward(true)
        
        },
        get_reward(flag) {
            this.$axios.post('/v1/finance/profit/profitMonthList',{
            "page": this.page,
            "pageSize": this.pageSize
        }).then(res=>{
            // debugger
            if(flag){
                for( let key in res.data.data.list){
                // debugger
                    if(this.reward.list[key]){

                        this.reward.list[key].profitList = this.reward.list[key].profitList.concat(res.data.data.list[key].profitList)
                        this.$set(this.reward.list[key].profitList, this.reward.list[key].profitList.concat(res.data.data.list[key].profitList))
                        console.log('c',this.reward)
                    }else {
                        this.reward.list[key] = res.data.data[key]
                    }
                }
                // this.reward.list =
                console.log(this.reward.list)
            }else{
                 this.reward = res.data.data
                 console.log(this.reward.list)
            }
                
             // this.date = Object.keys(this.reward.list)
            // console.log(date)
            // console.log(this.reward.list[date].profitList)
            // this.listDate = date.join(',')
            this.loading = false
            console.log(this.reward.list)
        })
        }

    },
    mounted() {
        // this.$axios.post('v1/finance/profit/profitList').then(res=>{
        //     if(res.data.code !==200){
        //         this.$toast.error(res.data.msg)
        //         return
        //     }
        //     debugger
        //     this.reward = res.data.data
        //     this.listDate = res.data.data.list
        //     this.lastMonth = res.data.data.list.lastMonth.profitList
        //     this.thisMonth = res.data.data.list.thisMonth.profitList
        //     console.log(this.listDate)
        // })
        this.$axios.post('/v1/finance/profit/profitMonthList',{
            "page": this.page,
            "pageSize": this.pageSize
        }).then(res=>{
            // debugger
            this.reward = res.data.data
             // this.date = Object.keys(this.reward.list)
            // console.log(date)
            // console.log(this.reward.list[date].profitList)
            // this.listDate = date.join(',')

            console.log(this.reward.list)
        })



        this.$axios.post('v1/user/info/personalInfo').then(res=>{
            if(res.data.code !==200){
              this.$toast.error(res.data.msg)
              return
            }
            this.debitCardState = res.data.data.debitCardState
        })
    }
}
</script>
<style scoped lang="scss">
.demo-loadmore-wrap {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  background-color: $c-hui;
  padding-top: 30px;
  .mu-appbar {
    width: 100%;
  }
}
.demo-loadmore-content {
  // flex: 1;
  overflow: auto;
  width: 100%;
  // -webkit-overflow-scrolling: touch;
}
.Withdrawable{
    color:rgba(255,255,255,1);
    padding-top: 20px;
    padding-bottom: 20px;
}
.header-name-date{
    display: flex;
    flex-direction: column;
    color:rgba(51,51,51,1);
    margin-left: 12px;
}
.Total-sum{
    font-size:36px;
    color:rgba(255,255,255,1);
}
.show-main-text{
    width: 100%;
      height: 120px;
      display: flex;
      justify-content: center;
      align-items: center;
}
  .main{
    padding-bottom: 50px;
    padding-top: 180px;
  }
  .font-11{
    font-size: $f14;
  }
  .font-12{
    font-size: $f14;
  }
  .font-16{
    font-size: 16px;
  }
#app>div{
  background-color: $c-hui;
}
.month-date{
    font-weight:400;
    color:rgba(51,51,51,1);
    margin: 6px 0 2px 12px;
    padding-top: 5px;
}
.month-date-weight{
    font-weight:600;
    padding-bottom: 5px;
}
.record{
    position: absolute;
    right: 12px;
    font-size: 16px;
}
header{
    // height: 155px;
    background-image: url('../assets/PNG/我的奖励背景.png');
    background-size: 100% 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 22;
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

            font-weight: bold;
            color:rgba(51,51,51,1);
        }
    }
}
.Month{
    background-color: $c-bai;
    margin-top: 12px;
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
    position: fixed;
    top: 182px;
    left: 0;
    z-index: 11;
}
.reward-money{
    width:375px;
    height:50px;
    background:#f9f9f9;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 2px;
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
    right: 30px;
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
footer{
    position: fixed;
    bottom: 0px;
    left: 0px;
    button{
        width:375px;
        height:50px;
        background:rgba(239,162,32,1);
        margin: auto;
        border: none;
        outline: none;
        color: #fff;
    }
}
</style>

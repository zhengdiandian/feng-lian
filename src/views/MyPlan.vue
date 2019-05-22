<template>
    <div>
      <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
        <mu-button icon slot="left" @click="$router.go(-1)">
          <mu-icon value=":iconfont iconfanhui"></mu-icon>
        </mu-button>
        我的计划
        <mu-button icon slot="right"  :ripple="false">
        </mu-button>
      </mu-appbar>
        <div class="page-margin-top"></div>
        <main>
            <!-- <div class="add-family">
                <span style="font-size:14px;  font-weight:bold;color:rgba(51,51,51,1); margin-left: 12px;">我的家人</span>
                <section class="add-family-list">
                    <div class="list">
                        <div class="list-img">
                            <img src="../assets/PNG/积分头像2.png" alt="">
                        </div>
                        <span style="font-size:12px;">{{name}}</span>
                        <span style="font-size:12px;">自己</span>
                    </div>
                    <div class="list">
                        <div class="list-img">
                            <img src="../assets/PNG/积分头像2.png" alt="">
                        </div>
                        <span style="font-size:12px;">{{name}}</span>
                        <span style="font-size:12px;">自己</span>
                    </div>
                    <div class="list">
                        <div class="list-img">
                            <img src="../assets/PNG/积分头像2.png" alt="">
                        </div>
                        <span style="font-size:12px;">{{name}}</span>
                        <span style="font-size:12px;">自己</span>
                    </div>
                    <div class="list">
                        <div class="list-img">
                            <img src="../assets/PNG/积分头像2.png" alt="">
                        </div>
                        <span style="font-size:12px;">{{name}}</span>
                        <span style="font-size:12px;">自己</span>
                    </div>
                    <div class="list">
                        <div class="list-img">
                            <img src="../assets/PNG/积分头像2.png" alt="">
                        </div>
                        <span style="font-size:12px;">{{name}}</span>
                        <span style="font-size:12px;">自己</span>
                    </div>
                    <div class="list">
                        <div class="list-img">
                            <img src="../assets/PNG/添加家人.png" alt="">
                        </div>
                        <span style="font-size:12px;">添加家人</span>
                    </div>
                </section>
            </div> -->
            <div class="purchase-plan" >
                <span  class="plan-text">我的购买计划</span>
                <section class="card" style="margin:0;" v-for="(myplan,i) in myplan.list" :key="i">
                    <card :open="() => {$router.push({name: 'planInitial', query:{planNo: myplan.planNo}})}"
                        :img="myplan.headPortrait"
                        :state="myplan.payState==100?'未实名':'已实名'"
                        :productName="myplan.productName"
                        :amount="amount"
                        :amountMoney="myplan.balance"
                        :waiting="myplan.leftWattingDays + '天'"
                        :waitingperiod="waitingperiod"
                        :date=" ':' +myplan.joinDate"
                        :name="myplan.contacs"
                    >
                    <template v-slot:lable v-if="myplan.state == 500">
                        <div class="slot-lable">
                            <!-- <img src="../assets/img/审核中.png" alt=""> -->
                            <!-- <img src="../assets/img/通过.png" alt=""> -->
                            <!-- <img src="../assets/img/驳回.png" alt=""> -->
                            <img src="../assets/img/已退款.png" alt="">
                        </div>
                    </template>
                    </card>
                    </section>
            </div>
        </main>
        <!-- <footerBtn></footerBtn> -->
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader/PageHeader'
import footerBtn from '../components/footerBtn/FooterBtn'
import card from '../components/Card/Card'
export default {
    name: 'myplan',
    components: {
        PageHeader,
        footerBtn,
        card
    },
    data() {
        return {
            amount: '余额',
            waitingperiod: '等待期:',
            name: 'Bytan.zZ',
            myplan: []
        }
    },
    mounted() {
        this.$axios.get('/v1/mutually/plan/planList').then(res=>{
            if(res.data.code !==200){
              this.$toast.error(res.data.msg)
              return
            }
            console.log(res)
            this.myplan = res.data.data
            // console.log(this.myplan)
        })
    }
}
</script>
<style scoped lang="scss">
.slot-lable{
    // width: 100px;
    // height: 500px;
    // position: relative;
    position: absolute;
    right: 0px;
    top: 16px;
    width: 50px;
    height: 50px;
    z-index: 99;
    img{
        // position: absolute;
        // right: 0px;
        // top: 16px;
        // width: 50px;
        // height: 50px;
        // z-index: 99;
    }
}
.card{
    height: 180px;
}
span{
      
}
.add-family{
    margin-bottom: 10px;
}
.card{
    margin: auto;
}
.add-family-list{
    display: flex;
    flex-wrap: wrap;
    margin-top: 12px;
    .list{
    display: flex;
    flex-direction: column;
    width: 25%;
    text-align: center;
    align-items: center;
    .list-img{
        width:50px;
        height:50px;
        background:$c-cheng;
        border:2px solid rgba(239, 162, 32, 1);
        border-radius:50%;
        img{
            width: 100%;
            height: 100%;
        }
        .iconjiahaotianjia{
            font-size: 25px;
            position: relative;
            top: 6px;
            color: white;
        }
    }
}
}
.plan-text{
    font-size: $f15;
    font-weight: bold;
    color: rgb(51, 51, 51);
    padding: 12px 12px 0;
    display: inline-block;
}
</style>

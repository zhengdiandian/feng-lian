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
                <span style="font-size:14px;font-family:SourceHanSansCN-Normal;font-weight:bold;color:rgba(51,51,51,1); margin-left: 12px;">我的家人</span>
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
            <div class="purchase-plan">
                <span style="font-size:14px;font-family:SourceHanSansCN-Normal;font-weight:bold;color:rgba(51,51,51,1); margin-left: 12px;">我的购买计划</span>
                <section class="card">
                    <card
                        :open="() => {$router.push('/recharge')}"
                        :state="myplan.payState==100?'未实名':'以实名'"
                        :productName="myplan.productName"
                        :amount="amount"
                        :amountMoney="myplan.balance"
                        :waiting="myplan.leftWattingDays"
                        :waitingperiod="waitingperiod"
                        :date="': 2019.01.03'"
                    >
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
            waitingperiod: '等待期',
            name: 'Bytan.zZ',
            myplan: []
        }
    },
    mounted() {
        this.$axios.post('/v1/mutually/plan/planList').then(res=>{
            this.myplan = res.data.data[0]
            console.log(this.myplan)
        })
    }
}
</script>
<style scoped lang="scss">
.card{
    height: 180px;
}
span{
    font-family:SourceHanSansCN-Normal;
}
.add-family{
    margin-bottom: 10px;
}
.card{
    margin: auto;
    margin-top: 12px;
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
        background:rgba(242,181,77,1);
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

</style>

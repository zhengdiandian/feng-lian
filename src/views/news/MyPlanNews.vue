<template>
    <div>
      <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
        <mu-button icon slot="left" @click="$router.go(-1)">
          <mu-icon value=":iconfont iconfanhui"></mu-icon>
        </mu-button>
        我的计划消息
        <mu-button icon slot="right"  :ripple="false">
        </mu-button>
      </mu-appbar>
        <main>
            <!-- <div style="margin: auto;width:92%;">
                <span class="font">我的申请</span>
                <div class="date">2019-04-11   14:33</div>
                <div  style="margin-top: 8px;">
                  <section class="card">
                    <card
                    :open="() => {$router.push('/palnned')}"
                    :date="': 2019.01.02'"
                    :waitingperiod="waitingperiod"
                    :waiting="waiting"
                    >

                    <template v-slot:lable>
                        <div class="slot-lable">
                            <img src="../assets/img/审核中.svg" alt="">
                        </div>
                    </template>
                    <template v-slot:FilingDate>
                        <div class="dates"><span>申请日：</span>2019.01.01</div>
                    </template>
                    </card>
                    <!-- <span>您于2019年4月9日申请的互助，在初审阶段已审核通过，请继续关注该申请的动态消息。</span>
                    <div>如有疑问请咨询客服热线 010-xxxxxxxxx</div>  -->
                    <!-- </section> -->
                    <!-- <card
                    :open="() => {$router.push('/palnned')}"
                    :date="': 2019.01.02'"
                    :waitingperiod="waitingperiod"
                    :waiting="waiting"
                    >

                     <template v-slot:lable>
                        <div class="slot-lable">
                            <img src="../assets/img/驳回.svg" alt="">
                        </div>
                    </template>
                     <template v-slot:FilingDate>
                        <div class="dates"><span>申请日：</span>2019.01.01</div>
                    </template>
                    <template v-slot:AuditPass>
                      <div class="slot-AuditPass"><img src="../assets/img/审核通过.svg" alt=""></div>
                    </template>
                    </card> -->
                <!-- </div> -->
            <!-- </div> -->
            <div class="purchase-plan" >
              <div class="apply">我的申请</div>
              <div>data</div>
                <section class="card" v-for="(myplan,i) in myplan.list" :key="i">
                    <card :open="() => {$router.push({name: 'planInitial', query:{planNo: myplan.planNo}})}"
                        :img="myplan.headPortrait"
                        :state="myplan.payState==100?'未实名':'已实名'"
                        :productName="myplan.productName"
                        :amount="amount"
                        :amountMoney="myplan.balance"
                        :waiting="myplan.leftWattingDays + '天'"
                        :waitingperiod="waitingperiod"
                        :date=" '：' + ' ' +myplan.joinDate"
                        :name="myplan.contacs"
                    >
                    <template v-slot:lable v-if="myplan.state == 500">
                        <div class="slot-lable">
                            <!-- <img src="../assets/img/审核中.png" alt=""> -->
                            <!-- <img src="../assets/img/通过.png" alt=""> -->
                            <!-- <img src="../assets/img/驳回.png" alt=""> -->
                            <img src="@/assets/img/已退款.png" alt="">
                        </div>
                    </template>
                    <!-- <template v-slot:AuditPass>
                      <div class="AuditPass">
                        123
                      </div>
                    </template> -->
                    <template v-slot:btnOpen>
                        <div class="btn-wrap">
                            <div class="btn content-center">查看计划</div>
                        </div>
                    </template>
                    </card>
                    </section>
                    <div class="text">
                      您于2019年4月9日申请的互助，在初审阶段已审核通过，请继续关注该申请的动态消息。
                    </div>
                    <div class="customer">如有疑问请咨询客服热线 <span>010-56248620</span></div>
            </div>





            <div class="historical-record" >
              <div class="apply">历史记录</div>
              <div>data</div>
                <section class="card" v-for="(myplan,i) in myplan.list" :key="i">
                    <card :open="() => {$router.push({name: 'planInitial', query:{planNo: myplan.planNo}})}"
                        :img="myplan.headPortrait"
                        :state="myplan.payState==100?'未实名':'已实名'"
                        :productName="myplan.productName"
                        :amount="amount"
                        :amountMoney="myplan.balance"
                        :waiting="myplan.leftWattingDays + '天'"
                        :waitingperiod="waitingperiod"
                        :date=" '：' + ' ' +myplan.joinDate"
                        :name="myplan.contacs"
                    >
                    <template v-slot:lable v-if="myplan.state == 500">
                        <div class="slot-lable">
                            <!-- <img src="../assets/img/审核中.png" alt=""> -->
                            <!-- <img src="../assets/img/通过.png" alt=""> -->
                            <!-- <img src="../assets/img/驳回.png" alt=""> -->
                            <img src="@/assets/img/已退款.png" alt="">
                        </div>
                    </template>
                    <!-- <template v-slot:AuditPass>
                      <div class="AuditPass">
                        123
                      </div>
                    </template> -->
                    <template v-slot:btnOpen>
                        <div class="btn-wrap">
                            <div class="btn content-center">查看计划</div>
                        </div>
                    </template>
                    </card>
                    </section>
                    <div class="text">
                      您于2019年1月19日申请的互助，在初审阶段被驳回
                    </div>
                    <div class="customer">如有疑问请咨询客服热线 <span>010-56248620</span></div>
            </div>
        </main>
    </div>
</template>
<script>
import card from '@/components/Card/Card'
export default {
    name: 'myplannews',
    components: {
        card
    },
    data() {
        return {
            amount: '余额',
            waitingperiod: '等待期:',
            name: 'Bytan.zZ',
            myplan: [],
            page: 1,
            pageSize: 15
            // planNo: '',
            // productCode: ''
        }
    },
    methods:{
        // open() {
        //     this.$router.push({
        //         name: 'planInitial',
        //         query:{planNo: this.planNo, productCode: this.productCode}
        //     })
        // }
    },
    mounted() {
        // this.$axios.get('/v1/mutually/compensate/megList',{ //计划消息接口
        //   "page": this.page,
        //   "pageSize": this.pageSize
        // }).then(res=>{
        //     if(res.data.code !==200){
        //       this.$toast.error(res.data.msg)
        //       return
        //     }
        //     console.log(res)
        //     this.myplan = res.data.data
        // })
        this.$axios.get('/v1/mutually/plan/planList',{ //我的计划接口
          "page": this.page,
          "pageSize": this.pageSize
        }).then(res=>{
            if(res.data.code !==200){
              this.$toast.error(res.data.msg)
              return
            }
            console.log(res)
            this.myplan = res.data.data
        })
    }
}
</script>
<style scoped lang="scss">
#app>div{
  background-color: $c-hui;
}
main{
    margin: auto;
    padding-top: 44px;
    position: relative;
}
.purchase-plan{
  padding-top: 12px;
  width: 100%;
  background-color: $c-bai;
  &>div{
    padding-left: 12px;
  }
  .apply{
    padding-bottom: 5px;
  }
  .customer {
    padding-top: 20px;
    padding-bottom: 10px;
    span{
      padding-left: 12px;
      color: $c-cheng;
    }
  }
  .text{
    padding-top: 5px;
  }
}
.historical-record{
  margin-top: 12px;
  padding-top: 12px;
  width: 100%;
  background-color: $c-bai;
  &>div{
    padding-left: 12px;
  }
  .apply{
    padding-bottom: 5px;
  }
  .customer {
    padding-top: 20px;
    padding-bottom: 10px;
    span{
      padding-left: 12px;
      color: $c-cheng;
    }
  }
  .text{
    padding-top: 5px;
  }
}
.card{
  // width: 100%;
  height: 160px;
  margin: auto;
  position: relative;
}
.slot-lable{
    // width: 100px;
    // height: 500px;
    // position: relative;
    img{
        position: absolute;
        right: 0px;
        top: 5px;
        width: 50px;
        height: 50px;
        z-index: 99;
    }
}
.AuditPass{
  height:20px;
  border-radius:11px;
  font-size: 12px;
  background-color: #F6B03B;
  padding: 0 10px 0 10px;
  line-height: 20px;
  margin-top: 5px;
}
.slot-AuditPass{
  position: absolute;
  right: -100px;
  top: 30px;
  img{
    width: 72px;
    height: 54px;;
  }
}
.date{
    font-size: 10px;
    color:rgba(112,112,112,1);
}
.btn-wrap{
  width:80px;
  height:33px;
  background:$c-bai;
  border-radius:10px;
  margin: 20px 0 0 10px;
  color: $c-cheng;
  line-height: 33px;
}
</style>

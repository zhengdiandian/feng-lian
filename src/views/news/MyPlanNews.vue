<template>
    <div>
      <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
        <mu-button icon slot="left" @click="$router.push('/my')">
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
                    <span>您于2019年4月9日申请的互助，在初审阶段已审核通过，请继续关注该申请的动态消息。</span>
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

              <div class="iconkong" v-if=" myApply == ''">
                    <img src="@/assets/空页面.png" alt="">
                    <span>暂无数据</span>
                </div>

                <section class="card" v-for="(myplan,i) in myApply" :key="i">
                  <div class="date">{{myplan.createTime}}</div>
                    <card :open="() => {$router.push({name: 'planInitial', query:{planNo: myplan.planNo}})}"
                        :img="myplan.headPortrait"
                        :state="myplan.payState==100?'未实名':'已实名'"
                        :productName="myplan.productName"
                        :amount="amount"
                        :amountMoney="myplan.balance"
                        :waiting="myplan.joinDays + '天'"
                        :waitingperiod="waitingperiod"
                        :date=" '：' + ' ' +myplan.joinDate"
                        :name="myplan.contacs"
                    >
                    <!-- <template v-slot:lable v-if="myplan.state == 500">
                        <div class="slot-lable">
                            <img src="../assets/img/审核中.png" alt="">
                            <img src="../assets/img/通过.png" alt="">
                            <img src="../assets/img/驳回.png" alt="">
                            <img src="@/assets/img/已退款.png" alt="">
                        </div>
                    </template> -->
                    <template v-slot:AuditPass>
                      <div class="AuditPass">
                        申请日：{{myplan.applyDate}}
                      </div>
                    </template>
                    <template v-slot:btnOpen>
                        <div class="btn-wrap">
                            <div class="btn content-center" @click="$router.push({name: 'compensateInfo',query:{orderNo: myplan.planNo,type: myplan.type}})">查看详情</div>
                        </div>
                    </template>
                    </card>
                    <div class="text">
                      {{myplan.content}}
                    </div>
                    <div class="customer">如有疑问请咨询客服热线 <span>010-56248620</span></div>
                    </section>
                    
            </div>
            <br />
            <mu-divider style="height: 5px;"></mu-divider>




            <div class="historical-record" >
              <div class="apply">历史记录</div>
              <!-- <div style="padding-left: 12px;">data</div> -->
                <div class="iconkong" v-if=" historyMsg.length <= 0">
                    <img src="@/assets/空页面.png" alt="">
                    <span>暂无数据</span>
                </div>


                <section class="card" v-for="(myplan,i) in historyMsg" :key="i">
                  <div class="historical-date">{{myplan.createTime}}</div>
                    <card
                        :img="myplan.headPortrait"
                        :state="myplan.payState==100?'未实名':'已实名'"
                        :productName="myplan.productName"
                        :amount="amount"
                        :amountMoney="myplan.balance"
                        :waiting="myplan.joinDays + '天'"
                        :waitingperiod="waitingperiod"
                        :date=" '：' + ' ' +myplan.joinDate"
                        :name="myplan.contacs"
                    >
                    <template v-slot:lable >
                        <div class="slot-lable">
                            <!-- <img src="../assets/img/审核中.png" alt=""> -->
                            <img v-if="myplan.state == 800" src="@/assets/img/通过.png" alt="">
                            <img v-if="myplan.state == 150" src="@/assets/img/驳回.png" alt="">
                            <!-- <img v-if="myplan.state == 500" src="@/assets/img/已退款.png" alt=""> -->
                        </div>
                    </template>
                    <template v-slot:AuditPass>
                      <div class="AuditPass">
                        申请日：{{myplan.applyDate}}
                      </div>
                    </template>
                    <template v-slot:btnOpen>
                        <div class="btn-wrap">
                            <div class="btn content-center" @click="$router.push({name: 'compensateInfo',query:{orderNo: myplan.planNo , type: myplan.type}})">查看详情</div>
                        </div>
                    </template>
                    </card>
                    <div class="text">
                      {{myplan.content}}
                    </div>
                    <div class="customer">如有疑问请咨询客服热线 <span>010-56248620</span></div>
                    </section>

            </div>
        </main>
    </div>
</template>
<script>
import card from '@/components/Card/Card'
import { debug } from 'util';
export default {
    name: 'myplannews',
    components: {
        card
    },
    data() {
        return {
            amount: '余额',
            waitingperiod: '已持有:',
            // name: 'Bytan.zZ',
            myplan: [],
            myApply: [],
            historyMsg: [],
            page: 1,
            pageSize: 99,
            refreshing: false,
            loading: false,
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
        // 
        get_list(flag){
          
          this.$axios.post('/v1/mutually/compensate/msgList',{ 
          "page": this.page,
          "pageSize": this.pageSize
        }).then(res=>{
            if(res.data.code !==200){
              this.$toast.error(res.data.msg)
              return
            }
              let myplan = res.data.data
              // console.log(myplan)
              this.myApply = myplan.filter((v,k,a) => {
                // console.log(v)
                // console.log(k)
                console.log(a)
                return v.msgType == 0
              })
              this.historyMsg = myplan.filter((v,k,a) => {
                // console.log(v)
                // console.log(k)
                console.log(a)
                return v.msgType == 1
              })
            
        })
        },
        load () {
          debugger
          this.loading = true;
          this.page++ 
          this.get_list()

          // setTimeout(() => {
          //   this.loading = false;
          //   this.num += 10;
          // }, 2000)
        }
  
    },
    created() {
      this.get_list(true)
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
        //     console.log(res.data.data.myApply)
        //     // this.myplan = res.data.data
        // })
        
    }
}
</script>
<style scoped lang="scss">
#app>div{
  background-color: $c-bai;
}
main{
    margin: auto;
    padding-top: 44px;
    position: relative;
}
.iconkong{
    width: 100px;
    height: 100px;
    margin: auto;
    margin-bottom: 25px;
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
.demo-loadmore-wrap {
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  background-color: $c-bai;
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
.purchase-plan{
  padding-top: 12px;
  width: 100%;
  // background-color: $c-bai;
  .date{
    font-size: $f14;
    padding-left: 12px;
  }
  .apply{
    padding-left: 12px;
    padding-bottom: 5px;
  }
  .customer {
    padding-top: 12px;
    // padding-bottom: 10px;
    padding-left: 12px;
    span{
      padding-left: 12px;
      color: $c-cheng;
    }
  }
  .text{
    margin-top: -100px;
    padding-left: 12px;
  }
}
.historical-record{
  margin-top: 12px;
  padding-top: 12px;
  width: 100%;
  background-color: $c-bai;
  &>div{
    // padding-left: 12px;
  }
  .historical-date{
    // margin-top: 12px;
    padding-left: 12px;
    font-size: $f14;
  }
  .apply{
    padding-bottom: 5px;
    padding-left: 12px;
  }
  .customer {
    // padding-top: 2px;
    // padding-bottom: 10px;
    padding-left: 12px;
    span{
      padding-left: 12px;
      color: $c-cheng;
    }
  }
  .text{
    // padding-top: 165px;
    margin-top: -80px;
    padding-left: 12px;
  }
}
.card{
  // width: 100%;
  height: 162px;
  margin: auto;
  position: relative;
  margin-bottom: 100px;
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

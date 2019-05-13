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
            <div style="margin: auto;width:92%;">
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
                    </section>
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
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import card from '../components/Card/Card'
export default {
    name: 'myplannews',
    components: {
        card
    },
    data() {
        return {
            waitingperiod: '等待期:',
            waiting: '180天'
        }
    },
}
</script>
<style scoped lang="scss">
main{
    margin: auto;
    margin-top: 60px;
    position: relative;
}
.card{
  // width: 100%;
  height: 180px;
}
.slot-lable{
    // width: 100px;
    // height: 500px;
    // position: relative;
    img{
        position: absolute;
        right: 0px;
        top: 16px;
        width: 50px;
        height: 50px;
        z-index: 99;
    }
}
.dates{
        margin-top: 5px;
        // width:fit-content;
        // width:-webkit-fit-content;
        // width:-moz-fit-content;
        max-width: 300px;
        min-width: 50px;
        word-wrap: break-word;
        height:22px;
        background:$c-cheng;
        border-radius:11px;
        font-size:10px;
        font-family:SourceHanSansCN-Normal;
        font-weight:400;
        text-align: center;
        line-height: 22px;
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
</style>

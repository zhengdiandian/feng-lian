<template>
<div id="myrewardinteg">

    <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui"></mu-icon>
      </mu-button>
      互助记录
      <mu-button icon slot="right" :ripple="false">
      </mu-button>
    </mu-appbar>
    <main class="page-margin-top">
        <section class="profit">
            <div class="users">
                <span class="number" style="font-weight:bold; font-size: 20px;">{{helped.helpedCount}}</span>
                <span style="font-size: 12px;">已帮助人数</span>
            </div>
            <div class="xian" style="width: 1px;align-self: center;border-left: 1px solid #eaeaea;height:30px;"></div>
            <div class="users">
                <span class="number" style="font-weight:bold; font-size: 20px;">{{helped.joinedDays}}</span>
                <span style="font-size: 12px;">已加入蜂链天数</span>
            </div>
        </section>
            <div class="assis-title">链接你我他 &nbsp; &nbsp; 守护千万家</div>
            <div class="margin-left" style="font-size:15px;font-family:SourceHanSansCN-Normal;font-weight:bold;color:rgba(51,51,51,1);margin-bottom: 5px; ">互助记录</div>
        <section v-for="item in supporlist" :key="item.orderNo">
            <div style="margin: 12px 0px 12px 12px" >
                <div style="font-size:9px;font-family:SourceHanSansCN-Normal;font-weight:bold;color:rgba(112,112,112,1);">{{item.createTime}}</div>
            </div>
            <section class="card" >
                <card
                    :open="() => {$router.push('/palnned')}"
                    :name="item.contacs"
                    :state="item.payState==100?'未实名':'已实名'"
                    :productName="item.productName"
                    :amount="amount"
                    :amountMoney="item.amount"
                    :purchase="item.payState==0?'未划款':'已划款'"
                    >
                </card>
            </section>
        </section>
    </main>
    <footer>
        <a href="tel:CustomerService" class="customer">
            <mu-icon value=":iconfont iconlianxikefu"></mu-icon>
            <span>联系客服</span>
        </a>
    </footer>
</div>
</template>
<script>
import PageHeader from '../components/PageHeader/PageHeader'
import card from '../components/Card/Card'
export default {
    name: 'AssistanceReacord',
    components: {
        PageHeader,
        card
    },
    data() {
        return {
            title: '互助记录',
            amount: '互助余额',
            helped: [], //帮助数据
            supporlist: [], //card数据
            CustomerService: ''
        }
    },
    mounted() {
        this.$axios.post('/v1/mutually/plan/supportList',{
            "page": 1,
            "pageSize": 1
        }).then((res) => {
            console.log(res)
            this.helped = res.data.data
            this.supporlist = res.data.data.list
            // console.log(this.supporlist)
        })
        this.$axios.post('v1/manage/config/getTextList',{
            "keys": 'CustomerService'
        }).then(res=>{
            this.CustomerService = res.data.data.CustomerService
        })
    }
}
</script>
<style scoped lang="scss">
  .page-margin-top{
    margin-top: 56px;
  }
.profit{
    width:351px;
    height:60px;
    background:rgba(239,162,32,1);
    border-radius:5px;
    margin: 12px auto;
    overflow: hidden;
    display: flex;
    .users{
        font-family:ArialMT;
        color:rgba(51,51,51,1);
        width: 50%;
      font-weight: 700;
        /*height: 100%;*/
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
}
.assis-title{
    text-align: center;
    height:15px;
    font-size:18px;
    font-family:SourceHanSansCN-Normal;
    font-weight:bold;
    color:rgba(51,51,51,1);
    margin: 12px auto;
}
.card{
    margin: auto;
    height: 180px;
}
footer{
    // position: absolute;
    // bottom: 0px;
    width: 100%;
    .customer{
        display: block;
        width:123px;
        height:33px;
        border:1px solid rgba(239,162,32,1);
        border-radius:25px;
        // position: absolute;
        // bottom: 0px;
        // left: 113px;
        margin: 12px auto;
        text-align: center;
        line-height: 33px;
        color: #EFA220;
        display: flex;
        justify-content: center;
        .iconlianxikefu{
            padding-right: 6px;
        }
    }
}
</style>

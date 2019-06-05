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
                <span class="number">{{helped.helpedCount}}</span>
                <span class="numberDay">已帮助人数</span>
            </div>
            <div class="xian"></div>
            <div class="users">
                <span class="number">{{helped.joinedDays}}</span>
                <span class="numberDay">已加入蜂链天数</span>
            </div>
        </section>
            <div class="assis-title">链接你我他 &nbsp; &nbsp; 守护千万家</div>
            <div class="assis-text margin-left">互助记录</div>
            <div class="iconkong" v-if=" supporlist.length <= 0 || !supporlist">
                    <img src="@/assets/空页面.png" alt="">
                    <span>暂无数据</span>
                </div>
            <mu-paper v-if="supporlist.length !== 0" :z-depth="1" class="demo-loadmore-wrap">
                <mu-container ref="container" class="demo-loadmore-content">
                    <mu-load-more :loading="loading" @load="load">
                        <section v-for="item in supporlist" :key="item.orderNo">
                            <div style="margin: 12px 0px 12px 12px" >
                                <div style="font-size:9px;  font-weight:bold;color:rgba(112,112,112,1);">{{item.createTime}}</div>
                            </div>
                            <section class="card" >
                                <card
                                    :name="item.contacs"
                                    :state="item.payState==100?'未实名':'已实名'"
                                    :productName="item.productName"
                                    :amount="amount"
                                    :amountMoney="item.amount"
                                    :purchase="item.payState==0?'未划款':'已划款'"
                                    >
                                    <template v-slot:btnOpen>
                                        <div class="btn-wrap">
                                            <div class="btn content-center">查看详情</div>
                                        </div>
                                    </template>
                                </card>
                            </section>
                        </section>
                    </mu-load-more>
                </mu-container>
            </mu-paper>
    </main>
    <footer>
        <a :href="'tel:'+CustomerService" class="customer">
            <mu-icon value=":iconfont iconlianxikefu"></mu-icon>
            <span>联系客服</span>
        </a>
    </footer>
</div>
</template>
<script>
import PageHeader from '@/components/PageHeader/PageHeader'
import card from '@/components/Card/Card'
export default {
    name: 'heAssistanceReacord',
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
            CustomerService: '',
            refreshing: false,
            loading: false,
            page: 1,
            pageSize: 5,
            userCode: this.$route.query.userCode
        }
    },
    methods: {
        get_record(flag) {
            this.$axios.post('/v1/mutually/plan/supportList',{
            "page": this.page,
            "pageSize": this.pageSize,
            "userCode": this.userCode
        }).then((res) => {
            if(res.data.code !==200){
                    this.$toast.error(res.data.msg)
                    return
            }
            if(flag){

              this.supporlist = res.data.data.list

            }else {
              res.data.data.list.forEach(item => {
                    // debugger
                    this.supporlist.push(item)
                })
            }
            this.loading = false
            // this.supporlist = res.data.data.list
        })
        },
        // refresh () {
        //     this.refreshing = true;
        //     this.$refs.container.scrollTop = 0;
        //     setTimeout(() => {
        //         this.refreshing = false;
        //     }, 2000)
        // },
        load () {
            this.loading = true;
            this.page++;
            this.get_record()
        }
    },
    created() {
        this.get_record(true)
    },
    mounted() {
        this.$axios.post('/v1/mutually/plan/supportList',{
            "page": this.page,
            "pageSize": this.pageSize
        }).then((res) => {
            if(res.data.code !==200){
                    this.$toast.error(res.data.msg)
                    return
            }
            console.log(res)
            if(res.data.code !==200){
              this.$toast.error(res.data.msg)
              return
      }
            this.helped = res.data.data
            // this.supporlist = res.data.data.list
            // console.log(this.supporlist)
        })
        this.$axios.post('v1/manage/config/getTextList',{
            "keys": 'CustomerService'
        }).then(res=>{
            if(res.data.code !==200){
                    this.$toast.error(res.data.msg)
                    return
            }
            this.CustomerService = res.data.data.CustomerService
        })
    }
}
</script>
<style scoped lang="scss">
.demo-loadmore-wrap {
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  background-color: $c-bai;
  .mu-appbar {
    width: 100%;
  }
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
.demo-loadmore-content {
  // flex: 1;
  overflow: auto;
  width: 100%;
  // -webkit-overflow-scrolling: touch;
}
  .page-margin-top{
    // margin-top: 56px;
    padding-top: 12px;
  }
.profit{
    width:351px;
    height:60px;
    background:rgba(239,162,32,1);
    border-radius:5px;
    margin: auto;
    // padding-top: 12px;
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
        .number{
            font-weight:bold;
            font-size: 20px;
        }
        .numberDay{
            font-size: $f14;
        }
        .xian{
            width: 1px;
            align-self: center;
            border-left: 1px solid #eaeaea;
            height:30px;
        }
        
    }
    
}
.assis-title{
    text-align: center;
    height:15px;
    font-size:18px;

    font-weight:bold;
    color:rgba(51,51,51,1);
    margin: 12px auto;
}
.assis-text{
    font-size:15px;
    font-weight:bold;
    color:rgba(51,51,51,1);
    margin-bottom: 5px;
    padding-top: 12px;
}
.card{
    margin: auto;
    height: 160px;
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

<template>
<div>
    <header>
        <nav>
            <mu-icon value=":iconfont iconfanhui" @click="openReturn"></mu-icon>
            <div class="title" style="font-size: 18px;">{{title}}</div>
        </nav>
        <div class="reward">
            <span >本期总金额（元）</span>
            <span class="reward-money">{{nitice.helpedAmount}}</span>
            <div style="  color:rgba(255,255,255,1); ">
                共有{{nitice.shareCount}}人参与分摊，人均分摊{{nitice.apportionAverage}}元
            </div>
        </div>
    </header>
    <main>
        <div class="notice-content margin-top">
            <span class="font margin-left">本期互助名单</span>
            <div class="parent-list">
                <div class="parent-wrap" v-for="(item,index) in list" :key="index">
                    
                    <div class="img-wrap-head" >
                        <img :src="item.headPortrait" alt="" />
                    </div>
                    <span class="margin-bottom" style="margin-top: 12px;">{{item.contacs}}</span>
                    <!-- <div class="img-wrap-head" >
                        <img :src="item.headPortrait" alt="" />
                    </div>
                    <span class="margin-bottom" style="margin-top: 12px;">{{name}}</span> -->
                </div>
            </div>
        </div>
        <!-- <section class="Invitation-welfare">
            <img src="../assets/PNG/邀好友，赚福利.png" alt="">
        </section> -->
        <!-- <div class="return-commission">
           <div>邀请一位新用户加入即成为爱心大使</div>
           <div>立得20元红包</div>
            <div class="margin-top" style="color: #F2B54D;font-size: 13px;">你可以邀请</div>
        </div> -->
        <div class="sharing">
            <img :src="CurruntApportionImg" alt="">
            <footer>
        <!--<button>分享邀请好友</button>-->
        <scale-btn></scale-btn>
    </footer>
            <!-- <div class="brother"> -->
                <!-- <mu-icon value=":iconfont iconxiongdijiemei"></mu-icon> -->
                <!-- <div class="img-wrap">
                    <img src="../assets/img/兄弟姐妹.svg" alt="">
                </div> -->
                <!-- <div class="position-a" style="color: #F2B54D;">兄弟姐妹</div> -->
            <!-- </div> -->
            <!-- <div class="brother"> -->
                <!--<mu-icon value=":iconfont iconwoshou"></mu-icon>-->
                <!-- <div class="img-wrap">
                    <img src="../assets/img/握手.svg" alt="">
                </div>
                <div class="position-a" style="color: #F2B54D;">好友</div> -->
            <!-- </div> -->
            <!-- <div class="brother"> -->
                <!--<mu-icon value=":iconfont iconlingdai"></mu-icon>-->
                <!-- <div class="img-wrap">
                    <img src="../assets/img/领带.svg" alt="">
                </div> -->
                <!-- <div class="position-a" style="color: #F2B54D;">同事</div> -->
            <!-- </div> -->
        </div>
    </main>

</div>
</template>
<script>
  import ScaleBtn from '../components/ScaleBtn/ScaleBtn'
  export default {
    name: 'PageHeader',
    components: {ScaleBtn},
    props: {
        title: {
            type: String,
            default: "本期互助金规模"
        },
    },
    data() {
        return {
            name: '张小泉',
            CurruntApportionImg: '',
             page: 1,
            pageSize: 50,
            nitice: [],
            list: [],
            acs: {},
            activeIndex: 0,
            index: 0,
            CustomerService: ''
        }
    },
    methods: {
        openReturn() {
            this.$router.go(-1)
        }
    },
    created() {
         this.$axios.post('/v1/publicity/publicity/detail',{
      "page": this.page,
      "pageSize": this.pageSize
    }).then(res=>{
      if (res.data.code !==200) {
            this.$toast.error(res.data.msg)
            return
        }
      this.nitice = res.data.data
      this.list = res.data.data.compensateList
      this.acs = this.list[this.activeIndex] || {}
      // console.log(this.acs)
    })
        this.$axios.post('/v1/manage/config/getImgList',{
            "keys": 'CurruntApportionImg'
        }).then(res=>{
            this.CurruntApportionImg = res.data.data.CurruntApportionImg
        })
    }
}
</script>
<style scoped lang="scss">
header{
    // height: 155px;
    background-image: url('../assets/PNG/我的奖励背景.png');
    background-size: 100% 100%;
    height: 200px;
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
        height: 44px;
        line-height: 44px;
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
.reward{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #ffffff;
        margin-top: 30px;
        .reward-money{
            padding-top: 10px;
            font-size: 36px;
        }
}
.notice-content{
    border-bottom:1px solid rgba(220,220,220,1);
}
.parent-list{
    display: flex;
    width: 95%;
    margin: auto;
    flex-wrap: wrap;
    justify-content: flex-start;
    .parent-wrap{
        margin-right: 5px;
        /*width: 45px;*/
        // margin: auto;
        // padding: 12px 12px 18px;
        display: flex;
        
        justify-content: flex-start;
        flex-direction: column;
        span{
            text-align: center;
        }
        .img-wrap-head{
               border: 2px solid $c-cheng;
            border-radius: 50%;
            width: 33px;
            height: 33px;
            margin-left: 5px;
            margin-top: 5px;
            overflow: hidden;
        }
    }
    .img-wrap{
        box-sizing: content-box;
        width: 33px;
        height: 33px;

        /*flex: 1;*/
        img{
        width: 100%;
        border-radius: 50%;
        border: 2px solid rgba(239, 162, 32, 1);
        /*width: 33px;*/
        /*height: 33px;*/
        /*!*flex: 1;*!*/
        /*border-radius: 50%;*/
        /*border: 2px solid rgba(239, 162, 32, 1);*/
    }

    }

}
.Invitation-welfare{
    width:259px;
    height:26px;
    margin: auto;
    margin-bottom: 18px;
}
.return-commission{
        // width:188px;
        height:28px;
        font-size:13px;

        font-weight:400;
        color:rgba(51,51,51,1);
        margin: auto;
        text-align: center;
    }
    .sharing{
        // display: flex;
        margin: auto;
        justify-content: center;
        // align-items: center;
        width: 100%;
        // height: 100vw;
        position: relative;
        img{
            width: 100%;
        }
        .brother{
            width: 60px;
            height: 60px;
            background:rgba(255,255,255,1);
            border:2px solid rgba(242,181,77,1);
            border-radius:50%;
            margin: auto;
            text-align: center;
            line-height: 75px;
            position: relative;
            .img-wrap{
                display: inline-block;
                width: 41px;
                height: 31px;
            }

            .position-a{
                width: 70px;
                position: absolute;
                top: 45px;
                left: -5px;
            }
        }
    }
    footer{
        width: 100%;
        // margin: auto;
        margin-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 50px;
        button{
            border: none;
            outline: none;
            width:260px;
            height:33px;
            background:linear-gradient(-27deg,rgba(250,187,74,1) 0%,rgba(255,198,98,1) 100%);
            border-radius:17px;
            color: white;
        }
    }
   
</style>

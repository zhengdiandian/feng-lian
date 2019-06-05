<template >
  <div class="">
    <!--<mu-sub-header>我的购买计划</mu-sub-header>-->
    <div class="wrap">
      <!-- <card></card> -->
      <div class="card">
          <div class="title">蜂链互助公示</div>
          <div class="dateInfo">{{nitice.stage}}</div>
          <div class="info-wrap">
            <div>
              <div><span>{{nitice.publicityCount}}</span> 人</div>
              <div>本期公示人数</div>
            </div>
            <div class="xian"></div>
            <div>
              <div><span>{{nitice.totalAmount}}</span> 人</div>
              <div>预计分摊总额</div>
            </div>
            <div class="xian"></div>
            <div>
              <div><span>{{nitice.shareCount}}</span> 人</div>
              <div>分摊人数</div>
            </div>
          </div>
      </div>
      <div class="hlep-notice">
        <span>本期共{{nitice.helpedCount}}起互助事件，分摊总额（互助金）{{nitice.helpedAmount}}元。共
        {{nitice.joinedCount}}人参与，人均分摊{{nitice.shareCount}}元。</span>
      </div>
      <div class="notice-content">
        <div class="parent-list">

            <div class="parent-wrap" :class="[ activeIndex == index ? 'active': '']" v-for="(item,index) in list" :key="index">
              <img @click=" listActive(index)" :src="item.headPortrait" alt="" class="part" />
            </div>

        </div>

          <div class="notice-info">
            
              <div class="title">{{acs.contacs}}<span>{{acs.state == 200? '已实名': '未实名'}}</span></div>
              <div class="title">{{acs.illnessApply}}</div>
              <div class="text">已加入蜂链互助{{acs.joinDays}}天，参与{{acs.shareTimes}}次分摊，花费{{acs.shareAmount}}元</div>

              <div class="info-btn-wrap">
                <div class="info-btn" @click="$router.push({name: 'NoticeDetails' , query: {stage: nitice.stage ,orderNo: acs.orderNo}})"><span>查看详情</span></div>
              </div>

          </div>
       </div>
    </div>
    <mu-divider style="height: 5px;"></mu-divider>
    <div class="wrap_card">
      <!-- <mu-sub-header>蜂链互助资金公示</mu-sub-header> -->
      <div class="margin-top margin-bottom">蜂链互助资金公示</div>
      <div class="notice-card">
        <div class="card-row">
          <!-- <div>截止2019年3月31日</div>
          <div>共互助0人，分摊0亿元</div> -->
          <img :src="nitice.postImgSimple" alt="">
        </div>
        <!-- <p class="card-row">本期剩余互助金 <span>￥0元</span></p> -->
        
        <div class="card-btn" @click="$router.push('/fundsDetails')">点击查看详情</div>
      </div>
      <footer>
        <a :href="'tel:'+CustomerService" class="customer">
            <mu-icon value=":iconfont iconlianxikefu"></mu-icon>
            <span>联系客服</span>
        </a>
    </footer>
    </div>
  </div>
</template>

<script>
// import Card from "../../components/NoticeCard/NoticeCard";
export default {
  name: "NewNotice",
  // components: {
  //   Card
  // }
  data () {
    return {
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
    listActive(i) {
      this.activeIndex = i
      // console.log(this.activeIndex)
      this.acs = this.list[i]
      console.log(this.acs)
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
      this.acs = this.list[this.activeIndex]
      // console.log(this.acs)
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
};
</script>

<style lang="scss" scoped>
.wrap {
  padding: 12px;
  padding-top: 90px;

  .mu-sub-header {
    padding: 0px;
  }
  .hlep-notice {
    width: 351px;
    // height: 41px;
    margin-top: 8px;
    background: rgba(255, 227, 179, 1);
    border-radius: 2px;
    line-height: 1.5;
    span{
      display: inline-block;
      width: 100%;
      // height: 100%;
      padding: 5px;
      font-size: $f12;
    }
  }
}
.wrap_card{
  padding: 0px 12px 12px 12px;
  .mu-sub-header {
    padding: 0px;
  }
  // .hlep-notice {
  //   width: 351px;
  //   height: 41px;
  //   margin-top: 8px;
  //   background: rgba(255, 227, 179, 1);
  //   border-radius: 2px;
  //   line-height: 1.5;
    
  // }
}
.notice-content {
  margin-top: 13px;
  width: 351px;
  height: 185px;
  border: 1px solid rgba(220, 220, 220, 1);
  border-radius: 5px;
  .parent-list {
    display: flex;
    flex-wrap: nowrap;
    padding: 12px 12px 18px;
    border-bottom: 1px solid rgba(220, 220, 220, 1);
    overflow: auto;
    .parent-wrap {
      display: flex;
      position: relative;
      margin-right: 12px;
      width: 33px;
      box-sizing: content-box;
      height: 33px;
      background: rgba$c-cheng;
      border: 2px solid $c-cheng;
      &.active:after {
        position: absolute;
        bottom: -9px;
        left: 50%;
        content: "";
        transform: translate(-50%, 50%);
        border: 10px solid transparent;
        display: inline-block;
        border-top: 10px solid $c-cheng;
      }
      border-radius: 50%;
      img {
        width: 33px;
        height: 33px;
        border: 2px solid rgba(239, 162, 32, 1);
        border-radius: 50%;
      }
    }
  }
}
.notice-info {
  display: flex;
  flex-wrap: wrap;
  padding: 11px 14px 13px 12px;
  min-height: 120px;
  /*justify-content:start;*/
  /*align-content: space-between;*/
  .title {
    width: 100%;
    font-size: 13px;
    // font-family: SourceHanSansCN-Normal;
    font-weight: bold;
    color: $c-black;
    & > span {
      width: 40px;
      height: 15px;
      margin-left: 7px;
      border: 1px solid $c-cheng;
      font-size: $f14;
      // font-family: SourceHanSansCN-Normal;
      font-weight: 400;
      color: $c-cheng;
    }
  }
  .text {
    width: 100%;
    font-size: $f14;
    // font-family: SourceHanSansCN-Normal;
    font-weight: 400;
    color: rgba(112, 112, 112, 1);
  }
  .info-btn-wrap {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    
  }
  .info-btn {
    // width: 67px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    border: 1px solid rgba(239, 162, 32, 1);
    border-radius: 13px;
    color: $c-cheng;
    /*justify-self: flex-end;*/
    span{
      padding: 0px 10px 0px 10px;
    }
  }
}

  .notice-card{
    display: flex;
    flex-wrap: wrap;
    // margin-top: 13px;
    padding-bottom: 12px;
    flex-direction: row-reverse;
    align-items: flex-end;
    justify-content: center;
    // color: $c-bai;
    width:351px;
    height:136px;
    background:rgba(255,255,255,1);
    /*border:1px solid rgba(220,220,220,1);*/
    border-radius:5px;
    // background: url("../../assets/PNG/资金公示背景.png") center no-repeat;
    // background-size: 100% 100%;
    p.card-row{
      margin: 0px;
    }
    .card-row{

      width:351px;
      height:136px;
      /*margin-top: 60px;*/
      img{
        width: 100%;
        height: 100%;
      }
    }
    .card-btn{
      width:225px;
      height:33px;
      line-height: 33px;
      text-align: center;
      background:rgba(239,162,32,.7);
      color: $c-bai;
      border-radius:17px;
      position: relative;
      top: -85px;
    }
  }
  .contact-wrap{
    color: $c-cheng;
    width: 100%;
    margin-top: 13px;
    display: flex;
    justify-content: center;
    padding-bottom: 60px;
  }
  .contact{
    span.iconfont{
      font-size: 24px;
      vertical-align: middle;
      padding-right: 13px;
    }
    width:132px;
    height:35px;
    line-height: 35px;
    text-align: center;
    border: 1px solid $c-cheng;
    border-radius:17px;
  }
.mu-sub-header {
    color: $c-bai;
    font-size: 3.733vw;
    line-height: 1.5;
    padding-left: 4.267vw;
    width: 100%;
    content: "viewport-units-buggyfill; font-size: 3.733vw; line-height: 12.8vw; padding-left: 4.267vw";
  }
  .card  .title {
    color: #fff;
    // font-family: SourceHanSansCN-Normal;
    font-weight: 700;
    padding: 0px !important;
    font-size: 14px;
  }
  .card{
    color: #fff ;
    font-size: 12px;
    /*width:351px;*/
    /*max-height:126px;*/
    background:rgba(239,162,32,1);
    border-radius:5px;
    padding: 12px 20px 13px 12px;
    background: url("../../assets/gongshi.png") center no-repeat;
    background-size: 100% 100%;
    background-origin: padding-box;
    color: $c-bai;
    .dateInfo{
      margin: 12px 0 18px 0px;
      width:100px;
      height:22px;
      background:rgba(255,255,255,.2);
      border-radius:11px;
      text-align: center;
      line-height: 21px;
      background:rgba(255,255,255,.2);
    }
    .info-wrap{
      display: flex;
      overflow: hidden;
      // padding-top: 40px;
      height: auto;
      justify-content: space-between;
      &>div{
        & span{
          font-size:18px;
            
          font-weight:bold;
        }
        text-align: center;
        /*width: 33%;*/


      }
      .xian{
        /*height: 33px;*/
        border-right: 1px solid $c-bai;
      }
      & > div:last-of-type{
      border: none;
    }
    }
  }
  footer{
    // position: absolute;
    // bottom: 0px;
    width: 100%;
    margin-bottom: 50px;
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

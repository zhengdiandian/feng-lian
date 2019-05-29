<template>
  <div class="page-margin-top">
    <PopBox v-if="showPoP" style="z-index: 666666;">
    <div class="pop-content">
      <div>
        <div>
          <div class="heart">
            您未成为爱心大使暂不能邀请
          </div>
        </div>
      </div>
      <div style="position: absolute;width: 100%;bottom: 0;">
        <button @click="showPoP=false">取消</button>
        <button class="btn-join" @click="$router.push('/hlepPlan/PRO201905111234221')">成为会员大使</button>
      </div>
    </div>
  </PopBox>

  <PopBox v-if="show_compensate" style="z-index: 666666;">
    <div class="compensate-content">
        <div class="title">
          秒到赔付
        </div>
        <div class="text">
          蜂链互助率先实现了秒结机制，符合秒结条件的会员在互助时间发生后的第一时间即可获得约定的互助金。秒结机制可帮助会员第一时间度过难关，能更加高效的帮助会员。
        </div>
        <div class="btn" @click="show_compensate = false">我知道了</div>
    </div>
  </PopBox>

<PopBox v-if="show_capital" style="z-index: 666666;">
    <div class="compensate-content">
        <div class="title">
          资金共管
        </div>
        <div class="text">
          基于公约，互助资金由所有成员共管，第三方机构托管且账户公开，任何人均可查询账户情况，监督资金流向。
        </div>
        <div class="btn" @click="show_capital = false">我知道了</div>
    </div>
  </PopBox>


  <PopBox v-if="show_community" style="z-index: 666666;">
    <div class="compensate-content">
        <div class="title">
          社区共建
        </div>
        <div class="text">
          蜂链互助社区利用区块链技术实现了社区共建。节点、会员、运营方通过社区共同对平台进行管理。蜂链互助计划的各项操作与管理均向用户公开，既透明又可追溯。
        </div>
        <div class="btn" @click="show_community = false">我知道了</div>
    </div>
  </PopBox>
  


  <PopBox v-if="show_data" style="z-index: 666666;">
    <div class="compensate-content">
        <div class="title">
          数据上链
        </div>
        <div class="text">
          用户互助合约将实时上传至公有区块链平台，任何人不可篡改。资金流向链上可查，每一笔充值划扣均有迹可循。
        </div>
        <div class="btn" @click="show_data = false">我知道了</div>
    </div>
  </PopBox>


  <!--<pop-box style="z-index: 8" v-if="showQrcode">-->
      <!--<span class="close" @click="showQrcode=false"><img src="../assets/错误.png" alt=""></span>-->
    <!--<div class="qrcode-wrap">-->
      <!--<img :src="qrcodeImg" alt="" class="qrcode-img">-->
      <!--<div class="bottom-text">长按关注公众号，进行实名认证，加入计划，成为爱心大使!</div>-->
    <!--</div>-->


  <!--</pop-box>-->
    <mu-appbar style="width: 100%;background: #f8b62d; " color="primary" text-color='#666' z-depth="0">
      <mu-button icon slot="right" :ripple="false">
        <!--<mu-icon  value=":iconfont iconxinxi" size="24"></mu-icon>-->
      </mu-button>
      <span style="color:#fff">链接你我他 &nbsp;&nbsp;守护千万家</span>
      <mu-button icon slot="left" :ripple="false">
        <!--<mu-icon value=":iconfont iconxinxi" size="24"></mu-icon>-->
      </mu-button>
    </mu-appbar>
    <div class="wrap">

      <mu-carousel class="banner">
        <mu-carousel-item v-for="(item, i) in bannerlist" :key="i">
          <img :src="item.img">
        </mu-carousel-item>
      </mu-carousel>
      <div class="content">
        <div class="btn-wrap">
          <mu-button  class="btn" color="success" @click="$router.push('/owe')">感恩有你</mu-button>
          <mu-button round class="btn" color="success" @click="toMinePlan">互助计划</mu-button>
        </div>
        <div class="chat-wrap">
          <div class="chat-content item-content" @click="$router.push('/ranklist')">
              <!-- <mu-icon value=":iconfont iconshuju"></mu-icon> -->
            <!-- <div class="chat-img" ></div> -->
            <div class="chat-title">{{homeinfor.memberCount}}</div>
            <div class="chat-info">全平台用户(人)</div>
          </div>
          <div class="xian"></div>
          <div class="chat-content item-content" @click="$router.push('/scale')">
            <!-- <div class="chat-img" ></div> -->
            <div class="chat-title">{{homeinfor.stageAmount}}</div>
            <div class="chat-info" >本期互助金规模(元)</div>
          </div>
        </div>
        <div class="routers-wrap">
          <div class="router-item item-content" @click="show_compensate = true">
            <div class="iconfont iconpeifu" style="font-size: 30px;"></div>
            <div class="text">秒到赔付</div>
          </div>
          <div class="router-item item-content" @click="show_capital = true">
            <div class="iconfont iconzijin" style="font-size: 30px;"></div>
            <div class="text">资金共管</div>
          </div>
          <div class="router-item item-content" @click="show_community = true">
            <div class="iconfont iconshequ2" style="font-size: 30px;"></div>
            <div class="text">社区共建</div>
          </div>
          <div class="router-item item-content" @click="show_data = true">
            <div class="iconfont iconshuju" style="font-size: 30px;"></div>
            <div class="text">数据上链</div>
          </div>
        </div>


        <!--<banner-img :videoImg="videoImg"></banner-img>-->
      </div>
    </div>
    <div class="wrap">
      <div @click="invitation">
      <div class="apply">
        <div class="img-wrap">
          <img src="@/assets/爱心2.svg" alt="">
        </div>
        <span>成功邀请一人，就得20元红包</span>
        <div class="apply-click">
          <span>邀请</span>
          <mu-icon value=":iconfont iconyou"></mu-icon>
        </div>
      </div>
      </div>
      <div class="plan-wrap" v-for="(product, i) in products" :key="i" >
        <div class="plan-left" >
          <div class="plan-img"  >
            <span class="img" :style="{backgroundImage: 'url(' + product.img + ')'} ">
                          <img class="img" :src="product.img" alt="">
            </span>
          </div>
          <div class="plan-left-content">
            <div class="title">{{product.title}}</div>
            <div class="info">{{product.subtitle}}</div>
          </div>
          <div class="plan-right-content">
            <mu-button  class="btn" color="success" @click="$router.push({name: 'hlepPlan', params: {productCode: product.code},query: {issueList:issueList}})">
              <span v-if="product.joinFlag == 0">加入</span>
              <span v-else>再次加入</span>
            </mu-button>
          </div>
        </div>
        <mu-divider></mu-divider>

      </div>

              <div class="videobox banner" ontouchmove="return false;">
          <video

            id="video"
            :src="videoUrl"
            controls = "true"
            preload="auto"
            :poster="videoImg"
            webkit-playsinline="true"
            playsinline
            x-webkit-airplay="allow"
            x5-video-player-type="h5"
            x5-playsinline="true"
            x5-video-player-fullscreen="true"
            x5-video-orientation="portrait"
            style="object-fit:fill"
          >
          </video>
        </div>
    </div>
    <mu-divider style="height:6px;"></mu-divider>
    <div class="wrap">
      <banner-img :videoImg="bannerImg"></banner-img>
      <div class="help-wrap">
        <mu-sub-header><span class="title-font">常见问题</span></mu-sub-header>

        <mu-list  class="list" toggle-nested="" v-for="(item,i) in homeinfor.issueList" :key="i">
          <mu-list-item button :ripple="false" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''"     >
            <mu-list-item-title style="font-size: 14px;">{{i+1}}、{{item.title}}</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down" ></mu-icon>
            </mu-list-item-action>
            <!--<mu-list-item  button :ripple="false" >-->
              <p slot="nested" v-html="item.content"></p>
            <!--</mu-list-item>-->
            <!-- <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>List Item 2</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>List Item 3</mu-list-item-title>
            </mu-list-item> -->

          </mu-list-item>

        </mu-list>
        <div class="help-btn-wrap">
          <a :href="'tel:'+CustomerService" class="btn">
            <span class="iconfont iconlianxikefu"></span>
            <span>联系客服</span>
          </a>
          <div class="btn" @click="$router.push('/UnderstandUs')">
            <span class="iconfont iconguanyu"></span>
            <span>了解我们</span>
          </div>
        </div>
      </div>
      <div class="partner">
        <mu-sub-header style="margin-bottom: 12px;"><span class="title">平台运营安全可靠</span></mu-sub-header>
        <div class="partner-content">
          <a :href="item.linkUrl" v-for="(item,i) in homeinfor.operateItem" :key="i">
            <img :src="item.img" alt="">
          </a>
          <!-- <img src="../assets/PNG/太平洋.png" alt="">
          <img src="../assets/PNG/银联.png" alt="">
          <img src="../assets/PNG/环迅支付.png" alt="">
          <img src="../assets/PNG/锦江国际.png" alt="">
          <img src="../assets/PNG/首旅集团.png" alt="">
          <img src="../assets/PNG/长安银行.png" alt="">
          <img src="../assets/PNG/SinoKing.png" alt=""> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PopBox from '../components/PopBox/PopBox'
import BannerImg from '../components/BannerImg/BannerImg'
import { debug } from 'util';
import {mapState} from 'vuex'
export default {
  name: "homePage",
  data() {
    return {
      shift: "movies",
      // open: true,
      open1: '',
      open2: '',
      products: [],
      homeinfor: [],
      bannerlist:[],
      operateItem: [],
      showQrcode: false,
      type: 0,
      showPoP: false,
      videoImg: '',
      joinFlag: '',
      qrcodeImg: '',
      issueList: [],
      videoUrl: '',
      bannerImg: '',
      CustomerService: '',
      show_compensate: false,
      show_capital: false,
      show_community: false,
      show_data: false
    };
  },
  computed: mapState(['userInfo']),
  methods: {
    open() {

    },
    toMinePlan() {
      if(this.userInfo.type<200){
        this.$toast.error('您暂未加入互助计划,请先加入')
        return
      }
      this.$router.push('/minePlan')
    },
  invitation(){
      // if (this.userInfo.state !== 200) {
      //   this.showPoP = true
      // } else {
        this.$router.push('/InviteFriends')
      // }
      // this.$router.push('/code')
  }
  },
  components: {
    BannerImg,
    PopBox
  },
  created() {
    this.$axios.post('v1/manage/config/getTextList',{
            "keys": 'CustomerService'
        }).then(res=>{
          if(res.data.code !==200){
                this.$toast.error(res.data.msg)
                return
            }
          // console.log(res)
            this.CustomerService = res.data.data.CustomerService
        })

    this.$axios.post('/v1/manage/post/index').then((res)=>{
        if(res.data.code !==200){
                this.$toast.error(res.data.msg)
                return
            }
      console.log('home',res)
      this.homeinfor = res.data.data
      this.operateItem = res.data.data.operateItem
      this.bannerlist = res.data.data.bannerList
      this.videoUrl = res.data.data.video
      this.videoImg = res.data.data.videoImg

      debugger

      // this.issueList = this.homeinfor.issueList
      this.$store.commit('set_issueList',this.homeinfor.issueList)
      // console.log(res)
    }),
      this.$axios.post('/v1/product/product/productList').then((res)=>{ // 产品列表
        debugger
        if(res.data.code !==200){
                this.$toast.error(res.data.msg)
                return
            }
        this.products = res.data.data
        // this.joinFlag = this.product.joinFlag
        console.log(this.products)
        // console.log(this.product)
      })
    this.$axios.post('v1/manage/config/getImgList',{
      keys: 'PublicQrcode,PublicAddress,videoImg'
    }).then(res => {
      debugger
      if(res.data.code !==200){
                this.$toast.error(res.data.msg)
                return
            }
      this.qrcodeImg = res.data.data.PublicQrcode
      this.bannerImg = res.data.data.PublicAddress
    })
    // if(this.$route.query.authToken){
    //   localStorage.setItem('token', this.$route.query.authToken)
    //   this.$axios.post('v1/user/info/personalInfo').then(res => {
    //     this.$store.commit('set_userInfo',res.data.data)
    //   })
    // }
    // else {
    //   //关闭首页二维码弹窗
    //   // if(sessionStorage.getItem('qrpop'))return
    //   // this.showQrcode = true
    //   // sessionStorage.setItem('qrpop','true')
    // }
    // this.$axios.post('v1/manage/config/getImgList',{
    //   keys: 'PublicAddress'
    // }).then(res => {
    //   this.videoImg = res.data.data.PublicAddress
    // })
  },
  mounted() {
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
.compensate-content {
  width: 300px;
  height: 215px;
  padding: 12px;
  border-radius: 50px;
  position: relative;
  .title{
    width:279px;
    height:42px;
    background: $c-cheng;
    border-radius:5px 5px 0px 0px;
    text-align: center;
    line-height: 42px;
    color: $c-bai;
  }
  .text{
    text-indent:2em;
    padding-top: 12px;
  }
  .btn{
    width:160px;
    height:31px;
    background: $c-cheng;
    border-radius:15px;
    text-align: center;
    line-height: 31px;
    color: $c-bai;
    position: absolute;
    left: 70px;
    bottom: 20px;
  }
}
  .wrap /deep/ .mu-item-title{
    padding: 0px 10px;
  }
  .list{
    padding: 0px 10px;
  }
  .close{
    position: fixed;
    top: 33px;
    right: 20px;
    color: $c-bai;
    font-size:24px;
    font-family:SourceHanSansCN-Medium;
    font-weight:500;
    width: 17px;
    height: 17px;
  }
.qrcode-wrap{
  position: relative;
  width:200px;
  height:200px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 200px;
  text-align: center;
  font-size:13px;
  font-family:SourceHanSansCN-Medium;
  font-weight:500;
  color:rgba(255,255,255,1);
  .bottom-text{
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: -44px;
    height:33px;
    left: 0px;
    line-height: 1.5;
  }
  .qrcode-img{
    /*display: inline-block;*/
    /*width: 160px;*/
    /*height: 160px;*/
  }


}
  .videobox{
    /*display: none;*/
    z-index: -1;
    /*overflow: hidden;*/
    &:before{
      content: '';
      display: inline-block;

    }
    video{
      width: 100%;
      height: 100%;
    }
  }
  /*.videobox {*/
    /*!*width: 100%;*!*/
    /*!*height: 100%;*!*/
    /*position: absolute;*/
    /*left: 0;*/
    /*top: 0;*/
    /*overflow: hidden;*/
  /*}*/

  /*video {width: 1px;display: block;}*/
.pop-content{
    width: 250px;
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    text-align: center;
    position: relative;
    & >div:last-child{
      // height: 40px;
      // background-color: $c-cheng;
      // color: $c-bai;
      // line-height: 40px;
      // font-size: 18px;
      // align-self: flex-end;
    }
    &>div{
      width: 100%;
      text-align: center;
    }
    align-items: center;
    .iconfont{
      font-size: 45px;
    }
    .heart{
      display: inline-block;
      width: 140px;
      height: 80px;
      font-size: 16px;
    }
    button{
      border: none;
      width: 50%;
      height: 50px;
      border-top: 1px solid $c-hui;
      background-color: #fff;
      border-right: 1px solid $c-hui;
    }
    .btn-join{
      color: $c-lang
    }
  }

  .wrap{
    box-sizing: border-box;
    width: $gw;
    padding: 1px 5px;
    /*border-bottom: 4px solid #666666;*/
  }
  .item-content{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    .iconfont{
      color:#FCBC34;
      font-size: 30px;
    }
  }
.banner {
    width:350px;
    height:130px;
    border-radius:10px;
    margin: 12px auto;
    img{
      width: 100%;
      height: 100%;
    }
}
h3{
  font-weight: 300;
  font-size: 16px;
    text-align: center;
}
.apply {
  display: flex;
  align-items: center;
  width: 351px;
  height: 44px;
  background-color: #f9be41;
  border-radius: 20px;
  margin: 18px auto;
  position: relative;
  color: #fff;
  span {
    font-size:$f14;

    font-weight:400;
    color: #fff;
    text-align: center;
    line-height: 12px;
    padding-left: 20px;
  }
  .iconfont{
    font-size: 50px;
  }
  .img-wrap{
    width: 50px;
    height: 50px;
    position: relative;
    top: -15px;
  }
  img{
   /* width: 50px;
    height: 50px;
    position: relative;
    top: -15px;*/
  }
  .apply-click{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 12px;
    span{
      font-size:$f14;

      font-weight:bold;
      color: #fff;
      line-height: 12px;
    }
    .iconyou{
      font-size: 16px;
      color: #fff;
    }
  }
}
  .content{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    .btn-wrap{
      width: 100%;
      display: flex;
      justify-content: space-between;
      .btn{
        width:170px;
        height:44px;
        background:$c-cheng ;
        border-radius:25px;
        margin: auto;
        margin-bottom: 12px;
      }
    }
    .chat-wrap{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: center;
      margin-bottom: 12px;
      .chat-content{
        width: 50%;

        margin-left: -1px;
      }
      .chat-img{
        width:60px;
        height:60px;
        background: url("../../public/img/饼状图.svg") center no-repeat;
        background-size: 100% 100%;
        margin-bottom: 8px;
      }
      .chat-title{
        width: 100%;
        text-align: center;
        font-size:20px;

        font-weight:400;
        color:rgba(51,51,51,1);
      }
      .chat-info{
        font-size:$f14;
        color:rgba(112,112,112,1);
        letter-spacing:2px
      }
      .xian{
        /*margin-top: 25%;*/
        width: 0px;
        box-sizing: border-box;
        height: 50%;
        align-self: center;
        // justify-items: center;
        border-left: 1px solid rgba(234,234,234,1);
      }
    }
  }

.title{
      font-size:$f15;
      width: 180px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight:bold;
      color:rgba(51,51,51,1);
    }
    .info{
      /*margin: 12px auto;*/
      overflow: hidden;
      width: 180px;
      /*white-space: nowrap;*/
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      font-size:13px;
      padding-right: 10px;

      font-weight:400;
      color:rgba(112,112,112,1);
    }

  .routers-wrap{
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 0px;
    .text{
        font-size: $f14;
    }
    .iconfont{
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 50px;
    }
  }
  .invite-wrap{
    position: relative;
    padding: 30px 0px;
    .like{
      position: absolute;
      left: 0px;
      top: 10px;
      width: 50px;
      height: 50px;
      font-size: 50px;
      line-height: 50px;
    }
    .invite-content{
      width: 100%;
      height: 40px;
      /*line-height: 50px;*/
      display: flex;
      align-items: center;
      justify-content: space-around;
      border-radius: 20px;
      background-color: azure;

      .iconliebiaodaohang_gongyi{
        width: 20px;
        height: 20px;
      }
    }
  }
  .plan-wrap{

    img{
      width: 80px;
      height: 80px;
      /*align-self: center;*/
      /*width: 50px;*/
      /*height: 50px;*/
    }
    .plan-left{
      background-color: #fff;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      /*padding: 5px;*/
      padding: 18px 14px 18px 0px;
      .plan-img{
        background-size: cover;
        width:60px;
        height:60px;
        /*border-radius:5px;*/
        margin: 0px 12px 0 12px;
        span.img{
          width:60px;
          height:60px;
          background-size: cover;
          display: inline-block;

        }
        img{
          max-height: 100%;
          width: auto;
          height: auto;
        }
      }



    }
    .plan-right-content{
      /*float: 6;*/
      /*width: 200px;*/
      flex: 5;
      /*width: auto;*/
      justify-content: flex-end;
      display: flex;
      /*flex-direction: column;*/
      font-size: 14px;
      .btn{
      // width:90px;
      height:8.667vw;
      background: $c-cheng;
      border-radius:4.3vw;
      text-align: center;
      line-height: 8.667vw;
    }
    }
  }

.iconxinxi{
  color: #fff;
}


.help-wrap{
  & /deep/ .mu-item{
    border-bottom: .5px solid $c-hui;
    padding: 0px;
  }
}
  .help-btn-wrap{
    display: flex;
    justify-content: space-around;
    align-items: center;
    a{
      color: $c-cheng;
    }
    .btn{
      width:132px;
      height:35px;
      border:1px solid $c-cheng;
      border-radius:17px;
      text-align: center;
      line-height: 35px;
      color: $c-cheng;
      border-radius: 25px;
      margin-bottom: 12px;
      display: flex;
      justify-content: center;
      font-size: 14px;
      .iconfont{
        padding-right: 5px;
      }
    }
  }

  .partner-content{
      padding: 12px 0px;
    overflow: hidden;
    /*height: 150px;*/
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /*align-content: space-around;*/
    a{
      display: inline-block;
      /*width: 25%;*/
      /*height: 50%;*/
      width:65px;
      height:65px;
        padding-top: 5px;
    }
    img{
      width: auto;
      height: auto;
      max-height: 100%;
      max-width: 100%;
    }

  }

  .mu-item-action {
    color: #FCBC34;
  }
  .mu-list{
    padding: 0;
    margin-bottom: 12px;
  }
  .partner{
    padding-top: 10px;
    .title{
      font-size: 15px;
    }
  }
</style>

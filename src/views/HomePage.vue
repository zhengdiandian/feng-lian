<template>
  <div class="page-margin-top">
    <PopBox v-if="showPoP">
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
        <button class="btn-join" @click="$router.push('/joinplan')">成为会员大使</button>
      </div>
    </div>
  </PopBox>
  <pop-box style="z-index: 8" v-if="showQrcode">
      <span class="close" @click="showQrcode=false">x</span>
    <div class="qrcode-wrap">
      <img src="https://placehold.it/180" alt="" class="qrcode-img">
      <div class="bottom-text">长按关注公众号，进行实名认证，加入计划，成为爱心大使!</div>
    </div>


  </pop-box>
    <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
      <mu-button icon slot="right" @click="$router.push('/myPlanNews')">
        <mu-icon value=":iconfont iconxinxi" size="24"></mu-icon>
      </mu-button>
        链接你我他 &nbsp;&nbsp;守护千万家
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
          <mu-button round class="btn" color="success" @click="$router.push('/minePlan')">查看我的互助计划</mu-button>
        </div>
        <div class="chat-wrap">
          <div class="chat-content item-content" @click="$router.push('/ranklist')">
            <div class="chat-img" >
              <!-- <mu-icon value=":iconfont iconshuju"></mu-icon> -->
            </div>
            <div class="chat-title">{{homeinfor.memberCount}}</div>
            <div class="chat-info">全平台用户(人)</div>
          </div>
          <div class="xian"></div>
          <div class="chat-content item-content" @click="$router.push('/scale')">
            <div class="chat-img"></div>
            <div class="chat-title">{{homeinfor.stageAmount}}</div>
            <div class="chat-info" >本期互助金規模(元)</div>
          </div>
        </div>
        <div class="routers-wrap">
          <div class="router-item item-content" @click="open">
            <div class="iconfont iconpeifu" style="font-size: 30px;"></div>
            <div class="text">秒到赔付</div>
          </div>
          <div class="router-item item-content">
            <div class="iconfont iconzijin" style="font-size: 30px;"></div>
            <div class="text">资金共管</div>
          </div>
          <div class="router-item item-content">
            <div class="iconfont iconshequ" style="font-size: 30px;"></div>
            <div class="text">社区共建</div>
          </div>
          <div class="router-item item-content">
            <div class="iconfont iconshuju" style="font-size: 30px;"></div>
            <div class="text">数据上链</div>
          </div>
        </div>
        <div class="videobox banner" ontouchmove="return false;">
          <video

            id="video"
            src="https://upos-hz-mirrorcosu.acgvideo.com/upgcxcode/15/36/64393615/64393615-1-6.mp4?e=ig8euxZM2rNcNbuBhwdVtWuBhwdVNEVEuCIv29hEn0l5QK==&deadline=1556439941&gen=playurl&nbs=1&oi=2015669759&os=cosu&platform=html5&trid=6bcb749044f44c5f9730204131d4ac6a&uipk=5&upsig=e9255c3cde85d784847601530e00803f&uparams=e,deadline,gen,nbs,oi,os,platform,trid,uipk"
            controls = "true"
            preload="auto"
            poster="../assets/PNG/视频.png"
            webkit-playsinline="true"
            playsinline="true"
            x-webkit-airplay="allow"
            x5-video-player-type="h5"

            x5-video-orientation="landscape"
            style="object-fit:fill"
          >
          </video>
        </div>

        <!--<banner-img :videoImg="videoImg"></banner-img>-->
      </div>
    </div>
    <div class="wrap">
      <div @click="invitation">
      <div class="apply">
        <img src="../assets/图标/爱心.png" alt="">
        <span>成功邀请一人，就得20元红包</span>
        <div class="apply-click">
          <span>邀请</span>
          <mu-icon value=":iconfont iconyou"></mu-icon>
        </div>
      </div>
      </div>
      <div class="plan-wrap" v-for="(product, i) in products" :key="i" >
        <div class="plan-left" >
          <img :src="product.img" alt="">
          <div class="plan-left-content">
            <div class="title">{{product.title}}</div>
            <div class="info">{{product.subtitle}}</div>
          </div>
          <div class="plan-right-content">
            <mu-button  class="btn" color="success" @click="$router.push({name: 'hlepPlan', params: {productCode: product.code,issueList:homeinfor.issueList}})">
              <span v-if="product.joinFlag == 0">加入</span>
              <span v-else>再次加入</span>
            </mu-button>
          </div>
        </div>
        <mu-divider></mu-divider>

      </div>
    </div>
    <div class="wrap">
      <banner-img :videoImg="videoImg"></banner-img>
      <div class="help-wrap">
        <mu-sub-header>常见问题</mu-sub-header>

        <mu-list  class="list" toggle-nested="" v-for="(item,i) in homeinfor.issueList" :key="i">
          <mu-list-item button :ripple="false" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''"     >
            <mu-list-item-title>{{i+1}}、{{item.title}}</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down" ></mu-icon>
            </mu-list-item-action>
            <!--<mu-list-item  button :ripple="false" >-->
              <p slot="nested">{{item.content}}</p>
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
          <div class="btn">
            <span class="iconfont iconlianxikefu"></span>
            联系客服
          </div>
          <div class="btn">
            <span class="iconfont iconguanyu"></span>
            了解我们
          </div>
        </div>
      </div>
      <div class="partner">
        <mu-sub-header style="margin-bottom: 12px;">平台运营安全可靠</mu-sub-header>
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
      joinFlag: ''
    };
  },
  methods: {
    open() {

    },
  invitation(){
      if (this.type == 0) {
        this.showPoP = true
      } else {
        this.$router.push('/code')
      }
      // this.$router.push('/code')
  }
  },
  components: {
    BannerImg,
    PopBox
  },
  created() {
    if(this.$route.query.auth_token){
      sessionStorage.setItem('token', this.$route.query.auth_token)
      this.showQrcode = true
      this.$axios.post('v1/user/info/personalInfo').then(res => {
        this.$store.commit('set_userInfo',res.data.data)
      })
    }
    this.$axios.post('/v1/manage/post/index').then((res)=>{
      console.log('home',res)
      this.homeinfor = res.data.data
      this.operateItem = res.data.data.operateItem
      this.bannerlist = res.data.data.bannerList
      // console.log(res)
    }),
      this.$axios.post('/v1/product/product/productList').then((res)=>{ // 产品列表
        // debugger
        this.products = res.data.data
        // this.joinFlag = this.product.joinFlag
        console.log(this.product)
        // console.log(this.product)
      })
    this.$axios.post('v1/manage/config/getImgList',{
      keys: 'PublicAddress'
    }).then(res => {
      this.videoImg = res.data.data.PublicAddress
    })
  },
  mounted() {

  }
};
</script>
<style lang="scss" scoped>
  .close{
    position: fixed;
    top: 33px;
    right: 20px;
    color: $c-bai;
    font-size:24px;
    font-family:SourceHanSansCN-Medium;
    font-weight:500;
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
    display: inline-block;
    width: 160px;
    height: 160px;
    background-color: red;
  }


}
  .videobox{
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
    width: 300px;
    height: 200px;
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
    padding: 0 5px;
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
    width:351px;
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
  background-color: rgb(243, 172, 172);
  border-radius: 20px;
  margin: 18px auto;
  position: relative;
  color: rgba(255,0,0,1);
  span {
    font-size:12px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(255,0,0,1);
    text-align: center;
    line-height: 12px;
    padding-left: 20px;
  }
  .iconfont{
    font-size: 50px;
  }
  img{
    width: 50px;
    height: 50px;
    position: relative;
    top: -15px;
  }
  .apply-click{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 12px;
    span{
      font-size:12px;
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(255,0,0,1);
      line-height: 12px;
    }
    .iconyou{
      font-size: 16px;
      color:rgba(255,0,0,1);
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
        background:linear-gradient(180deg,rgba(229,141,15,1) 0%,rgba(252,188,52,1) 100%);
        border-radius:15px;
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
        background: url("../assets/img/饼状图.svg") center no-repeat;
        background-size: 100% 100%;
        margin-bottom: 8px;
      }
      .chat-title{
        width: 100%;
        text-align: center;
        font-size:20px;
        font-family:SourceHanSansCN-Normal;
        font-weight:400;
        color:rgba(51,51,51,1);
      }
      .chat-info{
        font-size:12px;
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
      font-size:14px;
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(51,51,51,1);
    }
    .info{
      /*margin: 12px auto;*/
      font-size:13px;
      font-family:SourceHanSansCN-Normal;
      font-weight:400;
      color:rgba(112,112,112,1);
    }

  .routers-wrap{
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 0px;
    .text{
        font-size: 12px;
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

      img{
        width:60px;
        height:60px;
        border-radius:5px;
        margin: 0px 12px 0 12px;
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

      .btn{
      // width:90px;
      height:25px;
      background:rgba(255,129,37,1);
      border-radius:13px;
      text-align: center;
      line-height: 25px;
    }
    }
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

    .btn{
      width:132px;
      height:35px;
      border:1px solid rgba(239,162,32,1);
      border-radius:17px;
      text-align: center;
      line-height: 35px;
      color: $c-cheng;
      border-radius: 10px;
      margin-bottom: 12px;
      .iconfont{
        padding-right: 5px;
      }
    }
  }

  .partner-content{
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-between;
    a{
      display: inline-block;
      width: 30%;
      height: 50%;
    }
    img{
      width: 100%;
      height: 100%;
    }
  }

  .mu-item-action {
    color: #FCBC34;
  }
  .mu-list{
    padding: 0;
    margin-bottom: 12px;
  }
</style>

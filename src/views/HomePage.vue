<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
      <mu-button icon slot="right">
        <mu-icon value=":iconfont iconxinxi" size="24"></mu-icon>
      </mu-button>
        链接你我他 &nbsp;&nbsp;守护千万家
    </mu-appbar>
    <div class="wrap">

      <mu-carousel class="banner">
        <mu-carousel-item v-for="i in 4" :key="i">
          <img src="http://placehold.it/350x200/">
        </mu-carousel-item>
      </mu-carousel>
      <div class="content">
        <div class="btn-wrap">
          <mu-button  class="btn" color="success" @click="">感恩有你</mu-button>
          <mu-button round class="btn" color="success" @click="$router('/minePlan')">查看我的互助计划</mu-button>
        </div>
        <div class="chat-wrap">
          <div class="chat-content item-content">
            <div class="chat-img">
              <!-- <mu-icon value=":iconfont iconshuju"></mu-icon> -->
            </div>
            <div class="chat-title">699900</div>
            <div class="chat-info">全平台用户(人)</div>
          </div>
          <div class="xian"></div>
          <div class="chat-content item-content">
            <div class="chat-img"></div>
            <div class="chat-title">699900</div>
            <div class="chat-info">本期互助金規模(元)</div>
          </div>
        </div>
        <div class="routers-wrap">
          <div class="router-item item-content" v-for="i in 4" :key="i">
            <div class="iconfont iconpeifu"></div>
            <div class="text">秒到赔付</div>
          </div>
        </div>
        <banner-img></banner-img>
      </div>
    </div>
    <div class="wrap">
      <div class="invite-wrap">
        <div class="like iconfont iconliebiaodaohang_gongyi"></div>
        <div class="invite-content">
          成功邀请一人&nbsp;&nbsp;就得二十元红包  <span>邀请 <span class="iconfont iconyou"></span></span>
        </div>
      </div>
      <div class="plan-wrap" v-for="i in 3" :key="i" >
        <div class="plan-left" >
          <img src="http:\\placehold.it/80x80" alt="">
          <div class="plan-left-content">
            <div class="title">百万真的舒服的</div>
            <div class="info">Lorem ipsum dolor sit amet, consectetur adipisicing?</div>
          </div>
          <div class="plan-right-content">
            <mu-button  class="btn" color="success" @click="$router.push('/joinPlan')">再次加入</mu-button>
          </div>
        </div>
        <mu-divider></mu-divider>

      </div>
    </div>
    <div class="wrap">
      <banner-img></banner-img>
      <div class="help-wrap">
        <mu-sub-header>常见问题</mu-sub-header>

        <mu-list  class="list" toggle-nested="">
          <mu-list-item button :ripple="false" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''"     v-for="i in 7" :key="i">
            <mu-list-item-title>{{i}}、Lorem ipsum dolor sit.</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down" ></mu-icon>
            </mu-list-item-action>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>List Item 1</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>List Item 2</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button :ripple="false" slot="nested">
              <mu-list-item-title>List Item 3</mu-list-item-title>
            </mu-list-item>

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
      <div class="partner wrap">
        <mu-sub-header>平台运营安全可靠</mu-sub-header>
        <div class="partner-content">
          <img v-for=" i in 10" :key="i" src="http:\\placehold.it\70x70" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BannerImg from '../components/BannerImg/BannerImg'
export default {
  name: "homePage",
  data() {
    return {
      shift: "movies",
      open: false
    };
  },
  components: {
    BannerImg
  }
};
</script>
<style lang="scss" scoped>
  .wrap{
    box-sizing: border-box;
    width: $gw;
    padding: 0 5px;
    border-bottom: 4px solid #666666;
  }
  .item-content{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
.banner {
    width:351px;
    height:130px;
    border-radius:10px;
    margin: 12px auto;
}
h3{
  font-weight: 300;
  font-size: 16px;
    text-align: center;
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
        background:rgba(239,155,30,1);
        background-color: red;
        margin-bottom: 12px;
      }
      .chat-title{
        width: 100%;
        text-align: center;
        font-size:30px;
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


  .routers-wrap{
    display: flex;
    justify-content: space-between;
    .text{

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

      display: flex;
      flex-wrap: nowrap;
      padding: 5px;


    }
    .plan-right-content{
      align-self: center;
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
      width: 100px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border: 1px solid $c-cheng;
      color: $c-cheng;
      border-radius: 10px;
    }
  }


  .partner-content{
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-between;
    img{
      /*width: 70px;*/
      /*height: 70px;*/
    }
  }
</style>

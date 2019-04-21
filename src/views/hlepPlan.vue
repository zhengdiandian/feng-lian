<template>
  <div class="">
    <!-- <header>
      <pageHeader :title="title"></pageHeader>
    </header> -->
    <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0" >
      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)"></mu-icon>
      </mu-button>
      <mu-button icon slot="right" @click="$router.go(-1)">
        <mu-icon value=":iconfont iconshubanshenglvehao" @click="$router.go(-1)"></mu-icon>
      </mu-button>
      <div class="text-center">互助计划</div>
    </mu-appbar>
    <div class="page-margin-top"></div>
    <banner-img></banner-img>
    <div class="wrap">
      <div class="margin-left margin-bottom font">终身重大疾病互助计划</div>
      <div class="chat-wrap margin-bottom">
        <div class="chat-content item-content">
          <div class="chat-title">已加入人数 (人)</div>
          <div class="chat-info">23124</div>
        </div>
        <div class="xian"></div>
        <div class="chat-content item-content">
          <div class="chat-title">已互助金额 (元)</div>
          <div class="chat-info">936000</div>
        </div>
        <div class="chat-content item-content">
          <div class="chat-title">互助事件</div>
          <div class="chat-info">492</div>
        </div>
      </div>
      <!-- <icon-bar left-text="预存48元加入" right-text="加入" >
        <span class="hot"></span>
      </icon-bar> -->
      <div class="apply">
        <mu-icon value=":iconfont iconaixin"></mu-icon>
        <span>预存48元加入</span>
        <div class="apply-click">
          <span>加入</span>
          <mu-icon value=":iconfont iconyou"></mu-icon>
        </div>
      </div>
      <item-row :datas="itemRowData" ></item-row>
      <mu-divider></mu-divider>
      <div class="hlep-rule">
        <div class="font margin-left margin-top ">互助规则</div>
        <div class="rule margin-left"  v-for="i in 7" :key="i">
          <span class="rule-title font-min margin-right">人群范围</span> Lorem ipsum dolor sit amet.
          <mu-divider></mu-divider>
        </div>
      </div>
       <div class="help-wrap">
        <div class="font margin-left margin-top ">常见问题</div>

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
          <div class="btn margin-bottom">
            <span class="iconfont iconlianxikefu"></span>
            联系客服
          </div>
        </div>

        <mu-list  class="list" toggle-nested="">
          <mu-list-item button :ripple="false" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''"     v-for="i in 4" :key="i">
            <mu-list-item-title style="font-size: 14px;"> 《蜂链互助平台会员公约》 </mu-list-item-title>
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
        
      </div>
      <div class="bottom-btn" @click="$router.push('/joinPlan')">立即加入</div>
    </div>
  </div>
</template>

<script>
  import BannerImg from '../components/BannerImg/BannerImg'
  import IconBar from '../components/IocnBar/IConBar'
  import ItemRow from '../components/ItemRow/ItemRow'
  import pageHeader from '../components/PageHeader/PageHeader.vue'
  export default {
    name: 'hlepPlan',
    components: {
      BannerImg,
      IconBar,
      ItemRow,
      pageHeader
    },

    data() {
      return {
        open: false,
        title: '互助计划',
        itemRowData: [
          {
            icon: ' iconfanweiguang-',
            title: '互助范围',
            text: '60 (大病) + 20(轻症)'
          },
          {
            icon: ' iconedu',
            title: '互助额度',
            text: '最高55万'
          },
          {
            icon: ' iconbaozhang',
            title: '终身保障',
            text: '28天~100周岁'
          },
          {
            icon: ' iconpeifu',
            title: '赔付秒结',
            text: '满足条件拨款秒结'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap{
    padding: 5px;
    background: #fff;
  }
  .hot{
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url('../assets/img/加入我们.svg') center  no-repeat ;
    background-size: 100%;

  }
  .banner{
    width: 100%;
    height: $banner-h;
    img{
      height: 100%;
      width: 100%;
    }
  }
  .text-center{
    font-weight: 100;
    font-size: 16px;
  }
  .chat-wrap{
    width: 100%;
    height: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    justify-items: center;
    .item-content{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
    }
    .chat-content{
      width: 33.33%;
      margin-left: -1px;
    }

    .chat-title{
      width: 100%;
      text-align: center;
      margin-bottom: 17px;
      font-size:12px;
      font-family:SourceHanSansCN-Normal;
      font-weight:400;
      color:rgba(51,51,51,1);
      letter-spacing: 2px;
    }
    .chat-info{
      font-size:18px;
      font-family:ArialMT;
      font-weight:400;
      color:rgba(239,162,32,1);
    }
    .xian{
      /*margin-top: 25%;*/
      /*flex: 1;*/
      width: 0px;
      box-sizing: border-box;
      height: auto;
      align-self: center;
      height: 100%;
      /*justify-items: center;*/
      border-left: 1px solid #EAEAEA;
    }
  }
  .hlep-rule{
    width: 351px;
    margin: auto;
    .rule{
      height: 40px;
      line-height: 40px;
    }
  }
  .help-wrap{
    width: 351px;
    margin: auto;
  & /deep/ .mu-item{
    // border-bottom: .5px solid $c-hui;
    // padding: 0px;
  }
  .material-icons{
    color: #EF9B1E;
  }
}
  .help-btn-wrap{
    display: flex;
    justify-content: center;
    align-items: center;

    .btn{
      width:132px;
      height:35px;
      border:1px solid rgba(239,162,32,1);
      border-radius:17px;
      text-align: center;
      line-height: 35px;
      color: $c-cheng;
    }
  }

  .bottom-btn{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $c-cheng;
    color: #fff;
    line-height: 50px;
    font-size:15px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(255,255,255,1);
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
    bottom: 15px;
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
</style>

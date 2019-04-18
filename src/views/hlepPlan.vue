<template>
  <div class="">

    <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0" >
      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)"></mu-icon>
      </mu-button>
      <div class="text-center">互助计划</div>
    </mu-appbar>
    <banner-img></banner-img>
    <div class="wrap">
      <mu-sub-header>终身重大疾病互助计划</mu-sub-header>
      <div class="chat-wrap">
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
      <icon-bar left-text="预存48元加入" right-text="加入" >
        <span class="hot"></span>
      </icon-bar>
      <item-row :datas="itemRowData" ></item-row>
      <mu-divider></mu-divider>
      <div class="hlep-rule">
        <mu-sub-header>互助规则</mu-sub-header>
        <div class="rule"  v-for="i in 7" :key="i">
          <span class="rule-title">人群范围</span> Lorem ipsum dolor sit amet.
          <mu-divider></mu-divider>
        </div>
      </div>
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
          
        </div>
      </div>
      <div class="bottom-btn">立即加入</div>
    </div>
  </div>
</template>

<script>
  import BannerImg from '../components/BannerImg/BannerImg'
  import IconBar from '../components/IocnBar/IConBar'
  import ItemRow from '../components/ItemRow/ItemRow'
  export default {
    name: 'hlepPlan',
    components: {
      BannerImg,
      IconBar,
      ItemRow
    },

    data() {
      return {
        open: false,
        itemRowData: [
          {
            icon: ' iconfanweiguang-',
            title: '互助范围',
            text: '60 (大病) + 20(轻症)'
          },
          {
            icon: ' iconfanweiguang-',
            title: '互助范围',
            text: '60 (大病) + 20(轻症)'
          },
          {
            icon: ' iconfanweiguang-',
            title: '互助范围',
            text: '60 (大病) + 20(轻症)'
          },
          {
            icon: ' iconfanweiguang-',
            title: '互助范围',
            text: '60(大病)+20(轻症)'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap{
    padding: 5px;
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
  .chat-wrap{
    width: 100%;
    height: 30px;
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
      border-left: 1px solid #666666;
    }
  }
  .hlep-rule{
    .rule{

    }
  }
  .help-wrap{
  & /deep/ .mu-item{
    // border-bottom: .5px solid $c-hui;
    // padding: 0px;
  }
}
  .help-btn-wrap{
    display: flex;
    justify-content: center;
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

  .bottom-btn{
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $c-cheng;
    color: #fff;

  }
</style>

<template>
  <div class="">
    <!-- <header>
      <pageHeader :title="title"></pageHeader>
    </header> -->
    <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0" >
      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)"></mu-icon>
      </mu-button>
      <mu-button :ripple="false" icon slot="right"  >
        <!-- <mu-icon value=":iconfont iconshubanshenglvehao" @click="$router.go(-1)"></mu-icon> -->
      </mu-button>
      互助计划
    </mu-appbar>
    <pop-box style="z-index: 6" v-if="show">
      <div class="pop">
        <div>
          <div>
            <div class="heart">
              您还没有完成实名认证,现在去认证吗？
            </div>
          </div>
        </div>
        <div style="position: absolute;width: 100%;bottom: 0;">
          <button @click="$router.push('/home')">不，谢谢</button>
          <button class="btn-join" @click="$router.push({name:'real',query:{fullPath: $route.fullPath}})">现在认证</button>
        </div>
      </div>
    </pop-box>
    <div class="page-margin-top"></div>
    <banner-img :video-img="MutualRule.img"></banner-img>
    <div class="wrap">
      <div class="margin-left margin-bottom font">终身重大疾病互助计划</div>
      <div class="chat-wrap margin-bottom">
        <div class="chat-content item-content">
          <div class="chat-title">已加入人数 (人)</div>
          <div class="chat-info">{{MutualRule.joinCount}}</div>
        </div>
        <div class="xian"></div>
        <div class="chat-content item-content">
          <div class="chat-title">已互助金额 (元)</div>
          <div class="chat-info">{{MutualRule.supportAmount}}</div>
        </div>
        <div class="xian"></div>
        <div class="chat-content item-content">
          <div class="chat-title">互助事件</div>
          <div class="chat-info">{{MutualRule.supportCount}}</div>
        </div>
      </div>
      <!-- <icon-bar left-text="预存48元加入" right-text="加入" >
        <span class="hot"></span>
      </icon-bar> -->
      <div class="apply">
        <div class="img-wrap">
          <img src="../assets/image/加入我们.svg" alt="">
        </div>
        <span>预存10元互助金即可加入互助计划</span>
        <div class="apply-click">
          <!-- <span>加入</span> -->
          <!-- <mu-icon value=":iconfont iconyou"></mu-icon> -->
        </div>
      </div>
      <item-row :datas="itemRowData" ></item-row>
      <mu-divider></mu-divider>
      <div class="hlep-rule">
        <div class="font margin-left margin-top ">互助规则</div>
        <div class="rule margin-left">
          <span class="rule-title font-min margin-right">人群范围</span>{{MutualRule.crowdRange}}
          <mu-divider></mu-divider>
        </div>
        <div class="rule margin-left">
          <span class="rule-title font-min margin-right">互助范围</span>{{MutualRule.mutualRange}}
          <mu-divider></mu-divider>
        </div>
        <div class="rule margin-left">
          <span class="rule-title font-min margin-right">加入费用</span>{{MutualRule.joinAmount}}
          <mu-divider></mu-divider>
        </div>
        <div class="rule margin-left">
          <span class="rule-title font-min margin-right">最高获取</span>{{MutualRule.highestHelped}}
          <mu-divider></mu-divider>
        </div>
        <div class="rule margin-left">
          <span class="rule-title font-min margin-right">均摊规则</span>{{MutualRule.sharingRule}}
          <mu-divider></mu-divider>
        </div>
        <div class="rule margin-left">
          <span class="rule-title font-min margin-right">等&nbsp;待&nbsp;期</span>{{MutualRule.wattingStage}}天
          <mu-divider></mu-divider>
        </div>
      </div>
       <div class="help-wrap">
        <div class="font margin-left margin-top ">常见问题</div>

        <mu-list  class="list" toggle-nested="">
          <mu-list-item button :ripple="false" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''"     v-for="(item,i) in issueList" :key="i">
            <mu-list-item-title style="font-size: 14px;">{{i+1}}、{{item.title}} </mu-list-item-title>
            <mu-list-item-action>
              <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down" ></mu-icon>
            </mu-list-item-action>
            <p slot="nested">{{item.content}}</p>
            <!--<mu-list-item button :ripple="false" slot="nested">-->
              <!--<mu-list-item-title>{{item.content}}</mu-list-item-title>-->
            <!--</mu-list-item>-->
          </mu-list-item>
        </mu-list>

        <div class="help-btn-wrap">
          <a href="tel:CustomerService" class="btn margin-bottom">
            <span href="tel:CustomerService" class="iconfont iconlianxikefu"></span>
            联系客服
          </a>
        </div>


        <mu-list  class="list" toggle-nested="">
          <mu-list-item v-for="(problem, i) in problems" button :ripple="false" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''"  :key="i">
            <mu-list-item-title>{{i+1}}、{{problem.title}}</mu-list-item-title>
            <mu-list-item-action>
              <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down" ></mu-icon>
            </mu-list-item-action>
            <!--<mu-list-item button :ripple="false" slot="nested">-->
              <!--<mu-list-item-title>{{problem.content}}</mu-list-item-title>-->
            <!--</mu-list-item>-->
            <p slot="nested">{{problem.content}}</p>
          </mu-list-item>
        </mu-list>

      </div>
    </div>
    <div class="bottom-btn" @click="joinInform">立即加入</div>
  </div>
</template>

<script>
  import BannerImg from '../components/BannerImg/BannerImg'
  import IconBar from '../components/IocnBar/IConBar'
  import ItemRow from '../components/ItemRow/ItemRow'
  import pageHeader from '../components/PageHeader/PageHeader.vue'
  import { mapState } from 'vuex'
  import  popBox from '../components/PopBox/PopBox'
  export default {
    name: 'hlepPlan',
    components: {
      BannerImg,
      IconBar,
      ItemRow,
      pageHeader,
      popBox
    },
    // props: ['productCode'],
    computed: {
      ...mapState(['userInfo', 'issueList']),

    },
    data() {
      return {
        // open: false,
        // open: 'send',
        title: '互助计划',
        MutualRule: [],
        problems: {},
        productCode:this.$route.params.productCode,
        itemRowData: [
          // {
          //   icon: ' iconfanweiguang-',
          //   title: '互助范围',
          //   text: '60 (大病) + 20(轻症)'
          // },
          // {
          //   icon: ' iconedu',
          //   title: '互助额度',
          //   text: '最高55万'
          // },
          // {
          //   icon: ' iconbaozhang',
          //   title: '终身保障',
          //   text: '28天~100周岁'
          // },
          // {
          //   icon: ' iconpeifu',
          //   title: '赔付秒结',
          //   text: '满足条件拨款秒结'
          // }
        ],
        CustomerService: '',
        show: false,
      }
    },
    methods: {
      showPoP() {
        return  this.show = this.userInfo.state === 100
      },
      joinInform() {
        // var xtoken = window.localStorage.getItem('token')
        // // console.log(xtoken)
        // if (xtoken == null) {
        //   return
        // }
        // this.$store.commit('set_writingData',
        // {
        //   "writingImg":this.MutualRule.healthyImg, //健康文案图片
        //   "writing": this.MutualRule.healthyText, //健康文案
        // })
        this.$router.push({
          name: 'inform',
          params: {
            "writingImg":this.MutualRule.healthyImg, //健康文案图片
            "writing": this.MutualRule.healthyText, //健康文案
            "MutualRule": this.MutualRule, // 产品详情--传到加入计划
            "productCode": this.$route.params.productCode
          }
        })
      },
      open(){

      }
    },
    created() {
    },
    mounted() {
      this.$axios.post('v1/manage/config/getTextList',{
            "keys": 'CustomerService'
        }).then(res=>{
            this.CustomerService = res.data.data.CustomerService
        })
      this.showPoP()
      let time = +new Date()
      // let fn = async () =>{
      //   debugger
      //   let res= await this.$axios.post('/v1/product/product/tags',{  // 产品标签列表
      //     "productCode": this.$route.params.productCode
      //   })
      //     // res.then(res=>{
      //
      //     this.itemRowData = res.data.data
      //     // console.log(res)
      //   // })
      // }
      this.$axios.post('/v1/product/product/tags',{  // 产品标签列表
        "productCode": this.$route.params.productCode
      }).then(res => {
            this.itemRowData = res.data.data
      })
      console.log(+ new Date() -time)
      // fn()
      console.log(+ new Date() -time)
      this.$axios.post('/v1/product/product/productDetail',{  // 产品详情
        "productCode": this.$route.params.productCode
      }).then(res=>{
        this.MutualRule = res.data.data
        this.MutualRule.productCode = this.$route.params.productCode
        this.$store.commit('set_MutualRule', res.data.data)

        console.log(this.MutualRule)
      })

      this.$axios.post('/v1/product/product/issue',{ //常见问题
        "productCode": this.productCode
      }).then(res=>{
        this.problems = res.data.data
        console.log(this.problem)
      })
      console.log(this.$route.params.productCode)
    }
  }
</script>

<style lang="scss" scoped>
  .pop{
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
      width: 170px;
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
    padding: 5px;
    background: #fff;
    padding-bottom: 50px;
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
      // letter-spacing: 2px;
    }
    .chat-info{
      font-size:18px;
      font-family:ArialMT;
      font-weight:400;
      color:rgba(239,162,32,1);
      overflow: hidden;
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
    /*padding-left: 10px;*/
    /*padding: 0px 10px;*/
    width: 100%;

    /*margin: auto;*/
    /*& /deep/ .mu-item-title{*/
      /*padding-left: 10px;*/
    /*}*/
  & /deep/ .mu-item{
    padding-left: 10px;
    // border-bottom: .5px solid $c-hui;
    // padding: 0px;
  }
  .material-icons{
    color: #EF9B1E;
  }
}
.mu-item-title[data-v-66198adc]{
  font-size: 14px;
}
  .help-btn-wrap{
    display: flex;
    justify-content: center;
    align-items: center;
    a{
      color: $c-cheng;
    }
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
    position: fixed;
    bottom: 0px;
    left: 0px;
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
  background-color: #f9be41;
  border-radius: 20px;
  margin: 18px auto;
  position: relative;
  color: #fff;
  span {
    font-size:12px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    // color:rgba(255,0,0,1);
    text-align: center;
    line-height: 12px;
    padding-left: 20px;
  }
  .iconfont{
    font-size: 50px;
  }
  .img-wrap{
    width: 34px;
    height: 34px;
    margin-left: 6px;
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
      // color:rgba(255,0,0,1);
      line-height: 12px;
    }
    .iconyou{
      font-size: 16px;
      // color:#FF0000;
    }
  }
}
.rule{
  overflow: hidden;
}
</style>

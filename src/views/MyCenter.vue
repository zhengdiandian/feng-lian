<template>
<div id="MyCenter">
  <PopBox v-if="showPoP">
    <div class="pop-content">
      <div>
        <div>
          <div class="heart">
          </div>
        </div>
        一大批爱心人士正在赶来
      </div>
      <div @click="showPoP=false">我知道了</div>
    </div>
  </PopBox>
  <PopBox v-if="showpop">
    <div class="pop">
      <div>
        <div>
          <div class="heart">
            您为成为爱心大使暂不能邀请
          </div>
        </div>
      </div>
      <div style="position: absolute;width: 100%;bottom: 0;">
        <button @click="showpop=false">取消</button>
        <button class="btn-join" @click="$router.push('/hlepPlan/PRO201905111234221')">成为会员大使</button>
      </div>
    </div>
  </PopBox>
    <header>
      <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
        <mu-button icon slot="right" :ripple="false">
        </mu-button>
        我的蜂链
        <mu-button icon slot="left" :ripple="false">
        </mu-button>
      </mu-appbar>
    </header>
    <main>
      <div class="headerNav" @click="$router.push('perinfor')">
        <div class="headerLogin"><img :src="preinfo.headPortrait" alt=""></div>
        <!-- <router-link tag="div" to="/perinfor"> -->
        <section class="information">
          <span class="name">姓名：{{preinfo.nickname}}</span><span class="state">{{preinfo.state==100 ? '未实名': '已实名' }}</span>
          <div class="number"><span>{{preinfo.account}}</span></div>
          <div class="integral">积分 {{preinfo.totalScore}}</div>
          <div class="autograph">{{preinfo.motto}}</div>
        </section>
        <!-- </router-link> -->
         <mu-icon value=":iconfont iconyou1"></mu-icon>
      </div>
      <div @click="invitation">
      <!-- <div class="apply" >
        <div class="img-wrap">
          <img src="../assets/爱心2.svg" alt="">
        </div>
        <span>申请成为爱心大使</span>
        <div class="apply-click">
          <span>立即申请</span>
          <mu-icon value=":iconfont iconyou"></mu-icon>
        </div>
      </div> -->
      </div>
      <section class="please-list">
          <div class="list-li" v-if="preinfo.type &&  preinfo.type!==100" @click="$router.push('/welfareagency')">
            <div style="text-align: center; display: flex; line-height: 26px; margin-left: 12px;">
              <div style="width:22px;height:22px;"><img src="../assets/image/福利汇.svg" alt=""></div>
              <span class="position-r" style="margin-left:12px; margin-top: 3px;">福利社</span>
            </div>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>

          <div tag="div" @click="$router.push('/CardBag')">
          <div class="list-li">
            <div style="text-align: center; display: flex; line-height: 26px; margin-left: 12px;">
               <div style="width:22px;height:22px;"><img src="../assets/image/卡包.svg" alt=""></div>
              <span class="position-r" style="margin-left:12px">我的卡包</span>
            </div>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </div>

        <router-link tag="div" to="/myplan">
          <div class="list-li">
            <div style="text-align: center; display: flex; line-height: 26px; margin-left: 12px;">
              <div style="width:22px;height:22px;"><img src="../assets/image/我的计划-选中.svg" alt=""></div>
              <span class="position-r" style="margin-left:12px">我的计划</span>
            </div>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </router-link>

        <div  @click="$toast.info('需要等待180天后', {time: 2000} )">
          <div class="list-li">
            <div style="text-align: center; display: flex; line-height: 26px; margin-left: 12px;">
              <div style="width:22px;height:22px;"><img src="../assets/image/申请.svg" alt=""></div>
              <span class="position-r" style="margin-left:12px">我的申请</span>
            </div>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </div>

        <div @click="ToMyinteg">
          <div class="list-li">
            <div style="text-align: center; display: flex; line-height: 26px; margin-left: 12px;">
              <div style="width:22px;height:22px;"><img src="../assets/image/客户.svg" alt=""></div>
              <span class="position-r" style="margin-left:12px">我的蜂蜜</span>
            </div>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </div>

        <router-link tag="div" to="/assis">
          <div class="list-li">
            <div style="text-align: center; display: flex; line-height: 26px; margin-left: 12px;">
              <div style="width:22px;height:22px;"><img src="../assets/image/记录.svg" alt=""></div>
              <span class="position-r" style="margin-left:12px">互助记录</span>
            </div>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </router-link>

        <router-link tag="div" v-if="preinfo.type && preinfo.type!==100" to="/code">
          <div class="list-li">
            <div style="text-align: center; display: flex; line-height: 26px; margin-left: 12px;">
              <div style="width:22px;height:22px;"><img src="../assets/image/邀请.svg" alt=""></div>
              <span class="position-r" style="margin-left:12px">我的二维码</span>
            </div>
            <mu-icon value=":iconfont iconyou1"></mu-icon>
          </div>
        </router-link>

        </section>
        <section class="please-list-tongzhi">
          <div  @click="showPoP=true">
            <div class="list-li">
              <div style="text-align: center; display: flex; line-height: 26px; margin-left: 12px;">
              <div style="width:22px;height:22px;"><img src="../assets/image/通知.svg" alt=""></div>
                <span class="position-r" style="margin-left:12px">通知</span>
              </div>
              <mu-icon value=":iconfont iconyou1"></mu-icon>
            </div>
          </div>

          <router-link tag="div" to="/setup">
            <div class="list-li">
              <div style="text-align: center; display: flex; line-height: 26px; margin-left: 12px;">
              <div style="width:22px;height:22px;"><img src="../assets/image/设置.svg" alt=""></div>
                <span class="position-r" style="margin-left:12px">设置</span>
              </div>
              <mu-icon value=":iconfont iconyou1"></mu-icon>
            </div>
          </router-link>

        </section>
    </main>
</div>
</template>
<script>
import axios from 'axios'
import {mapState} from 'vuex'
  import PopBox from '../components/PopBox/PopBox'
  export default {
  name: 'mycenter',
  data() {
    return {
      showPoP: false,
      showpop: false,
      name: 'Bryant.zZ',
      preinfo: [],
      type: 100,
      list: [
        "福利社",
        "我的卡包",
        "我的计划",
        "我的申请",
        "我的蜂蜜",
        "互助记录",
        "邀请好友"
      ],
      listSet: [
        "通知",
        "设置"
      ],
      time: 500,
    }
  },
    computed:mapState(['userInfo']),
  methods: {
    jump() {
       this.$router.push('/per')
    },
    invitation(){
      if (this.userInfo.state == 200) {
        this.$router.push('/hlepPlan/PRO201905111234221')
      } else {
        this.showpop = true
      }
      // this.$router.push('/code')
  },
  ToMyinteg(){
    this.$router.push({
      name: 'myintegral',
      params:{
        "totalScore": this.preinfo.totalScore,
        "scoreType": this.preinfo.scoreType
      }
    })
  }
  },
  created() {
    this.$axios.post('v1/user/info/personalInfo').then(res => {
        debugger
        
        this.$store.commit('set_userInfo',res.data.data)
      })
    // this.$axios.post('/v1/user/info/personalInfo').then(res => {
    //   console.log(res)
    // })
  },
    components: {
    PopBox
    },
    mounted() {
      this.$axios.post('/v1/user/info/index').then((res) =>{
            // debugger
        debugger
            this.preinfo = res.data.data
            // this.type = res.data.data.type
            console.log(res)
        })
    }
}
</script>
<style scoped lang="scss">
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

  .pop-content{
    width: 300px;
    height: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    text-align: center;
    & >div:last-child{
      height: 40px;
      background-color: $c-cheng;
      color: $c-bai;
      line-height: 40px;
      font-size: 18px;
      align-self: flex-end;
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
      width: 80px;
      height: 80px;
      background: url("../assets/img/爱心.svg") center no-repeat;
      -webkit-background-size: 100% 100%;
      background-size: 100% 100%;
    }
  }


header {
width: $gw;
position: fixed;
top: 0;
left: 0;
z-index: 99;
.header-title {
  width: $gw;
  text-align: center;
  height: 44px;
  line-height: 44px;
  font-size: 16px;
  background-color: #fff;
}
}
.headerNav{
  width:351px;
  height:107px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 20px auto;
  margin-top: 60px;
  display: flex;
  align-items: center;
  position: relative;
  .headerLogin{
    width:60px;
    height:60px;
    border-radius:50%;
    background:rgba(207,207,207,1);
    // border:1px solid $c-cheng;
    margin-left: 12px;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .information{
    margin-left: 13px;
    .name{
      font-size:14px;
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(51,51,51,1);
    }
    .number{
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(112,112,112,1);
      font-size: 10px;
      font-size: 14px;
    }
    .integral{
      font-size:12px;
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(239,162,32,1);
      margin-top: 10px;
    }
    .autograph{
      font-size:12px;
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(112,112,112,1);
      // margin-top: 5px;
    }
  }
  .state{
    display: inline-block;
    // width:40px;
    padding: 0px 5px;
    height: 18px;
    line-height: 18px;
    background:rgba(239,162,32,1);
    border:0px solid rgba(255,255,255,1);
    font-size:12px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    margin-left: 6px;
    border-radius: 2px;
  }
    .iconyou1{
      width:6px;
      height:12px;
      position: absolute;
      right: 13px;
      color: #EF9B1E;
    }
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
      // color:rgba(255,0,0,1);
      line-height: 12px;
    }
    .iconyou{
      font-size: 16px;
      // color:rgba(255,0,0,1);
    }
  }
}
.please-list{
  width:350px;
  /*height:323px;*/
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius:5px;
  margin: 20px auto;
}
.please-list-tongzhi{
  width:351px;
  height:93px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius:5px;
  margin: 10px auto;
  // margin-top: 40px;
  margin-bottom: 60px;
}
.list-li {
      height: 50px;
      display: flex;
      align-items: center;
      background-color: #fff;
      .iconyou1{
        position: absolute;
        right: 12px;
        font-size: 20px;
        color: #EF9B1E;
      }
    }
</style>

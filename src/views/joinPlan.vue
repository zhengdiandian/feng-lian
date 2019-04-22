<template>
  <div>
    <!-- <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)"></mu-icon>
      </mu-button>
      <div class="text-center">加入计划</div>
    </mu-appbar> -->
    <header>
      <headpage :title="title"></headpage>
    </header>
    <main>
      <div class="page-margin-top mu-header">终身重大疾病互助计划</div>
      <div class="plan-info wrap">
        <li v-for="(item, index) in 6" :key="index">
          <span>加入年龄：出生28天-65周岁</span>
        </li>
      </div>
      <!-- <mu-divider style="height:5px"></mu-divider> -->
      <div class="info-form margin-left">
        <span class="margin-top" style="display: inline-block;">资料填写</span>
        <div class="input-wrap">
          <label for>姓 &nbsp; 名：</label>
          <input type="text" placeholder="请输入您的姓名">
        </div>
        <div class="input-wrap">
          <label for>身份证：</label>
          <input type="text" placeholder="请输入您的姓名">
        </div>
        <div class="warning">
          <mu-icon value=":iconfont icontanhao" size="24"></mu-icon> &nbsp; 身份证信息不可修改, 请正确填写
        </div>
      </div>
      <!-- <mu-divider style="height:5px;"></mu-divider> -->
      <div class="yaoQing margin-top wrap">
        <div class="input-wrap">
          <label for>邀请码</label>
          <input type="text" placeholder="请输入邀请码">
          <span class="margin-left">获取邀请码</span>
        </div>
        <div class="warning">
          <mu-icon value=":iconfont icontanhao" size="24"></mu-icon>身份证信息不可修改, 请正确填写
        </div>
      </div>
    <!-- <mu-divider style="height:5px;"></mu-divider> -->
    <div class="select-wrap">
      <div class="font margin-bottom margin-top">选择关系</div>
      <div class="select-items">
        <div class="item">自己</div>
        <div class="item">父母</div>
        <div class="item">配偶</div>
        <div class="item">子女</div>
      </div>
      <div class="font margin-top">预计使用10个月</div>
      <!--<mu-slider class="demo-slider" v-model="normal.value1"></mu-slider>-->
      <!--<mu-slider class="demo-slider" :display-value="false" :step="10" v-model="sliderVal"></mu-slider>-->
      <!--<mu-slider class="demo-slider" disabled v-model="normal.value3"></mu-slider>-->
      <div class="stepper-wrap">
        <mu-stepper :linear="false" :active-step="activeStep"  class="mu-stepper">
          <mu-step v-for="i in 5" :key="i" @click="activeStep=i-1">
            <mu-step-label >
            </mu-step-label>
          </mu-step>

        </mu-stepper>
        <ul class="stepper-step">
          <li>10元</li>
          <li>20元</li>
          <li>50元</li>
          <li>100元</li>
          <li>200元</li>
        </ul>
      </div>
      <div class="buy-info margin-top">
        使用时间: <span class="margin-left font-min">10个月</span>
        <mu-divider></mu-divider>
      </div>
      <div class="buy-info">
        服务费: <span class="margin-left font-min"> &nbsp;&nbsp;&nbsp;10个月</span>
        <mu-divider></mu-divider>
      </div>
      <div class="buy-info">
        合计: <span class="margin-left font-min">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10个月</span>
        <mu-divider></mu-divider>
      </div>
      <div class="tongYi">
        <label class="iconfont iconxuanze" :style="tongYiStyle" for="tongYi"></label><input v-model="tongYi"  id="tongYi" type="checkbox"> 我已阅读并同意  <span> <<互助计划公约>></span>
      </div>
    </div>
  </main>
    <div class="big-btn" @click="$router.push('/orderInfo')">去支付</div>
  </div>
</template>

<script>
import headpage from '../components/PageHeader/PageHeader'
export default {
  name: "joinPlan",
  data() {
    return {
      sliderVal: '',
      tongYi: false,
      activeStep: 0,
      title: '加入计划'
    }
  },
  computed:{
    tongYiStyle () {
      return this.tongYi ? {color: 'blue'}: {}
    }
  },
  components: {
    headpage
  }
};
</script>

<style scoped lang='scss'>
.mu-header{
  margin: 56px 0 12px 12px;
}
  .stepper-step{
    margin: -45px -10px 0 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    li{
    padding: 0;
      margin-left: -10px;
      color: $c-black;
    }
  }
.wrap {
  padding: 0 20px;
}
.plan-info  {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: #fff;
  li {
    width: 150px;
    color: $c-cheng;
    height: 20px;
    overflow: hidden;
    margin: 8px auto;
    span {
      color: #000;
      font-size: 12px;
    }
  }
}
.input-wrap {
  height: 50px;
  background: #fff;
  line-height: 50px;
  input {
    border: none;
    padding-left: 20px;
    outline: none;
    font-size: 12px;

  }
}
.warning {
  .iconfont {
    vertical-align: middle;
  }
  color: $c-warning;
}
.yaoQing {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  justify-content: center;
  .input-wrap {
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    width:351px;
    height:33px;
    border:1px solid rgba(239,162,32,1);
    border-radius:17px;
    line-height: 33px;
  }
  input {
    // width: 150px;
    // box-sizing: border-box;
    // padding-left: 10px;
    // border: none;
    // width: 50%;
    // outline: none;
  }
  .warning {
    padding-top: 5px;
  }
}

.info-form{
  span{
    font-size:14px;
    font-family:SourceHanSansCN-Normal;
    font-weight:bold;
    color:rgba(51,51,51,1);
  }
}

.select-wrap{
  width: 351px;
  margin: auto;
  .select-items{
    display: flex;
    justify-content: space-between;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;
      border-radius: 5px;
      background-color: $c-cheng;
      color: #fff;
    }
  }
  .buy-info{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #fff;
  }

  .mu-stepper{
    position:relative;
    top: -20px;
  }
  .tongYi{
    input[type=checkbox]{
      visibility: hidden;
    }
    span{
      color: cornflowerblue;
    }
  }
}
  .big-btn{
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: $c-cheng;
    color: #fff;
  }
  .stepper{
    width: 100%;
  }
</style>

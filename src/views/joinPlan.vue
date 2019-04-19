<template>
  <div class>
    <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)"></mu-icon>
      </mu-button>
      <div class="text-center">加入计划</div>
    </mu-appbar>
      <mu-sub-header>终身重大疾病互助计划</mu-sub-header>
      <ul class="plan-info wrap">
        <li v-for="(item, index) in 6" :key="index">
          <span>Lorem, ipsum.</span>
        </li>
      </ul>
      <mu-divider style="height:5px"></mu-divider>
      <div class="info-form wrap">
        <mu-sub-header>资料填写</mu-sub-header>
        <div class="input-wrap">
          <label for>姓 名：</label>
          <input type="text" placeholder="请输入您的姓名">
        </div>
        <div class="input-wrap">
          <label for>姓 名：</label>
          <input type="text" placeholder="请输入您的姓名">
        </div>
        <div class="warning">
          <mu-icon value=":iconfont icontanhao" size="24"></mu-icon>身份证信息不可修改, 请正确填写
        </div>
      </div>
      <mu-divider style="height:5px;"></mu-divider>
      <div class="yaoQing wrap">
        <div class="input-wrap">
          <label for>邀请码</label>
          <input type="text" placeholder="请输入邀请码">
          <span>获取邀请码</span>
        </div>
        <div class="warning">
          <mu-icon value=":iconfont icontanhao" size="24"></mu-icon>身份证信息不可修改, 请正确填写
        </div>
      </div>
    <mu-divider style="height:5px;"></mu-divider>
    <div class="select-wrap wrap">
      <mu-sub-header>选择关系</mu-sub-header>
      <div class="select-items">
        <div class="item">自己</div>
        <div class="item">父母</div>
        <div class="item">配偶</div>
        <div class="item">子女</div>
      </div>
      <mu-sub-header>选择关系</mu-sub-header>
      <!--<mu-slider class="demo-slider" v-model="normal.value1"></mu-slider>-->
      <mu-slider class="demo-slider" :display-value="false" :step="10" v-model="sliderVal"></mu-slider>
      <!--<mu-slider class="demo-slider" disabled v-model="normal.value3"></mu-slider>-->
      <div class="buy-info">
        使用时间: <span>10个月</span>
        <mu-divider></mu-divider>
      </div>
      <div class="buy-info">
        使用时间: <span>10个月</span>
        <mu-divider></mu-divider>
      </div>
      <div class="buy-info">
        使用时间: <span>10个月</span>
        <mu-divider></mu-divider>
      </div>
      <div class="tongYi">
        <label class="iconfont iconxuanze" :style="tongYiStyle" for="tongYi"></label><input v-model="tongYi"  id="tongYi" type="checkbox"> 我已阅读并同意  <span> <<互助计划公约>></span>
      </div>
    </div>
    <div class="big-btn">去支付</div>
  </div>
</template>

<script>
export default {
  name: "joinPlan",
  data() {
    return {
      sliderVal: '',
      tongYi: false
    }
  },
  computed:{
    tongYiStyle () {
      return this.tongYi ? {color: 'blue'}: {}
    }
  }
};
</script>

<style scoped lang='scss'>
.wrap {
  padding: 0 20px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    width: 50%;
    color: $c-cheng;
    span {
      color: #000;
    }
  }
}
.input-wrap {
  input {
    border: none;
    padding-left: 20px;
    outline: none;
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
    width: 100%;
    display: flex;
    box-sizing: border-box;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    border: 1px solid $c-cheng;
    border-radius: 20px;
    height: 40px;
    // margin: 0 10px;
    padding: 0 10px;
  }
  input {
    width: 150px;
    box-sizing: border-box;
    padding-left: 10px;
    border: none;
    // width: 50%;
    outline: none;
  }
  .warning {
  }
}

.select-wrap{
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
    height: 60px;
    justify-content: center;
    align-items: center;
    background-color: $c-cheng;
    color: #fff;
  }
</style>

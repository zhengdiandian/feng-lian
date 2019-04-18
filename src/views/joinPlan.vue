<template>
    <div class="">

       <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0" >
        <mu-button icon slot="left" @click="$router.go(-1)">
          <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)"></mu-icon>
        </mu-button>
        <div class="text-center">加入计划</div>
      </mu-appbar>
      <div class="wrap">
        <mu-sub-header>终身重大疾病互助计划</mu-sub-header>
      <ul class="plan-info">
        <li v-for="(item, index) in 6" :key="index"><span>Lorem, ipsum.</span></li>
      </ul>
      <mu-divider style="height:5px"></mu-divider>
      <div class="info-form">
          <mu-sub-header>资料填写</mu-sub-header>
          <div class="input-wrap">
            <label for="" >姓 名：</label>
            <input type="text" placeholder="请输入您的姓名">
          </div>
           <div class="input-wrap">
            <label for="" >姓 名：</label>
            <input type="text" placeholder="请输入您的姓名">
          </div>
          <div class="wraning">

            <mu-icon value=""></mu-icon> 
          </div>
      </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'joinPlan'
  }
</script>

<style scoped lang='scss'>
.wrap{
  padding: 0 20px;
}
ul{

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  li{
    width: 50%;
    color: $c-cheng;
    span{
      color: #000;
    }
  }
}
.input-wrap{
  input{
    border: none;
    padding-left: 20px;
    outline: none;
  }
}
</style>

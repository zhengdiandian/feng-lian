<template>
    <div class="wrap">

       <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0" >
        <mu-button icon slot="left" @click="$router.go(-1)">
          <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)"></mu-icon>
        </mu-button>
        <div class="text-center">加入计划</div>
      </mu-appbar>
      <mu-sub-header>终身重大疾病互助计划</mu-sub-header>
      <ul class="plan-info">
        <li v-for="(item, index) in 6" :key="index"><span>Lorem, ipsum.</span></li>
      </ul>
      <mu-divider style="height:5px"></mu-divider>
      <div class="info-form">

      </div>
    </div>
</template>

<script>
  export default {
    name: 'joinPlan'
  }
</script>

<style scoped lang='scss'>

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
</style>

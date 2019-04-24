<template>
    <div class="page-margin-top">
      <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
        <mu-button icon slot="left" @click="$router.go(-1)" >
          <mu-icon value=":iconfont iconfanhui" size="24" @click.stop="$router.go(-1)"></mu-icon>
        </mu-button>
        我的互助计划
        <mu-button icon slot="right" :ripple="false">
        </mu-button>
      </mu-appbar>
      <div class="wrap">
        <mu-sub-header>我的购买计划</mu-sub-header>
        <card :open="()=>{$router.push('/planInitial')}" v-for="i in 2" :key="i"></card>
      </div>
    </div>
</template>

<script>
  import Card from '../components/Card/Card'
  export default {
    name: 'minePlan',
    components: {
      Card
    }
  }
</script>

<style lang="scss" scoped>
.wrap{
  padding: 0 12px;
  .mu-sub-header {
    padding: 12px 0;
  }
}
</style>

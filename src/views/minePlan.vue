<template>
    <div>
      <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
        <mu-button icon slot="left" @click="$router.go(-1)" >
          <mu-icon value=":iconfont iconfanhui" size="24" @click.stop="$router.go(-1)"></mu-icon>
        </mu-button>
        加入计划
        <mu-button icon slot="right">
          <mu-icon value=":iconfont iconxinxi" size="24"></mu-icon>
        </mu-button>
      </mu-appbar>
      <div class="wrap">
        <mu-sub-header>我的购买计划</mu-sub-header>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'minePlan'
  }
</script>

<style scoped>
.wrap{
  padding: 0 11px;
}
</style>

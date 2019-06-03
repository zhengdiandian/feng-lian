<template>
    <div>
        <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
            <mu-button icon slot="left" @click="$router.go(-1)">
                <mu-icon value=":iconfont iconfanhui"></mu-icon>
            </mu-button>订单详情
            <mu-button icon slot="right" :ripple="false"></mu-button>
        </mu-appbar>
    </div>
</template>

<script>
  export default {
    name: 'yiyi'
  }
</script>

<style scoped>

</style>
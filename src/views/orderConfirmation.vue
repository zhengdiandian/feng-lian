<template>
    <div>
        <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0" >
      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)"></mu-icon>
      </mu-button>
      <mu-button :ripple="false" icon slot="right"  >
        <!-- <mu-icon value=":iconfont iconshubanshenglvehao" @click="$router.go(-1)"></mu-icon> -->
      </mu-button>
      互助计划
    </mu-appbar>
    </div>
</template>
<script>
export default {
    name: 'orderConfirmation'
    
}
</script>

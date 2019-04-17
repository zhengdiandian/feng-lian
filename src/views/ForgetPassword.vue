<template>
    <div>
      <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0" >
        <mu-button icon slot="left" @click="$router.go(-1)">
          <mu-icon value=":iconfont iconfanhui"@click="$router.go(-1)"></mu-icon>
        </mu-button>
        <div class="text-center">忘记密码</div>
        <mu-button flat slot="right">跳过此步骤</mu-button>
      </mu-appbar>
    </div>
</template>

<script>
  export default {
    name: 'ForgetPassword'
  }
</script>

<style scoped>

</style>

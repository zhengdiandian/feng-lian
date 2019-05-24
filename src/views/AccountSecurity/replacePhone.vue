<template>
    <div>
        <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
          <mu-button icon slot="left" @click="$router.go(-1)">
            <mu-icon value=":iconfont iconfanhui"></mu-icon>
          </mu-button>
          绑定手机号码
          <mu-button icon slot="right" :ripple="false">
          </mu-button>
        </mu-appbar>
        <main>
        </main>
    </div>
</template>

<script>

    export default {
        name: 'replacePhone'
    }
</script>

<style lang="scss" scoped>
main{
  padding-top: 50px;
}

</style>
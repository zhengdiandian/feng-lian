<template>
    <div>
        <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
          <mu-button icon slot="left" @click="$router.go(-1)">
            <mu-icon value=":iconfont iconfanhui"></mu-icon>
          </mu-button>
          系统信息详细
          <mu-button icon slot="right" :ripple="false">
          </mu-button>
        </mu-appbar>
        <main>
        </main>
    </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  created () {
    this.$axios.post('/v1/manage/post/postDetail', {
      'id': this.$route.params.id
    }).then(res => {
      console.log(res)
    })
  }
}
</script>

<style lang="scss" scoped>

</style>

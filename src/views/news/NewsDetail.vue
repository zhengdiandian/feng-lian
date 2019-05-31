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
          <div v-html="content.postTitle">{{content.postTitle}}</div>
          <div v-html="content.postDate">{{content.postDate}}</div>
          <div v-html="content.postContent">{{content.postContent}}</div>
        </main>
    </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  data () {
    return {
      id: this.$route.params.id,
      content: {}
    }
  },
  created () {
    this.$axios.post('/v1/manage/post/postDetail', {
      'id': this.id
    }).then(res => {
      this.content = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped>
main{
  padding-top: 50px;
}
</style>

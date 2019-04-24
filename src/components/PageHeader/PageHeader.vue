<template>
    <header>
        <nav>
            <mu-icon value=":iconfont iconfanhui" @click="openReturn"></mu-icon>
            <div class="title mu-appbar-title">{{title}}</div>
        </nav>
    </header>
</template>
<script>
export default {
    name: 'PageHeader',
    props: {
        title: {
            type: String,
            default: "Bryant.zZ"
        },
    },
    methods: {
        openReturn() {
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped lang="scss">
nav {
    width: $gw;
    height: 44px;
    display: flex;
    align-items: center;
    background-color: #fff;
    position: relative;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    .iconfanhui{
        font-size: 20px;
        margin-left: 5px;
        position: absolute;
        left: 12px;
    }
    .title {
      font-size: 16px;
      font-weight:bold;
      color:rgba(51,51,51,1)
        /*span{*/
            /*width:62px;*/
            /*height:14px;*/
            /*!*font-size:15px;*!*/
          /*font-size: 16px;*/
          /*font-weight:bold;*/
            /*font-family:SourceHanSansCN-Normal;*/
            /*font-weight:bold;*/
            /*color:rgba(51,51,51,1);*/
        /*}*/
    }
}
</style>

<template>
    <header>
        <nav>
            <mu-icon value=":iconfont iconfanhui" @click="openReturn"></mu-icon>
            <div class="title">{{title}}</div>
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
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #fff;
    position: relative;
    .iconfanhui{
        font-size: 20px;
        margin-left: 5px;
    }
    .title {
        position: absolute;
        left: 144px;
        span{
            width:62px;
            height:14px;
            font-size:15px;
            font-family:SourceHanSansCN-Normal;
            font-weight:bold;
            color:rgba(51,51,51,1);
        }
    }
}
</style>

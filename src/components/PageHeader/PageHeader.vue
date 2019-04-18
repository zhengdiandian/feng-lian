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
    .iconfanhui{
        font-size: 25px;
        margin-left: 5px;
    }
    .title {
        width: 80%;
        text-align: center;
        // font-weight: bold;
        font-size: 16px;
    }
}
</style>

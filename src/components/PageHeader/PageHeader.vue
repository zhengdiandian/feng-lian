<template>
    <header>
        <nav>
            <router-link tag="div" to="/">
                <mu-icon value=":iconfont iconfanhui"></mu-icon>
            </router-link>
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
    }
}
</script>
<style scoped lang="scss">
nav {
    width: $gw;
    height: 50px;
    display: flex;
    align-items: center;
    .iconfanhui{
        font-size: 25px;
        margin-left: 5px;
        margin-top: -20px;
    }
    .title {
        width: 80%;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
    }
}
</style>

<template>
    <header>
        <nav>
            
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
    img {
        width: 30px;
        height: 30px;
        margin-left: 5px;
    }
    .title {
        width: 80%;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
    }
}
</style>

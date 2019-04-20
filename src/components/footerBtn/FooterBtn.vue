<template>
    <div>
        <footer>
            <div class="ordinary-claims">申请理赔</div>
            <div class="Second-claims">申请秒赔</div>
        </footer>
    </div>
</template>
<script>
export default {
    name: 'footerbtn',
    data() {
        return {
            upload: '我的计划',
            name: 'yyyy'
        }
    },
    props: {
        ordinary: {
            type: String,
            default: '申请理赔'
        },
        Second: {
            type: String,
            default: '申请秒赔'
        }
    }
}
</script>
<style scoped lang="scss">

footer{
    width: 100%;
    height: 50px;
    // border: 1px solid black;
    position: fixed;
    bottom: 0;
    display: flex;
    text-align: center;
    line-height: 50px;
    color: #fff;
    .ordinary-claims{
        width: 70%;
        height: 100%;
        background-color: #eea31f;
    }
    .Second-claims{
        width: 30%;
        height: 100%;
        background-color: #f26d00;
    }
}
</style>

<template>
<div id="myrewardinteg">
    <header>
        <PageHeader :title="title"></PageHeader>
    </header>
    <main>
        <section class="profit">
            <div class="users">
                <span class="number">123</span>
                <span>已帮助人数</span>
            </div>
            <div class="users">
                <span class="number">456</span>
                <span>已加入蜂链天数</span>
            </div>
        </section>
        <section>
            <div class="assis-title">链接你我他 &nbsp; &nbsp; 守护千万家</div>
            <div>
                <span>互助记录</span>
                <div>2019.04.04</div>
            </div>
        </section>
    </main>
    <footer>
        <div class="customer">
            <mu-icon value=":iconfont iconlianxikefu"></mu-icon>
            <span>联系客服</span>
        </div>
    </footer>
</div>
</template>
<script>
import PageHeader from '../components/PageHeader/PageHeader'
export default {
    name: 'AssistanceReacord',
    components: {
        PageHeader
    },
    data() {
        return {
            title: '互助记录',
            name: 'yyy.zZ'
        }
    }
}
</script>
<style scoped lang="scss">
.profit{
    width: 90%;
    height: 70px;
    margin: auto;
    background-color: aquamarine;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    .users{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
}
.assis-title{
    width: $gw;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
footer{
    width: $gw;
    height: 50px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .customer{
        border: 1px solid rebeccapurple;
        width: 100px;
        border-radius: 20px;
        text-align: center;
    }
}
</style>

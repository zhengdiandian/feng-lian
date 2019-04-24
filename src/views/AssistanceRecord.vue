<template>
<div id="myrewardinteg">
    <header>
        <PageHeader :title="title"></PageHeader>
    </header>
    <main class="page-margin-top">
        <section class="profit">
            <div class="users">
                <span class="number" style="font-weight:bold; font-size: 20px;">{{helped.helpedCount}}</span>
                <span style="font-size: 12px;">已帮助人数</span>
            </div>
            <div class="users">
                <span class="number" style="font-weight:bold; font-size: 20px;">{{helped.joinedDays}}</span>
                <span style="font-size: 12px;">已加入蜂链天数</span>
            </div>
        </section>
        <section>
            <div class="assis-title">链接你我他 &nbsp; &nbsp; 守护千万家</div>
            <div style="margin: 12px 0px 12px 12px">
                <div style="font-size:15px;font-family:SourceHanSansCN-Normal;font-weight:bold;color:rgba(51,51,51,1);margin-bottom: 5px; ">互助记录</div>
                <div style="font-size:9px;font-family:SourceHanSansCN-Normal;font-weight:bold;color:rgba(112,112,112,1);">2019.04.04</div>
            </div>
            <section class="card"><card :supporlist="supporlist" :open="() => {$router.push('/palnned')}"></card></section>
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
import card from '../components/Card/Card'
export default {
    name: 'AssistanceReacord',
    components: {
        PageHeader,
        card
    },
    data() {
        return {
            title: '互助记录',
            name: 'yyy.zZ',
            helped: [],
            supporlist: []
        }
    },
    mounted() {
        this.$axios.post('/v1/support/plan/supportList').then((res) => {
            console.log(res.data.data)
            this.helped = res.data.data
            this.supporlist = res.data.data.list
        })
    }
}
</script>
<style scoped lang="scss">
.profit{
    width:351px;
    height:60px;
    background:rgba(239,162,32,1);
    border-radius:5px;
    margin: 12px auto;
    overflow: hidden;
    display: flex;
    .users{
        font-family:ArialMT;
        color:rgba(51,51,51,1);
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
    width:200px;
    height:15px;
    font-size:15px;
    font-family:SourceHanSansCN-Normal;
    font-weight:bold;
    color:rgba(51,51,51,1);
    margin: 12px auto;
}
.card{
    margin: auto;
}
footer{
    position: absolute;
    bottom: 0px;
    .customer{
        width:123px;
        height:33px;
        border:1px solid rgba(239,162,32,1);
        border-radius:15px;
        position: absolute;
        bottom: 13px;
        left: 113px;
        text-align: center;
        line-height: 33px;
        color: #EFA220;
        .iconlianxikefu{
            padding-right: 6px;
        }
    }
}
</style>

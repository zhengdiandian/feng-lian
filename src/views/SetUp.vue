<template>
    <div>
        <header>
            <pageHeader :title="title"></pageHeader>
        </header>
        <main class="page-margin-top">
            <div class="setList">
                    <span class="version-number">当前版本</span>
                    <span class="number" style="float: right;">1.0.0.1</span>
            </div>
            <!-- <div style="margin-top: 10px;">
                <div class="setList">
                    <span>账号与安全</span>
                    <mu-icon value=":iconfont iconyou1"></mu-icon>
                </div>
                <div class="setList">
                    <span>账号与安全</span>
                    <mu-icon value=":iconfont iconyou1"></mu-icon>
                </div>
            </div>
            <div style="margin-top: 10px;">
                <div class="setList">
                    <span>账号与安全</span>
                    <mu-icon value=":iconfont iconyou1"></mu-icon>
                </div>
                <div class="setList">
                    <span>账号与安全</span>
                    <mu-icon value=":iconfont iconyou1"></mu-icon>
                </div>
            </div>
            <div style="margin-top: 10px;">
                <div class="setList">
                    <span>账号与安全</span>
                    <span style="float: right;">1.0.0.1</span>
                </div>
            </div> -->
            <button class="setBtn">安全退出</button>
        </main>
    </div>
</template>
<script>
import pageHeader from '../components/PageHeader/PageHeader'
export default {
    name: 'setup',
    data() {
        return {
            title: '设置'
        }
    },
    components: {
        pageHeader
    },

}
</script>
<style lang="scss" scoped>
.setList {
    width:375px;
    height:44px;
    background:rgba(255,255,255,1);
    line-height: 44px;
    margin-top: 6px;
    .version-number{
        display: inline-block;
        width:48px;
        height:12px;
        font-size:12px;
        font-family:SourceHanSansCN-Normal;
        font-weight:400;
        color:rgba(51,51,51,1);
        margin-left: 15px;
    }
    .number{
        width:38px;
        height:9px;
        font-size:12px;
        font-family:SourceHanSansCN-Normal;
        font-weight:400;
        color:rgba(51,51,51,1);
        margin-right: 12px;
    }
    .iconyou1{
        float: right;
    }
}
.setBtn{
    width:375px;
    height:44px;
    background:rgba(255,255,255,1);
    border: none;
    outline: none;
    margin-top: 10px;
    font-size:12px;
    font-family:SourceHanSansCN-Normal;
}
</style>
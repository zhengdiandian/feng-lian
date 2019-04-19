<template>
    <div>
        <header>
            <pageHeader :title="title"></pageHeader>
        </header>
        <main>
            <div class="setList">
                <div class="setList">
                    <span>版本号</span>
                    <span style="float: right;">1.0.0.1</span>
                </div>
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
    width: 100%;
    height: 30px;
    background-color: #fff;
    .iconyou1{
        float: right;
    }
}
.setBtn{
    width: 100%;
    background: #fff;
    border: none;
    outline: none;
    margin-top: 10px;
}
</style>
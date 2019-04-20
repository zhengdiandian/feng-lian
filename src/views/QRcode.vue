<template>
    <div>
        <header>
            <PerInforHeader
            :title="title"
            :imgUrl="imgUrl"
            ></PerInforHeader>
            <img class="erweima" src="" alt="">
        </header>
        <main>
            <div class="QRcode">
                <img src="" alt="">
            </div>
            <div style="margin: 10px auto;color: #EFA220;">保存二维码</div>
            <div style="margin: 10px auto;">我的邀请码：666 666</div>
        </main>
    </div>
</template>
<script>
import PerInforHeader from '../components/PerInforHeader/PerInforHeader'
export default {
    name: 'qrcode',
    components: {
        PerInforHeader
    },
    data() {
        return {
           title: '我的二维码',
           name: 'Bryant.zZ',
           stata: '已实名',
           autograph: '海内存知己，天涯若比邻',
           imgUrl: require('../assets/PNG/head.png')
        }
    },
}
</script>
<style scoped lang="scss">
main{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .QRcode{
        width: 180px;
        height: 180px;
        border: 10px solid #FFA2E4;
        margin: auto;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>

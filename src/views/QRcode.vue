<template>
    <div class="card">
        
    </div>
</template>
<script>
import pageHeader from '../components/PageHeader/PageHeader'
export default {
    name: 'qrcode',
    components: {
        pageHeader
    },
    // data() {
    //     return {
    //        title: '我的二维码',
    //        name: 'Bryant.zZ',
    //        stata: '已实名',
    //        autograph: '海内存知己，天涯若比邻',
    //        imgUrl: require('../assets/PNG/head.png')
    //     }
    // },
}
</script>
<style scoped lang="scss">
html,body{
    width: 100%;
    height: 100%;
}
.card{
    
    width: 375px;
    height: 100%;
    background: url("../assets/PNG/codebackground.png") center no-repeat;
    // background-size: 100% ;
    background-size: 100% 100%;
}
</style>

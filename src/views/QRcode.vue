<template>
    <div>
        <header>
            <PerInforHeader 
            :title="title"
            :name="name"
            :stata="stata"
            :autograph="autograph"
            ></PerInforHeader>
            <img class="erweima" src="" alt="">
        </header>
        <main>
            <div class="QRcode">
                <img src="" alt="">
            </div>
            <div style="margin: 10px auto;color: yellow;">保存二维码</div>
            <div style="margin: 10px auto;">我的邀请码：666 666</div>
        </main>
    </div>
</template>
<script>
import PerInforHeader from '../components/PerInforHeader/PerInforHeader'
export default {
    name: 'PerInfor',
    components: {
        PerInforHeader
    },
    data() {
        return {
           title: '我的二维码',
           name: 'Bryant.zZ',
           stata: '已实名',
           autograph: '海内存知己，天涯若比邻'
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
        width: 150px;
        height: 150px;
        border: 10px solid plum;
        margin: auto;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>

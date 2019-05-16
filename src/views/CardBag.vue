<template>
    <div>
        <header>
            <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
                <mu-button icon slot="left" @click="$router.go(-1)">
                <mu-icon value=":iconfont iconfanhui"></mu-icon>
                </mu-button>
                    我的卡包
                <mu-button icon slot="right" >
                <!-- <span style="font-size:12px;">保</span><span style="font-size:12px;">存</span> -->
                </mu-button>
            </mu-appbar>
        </header>
        <main>
            <div class="BankCard">
                <section class="bank">
                    <div class="bankImg">
                        <img src="" alt="">
                    </div>
                    <section class="bankText">
                        <div>
                            <div>中国银行</div>
                            <span style="font-size:12px;">储蓄卡</span>
                            <div>1234 **** **** 1231</div>
                        </div>
                    </section>
                </section>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'CardBag'
    }
</script>

<style lang="scss" scoped>
main{
    padding-top: 50px;
}
.BankCard{
    width:351px;
    height:100px;
    background: $c-cheng;
    border-radius:5px;
    margin: auto;
    .bank {
        width:351px;
        height: 100%;
        display: flex;
    }
    .bankImg{
        width: 35px;
        height: 35px;
        background-color: $c-bai;
        border-radius: 50%;
        padding: 6.2vw;
        margin: 12px;
    }
    .bankText{
        width: 100%;
        padding-top: 12px;
        font-size:16px;
    }
}
</style>
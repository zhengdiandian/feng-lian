<template>
    <div>
        <header>
            <nav><img src="@/assets/图标/返 回.png" alt=""></nav>
            <div class="head-infor">
                <section class="head-portrait"><img :src="imgUrl" alt=""></section>
                <span style="font-weight: bolder; font-size: 20px; margin: 5px 0 5px 0;">{{name}}</span>
                <span style="font-weight: bolder; font-size: 20px; color: #9999af; margin-bottom: -20px;">{{autograph}}</span>
                <span class="division"></span>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    name: 'PerInfor',
    props: {
        imgUrl: [String],
        name: {
            type: String,
            default: "Bryant.zZ"
        },
        autograph: {
            type: String,
            default: "海内存知已，天涯若比邻"
        }
    }
}
</script>
<style scoped lang="scss">
header {
    background-color: #f2f2f2;
}
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
}
.head-infor {
    width: $gw;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    .head-portrait{
        width: 100px;
        height: 100px;
        border: 1px solid black;
        border-radius: 50%;
        background-color: #fff;
        position: relative;
        z-index: 99;
    }
    .division {
        width: $gw;
        height: 1px;
        border: 0.1px solid black;
        position: absolute;
        top: 70px;
    }
}
</style>

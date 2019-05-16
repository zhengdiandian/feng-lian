<template>
    <div>
        <header>
            <nav>
                <mu-icon value=":iconfont iconfanhui" @click="open"></mu-icon>
                <div class="title">{{title}}</div>
            </nav>
            <div class="head-infor">
                <section class="head-portrait"><img :src="imgUrl?imgUrl:'../assets/PNG/avatarDefault.png'" alt=""></section>
                <div>
                    <span class="name">{{name}}</span>
                    <span class="stata">{{stata}}</span>
                </div>
                <div style="color: #ccc; font-size: 14px; margin-top: 5px;">{{autograph}}</div>
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
            default: ""
        },
        stata: {
            type: String,
            default: ''
        },
        autograph: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        }
    },
    methods: {
        open() {
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped lang="scss">
header {
    background-image: url('../../assets/PNG/个人资料背景.png');
    background-size: 100% 120px;
    background-repeat:no-repeat;
}
nav {
    width: $gw;
    height: 50px;
    display: flex;
    align-items: center;
    .iconfanhui {
        font-size: 20px;
        color: #fff;
        margin-left: 5px;
    }
    .title{
        width: 85%;
        text-align: center;
    }
}
.head-infor {
    width: $gw;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    .head-portrait{
        width: 75px;
        height: 75px;
        // border: 1px solid black;
        border-radius: 50%;
        background-color: #fff;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .stata{
        display: inline-block;
        width: 50px;
        text-align: center;
        font-size: 12px;
        background-color: yellow;
    }
}
</style>

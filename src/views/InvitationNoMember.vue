<template>
    <div>
        <header>
            <img style="width: 100%; height: 100%;" src="../assets/PNG/百万计划banner.png" alt="">
        </header>
        <main>
            <div class="info-content">
                <div class="title">感恩蜂链，互助享爱</div>
                <div class="info">
                    什么是蜂链互助？
                </div>
                <div class="text">
                    <span>
                        蜂链互助是用户发现可能面对的各类风险个体无法独自承受，需要以互助的形式互帮互助，
                        共担风险，并通过区块链技术打造的专业可靠的互助计划平台，
                        以同质人群之间互相帮助的方式解决重大疾病及意外发生导致的家庭困难。
                    </span>
                </div>

                <div class="info">
                    我们的优势是什么？
                </div>
                <div class="text">
                    <span>
                        互助：互助新模式，助人也助己
                    </span>
                    <span>
                        自愿：自由加入，自由退出
                    </span>
                    <span>
                        公正：第三方机构审核机制
                    </span>
                    <span>
                        诚信：信息透明公开，专业监管
                    </span>
                </div>

                <div class="info">
                    我助人人，人人助我
                </div>
                <div style="padding-bottom: 10px;">
                    <div class="text" v-for="(text, i) in textList" :key="i">
                        <span>{{text}}</span>
                    </div>
                </div>
            </div>
        </main>
        <footer>
            <img style="width: 80px; height: 80px;" :src="addressImg" alt="">
            <div style="padding-top:10px;">
                长按关注公众号
            </div>
            <div>
                了解更多互助信息
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'InvitationNoMember',
        data() {
            return {
                textList: [
                    "我们希望有更多的人加入进来，",
                    "因为有您的加入，",
                    "社会上会少一个无钱看病的弱小，",
                    "而在你需要帮助的时候，",
                    "我们也会竭力付出。",
                    "感谢各位新老用户对蜂链互助的信任，",
                    "蜂链并不完美，",
                    "需要您的意见和建议进一步优化成长。",
                    "同样，蜂链也有无数的可能性，",
                    "等着您和我们一起去发掘。",
                    "我们经受过很多赞美，",
                    "为的只是心中的那份责任——",
                    "为弱小群体提供一个安全保障。",
                    "我们在这里等你，一起分享这份爱！"
                ],
                addressImg: require('../assets/PNG/E4DE26D5-7785-4134-8241-075B9DDF140D.png')
            }
        },
    }
</script>

<style lang="scss" scoped>
main{
    margin-top: -5px;
    width: 100%;
    background-color: #ffa22e;
    padding: 12px;
      .info-content {
    // margin-top: 12px;
    // padding: 12px;
    width: 100%;
    // height:308px;
    background: rgba(254, 213, 159, 1);
    border-radius: 3px;
    .title {
        padding-top: 14px;
        // padding-bottom: 19px;
        text-align: center;
        font-size:20px;
        font-family:PangMenZhengDao;
        font-weight:400;
        color:rgba(56,26,21,1);
        -webkit-text-stroke:2px undefined;
        text-stroke:2px undefined;
    }
    .info{
        padding-top: 18px;
        padding-bottom: 21px;
        text-align: center;
        font-size:16px;
        font-family:SourceHanSansCN-Medium;
        font-weight:500;
        color:rgba(56,26,21,1);
    }
    .text {
      text-align: center;
    //   /*margin: 0 auto;*/
    //   /*width: 181px;*/
    //   line-height: 2;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // .adv{
    //     width: 210px;
    //     height:66px;
    //     font-size:12px;
    //     font-family:SourceHanSansCN-Normal;
    //     font-weight:400;
    //     color:rgba(56,26,21,1);
    //     line-height:18px;
    // }
    span{
        display: inline-block;
        width: 300px;
        text-indent: 24px;
        font-size:12px;
        font-family:SourceHanSansCN-Normal;
        font-weight:400;
        color:rgba(56,26,21,1);
        line-height:18px;
    }
    }
  }
}
footer{
    width: 100%;
    height: auto;
    background-color: #ffa22e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
}

</style>
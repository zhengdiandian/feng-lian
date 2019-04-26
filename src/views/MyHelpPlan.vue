<template>
    <div>
      <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
        <mu-button icon slot="left" @click="$router.go(-1)">
          <mu-icon value=":iconfont iconfanhui"></mu-icon>
        </mu-button>
        我的互助计划
        <mu-button icon slot="right"  :ripple="false">
        </mu-button>
      </mu-appbar>
        <main>
            <div style="margin: auto;width:92%;">
                <span class="font">我的购买计划</span>
                <div style="margin-top: 8px;">
                    <card 
                    :open="() => {$router.push('/palnned')}"
                    :date="': 2019.01.02'"
                    >

                    <template v-slot:lable>
                        <div class="slot-lable">
                            <img src="../assets/img/驳回.svg" alt="">
                        </div>
                    </template>
                    <template v-slot:FilingDate>
                        <div class="dates"><span>申请日：</span>2019.01.01</div>
                    </template>
                    </card>
                    <card
                    :open="() => {$router.push('/palnned')}"
                    :date="': 2019.01.02'"
                    >
                    </card>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import card from '../components/Card/Card'
export default {
    name: 'myhelpplan',
    components: {
        card
    },
    data() {
        return {
        }
    },
}
</script>
<style scoped lang="scss">
main{
    margin: auto;
    margin-top: 60px;
    position: relative;
}
.slot-lable{
    // width: 100px;
    // height: 500px;
    // position: relative;
    img{
        position: absolute;
        right: 10px;
        top: 31px;
        width: 50px;
        height: 50px;
        z-index: 99;
    }
}
.dates{
        margin-top: 5px;
        width:150px;
        height:10px;
        background:rgba(246,176,59,1);
        border-radius:11px;
        font-size:10px;
        font-family:SourceHanSansCN-Normal;
        font-weight:400;
        text-align: center;
        line-height: 10px;
      }
</style>

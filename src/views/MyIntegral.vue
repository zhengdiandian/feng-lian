<template>
<div id="myrewardinteg">
    <header>
        <!-- <PageHeader :title="title"></PageHeader> -->
        <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
      <mu-button icon slot="left" @click="$router.go(-1)">
      <mu-icon value=":iconfont iconfanhui"></mu-icon>
      </mu-button>
      我的积分
      <mu-button icon slot="right"  :ripple="false">
      </mu-button>
    </mu-appbar>
    </header>
    <main style="margin-top: 60px;">
        <section class="Myinteg">
            <div class="reward">
                <span>当前积分</span>
                <span style="font-size: 50px;">0</span>
                <span style="font-size: 14px;">近7天获得奖励{{20}}元</span>
                <button class="integBtn">去炫耀</button>
            </div>
            <button class="exchangeBtn">积分兑换</button>
        </section>
        <!-- <section>
            <div>蜂链福利</div>
            <div class="card-roll">
                <div class="card-roll-list">
                    <span>蜂链卡券</span>
                    <span class="date">2019.04.19</span>
                </div>
                <div class="card-roll-list">
                    <span>蜂链卡券</span>
                    <span class="date">2019.04.19</span>
                </div>
                <div class="card-roll-list">
                    <span>蜂链卡券</span>
                    <span class="date">2019.04.19</span>
                </div>
            </div>
        </section> -->
        <!-- <section>
            <div>蜂链积分商城</div>
            <mu-carousel hide-controls hide-indicators="true">
                <mu-carousel-item>
                    <img src="1">
                </mu-carousel-item>
                <mu-carousel-item>
                    <img src="2">
                </mu-carousel-item>
                <mu-carousel-item>
                    <img src="3">
                </mu-carousel-item>
                <mu-carousel-item>
                    <img src="4">
                </mu-carousel-item>
            </mu-carousel>
        </section> -->
        <!-- <section>
            <div>帮助中心</div>
            <mu-list>
                <mu-list-item>
                    <mu-list-item-content>
                        <mu-list-item-title>List Item 1</mu-list-item-title>
                    </mu-list-item-content>
                    <mu-icon value=":iconfont iconyou1"></mu-icon>
                </mu-list-item>
                <mu-divider shallow-inset></mu-divider>
                <mu-list-item>
                    <mu-list-item-content>
                        <mu-list-item-title>List Item 2</mu-list-item-title>
                    </mu-list-item-content>
                    <mu-icon value=":iconfont iconyou1"></mu-icon>
                </mu-list-item>
                <mu-divider shallow-inset></mu-divider>
                <mu-list-item>
                    <mu-list-item-content>
                        <mu-list-item-title>List Item 3</mu-list-item-title>
                    </mu-list-item-content>
                    <mu-icon value=":iconfont iconyou1"></mu-icon>
                </mu-list-item>
            </mu-list>
        </section> -->
    </main>
</div>
</template>
<script>
import PageHeader from '../components/PageHeader/PageHeader'
export default {
    name: 'myintegral',
    components: {
        PageHeader
    },
    data() {
        return {
            title: '我的奖励',
            name: 'yyy.zZ'
        }
    }
}
</script>
<style scoped lang="scss">
.Myinteg{
    width: 100%;
    background: #fff;
    .reward{
    margin: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 160px;
    background-color: #eea31f;
    align-items: center;
    color: white;
    justify-content: center;
    }
    .integBtn{
        width: 80px;
        outline: none;
        border: none;
        background-color: red;
        border-radius: 20px;
        color: white;
    }
}
.head{
    display: flex;
    align-items: center;
    background-color: #fff;
    .name{
        display: flex;
        flex-direction: column;
    }
    .head-img{
        width: 50px;
        height: 50px;
        border: 2px solid yellow;
        border-radius: 50%;
    }
}
main{
    .exchangeBtn{
        height: 33px;
        line-height: 33px;
        outline: none;
        border: none;
        background-color: #eea31f;
        border-radius: 20px;
        color: white;
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
    }
    .card-roll{
        display: flex;
        flex-wrap: wrap;
        width: $gw;
        height: 80px;
        .card-roll-list{
            width: 30%;
            height: 90%;
            background: yellow;
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
        }
        .date{
            display: inline-block;
            font-size: 12px;
            position: absolute;
            right: 0;
            bottom: 0;
        }
    }
    .mu-carousel{
        width: 100%;
        height: 80px;
    }
}
</style>

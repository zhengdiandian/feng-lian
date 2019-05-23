<template>
<div id="myrewardinteg">
    <header>
        <!-- <PageHeader :title="title"></PageHeader> -->
        <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
      <mu-button icon slot="left" @click="$router.go(-1)">
      <mu-icon value=":iconfont iconfanhui"></mu-icon>
      </mu-button>
        我的{{changeText.text1 }}
      <mu-button icon slot="right"  :ripple="false">
      </mu-button>
    </mu-appbar>
    </header>
    <main style="margin-top: 60px;">
        <div class="infor">
            <div class="infor-img"><img :src="infor.headPortrait" alt=""></div>
            <div class="infor-text">
                <span>Hi</span>
                <span>{{infor.nickname}}</span>
            </div>
        </div>
        <section class="Myinteg">
            <div class="reward">
                <div>
                    <!--<span v-if="title = '我的蜂蜜'">我的蜂蜜</span>-->
                    <!--<span v-else>我的蜜分</span>-->
                  <span>我的{{changeText.text1}}</span>
                </div>
                <div>
                    <span style="font-size: 50px;">{{totalScore}}</span>
                    <span>{{changeText.text2}}</span>
                    <!--<span v-if="title = '我的蜂蜜'">滴</span>-->
                    <!--<span v-else>分</span>-->
                </div>
                <!-- <span style="font-size: 14px;">近7天获得奖励{{20}}元</span> -->
                <!-- <button class="integBtn">去炫耀</button> -->
            </div>
            <!-- <button class="exchangeBtn">积分兑换</button> -->
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
            title: '',
            totalScore: this.$route.params.totalScore,
            scoreType: '',
            infor: []
        }
    },
  computed: {
      changeText(){
        if (this.scoreType === 0) {
          return {text1:'蜂蜜',text2: '滴'}
        }else if(this.scoreType === 1) {
          return {text1: '蜜分', text2: '分'}
        } else {
          return ''
        }
    }
  },
  created() {
      this.title= this.$route.query.type
      this.$axios.post('v1/user/info/index').then(res => {
        if(res.data.code !==200){
          this.$toast.error(res.data.msg)
          return
        }
        this.scoreType = res.data.data.scoreType
      })
      this.$axios.post('v1/user/info/index').then(res=>{
          if(res.data.code !==200){
            this.$toast.error(res.data.msg)
            return
            }
            this.infor = res.data.data
            console.log(this.infor)
      })
  },
    mounted() {
        // console.log(this.$route.params.totalScore)
        console.log(this.$route.params.scoreType)
    }
}
</script>
<style scoped lang="scss">
.infor{
    display: flex;
    padding-left: 12px;
    padding-bottom: 12px;
    .infor-img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .infor-text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 12px;
    }
}
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
        width: 90px;
        outline: none;
        border: none;
        background-color: #FE6766;
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
            font-size: $f14;
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

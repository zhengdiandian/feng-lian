<template>
    <div>
        <header>
          <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
            <mu-button icon slot="left" @click="$router.go(-1)">
            <mu-icon value=":iconfont iconfanhui"></mu-icon>
            </mu-button>
          排行榜
          <mu-button icon slot="right" :ripple="false">
          </mu-button>
          </mu-appbar>
        </header>
        <main class="page-margin-top">
            <div class="list-noe">
                <div class="tow" style="position: relative;">
                    <img src="../assets/PNG/公示头像5.png" alt="">
                    <span class="an-crown" style="top: -38px;left:12px;"><img src="../assets/PNG/皇冠3.png" alt=""></span>
                    <div class="list-name-number" style="left: 8px; top: 95px;">
                        <span style="font-size:14px; font-weight:bold;">陈梅</span>
                        <span style="font-size:14px; font-weight:bold;">22800分</span>
                    </div>
                </div>
                <div class="noe" style="position: relative;">
                    <img src="../assets/PNG/公示头像2.png" alt="">
                    <span class="an-crown" style="top: -38px;left:20px;"><img src="../assets/PNG/皇冠1.png" alt=""></span>
                    <div class="list-name-number">
                        <span style="font-size:14px; font-weight:bold;">韩世忠</span>
                        <span style="font-size:14px; font-weight:bold;">22900分</span>
                    </div>
                </div>
                <div class="three" style="position: relative;">
                    <img src="../assets/PNG/公示头像4.png" alt="">
                    <span class="an-crown" style="top: -36px;left:10px;"><img src="../assets/PNG/皇冠2.png" alt=""></span>
                    <div class="list-name-number" style="left: 8px; top: 90px;">
                        <span style="font-size:14px; font-weight:bold; ">李军</span>
                        <span style="font-size:14px; font-weight:bold;">22700分</span>
                    </div>
                </div>
            </div>
            <div class="headerNav">
                <div class="headerLogin"><img src="../assets/PNG/积分头像.png" alt=""></div>
                    <section class="information">
                        <span class="name">姓名：{{name}}</span><span class="state">已实名</span>
                        <div class="number"><span>18800004239</span></div>
                        <div class="autograph">海内存知己，天涯若比邻</div>
                    </section>
                <div class="integral">
                    <span style="font-size: 16px; font-weight: 100; letter-spacing: 3px;">5000分</span>
                    <span class="font-min">排名：168</span>
                </div>
            </div>
            <div class="ranklist">
                <div class="list" v-for="i in 20" :key="i">
                    <span style="margin-left: 24px;">{{i}}</span>
                    <span class="list-img"><img :src="rank.img" alt=""></span>
                    <span style="position: absolute;left: 95px;">{{rank.nickname}}</span>
                    <span style="position: absolute;right: 20px;">{{rank.score}}分</span>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import pageHeader from '../components/PageHeader/PageHeader'
export default {
    name: 'RankingList',
    data() {
        return {
            title: '排行榜',
            name: 'maskd',
            rank: []
        }
    },
    components: {
        pageHeader
    },
    mounted() {
        this.$axios.post('/v1/finance/account/scoreRank').then((res)=>{
            this.rank = res.data.data[0]
            console.log(this.rank)
        })
    }
}
</script>
<style lang="scss" scoped>
.list{
    width: 100%;
    height: 50px;
    background: #fff;
    border-bottom: 1px solid $c-hui;
    line-height: 50px;
    font-weight: bold;
    position: relative;
    .list-img{
        width: 33px;
        height: 33px;
        border-radius: 50px;
        display: inline-block;
        position: absolute;
        top: 8px;
        left: 50px;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.an-crown{
    position: absolute;
}
.list-noe{
    width: 100%;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: #000;
    img{
        width: 100%;
        height: 100%;
    }
    span {
    display: inline-block;
    width: 60px;
    margin-bottom: 10px;
}
}
.noe{
    width: 98px;
    height: 98px;
    border-radius: 50%;
    margin: auto;
    // border: 1px solid #EFA220;
    text-align: center;
    position: relative;
}
.tow{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: auto;
    // border: 1px solid #EFA220;
    text-align: center;
    position: relative;
}
.three{
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin: auto;
    // border: 1px solid #EFA220;
    background-image: url('../assets/PNG/季军.png');
    text-align: center;
    position: relative;
}
.list-name-number{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 105px;
    left: 18px;
}

.headerNav{
  width:351px;
  height:85px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 12px auto;
  display: flex;
  align-items: center;
  position: relative;
  .integral{
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 12px;
    letter-spacing: 1px;
    }
  .headerLogin{
    width:60px;
    height:60px;
    border-radius:50%;
    background:rgba(207,207,207,1);
    margin-left: 12px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .information{
    margin-left: 13px;
    position: relative;
    .name{
      width:108px;
      height:14px;
      font-size:13px;
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(51,51,51,1);
    }
    .number{
      font-size:10px;
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(112,112,112,1);
      font-size: 10px;
    }
    .autograph{
      font-size:12px;
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(112,112,112,1);
      margin-top: 20px;
    }

  }
  .state{
    display: inline-block;
    width:40px;
    height:15px;
    line-height: 15px;
    background:rgba(239,162,32,1);
    border:0px solid rgba(255,255,255,1);
    font-size:12px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    margin-left: 6px;
  }
}
</style>

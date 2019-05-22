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
                    <img style="z-index: 55;border-radius: 50%; border: 5px solid #C5D1E4;" :src="rank[1].img" alt="">
                    <span class="an-crown-3"><img src="../assets/PNG/皇冠3.png" alt=""></span>
                    <div class="list-name-number" style="left: 15px;">
                        <span class="font-14" >{{rank[1].nickname}}</span>
                        <span class="font-14" >{{rank[1].score}}分</span>
                    </div>
                </div>
                <div class="noe" style="position: relative;">
                    <img style="border-radius: 50%; border: 5px solid #FACF11;" :src="rank[0].img" alt="">
                    <span class="an-crown"><img  src="../assets/PNG/皇冠1.png" alt=""></span>
                    <div class="list-name-number" >
                        <span class="font-14" >{{rank[0].nickname}}</span>
                        <span class="font-14" >{{rank[0].score}}分</span>
                    </div>
                </div>
                <div class="three" style="position: relative;">
                    <img style="border-radius: 50%; border: 5px solid #F8A771;" :src="rank[2].img" alt="">
                    <div class="an-crown-2"><img  src="../assets/PNG/皇冠2.png" alt=""></div>
                    <div class="list-name-number" style="left: 8px;">
                        <span class="font-14" >{{rank[2].nickname}}</span>
                        <span class="font-14" >{{rank[2].score}}分</span>
                    </div>
                </div>
            </div>
            <div class="headerNav">
                <div class="headerLogin"><img :src="userInfo.headPortrait" alt=""></div>
                    <section class="information position-center ">
                        <span class="name">姓名：{{Info.nickname}}</span><span class="state">已实名</span>
                        <div class="number"><span>{{Info.account}}</span></div>
                        <div class="autograph">{{Info.motto}}</div>
                    </section>
                <div class="integral">
                    <span class="integral-text">{{Info.totalScore}}分</span>
                    <!-- <span class="font-min">排名：0</span> -->
                </div>
            </div>
            <div class="ranklist">
                <div class="list" v-for="(item, index) in (rank.slice(3))" :key="index">
                    <span style="margin-left: 24px;">{{index+4}}</span>
                    <span class="list-img"><img :src="item.img" alt=""></span>
                    <span style="position: absolute;left: 95px;">{{item.nickname}}</span>
                    <span style="position: absolute;right: 20px;">{{item.score}}分</span>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import pageHeader from '../components/PageHeader/PageHeader'
import {mapState} from 'vuex'
export default {
    name: 'RankingList',
    data() {
        return {
            title: '排行榜',
            Info: [],
            rank: [],
            headImg1: require('../assets/PNG/积分头像2.png'),
            headImg2: require('../assets/PNG/积分头像2.png'),
            headImg3: require('../assets/PNG/积分头像2.png')
        }
    },
    components: {
        pageHeader
    },
  computed: mapState(['userInfo']),
    mounted() {
        this.$axios.post('/v1/finance/account/scoreRank').then((res)=>{
          debugger
            this.rank = res.data.data.sort((a,b) => b.score-a.score )
            console.log(this.rank)
        })
        this.$axios.post('/v1/user/info/index').then((res)=>{
          if(res.data.code !==200){
              this.$toast.error(res.data.msg)
              return
            }
            console.log(res)
            this.Info = res.data.data
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
.integral-text{
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 3px;
  margin-left: 23px;
}
.font-14{
  font-size:$f15;
  font-weight:bold;
}
.an-crown{
  z-index: -1;
  width: 90px;
    position: relative;
    top: -130px;
    width: 56px; height: 35px

}
.an-crown-2{
  z-index: -1;
  position: relative;
  top: -100.5px;
  left: 15px;
  width: 42px; height: 26px;
}
.an-crown-3{
    z-index: -1;
    position: relative;
    top: -110.5px;
    width: 47px; height: 30px

}
.list-noe{

  &>div>img{
    z-index: 66;
  }
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
    // width: 60px;
    margin-bottom: 10px;
}
}
.noe{
    width: 95px;
    height: 95px;
    border-radius: 50%;
    margin: auto;
    // border: 1px solid #EFA220;
    text-align: center;
    // position: relative;
    img{

    }
}
.tow{
    position: relative;
    width: 79px;
    height: 79px;
    border-radius: 50%;
    margin: auto;
    // border: 1px solid #EFA220;
    text-align: center;
  img{
    /*z-index: 6666;*/
  }
    // position: relative;
}
.three{
    width: 72px;
    height: 72px;
    border-radius: 50%;
    margin: auto;
    // border: 1px solid #EFA220;
    background-image: url('../assets/PNG/季军.png');
    text-align: center;
    // position: relative;
}
.list-name-number{
  width: 50px;
    position: absolute;
    // display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 105px;
    left: 20px;
}

.headerNav{
  width:351px;
  padding: 6px;
//   height:85px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 20px auto;
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
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .information{
    /*margin-left: 13px;*/
    /*margin: 0 auto;*/
    /*position: relative;*/
    .name{
    //   width:108px;
      height:15px;
      font-size:13px;

      font-weight:bold;
      color:rgba(51,51,51,1);
    }
    .number{
      font-size:10px;

      font-weight:bold;
      color:rgba(112,112,112,1);
      font-size: 14px;
    }
    .autograph{
      font-size:$f14;

      font-weight:bold;
      color:rgba(112,112,112,1);
      margin-top: 20px;
    }

  }
  .state{
    display: inline-block;
    // width:40px;
    // height:20px;
    line-height: 18px;
    background:rgba(239,162,32,1);
    border:0px solid rgba(255,255,255,1);
    font-size:$f12;
    padding: 3px;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    margin-left: 6px;
  }
}
  .position-center{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>

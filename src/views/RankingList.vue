<template>
    <div>
        <header>
            <pageHeader :title="title"></pageHeader>
        </header>
        <main class="page-margin-top">
            <div class="list-noe">
                <div class="tow">
                    <img src="../assets/PNG/公示头像5.png" alt="">
                </div>
                <div class="noe">
                    <img src="../assets/PNG/公示头像2.png" alt="">
                </div>
                <div class="three">
                    <img src="../assets/PNG/公示头像4.png" alt="">
                </div>
            </div>
            <div class="headerNav">
                <div class="headerLogin"><img src="../assets/PNG/head.png" alt=""></div>
                    <section class="information">
                        <span class="name">姓名：{{name}}</span><span class="state">已实名</span>
                        <div class="number"><span>18800004239</span></div>
                        <div class="autograph">海内存知己，天涯若比邻</div>
                    </section>
                    <div class="integral">
                        <span class="font">5000分</span>
                        <span class="font-min">排名：168</span>
                    </div>
            </div>
        </main>
    </div>
</template>
<script>
import pageHeader from '../components/PageHeader/PageHeader'
export default {
    name: 'setup',
    data() {
        return {
            title: '排行榜'
        }
    },
    components: {
        pageHeader
    },

}
</script>
<style lang="scss" scoped>
.list-noe{
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    // background: #000;
    img{
        width: 100%;
        height: 100%;
    }
}
.noe{
    width: 95px;
    height: 95px;
    border-radius: 50%;
    margin: auto;
}
.tow{
    width: 79px;
    height: 79px;
    border-radius: 50%;
    margin: auto;

}
.three{
    width: 72px;
    height: 72px;
    border-radius: 50%;
    margin: auto;

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
    border:2px solid rgba(239, 162, 32, 1);
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
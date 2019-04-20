<template>
    <div>
        <header>
            <PageHeader :title="upload"></PageHeader>
        </header>
        <main>
            <div class="headerNav">
                <div class="headerLogin"><img src="../assets/PNG/head.png" alt=""></div>
                <router-link tag="div" to="/perinfor">
                    <section class="information">
                    <span class="name">姓名：{{name}}</span><span class="state">已实名</span>
                    <div class="number"><span>18800004239</span></div>
                    <div class="autograph">海内存知己，天涯若比邻</div>
                    </section>
                </router-link>
            </div>
        </main>
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader/PageHeader'
export default {
    name: 'shareuser',
    components: {
        PageHeader
    },
    data() {
        return {
            upload: '我分享的用户',
            name: 'yangsda'
        }
    }
}
</script>
<style scoped lang="scss">
.headerNav{
  width:328px;
  height:79px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 12px auto;
  display: flex;
  align-items: center;
  position: relative;
  .headerLogin{
    width:56px;
    height:56px;
    border-radius:50%;
    background:rgba(207,207,207,1);
    border:2px solid rgba(239, 162, 32, 1);
    margin-left: 11px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .information{
    margin-left: 13px;
    .name{
      width:108px;
      height:14px;
      font-size:13px;
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(51,51,51,1);
    }
    .number{
      width: 75px;
      height: 10px;
      font-size:10px;
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(112,112,112,1);
      font-size: 10px;
    }
    .autograph{
      width:130px;
      height:11px;
      font-size:11px;
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
    font-size:11px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(255,255,255,1);
    text-align: center;
    margin-left: 6px;
  }
}
</style>

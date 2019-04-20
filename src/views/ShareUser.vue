<template>
    <div>
        <header>
            <PageHeader :title="upload"></PageHeader>
        </header>
        <main>
            <div class="headerNav">
                <div class="headerLogin"><img src="" alt=""></div>
                <section class="information">
                    <span>姓名：{{name}}</span><span class="state">已实名</span>
                    <div class="number">188 5001 6569</div>
                    <div class="integral">积分 {{5000}}</div>
                    <div class="autograph">海内存知己，天涯若比邻</div>
                </section>
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
            upload: '我分享的用户'
        }
    }
}
</script>
<style scoped lang="scss">
.headerNav{
  width: 90%;
  height: 100px;
  background: #fff;
  margin: 10px auto;
  display: flex;
  align-items: center;
  position: relative;
  .headerLogin{
    width: 50px;
    height: 50px;
    background-color: #ccc;
    border-radius: 50%;
    margin-right: 10px;
    border: 2px solid yellow;
  }
  .state{
    display: inline-block;
    width: 40px;
    height: 15px;
    background-color: black;
    color: #fff;
    font-size: 12px;
  }
}
</style>

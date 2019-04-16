<template>
    <header>
        <div class="header-title">我的蜂链</div>
        <div class="personal">
          <section class="personal-img"><img src="" alt=""></section>
          <section class="personal-name-number">
            <div class="name">Bryant.zZ</div>
            <span class="real-name"></span>
            <span class="number">188 9900 2266</span>
            <section class="integral">
              <div class="integral-number">积分 5000</div>
              <span>海内存知已，天涯若比邻</span>
            </section>
          </section>
          <div class="icon-you">
            <img style="width: 50px; margin-left: 30px;" src="../assets/you.png" alt="">
          </div>
        </div>
        <div class="apply">
          <section class="apply-img"><img src="" alt=""></section>
          <section class="apply-text"></section>
          <section class=""></section>
        </div>
    </header>
</template>
<script>
export default {
  name: 'MyCenter'
}
</script>
<style scoped lang="scss">
header {
width: $gw;
height: 300px;
background-color: antiquewhite;
.header-title {
  width: $gw;
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  font-weight: bolder;
}
.personal {
  display: flex;
  align-items: center;
  justify-content: center;
  width: $gw;
  height: 200px;
  background-color: aquamarine;
  .personal-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .personal-name-number {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    .name {
      font-weight: bolder;
      font-size: 16px;
    }
    .number {
      font-size: 10px;
      font-weight: bolder;
    }
    .integral {
      margin-top: 20px;
      .integral-number {
        font-weight: bolder;
        font-size: 16px;
      }
      span {
        color: #99a4af;
        font-size: 12px;
      }
    }
  }
}
}
</style>

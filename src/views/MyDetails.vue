<template>
    <div>
      <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
        <mu-button icon slot="left" @click="$router.go(-1)">
          <mu-icon value=":iconfont iconfanhui"></mu-icon>
        </mu-button>
        详细资料
        <mu-button icon slot="right"  :ripple="false">
        </mu-button>
      </mu-appbar>
        <main>
            <section class="details">
                <div class="rule margin-left"  v-for="i in 5" :key="i">
                    <span>昵称：</span><span style="margin-left: 30px;">一壶清酒</span>
                    <mu-divider></mu-divider>
                </div>
            </section>
            <section class="details">
                <div class="rule margin-left"  v-for="i in 5" :key="i">
                    <span>职业：</span><span style="margin-left: 30px;">互联网开发</span>
                    <mu-divider></mu-divider>
                </div>
            </section>
        </main>
    </div>
</template>
<script>
export default {
    name: 'mydetails',
    data() {
        return {
        }
    },
}
</script>
<style scoped lang="scss">
main{
    margin-top: 60px;
    .details{
        background-color: #fff;
        margin-top: 20px;
        .rule{
            height: 50px;
            line-height: 50px;
        }
    }
}
</style>

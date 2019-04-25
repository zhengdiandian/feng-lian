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
                    <card :open="() => {$router.push('/palnned')}"></card>
                    <card :open="() => {$router.push('/palnned')}"></card>
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
}
</style>

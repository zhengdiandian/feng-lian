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
                <div class="rule margin-left">
                    <span>昵称：</span><span style="margin-left: 30px;"><input type="text"></span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span>性别：</span><span style="margin-left: 30px;"><input type="text"></span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span>年龄：</span><span style="margin-left: 30px;"><input type="text"></span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span>生日：</span><span style="margin-left: 30px;"><input type="text"></span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span>星座：</span><span style="margin-left: 30px;"><input type="text"></span>
                    <mu-divider></mu-divider>
                </div>

            </section>
            <section class="details">
                <div class="rule margin-left">
                    <span>职业：</span><span style="margin-left: 30px;"><input type="text"></span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span>学校/公司：</span><span style="margin-left: 0px;"><input type="text"></span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span>所在地：</span><span style="margin-left: 20px;"><input type="text"></span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span>故乡：</span><span style="margin-left: 30px;"><input type="text"></span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span>邮箱：</span><span style="margin-left: 30px;"><input type="text"></span>
                    <mu-divider></mu-divider>
                </div>
            </section>
        </main>
        
        <input class="preservation" type="button" value="保存">
    </div>
</template>
<script>
export default {
    name: 'editdetails',
    data() {
        return {
            detalis:[]
        }
    },
    mounted() {
        // this.$axios.post('/v1/user/userInfo/infoDetail').then(res=>{
        //     this.detalis = res.data.data
        //     console.log(this.detalis)
        // })
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
input{
    // border: none;
    // width: 30px;
    height: 30px;
    background-color: $c-hui;
    outline: none;
}
.preservation{
    width: 85%;
}
</style>

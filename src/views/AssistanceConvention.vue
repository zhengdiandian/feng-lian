<template>
    <div>
    <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
      <mu-button icon slot="left" @click="$router.go(-1)">
      <mu-icon value=":iconfont iconfanhui"></mu-icon>
      </mu-button>
      互助计划公约
      <mu-button icon slot="right"  :ripple="false">
      </mu-button>
    </mu-appbar>
    <div class="imgUS">
      <!-- <img :src="this.writingImg" alt=""> -->
      <!-- <img :src="imgUs" alt="" srcset=""> -->
      <div class="wrap">
        <div v-html="US"></div>
        </div>
    </div>
    <div class="footer-btn">
        <button @click="$router.go(-1)">知道了</button>
    </div>
    </div>
</template>

<script>
// import { mapState } from 'vuex'
    export default {
        name:'UnderstandUs',
        data() {
            return {
                US:'',
                // imgUs: ''
            }
        },
        created()　{
            this.$axios.post('v1/manage/config/getTextList',{
                "keys": "Plan_Convention"
            }).then(res=>{
                this.US = res.data.data.Plan_Convention
                console.log(res.data.data.Plan_Convention)
            })
            // this.$axios.post('v1/manage/config/getImgList',{
            //     "keys": "AboutUs"
            // }).then(res=>{
            //     this.imgUs = res.data.data.AboutUs
            //     console.log(res)
            // })
        }
    }
</script>

<style lang="scss" scoped>
.imgUS{
    width: 100%;
    height: 100%;
    margin-bottom:50px;
    // padding-top: 40px;
    padding: 52px 15px 12px 22px;
    img{
        width: 100%;
        height: 100%;
    }
}
.footer-btn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 11;
    button{
        width: 100%;
        height: 50px;
        outline: none;
        border: none;
        background-color: $c-cheng;
        color: $c-bai;
    }
}
</style>
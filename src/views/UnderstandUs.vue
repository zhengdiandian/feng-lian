<template>
    <div>
    <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
      <mu-button icon slot="left" @click="$router.go(-1)">
      <mu-icon value=":iconfont iconfanhui"></mu-icon>
      </mu-button>
      <span v-if="title">{{title}}</span>
      <span v-else>了解我们</span>
      <mu-button icon slot="right"  :ripple="false">
      </mu-button>
    </mu-appbar>
    <div class="imgUS">
      <!-- <img :src="this.writingImg" alt=""> -->
      <img :src="imgUs" alt="" srcset="">
      <div class="wrap" style="margin-bottom:50px;">
        <!-- <div v-html="US"></div> -->
        </div>

    </div>
    </div>
</template>

<script>
    export default {
        name:'UnderstandUs',
        data() {
            return {
                US:'',
                imgUs: '',
                title: this.$route.params.title
            }
        },
        created()　{
            // this.$axios.post('v1/manage/config/getTextList',{
            //     "keys": "AboutUs"
            // }).then(res=>{
            //     this.US = res.data.data.AboutUs
            //     console.log(res)
            // })
            this.$axios.post('v1/manage/config/getImgList',{
                "keys": "AboutUs"
            }).then(res=>{
                if(res.data.code !==200){
                this.$toast.error(res.data.msg)
                return
          }
                this.imgUs = res.data.data.AboutUs
                console.log(res)
            })
        }
    }
</script>

<style lang="scss" scoped>
.imgUS{
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
    }
}
</style>
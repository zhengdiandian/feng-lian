<template>
    <div>
    <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
        <mu-button icon slot="left" @click="$router.go(-1)">
          <mu-icon value=":iconfont iconfanhui"></mu-icon>
        </mu-button>
        公示资金详情
        <mu-button icon slot="right"  :ripple="false">
        </mu-button>
    </mu-appbar>
    <main>
            <div class="datelis-img">
                <img :src="imgPost" alt="">
            </div>
    </main>
    </div>
</template>

<script>
    export default {
        name: 'imgfunds',
        data () {
            return {
                stage: this.$route.query.stage,
                imgPost: ''
            }
        },
        methods: {
            
        },
        created(){
            this.$axios.post('/v1/publicity/publicity/detail',{
                "stage": this.stage
            }).then(res=>{
              this.imgPost = res.data.data.postImgDetail
            })
        }
    }
</script>

<style lang="scss" scoped>
main{
    padding-top: 50px;
}
.datelis-img{
    width: 100%;
    img{
        width: 100%;
    }
}
</style>
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
                <img :src="postImg" alt="">
            </div>
            <div style="padding-top: 13px;">
                <mu-paper :z-depth="1" class="demo-loadmore-wrap">
                        <mu-container ref="container" class="demo-loadmore-content">
                            <mu-load-more :loading="loading" @load="load">
                                <div class="stage" v-for="(item,index) in cityList" :key="index" @click="$router.push({name: 'Imgfunds', query: { stage: item.stage} })">
                                    <div class="item-stage">{{item.stage}}</div>
                                </div>
                            </mu-load-more>
                        </mu-container>           
                </mu-paper>
            </div>
        
    </main>
    </div>
</template>

<script>
    export default {
        name: 'fundsDetails',
        data () {
            return {
                postImg: '',
                page: 1,
                pageSize: 15,
                cityList: [],
                refreshing: false,
                loading: false,      
            }
        },
        methods: {
            get_publicityList(flag) {
            this.$axios.post("/v1/publicity/publicity/publicityList", {
                "page": this.page,
                "pageSize": this.pageSize
            })
            .then(res => {
                if (res.data.code !== 200) {
                this.$toast.error(res.data.msg);
                return;
                }
                if (flag) {
                this.cityList = res.data.data;
                }else{
                res.data.data.forEach(item => {
                    // debugger
                    this.cityList.push(item)
                })
                }
                this.loading = false
            });
            },

            
            // refresh () {
            //     this.refreshing = true;
            //     this.$refs.container.scrollTop = 0;
            //     setTimeout(() => {
            //         this.refreshing = false;
            //     }, 2000)
            // },

            load () {
                this.loading = true;
                this.page++;
                this.get_publicityList()
            },
        },
        created(){
            this.$axios.post('/v1/publicity/publicity/detail').then(res=>{
                this.postImg = res.data.data.postImgDetail
            })
            this.get_publicityList(true)
        }
    }
</script>

<style lang="scss" scoped>
main{
    padding-top: 50px;
}
.demo-loadmore-wrap {
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: column;
  // background-color: $c-hui;
  .mu-appbar {
    
  }
}
.demo-loadmore-content {
  // flex: 1;
  overflow: auto;
  width: 100%;
  -webkit-overflow-scrolling: touch;
}
.datelis-img{
    width: 100%;
    // height: 451px;
    img{
        width: 100%;
        height: 100%;
    }
}
.stage{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 12px;
}
.item-stage{
    text-align: center;
    width:351px;
    height:33px;
    background:$c-cheng;
    border-radius:17px;
    line-height: 33px;
    color: $c-bai;
}
</style>
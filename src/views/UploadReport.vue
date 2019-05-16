<template>
    <div>
        <header>
            <PageHeader :title="upload"></PageHeader>
        </header>
        <main class="page-margin-top">
            <div class="report">
                <span>{{upload}}</span>
                <div class="img-wrap">
                  <div class="pictures" v-for="(img, i ) in imgArr" :key="i">
                    <img :src="img" alt="">
                  </div>
                </div>

            </div>
            <div class="upload">
                <section>
                    <upload :show-img="false" :upload="upload" @getFile="getFile"></upload>
                    <!--<upload :upload="upload"></upload>-->
                    <!--<upload :upload="upload"></upload>-->
                </section>
            </div>
          <div class="bottom-btn" @click="submit">提交</div>

        </main>
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader/PageHeader'
import upload from '../components/UpLoad/UpLoad'
// import PictureInput from 'vue-picture-input'
export default {
    name: 'uploadrepost',
    components: {
        PageHeader,
        upload,
    },
    data() {
        return {
            upload: '上传体检报告',
          imgArr: [],
          urlList: [],
          file1: '',


        }
    },
    methods:{
      getFile(file,img, imgURL) {
        // this[params] = file
        this.urlList.push(file)
        this.imgArr.push(img)
      },
      submit() {
        debugger
        if(!this.urlList.length)return
        let images = this.urlList.toString()
        this.$axios.post('v1/user/info/uploadHealthyReport',{
          images
        }).then(res => {
          debugger
          if(res.data.code!==200){
                this.$toast.error(res.data.msg)
                return
            }
            this.imgArr = this.urlList = []
            this.$toast.success('上传成功')
          console.log(res)
          this.$axios.post('v1/user/info/personalInfo').then(res => {
              if(res.data.code!==200){
                this.$toast.error(res.data.msg)
                return
            }
              this.$store.commit('set_userInfo',res.data.data)
          })

        })
      }
    }
}
</script>
<style scoped lang="scss">
.report{
    span{
        display: inline-block;
        font-size:13px;
          
        font-weight:400;
        color:rgba(51,51,51,1);
        margin: 12px 0 12px 12px;
    }
}
.img-wrap{
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.pictures{
    width:25%;
    height:50px;
    border-radius:5px;
    margin: 0 12px 12px;
    img{
      width: 100%;
      height: 100%;
    }
}
.bottom-btn{
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $c-cheng;
  color: #fff;
  line-height: 50px;
  font-size:15px;
    
  font-weight:400;
  color:rgba(255,255,255,1);
}
</style>

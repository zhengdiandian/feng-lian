<template>
    <div>
        <div >
            <div class="uploadimg"  :class="size==='small'? 'add-box': ''" >
              <div class="image">
                <img v-if="showImg"  :src="iconSrc" alt="" > <img v-else :src="addIcon" alt="">
              </div>

                <span>{{upload}}</span>
                <input class="justID" type="file" ref="file" @change="uploadIMG($event)" accept="image/*">
                <div class="img-file" v-if="imgUrl&&showImg">
                  <img :src="imgUrl"  @click="delImg" alt="" >
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  import  axios from 'axios'
import { debug } from 'util';
export default {
    name: 'UpLoad',
    props:{
        upload: {
            type: String,
            default: '上传身份证正面',
        },
        showImg: {
            type: Boolean,
            default: true
      },
        wrapClass: {
            type: String,
            default: 'uploadimg',
      },
        type: {
            type: String,
            default: ''
        },
        size: {
            type: String,
            default: ''
        }


        // file: {
        //     type : Object,
        //     default: function () {
        //       return {}
        //     }
        // }
    },
    computed: {
        // iconSrc() {
        //     debugger
        //     let src = ''
        //     if(this.showImg) {
        //         src = '../../assets/img/相机.svg'
        //         return  src
        //     }
        // }
    },
    // watch: {
    //     showImg() {
    //     debugger
    //         if(!this.showImg){
    //             this.iconSrc = require('../../assets/img/add.svg')
    //         }
    //     }
    // },
    data() {
        return {
             picavalue: "",
            imgUrl: null,
            isEnlargeImage: false,
            iconSrc: require('../../assets/img/相机.svg'),
            addIcon: require('../../assets/img/add.svg')
        }
    },
    methods: {
        changepic(obj) {
        //console.log(obj.files[0]);//这里可以获取上传文件的name
        var newsrc=getObjectURL(obj.files[0]);
        document.getElementById('show').src=newsrc;
        },
        uploadIMG(e) {
      try {
        let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.picavalue = files[0];
      console.log(this.picavalue.size / 1024);
      // if (this.picavalue.size / 1024 > 5000) {
      //   this.$toast.error('图片过大不支持上传')
      //   // this.$message({
      //   //   message: "图片过大不支持上传",
      //   //   type: "warning"
      //   // });
      // } else {
        this.imgPreview(this.picavalue);
      } catch (error) {
        alert(JSON.stringify(error))
      }
      // }
    },
    //获取图片
    imgPreview(file, callback) {

      let self = this;
      //判断支不支持FileReader
      if (!file || !window.FileReader) return;
      if (/^image/.test(file.type)) {
        //创建一个reader
        let reader = new FileReader();

        //将图片转成base64格式
        reader.readAsDataURL(file);
        //读取成功后的回调
        reader.onloadend = function() {
          let result = this.result;
          let img = new Image();
          img.src = result;
          console.log("********未压缩前的图片大小********");
          console.log(result.length);
          img.onload = function() {
            let data = self.compress(img);
            self.imgUrl = result;

            let blob = self.dataURItoBlob(data);

            console.log("*******base64转blob对象******");
            console.log(blob);

            var formData = new FormData();
            formData.append("img", blob);
            console.log("********将blob对象转成formData对象********");
            // console.log(formData.get("file"));
            // self.file = formData.get("file")
            // self.$emit('getFile', blob)

            axios.create({
              baseURL: `${self.$axios.defaults.baseURL}`,
              headers: {
                      'Content-Type': 'multipart/form-data',
                      'authToken' : window.localStorage.getItem('token')
                    },
            }).post('v1/manage/common/uploadImg',
              formData,
              {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  'authToken' : window.localStorage.getItem('token')
                },
                onUploadProgress: e => {
                  var completeProgress = ((e.loaded / e.total * 100) | 0) + "%";
                  this.progress = completeProgress;
                }
              }).then(res => {
              if(res.data.code!==200){
                self.$toast.error(res.data.msg)
                return
              }
              debugger
              self.$emit('getFile', res.data.data.url, self.imgUrl)

            })
            // axios.post('v1/manage/common/uploadImg',
            //   formData,
            //   {
            //     headers: {
            //       'Content-Type': 'multipart/form-data',
            //       'authToken' : window.localStorage.getItem('token')
            //     },
            //     onUploadProgress: e => {
            //       var completeProgress = ((e.loaded / e.total * 100) | 0) + "%";
            //       this.progress = completeProgress;
            //     }
            //   }).then(res => {
            //   debugger
            //   self.$emit('getFile', res.data.data.url)
            //
            // })
            // let config = {
            //   headers: { "Content-Type": "multipart/form-data" }
            // };
            // 发送请求;
            // self.axios.post(self.uploadUrl.url, formData, config).then(res => {
            //   // console.log(res);
            //   // console.log(res.data.data.resultftphost)
            //   // console.log(res.data.data.resulturl)
            //   // this.$emit('')
            //   if (res.data.code == 200) {
            //     self.$emit(
            //       "getImgsrc",
            //       res.data.data.resultftphost,
            //       res.data.data.resulturl
            //     );
            //   } else {
            //     self.$message({
            //       message: "图片上传失败，请重试",
            //       type: "warning"
            //     });
            //   }
            // });
          };
        };
      }
    },
    // 压缩图片
    compress(img) {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      let initSize = img.src.length;
      let width = img.width;
      let height = img.height;
      canvas.width = width;
      canvas.height = height;
      // 铺底色
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, width, height);

      //进行最小压缩
      let ndata = canvas.toDataURL("image/jpeg", 0.1);
      // console.log("*******压缩后的图片大小*******");
      // console.log(ndata)
      // console.log(ndata.length);
      return ndata;
    },
    // base64转成bolb对象
    dataURItoBlob(base64Data) {
      var byteString;
      if (base64Data.split(",")[0].indexOf("base64") >= 0)
        byteString = atob(base64Data.split(",")[1]);
      else byteString = unescape(base64Data.split(",")[1]);
      var mimeString = base64Data
        .split(",")[0]
        .split(":")[1]
        .split(";")[0];
      var ia = new Uint8Array(byteString.length);
      for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ia], { type: mimeString });
    },
    //删除事件
    delImg() {
      this.imgUrl = null;
    }
  }

}
</script>
<style scoped lang="scss">
.justID{

}
.uploadimg{
        width: 375px;
        height: 235px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(234,234,234,1);
        padding: 4px 10px;
        line-height: 20px;
        position: relative;
        cursor: pointer;
        border-radius: 2px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #ccc;
        .img-file{
            /*padding: 20px;*/
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          img{
            // box-sizing: border-box;
            // width: 100;
            // height: ;
            width: 100%;
            height: 100%;

          }
        }
        .image{
            width: 32px;
            height: 32px;
          img{
            width: 100%;
          }
        }
        .iconshouye1{
            font-size: 30px;
            margin-bottom: 12px;
        }
        input {
            position: absolute;
            // font-size: 100px;
            right: 0;
            top: 0;
            opacity: 0;
            filter: alpha(opacity=0);
            cursor: pointer;
            width: $gw;
            height: 100%;
        }
    }
.add-box{
    width:100px !important;
    height:100px !important;
    background:rgba(255,255,255,1);
}
</style>

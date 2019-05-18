<template>
    <div class="card">
        <header>
            <nav>
                <mu-icon value=":iconfont iconfanhui" @click="open"></mu-icon>
                <div class="title">{{title}}</div>
            </nav>
        </header>
        <main id="qrContent">
            <div class="head-name">
                <section class="hear-infor">
                    <div class="head-img"><img :src="userInfo.headPortrait" alt=""></div>
                    <div class="head-text">
                        <span style="font-size:14px;">{{userInfo.nickname}}</span>
                        <span class="head-state" >{{userInfo.state == 100 ? '未实名':'已实名'}}</span>
                    </div>
                    <span style="color:rgba(112,112,112,1);">{{userInfo.motto}}</span>
                </section>
                <section ref="qrWrap" class="code">
                  <div ref="qr"></div>
                  <!--<img src="../assets/PNG/中青年.png" alt="">-->
                </section>
                <section class="preservation margin-top margin-bottom">
                    <span  class="" style="color: #EFA220; opacity: 0">保存二维码</span>
                    <span style="font-weight:bold;">我的邀请码：{{userInfo.userCode}}</span>
                </section>
            </div>
        </main>
        <div class="btn-wrap margin-top">
          <div class="btn" @click="downloadMyQrcode">保存二维码</div>
          <div class="btn" :data-clipboard-text="userInfo.userCode" @click="$toast.success('复制成功')">复制邀请码</div>
        </div>
      <a id="download" :href="imgSrc" download="我的二维码"> </a>
    </div>
</template>
<script>
import Qrcode from 'qrcodejs2'
import axios from 'axios'
import Clipboard from 'clipboard';
import Html2canvas from 'html2canvas'
import  {mapState} from 'vuex'
console.log(Qrcode)
export default {
    name: 'Qrcode',
    data() {
        return {
           title: '我的二维码',
           name: 'Bryant.zZ',
           stata: '已实名',
           autograph: '海内存知己，天涯若比邻',
           imgUrl: require('../assets/PNG/head.png'),
           code: '',
           imgSrc: ''

        }
    },
  computed: mapState(['userInfo']),
    methods: {
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
      downloadMyQrcode() {
        let linkDom = document.getElementById('download')
        let contentDom  =document.getElementById('qrContent')
        Html2canvas(contentDom, {dpi: window.devicePixelRatio}).then(canvas => {
          this.imgSrc = canvas.toDataURL('image/png', 1.0)
          this.$nextTick(() => {
            linkDom.click()
          })
        })
      },
        open() {
            this.$router.go(-1)
        },
      createQrcode(url) {
        const width = this.$refs.qrWrap.clientHeight
        new Qrcode(this.$refs.qr, {
          text: url,
          width,
          height: width,
          colorDark: '#000000',
          colorLight: '#ffffff',
          correctLevel: Qrcode.CorrectLevel.H
        })
      }
    },
    created() {
        this.$axios.post('v1/user/info/personalInfo').then(res => {
            console.log('userinfo', res.data.data)
          if(res.data.code!==200){
            this.$toast.error(res.data.msg)
            return
          }
            let data = res.data.data
            this.name = data.nickname
            this.autograph= data.motto
            this.state = data.state == '100'? '未认证' : '已认证'
            this.imgUrl = data.headPortrait
        })
      this.$axios.post('/v1/user/share/getShareUrl').then((res)=>{
        if(res.data.code!==200){
          this.$toast.error(res.data.msg)
          return
        }
        this.code = res.data.data
        this.createQrcode(this.code)
        console.log(res)
      })
    },
    mounted(){
      const btnCopy = new Clipboard('.btn');

      console.log(this.$refs.qrWrap.clientHeight)



    }
}
</script>
<style scoped lang="scss">
  .btn-wrap{
    display: flex;
    justify-content: space-around;
    .btn{
      background-color: $c-cheng;
      height: 33px;
      border-radius: 25px;
      color: $c-bai;
    }
  }
html,body{
    width: 100%;
    height: 100%;
}
.head-img{
    width:75px;height:75px;background:rgba(255,255,255,1);border:2px solid rgba(255,255,255,1);border-radius:50%;margin: auto;
}
.head-text{
    margin-top: 12px;
}
.head-state {
    display: inline-block;
    width:50px;
    height:20px;
    text-align: center;
    color: #fff;
    margin-left: 5px;
    background:rgba(239,162,32,1);
    border:1px solid rgba(255,255,255,1);
    line-height: 20px;
    padding: 0 2px 0 2px;
    font-size: 12px;
    border-radius: 1px;
}
.card{
    width: 375px;
    height: 100%;
    background: url("../assets/PNG/codebackground.png") center no-repeat;
    background-size: 100% 100%;
}
nav {
    width: $gw;
    height: 60px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    color: #fff;
    .iconfanhui{
        font-size: 20px;
        margin-left: 5px;
        position: absolute;
        left: 12px;
    }
    .title {
        span{
            width:62px;
            height:14px;
            font-size:15px;

            font-weight:bold;
            color:rgba(51,51,51,1);
        }
    }
}
main{
    width: 100%;
    .head-name{

        .hear-infor{
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 16%;
            left: 50%;
            transform: translate(-50%, -16%);
            text-align: center;
            img{
            // width:75px;
            // height:75px;
            // background:rgba(255,255,255,1);
            // border:2px solid rgba(255,255,255,1);
            border-radius:50%;
            // margin: auto;
        }
        }

    }
    .code{
        width:180px;
        height:180px;
        background:$c-bai;
        border:10px solid $c-bai;
        margin: auto;
        margin-top: 180px;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
.preservation{
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
}
</style>

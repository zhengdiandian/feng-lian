<template>
    <div class="card" id="qrContent">
        <header  :style="{opacity: show}">
            <nav>
                <mu-icon value=":iconfont iconfanhui" @click="open"></mu-icon>
                <div class="title">{{title}}</div>
            </nav>
        </header>
        <main  style="padding: 5px 5px;">
            <div class="head-name">
                <section class="hear-infor">
                    <div class="head-img" :style="{backgroundImage: 'url(' + userInfo.headPortrait + ')'}"><img :src="userInfo.headPortrait" alt=""></div>
                    <div class="head-text">
                        <span style="font-size:15px;">{{userInfo.nickname}}</span>
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
        <div class="btn-wrap margin-top" v-if="show">
          <div class="btn" @click="downloadMyQrcode">保存二维码</div>
          <div class="btn" :data-clipboard-text="userInfo.userCode" @click="$toast.success('复制成功')">复制邀请码</div>
        </div>
        <pop-box v-if="showPop">
          <span class="close" @click="showPop=false"><img src="../assets/错误.png" alt=""></span>
          <div class="qrcode-wrap">
            <img :src="imgSrc" alt="" class="qrcode-img">
            <div class="bottom-text">长按保存图片</div>
          </div>
        </pop-box>
      <a id="download" style="z-index: -1" :href="imgSrc" download="我的二维码"> </a>
    </div>
</template>
<script>
import Qrcode from 'qrcodejs2'
import axios from 'axios'
import Clipboard from 'clipboard';
import Html2canvas from 'html2canvas'
import  {mapState} from 'vuex'
import PopBox from '../components/PopBox/PopBox'
console.log(Qrcode)
export default {
    name: 'Qrcode',
    data() {
        return {
           title: '我的二维码',
           name: 'Bryant.zZ',
           stata: '已实名',
           autograph: '海内存知己，天涯若比邻',
          //  imgUrl: require('../assets/PNG/head.png'),
           code: '',
           imgSrc: '',
           show: 1,
           showPop: false,
           imgUrl: '',
           count: 0

        }
    },
  computed: mapState(['userInfo']),
  components: {PopBox},
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
        this.show = 0
        Html2canvas(contentDom, {dpi: window.devicePixelRatio, useCORS: true}).then(canvas => {
          this.imgSrc = canvas.toDataURL('image/png', 1.0)
          this.$nextTick(() => {

            linkDom.click()
            // this.$toast.success('保存成功')
            this.show = 1
            this.showPop = true
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
    watch: {
      count() {
        if(this.count >=2) {
          const url = window.location.href.split('#')[0]
          const  self = this
          this.$axios.post('/v1/user/share/getSharePara', {
          url: url
        }).then(res => {
          debugger
          console.log(res)
          if(res.data.code!==200){
            this.$toast.error(res.data.msg)
            return
          }
          if(res.data.code!==200){
            this.$toast.error(res.data.msg)
            return
          }
          wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: res.data.data.appId, // 必填，公众号的唯一标识
            timestamp: res.data.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.data.nonceStr, // 必填，生成签名的随机串
            signature: res.data.data.signature, // 必填，签名
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone', 'onMenuShareWeibo', 'hideMenuItems', 'hideAllNonBaseMenuItem'] // 必填，需要使用的JS接口列表
          })

          wx.ready(function() {
            const title = '蜂链互助邀您加入';
            const desc = '链接你我他 守护千万家';
            // const imgUrl = 'https://bee-test-bucket.oss-cn-beijing.aliyuncs.com/首页banner.png';
            let link = ''
            // alert(self.code)
            // alert(self.imgUrl)
            debugger
            wx.hideMenuItems({
               menuList: ["menuItem:share:qq","menuItem:share:QZone", "menuItem:share:weiboApp", "menuItem:favorite", "menuItem:share:facebook", "menuItem:share:QZone", "menuItem:jsDebug", "menuItem:editTag", "menuItem:delete", "menuItem:copyUrl",  "menuItem:originPage", "menuItem:readMode", "menuItem:openWithQQBrowser",  "menuItem:openWithSafari", "menuItem:share:email", "menuItem:share:brand"] // 要隐藏的菜单项，所有menu项见附录3
            });
            // wx.hideAllNonBaseMenuItem() //隐藏所有非基础按钮接口
            if(self.userInfo.type ==100) {
              link = 'http://wx.fenglianhz.com/#/InvitationNoMember'
            }else {
              link = 'http://wx.fenglianhz.com/#/invitation?userCode='+ self.userInfo.userCode

            }

            // wx.updateAppMessageShareData({
            //   title, // 分享标题
            //   desc, // 分享描述
            //   link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            //   imgUrl, // 分享图标
            //   success: function () {
            //     // 设置成功
            //     alert('cg')
            //     console.log('成功')
            //     self.$toast.success('成功')
            //   },
            //   fail: (res) => {
            //     console.log('失败', res)
            //     alert(JSON.stringify(res))
            //       self.$toast.success(JSON.stringify(res))
            //
            //     debugger
            //     res
            //   }
            // })
            // wx.updateTimelineShareData({
            //   title, // 分享标题
            //   desc, // 分享描述
            //   link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            //   imgUrl, // 分享图标
            //   success: function () {
            //     // 设置成功
            //     this.$toast.success('成功')
            //   }
            // })
            wx.error(function(res){
              // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
              // alert("errorMSG:"+ JSON.stringify(res));
            });
            // 朋友圈
            wx.onMenuShareTimeline({
              title: title, // 分享标题
              desc: desc, // 分享描述
              link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: self.imgUrl // 分享图标
            });

            // 微信朋友
            wx.onMenuShareAppMessage({
              title: title, // 分享标题
              desc: desc, // 分享描述
              link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: self.imgUrl, // 分享图标
              type: 'link', // 分享类型,music、video或link，不填默认为link
              dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
              success : () =>{
                    // 设置成功
                    // alert('cg')
                    // console.log('成功')
                    // self.$toast.success('成功')

              },
              fail: (res) => {
                    // console.log('失败', res)
                    // alert(JSON.stringify(res))
                    // self.$toast.success(JSON.stringify(res))
                  }
            });

            // qq
            wx.onMenuShareQQ({
              title: title, // 分享标题
              desc: desc, // 分享描述
              link: link, // 分享链接
              imgUrl: self.imgUrl // 分享图标
            });

            // qq空间
            wx.onMenuShareQZone({
              title: title, // 分享标题
              desc: desc, // 分享描述
              link: link, // 分享链接
              imgUrl: self.imgUrl // 分享图标
            });

            //腾讯微博
            wx.onMenuShareWeibo({
              title: title, // 分享标题
              desc: desc, // 分享描述
              link: link, // 分享链接
              imgUrl: self.imgUrl // 分享图标
            });
          });
          // this.$alert()


      })

        }
      }
    },
    created() {
        debugger

        this.$axios.post('v1/manage/config/getImgList',{
          keys: 'Share_Material_icon'
        }).then(res => {
          debugger
          this.imgUrl = res.data.data.Share_Material_icon
          this.count +=1
        })


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
            // this.imgUrl = data.headPortrait
        })
      this.$axios.post('/v1/user/share/getShareUrl').then((res)=>{
        if(res.data.code!==200){
          this.$toast.error(res.data.msg)
          return
        }
        this.code = res.data.data
        this.createQrcode(this.code)
          this.count +=1
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
  .img-content{
    width: 80%;
  }
  .close{
    position: fixed;
    top: 33px;
    right: 20px;
    color: $c-bai;
    font-size:24px;
    font-family:SourceHanSansCN-Medium;
    font-weight:500;
    width: 17px;
    height: 17px;
  }
  .qrcode-wrap {
    position: relative;
    width: 300px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 200px;
    text-align: center;
    /*font-size: 13px;*/
    font-family: SourceHanSansCN-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    img{
      width: 100%;
      height: 100%;
    }

    .bottom-text {
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: -44px;
      height: 33px;
      left: 0px;
      line-height: 1.5;
    }
  }
  .btn-wrap{
    width: 60%;
    margin: 0 auto;
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
  width:75px;height:75px;
    background:rgba(255,255,255,1);border:2px solid rgba(255,255,255,1);border-radius:50%;margin: auto;
    img{
      width:75px;height:75px;
    }
}
.head-text{
    margin-top: 12px;
}
.head-state {
    display: inline-block;
    // width:50px;
    height:20px;
    text-align: center;
    color: #fff;
    margin-left: 5px;
    background:rgba(239,162,32,1);
    border:1px solid rgba(255,255,255,1);
    line-height: 20px;
    padding: 0 2px 0 2px;
    font-size: $f14;
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
            // display: flex;
            // flex-direction: column;
            // position: absolute;
            // top: 16%;
            // left: 50%;
            // transform: translate(-50%, -16%);
            text-align: center;
            padding-top: 20px;
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
        margin-top: 40px;
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

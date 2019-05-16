<template>

    <div class="btn" @click="scale">分享邀请好友</div>
</template>

<script>
    import {mapState} from 'vuex'
  export default {
    name: 'ScaleBtn',
    computed: mapState(['userInfo']),
    methods: {
      scale(){
         this.$alert('点击右上角选择分享方式', '邀请好友', {
            okLabel: '知道了'
          })
        debugger
        // const url = location.href.split('#')[0];
        //  const  url = this.$route.path


      }
    },
     created  () {
      const url = window.location.href.split('#')[0]
        //     const  url = '/'
      const  self = this
      this.$axios.post('v1/manage/config/getImgList',{
        keys: 'PublicQrcode,PublicAddress'
      }).then(res => {
        this.qrcodeImg = res.data.data.PublicQrcode
        this.videoImg = res.data.data.PublicAddress
      })
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
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareQZone', 'onMenuShareWeibo'] // 必填，需要使用的JS接口列表
          })
          wx.ready(function() {
            const title = '蜂链互助邀您加入';
            const desc = '链接你我他 守护千万家';
            const imgUrl = 'https://bee-test-bucket.oss-cn-beijing.aliyuncs.com/首页banner.png';
            let link = ''
            debugger
            if(self.userInfo.type ==100) {
              link = 'http://test.wx.fenglianhz.com/#/InvitationNoMember'
            }else {
              link = 'http://test.wx.fenglianhz.com/#/invitation?userCode='+ self.userInfo.userCode

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
              alert("errorMSG:"+res);
            });
            // 朋友圈
            wx.onMenuShareTimeline({
              title: title, // 分享标题
              desc: desc, // 分享描述
              link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: imgUrl // 分享图标
            });

            // 微信朋友
            wx.onMenuShareAppMessage({
              title: title, // 分享标题
              desc: desc, // 分享描述
              link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: imgUrl, // 分享图标
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
              link, // 分享链接
              imgUrl: imgUrl // 分享图标
            });

            // qq空间
            wx.onMenuShareQZone({
              title: title, // 分享标题
              desc: desc, // 分享描述
              link, // 分享链接
              imgUrl: imgUrl // 分享图标
            });

            //腾讯微博
            wx.onMenuShareWeibo({
              title: title, // 分享标题
              desc: desc, // 分享描述
              link, // 分享链接
              imgUrl: imgUrl // 分享图标
            });
          });
          // this.$alert()


      })
    }
  }
</script>

<style scoped>
.btn{
    overflow: hidden;
    margin: 0px auto;
    width:260px;
    height:33px;
    line-height: 33px;
    text-align: center;
    background:linear-gradient(-27deg,rgba(250,187,74,1) 0%,rgba(255,198,98,1) 100%);
    border-radius:17px;
    color: white;
}
</style>

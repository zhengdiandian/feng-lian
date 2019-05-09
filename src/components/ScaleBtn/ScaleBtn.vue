<template>

    <div class="btn" @click="scale">分享邀请好友</div>
</template>

<script>
  export default {
    name: 'ScaleBtn',
    methods: {
      scale(){
        this.$axios.post('/v1/user/share/getSharePara').then(res => {
          debugger
          console.log(res)
          wx.config({
            debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: res.data.data.appId, // 必填，公众号的唯一标识
            timestamp: res.data.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.data.data.nonceStr, // 必填，生成签名的随机串
            signature: res.data.data.signature, // 必填，签名
            jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData','onMenuShareWeibo'] // 必填，需要使用的JS接口列表
          })
          wx.ready(function() {
            const title = '分享标题';
            const desc = '分享描述';
            const imgUrl = '/home';
            wx.updateAppMessageShareData({
              title, // 分享标题
              desc, // 分享描述
              link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl, // 分享图标
              success: function () {
                // 设置成功
                this.$toast.success('成功')
              }
            })
            wx.updateTimelineShareData({
              title, // 分享标题
              desc, // 分享描述
              link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl, // 分享图标
              success: function () {
                // 设置成功
                this.$toast.success('成功')
              }
            })
            // // 朋友圈
            // wx.onMenuShareTimeline({
            //   title: title, // 分享标题
            //   link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            //   imgUrl: imgUrl // 分享图标
            // });
            //
            // // 微信朋友
            // wx.onMenuShareAppMessage({
            //   title: title, // 分享标题
            //   desc: desc, // 分享描述
            //   link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            //   imgUrl: imgUrl, // 分享图标
            //   type: 'link', // 分享类型,music、video或link，不填默认为link
            //   dataUrl: '' // 如果type是music或video，则要提供数据链接，默认为空
            // });
            //
            // // qq
            // wx.onMenuShareQQ({
            //   title: title, // 分享标题
            //   desc: desc, // 分享描述
            //   link: url, // 分享链接
            //   imgUrl: imgUrl // 分享图标
            // });
            //
            // // qq空间
            // wx.onMenuShareQZone({
            //   title: title, // 分享标题
            //   desc: desc, // 分享描述
            //   link: url, // 分享链接
            //   imgUrl: imgUrl // 分享图标
            // });

            // 腾讯微博
            wx.onMenuShareWeibo({
              title: title, // 分享标题
              desc: desc, // 分享描述
              link: url, // 分享链接
              imgUrl: imgUrl // 分享图标
            });
          });

      })
      }
    },
    created () {

    }
  }
</script>

<style scoped>
.btn{
    overflow: hidden;
    margin: 200px auto;
    width:260px;
    height:33px;
    line-height: 33px;
    text-align: center;
    background:linear-gradient(-27deg,rgba(250,187,74,1) 0%,rgba(255,198,98,1) 100%);
    border-radius:17px;
    color: white;
}
</style>

<template>
  <div @click="$router.go(-1)">
    <a id="fileDownload" @click.stop="() =>{}" :href="url" download="下载申请表">点击下载</a> </div>
</template>

<script>
  export default {
    name: 'download',
    data() {
      return {
        url: '',
        imgSrc: require('../../../assets/img/live_weixin.png')

      }
    },
    created () {

      this.$axios.post('v1/manage/config/getTextList', {
        keys: 'ApportionApplyForm'

      })
        .then(res => {
          // debugger
          if(res.data.code !== 200) {
            this.$toast.error(res.data.msg)
            return
          }
          this.url = res.data.data.ApportionApplyForm
          let linkDom = document.getElementById('fileDownload')
          // debugger

          // linkDom.click()
        })
      // let self = this
      // function is_weixin() {
      //   var ua = navigator.userAgent.toLowerCase();
      //   if (ua.match(/MicroMessenger/i) == "micromessenger") {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // }
      // var isWeixin = is_weixin();
      // var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;
      // function loadHtml(){
      //   var div = document.createElement('div');
      //   div.id = 'weixin-tip';
      //   div.onclick = function () {
      //     debugger
      //     if(div){
      //       document.body.removeChild(div)
      //
      //     }
      //     // self.$router.go(-1)
      //
      //   }
      //   debugger
      //   div.innerHTML = `<p><img style="max-width: 100%" src="${self.imgSrc}" alt="微信打开"/></p><div style=" position: fixed;color: red; top:50%; z-index: 8888888888; left: 50%;font-size: 18px;transform: translate(-50%, -50%);" class="next">点击返回</div>`
      //   document.body.appendChild(div);
      // }
      //
      // function loadStyleText(cssText) {
      //   var style = document.createElement('style');
      //   style.rel = 'stylesheet';
      //   style.type = 'text/css';
      //   try {
      //     style.appendChild(document.createTextNode(cssText));
      //   } catch (e) {
      //     style.styleSheet.cssText = cssText; //ie9以下
      //   }
      //   var head=document.getElementsByTagName("head")[0]; //head标签之间加上style样式
      //   head.appendChild(style);
      // }
      // var cssText = "#weixin-tip{position: fixed; left:0; top:0; background: rgba(0,0,0,0.8); filter:alpha(opacity=80); width: 100%; height:100%; z-index: 100;} #weixin-tip p{text-align: center; margin-top: 10%; padding:0 5%;}";
      // if(isWeixin){
      //   loadHtml();
      //   loadStyleText(cssText);
      //
      //
      // }
    }
  }

</script>

<style lang="scss" scoped>
  .next{
    position: fixed;
    top:50%;
    font-size: 18px;
    left: 50%;
    transform: translate(-50%, -50%);
    color: red;
    z-index: 8888888888;
  }
a{
  color: #0366d6;
  text-decoration: underline;
}
</style>
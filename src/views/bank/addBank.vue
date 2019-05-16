<template>
  <div class="wrap page-margin-top">
    <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui"></mu-icon>
      </mu-button>
      添加银行卡
      <mu-button icon slot="right" >
        <!-- <span style="font-size:12px;">保</span><span style="font-size:12px;">存</span> -->
      </mu-button>
    </mu-appbar>
    <div class="content">
      <div class="input-wrap">
        <label>持卡人</label><input placeholder="持卡人姓名" type="text">
      </div>
      <div class="input-wrap">
        <label>银行卡号</label><input v-model.lazy.number="cardNo" placeholder="请填写您的银行卡号" type="number">
      </div>
      <div class="input-wrap" @click="showAddress = true">
        <label>所属地区</label>
        <span class="text">{{province}}{{city}}</span>
        <!--<input placeholder="" type="text">-->
        <!--<ul><li>dsfdsa</li></ul>-->
        <span class="iconfont iconxiangshangshouqi1 right"></span>
      </div>
      <div class="input-wrap" @click="showBank=true">
        <label>所属银行</label><span class="text">{{bankName}}</span>
        <!--<input placeholder="" type="text">-->
        <!--<ul><li>dsfdsa</li></ul>-->
        <span class="iconfont iconxiangshangshouqi1 right"></span>
      </div>

      <div class="input-wrap">
        <label>预留手机号</label><input  v-model.number="account" placeholder="请输入银行预留手机号" type="number">
      </div>
      <div class="input-wrap">
        <label>短信验证码</label><input v-model="smsCode" placeholder="请输入短信验证码" type="text" > <span class="right" v-if="flag===0" @click="getMsg">获取验证码</span><span class="right timer" v-else>{{flag}}</span>
      </div>
    </div>
    <div class="btn" @click="addBank">完成</div>
    <vue-picker
            :show="showAddress"
            :columns="2"
            :link='true'
            @cancel="showAddress=false"
            @confirm="confirmFn"
    ></vue-picker>
    <vue-picker
            :show="showBank"
            :columns="1"
            :select-data="bankData"
            @cancel="showBank=false"
            @confirm="confirmFn1"
    ></vue-picker>
  </div>

</template>

<script>
  import vuePicker from "../../components/vuePickers/vuePicker";
  export default {
    name: 'addBank',
    components: { vuePicker},
    data() {
      return {
        inputData: {
          value1: [],
          value2: [],
          value3: []
        },
        showAddress: false,
        showBank: false,
        flag: 0,
        province: '',
        provinceValue: '',
        city: '',
        cityValue: '',
        bankData:{
          data1:[{"text":"三井住友银行","value":"三井住友银行"},{"text":"上海—巴黎国际银行","value":"上海—巴黎国际银行"},{"text":"上海商业银行","value":"上海商业银行"},{"text":"上海浦东发展银行","value":"上海浦东发展银行"},{"text":"上海银行","value":"上海银行"},{"text":"上饶银行","value":"上饶银行"},{"text":"东亚银行","value":"东亚银行"},{"text":"东京三菱银行","value":"东京三菱银行"},{"text":"东方汇理银行","value":"东方汇理银行"},{"text":"东莞银行","value":"东莞银行"},{"text":"东营银行","value":"东营银行"},{"text":"中信银行","value":"中信银行"},{"text":"中原银行","value":"中原银行"},{"text":"光大银行","value":"光大银行"},{"text":"农业发展银行","value":"农业发展银行"},{"text":"农业银行","value":"农业银行"},{"text":"工商银行","value":"工商银行"},{"text":"建设银行","value":"建设银行"},{"text":"民生银行","value":"民生银行"},{"text":"中国进出口银行","value":"中国进出口银行"},{"text":"邮政储蓄银行","value":"邮政储蓄银行"},{"text":"中国银联","value":"中国银联"},{"text":"中国银行","value":"中国银行"},{"text":"中国银行间外汇交易中心","value":"中国银行间外汇交易中心"},{"text":"中央国债登记结算有限责任公司","value":"中央国债登记结算有限责任公司"},{"text":"丰业银行","value":"丰业银行"},{"text":"临商银行","value":"临商银行"},{"text":"丹东银行","value":"丹东银行"},{"text":"乌海银行","value":"乌海银行"},{"text":"乌鲁木齐银行","value":"乌鲁木齐银行"},{"text":"乐山市商业银行","value":"乐山市商业银行"},{"text":"九江银行","value":"九江银行"},{"text":"云南省农村信用社联合社","value":"云南省农村信用社联合社"},{"text":"交通银行","value":"交通银行"},{"text":"保定银行","value":"保定银行"},{"text":"兰州银行","value":"兰州银行"},{"text":"兴业银行","value":"兴业银行"},{"text":"内蒙古农村商业银行","value":"内蒙古农村商业银行"},{"text":"内蒙古自治区农村信用社联合社","value":"内蒙古自治区农村信用社联合社"},{"text":"内蒙古银行","value":"内蒙古银行"},{"text":"农村信用合作社","value":"农村信用合作社"},{"text":"农村合作信用社","value":"农村合作信用社"},{"text":"农村合作银行","value":"农村合作银行"},{"text":"农村商业银行","value":"农村商业银行"},{"text":"凉山州商业银行","value":"凉山州商业银行"},{"text":"包商银行","value":"包商银行"},{"text":"北京银行","value":"北京银行"},{"text":"华侨银行","value":"华侨银行"},{"text":"华商银行","value":"华商银行"},{"text":"华夏银行","value":"华夏银行"},{"text":"华美银行","value":"华美银行"},{"text":"华融湘江银行","value":"华融湘江银行"},{"text":"南京银行","value":"南京银行"},{"text":"南充市商业银行","value":"南充市商业银行"},{"text":"南洋商业银行","value":"南洋商业银行"},{"text":"厦门国际银行","value":"厦门国际银行"},{"text":"厦门银行","value":"厦门银行"},{"text":"友利银行","value":"友利银行"},{"text":"台州银行股份有限公司","value":"台州银行股份有限公司"},{"text":"吉林银行","value":"吉林银行"},{"text":"哈密市商业银行","value":"哈密市商业银行"},{"text":"哈尔滨银行股份有限公司","value":"哈尔滨银行股份有限公司"},{"text":"唐山银行","value":"唐山银行"},{"text":"嘉兴银行","value":"嘉兴银行"},{"text":"四川省农村信用社联合社","value":"四川省农村信用社联合社"},{"text":"国家开发银行","value":"国家开发银行"},{"text":"国泰君安证券股份有限公司","value":"国泰君安证券股份有限公司"},{"text":"城市信用社","value":"城市信用社"},{"text":"城市商业银行","value":"城市商业银行"},{"text":"大众银行","value":"大众银行"},{"text":"大华银行","value":"大华银行"},{"text":"大同银行","value":"大同银行"},{"text":"大新银行","value":"大新银行"},{"text":"大连银行","value":"大连银行"},{"text":"天津滨海农村商业银行","value":"天津滨海农村商业银行"},{"text":"天津银行","value":"天津银行"},{"text":"奥地利中央合作银行","value":"奥地利中央合作银行"},{"text":"威海市商业银行","value":"威海市商业银行"},{"text":"宁夏银行股份有限公司","value":"宁夏银行股份有限公司"},{"text":"宁夏黄河农村商业银行","value":"宁夏黄河农村商业银行"},{"text":"宁波东海银行","value":"宁波东海银行"},{"text":"宁波通商银行","value":"宁波通商银行"},{"text":"宁波银行","value":"宁波银行"},{"text":"安徽省农村信用社联合社","value":"安徽省农村信用社联合社"},{"text":"宜宾市商业银行","value":"宜宾市商业银行"},{"text":"宝鸡市农村信用社","value":"宝鸡市农村信用社"},{"text":"富滇银行","value":"富滇银行"},{"text":"富邦华一银行","value":"富邦华一银行"},{"text":"山口银行","value":"山口银行"},{"text":"山西省农村信用社联合社","value":"山西省农村信用社联合社"},{"text":"常州市农村信用社","value":"常州市农村信用社"},{"text":"常德市农村商业银行","value":"常德市农村商业银行"},{"text":"平安银行","value":"平安银行"},{"text":"平顶山银行","value":"平顶山银行"},{"text":"广东华兴银行","value":"广东华兴银行"},{"text":"广东南粤银行","value":"广东南粤银行"},{"text":"广东发展银行","value":"广东发展银行"},{"text":"广东省农村信用社联合社","value":"广东省农村信用社联合社"},{"text":"广州银行","value":"广州银行"},{"text":"广西农村信用社","value":"广西农村信用社"},{"text":"广西北部湾银行股份有限公司","value":"广西北部湾银行股份有限公司"},{"text":"库尔勒银行","value":"库尔勒银行"},{"text":"廊坊银行","value":"廊坊银行"},{"text":"廖创兴银行","value":"廖创兴银行"},{"text":"建东银行","value":"建东银行"},{"text":"张家口银行","value":"张家口银行"},{"text":"德国商业银行","value":"德国商业银行"},{"text":"德州银行","value":"德州银行"},{"text":"德意志银行","value":"德意志银行"},{"text":"徽商银行","value":"徽商银行"},{"text":"恒丰银行","value":"恒丰银行"},{"text":"恒生银行","value":"恒生银行"},{"text":"意大利联合圣保罗银行","value":"意大利联合圣保罗银行"},{"text":"成都农商银行","value":"成都农商银行"},{"text":"成都银行","value":"成都银行"},{"text":"承德银行","value":"承德银行"},{"text":"抚顺银行","value":"抚顺银行"},{"text":"招商银行","value":"招商银行"},{"text":"摩根士丹利国际银行","value":"摩根士丹利国际银行"},{"text":"摩根大通银行","value":"摩根大通银行"},{"text":"攀枝花市商业银行","value":"攀枝花市商业银行"},{"text":"支付业务收费专户","value":"支付业务收费专户"},{"text":"新疆汇和银行","value":"新疆汇和银行"},{"text":"新疆维吾尔自治区农村信用社联合社","value":"新疆维吾尔自治区农村信用社联合社"},{"text":"新韩银行","value":"新韩银行"},{"text":"日照银行","value":"日照银行"},{"text":"昆仑银行","value":"昆仑银行"},{"text":"晋中银行","value":"晋中银行"},{"text":"晋商银行","value":"晋商银行"},{"text":"晋城银行","value":"晋城银行"},{"text":"曲靖市商业银行","value":"曲靖市商业银行"},{"text":"朝阳银行","value":"朝阳银行"},{"text":"本溪市商业银行","value":"本溪市商业银行"},{"text":"村镇银行","value":"村镇银行"},{"text":"杭州联合农村商业银行","value":"杭州联合农村商业银行"},{"text":"杭州银行","value":"杭州银行"},{"text":"枣庄银行","value":"枣庄银行"},{"text":"桂林银行","value":"桂林银行"},{"text":"武汉农村商业银行","value":"武汉农村商业银行"},{"text":"比��时联合银行","value":"比利时联合银行"},{"text":"汉口银行","value":"汉口银行"},{"text":"江苏银行","value":"江苏银行"},{"text":"江苏长江商业银行","value":"江苏长江商业银行"},{"text":"江西省农村信用社联合社","value":"江西省农村信用社联合社"},{"text":"江西银行","value":"江西银行"},{"text":"沧州银行","value":"沧州银行"},{"text":"河北省农村信用社联合社","value":"河北省农村信用社联合社"},{"text":"河北银行","value":"河北银行"},{"text":"河南省农村信用社","value":"河南省农村信用社"},{"text":"泉州银行","value":"泉州银行"},{"text":"法国兴业银行","value":"法国兴业银行"},{"text":"法国外贸银行","value":"法国外贸银行"},{"text":"泰华农民银行","value":"泰华农民银行"},{"text":"泰安银行","value":"泰安银行"},{"text":"泸州市商业银行","value":"泸州市商业银行"},{"text":"洋县农村信用合作联社","value":"洋县农村信用合作联社"},{"text":"洛阳银行","value":"洛阳银行"},{"text":"济宁银行","value":"济宁银行"},{"text":"浙商银行","value":"浙商银行"},{"text":"浙江民泰商业银行","value":"浙江民泰商业银行"},{"text":"浙江泰隆商业银行","value":"浙江泰隆商业银行"},{"text":"浙江省农村信用社联合社","value":"浙江省农村信用社联合社"},{"text":"浙江稠州商业银行","value":"浙江稠州商业银行"},{"text":"海南省农村信用社","value":"海南省农村信用社"},{"text":"海南银行","value":"海南银行"},{"text":"深圳农村商业银行","value":"深圳农村商业银行"},{"text":"渣打银行","value":"渣打银行"},{"text":"渤海银行","value":"渤海银行"},{"text":"温州银行","value":"温州银行"},{"text":"湖北银行","value":"湖北银行"},{"text":"湖南省农村信用社联合社","value":"湖南省农村信用社联合社"},{"text":"湖南省农村商业银行","value":"湖南省农村商业银行"},{"text":"湖州银行","value":"湖州银行"},{"text":"湛江市商业银行","value":"湛江市商业银行"},{"text":"潍坊银行","value":"潍坊银行"},{"text":"澳新银行","value":"澳新银行"},{"text":"澳门清算行","value":"澳门清算行"},{"text":"烟台银行","value":"烟台银行"},{"text":"焦作中旅银行","value":"焦作中旅银行"},{"text":"玉溪市商业银行","value":"玉溪市商业银行"},{"text":"瑞士信贷第一波士顿银行","value":"瑞士信贷第一波士顿银行"},{"text":"瑞穗银行","value":"瑞穗银行"},{"text":"甘肃农村信用社","value":"甘肃农村信用社"},{"text":"甘肃银行","value":"甘肃银行"},{"text":"盛京银行","value":"盛京银行"},{"text":"石嘴山银行","value":"石嘴山银行"},{"text":"福建农村信用社农商银行","value":"福建农村信用社农商银行"},{"text":"福建海峡银行","value":"福建海峡银行"},{"text":"秦皇岛银行","value":"秦皇岛银行"},{"text":"绍兴银行","value":"绍兴银行"},{"text":"绵阳市商业银行","value":"绵阳市商业银行"},{"text":"美国银行","value":"美国银行"},{"text":"自贡市商业银行","value":"自贡市商业银行"},{"text":"花旗银行","value":"花旗银行"},{"text":"苏州银行","value":"苏州银行"},{"text":"荷兰合作银行","value":"荷兰合作银行"},{"text":"荷兰商业银行","value":"荷兰商业银行"},{"text":"莱商银行","value":"莱商银行"},{"text":"营口沿海银行","value":"营口沿海银行"},{"text":"营口银行","value":"营口银行"},{"text":"葫芦岛银行","value":"葫芦岛银行"},{"text":"蒙特利尔银行","value":"蒙特利尔银行"},{"text":"衡水银行","value":"衡水银行"},{"text":"裕信银行","value":"裕信银行"},{"text":"西安银行","value":"西安银行"},{"text":"西藏银行","value":"西藏银行"},{"text":"贵州省农村信用社联合社","value":"贵州省农村信用社联合社"},{"text":"贵州银行","value":"贵州银行"},{"text":"贵阳银行","value":"贵阳银行"},{"text":"赣州银行","value":"赣州银行"},{"text":"辽宁省农村信用社联合社","value":"辽宁省农村信用社联合社"},{"text":"辽阳银行","value":"辽阳银行"},{"text":"达州市商业银行","value":"达州市商业银行"},{"text":"邢台银行","value":"邢台银行"},{"text":"邯郸银行","value":"邯郸银行"},{"text":"郑州银行","value":"郑州银行"},{"text":"鄂尔多斯银行","value":"鄂尔多斯银行"},{"text":"重庆农村商业银行","value":"重庆农村商业银行"},{"text":"重庆银行","value":"重庆银行"},{"text":"金华银行","value":"金华银行"},{"text":"铁岭银行","value":"铁岭银行"},{"text":"锦州银行","value":"锦州银行"},{"text":"长安银行","value":"长安银行"},{"text":"长沙银行","value":"长沙银行"},{"text":"长沙银行股份有限公司","value":"长沙银行股份有限公司"},{"text":"阜新银行","value":"阜新银行"},{"text":"阳泉市商业银行","value":"阳泉市商业银行"},{"text":"陕西省农村信用社联合社","value":"陕西省农村信用社联合社"},{"text":"雅安市商业银行","value":"雅安市商业银行"},{"text":"集友银行","value":"集友银行"},{"text":"青岛银行","value":"青岛银行"},{"text":"青海银行","value":"青海银行"},{"text":"鞍山银行","value":"鞍山银行"},{"text":"韩亚银行","value":"韩亚银行"},{"text":"韩国产业银行","value":"韩国产业银行"},{"text":"韩国企业银行","value":"韩国企业银行"},{"text":"首都银行","value":"首都银行"},{"text":"香港上海汇丰银行","value":"香港上海汇丰银行"},{"text":"香港星展銀行","value":"香港星展銀行"},{"text":"马来亚银行","value":"马来亚银行"},{"text":"黑龙江省农村信用社","value":"黑龙江省农村信用社"},{"text":"齐商银行","value":"齐商银行"},{"text":"齐鲁银行","value":"齐鲁银行"},{"text":"龙江银行","value":"龙江银行"}]
        },
        account: '',
        token: '',
        cardNo: '',
        smsCode: '',
        bankName: '',
        province: '',
        city: ''

      }
    },
    methods: {
      // numberChange() {
      //   debugger
      //   this.account = e.target.value.replace(/[^\d]/g,'')
      // },
      confirmFn(val) {
        debugger
        this.showAddress = false;

        this.province = val.select1.text
        this.city = val.select2.text
        this.provinceValue = val.select1.value
        this.cityValue = val.select2.value
        // this.defaultData = [val.select1];
      },
      confirmFn1(val) {
        debugger
        this.showBank = false;

        // this.province = val.select1.text.substring(0,val.select1.text.length -1)
        // this.city = val.select2.text.substring(0,val.select2.text.length -1 )
        this.bankName = val.select1.value
        // this.cityValue = val.select2.value
        // this.defaultData = [val.select1];
      },
      addBank() {
        debugger
        this.$axios.post('v1/card/debitCard/updateCard',{
          phone: this.account,
          token: this.token,
          cardNo: this.Util.encrypt(this.cardNo),
          smsCode: this.smsCode,
          cardProv: this.provinceValue,
          cardCity: this.cityValue,
          bankName: this.bankName

        }).then(res => {
          if(res.data.code!==200){
            this.$toast.error(res.data.msg)
            return
          }
          this.$toast.success('绑定成功')
          this.$router.push('/CardBag')
        })
      },
      getMsg() {
        const accountReg = /^1[3456789]\d{9}$/
        if(!accountReg.test(this.account)) {
          this.$toast.error('请输入正确的手机号码')
          return
        }
        this.$axios.post('v1/manage/common/sendMsg',{
          account: this.account,
          type: 3
        }).then(res => {
          if(res.data.code!==200){
            this.$toast.error(res.data.msg)
            return
          }
          debugger
          this.token = res.data.data.token
        })
        this.flag = 60
        let timer = setInterval(() => {
          if(this.flag ===0){
            this.flag = 0
            clearInterval(timer)
          }
          this.flag--
        }, 1000)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .right{
    display: inline-block;
    height: 44px;
    line-height: 44px;
    float: right;
    font-size:13px;

    font-weight:400;
    &.timer{
      color: $c-hui !important;
    }
  }
  ul,li{
    padding: 0;
    margin: 0;
    list-style: none;
    li{
      height: 25px;
    }
  }
  .wrap{
    padding-top: 6px;
    background-color: $c-hui;
  }
  .content{
    /*margin-top: 6px;*/
    background-color: $c-bai;
    padding: 0px 12px;
    .input-wrap{
    //  display: flex;
      span.text{
        color: rgba(0, 0, 0, 0.87)!important;
      }
      width: 100%;
      // flex-wrap: nowrap;
      // flex-direction: column;
      /*height:44px;*/
      /*box-sizing: content-box;*/
      /*line-height: 100%;*/
      z-index: 22;
      &:after{
        content: '';
        display: block;
        width: 100%;
        padding-top: 1px;
        border-bottom: .5px solid $c-hui;
      }
      label,input{
        height: 44px;
        /*line-height: 44px;*/
        vertical-align: middle;
      }
      span{
        color: $c-cheng;
      }
      label{
        line-height: 43.5px;
        display: inline-block;
        min-width:77px;
        font-size:13px;

        font-weight:400;
        /*padding-right: 11px;*/
      }
      input{
        width: auto;
        border: none;
        outline: none;
      }
    }
  }
  .btn{
    width:350px;
    height:33px;
    margin: 25px auto 0px;
    text-align: center;
    line-height: 33px;
    color: $c-bai;
    background:rgba(248,182,45,1);
    border-radius:17px;
  }
</style>

<template>
    <div>
        <div class="form-content content">
            <div class="title">请如实填写以下信息</div>
            <div class="input-box"><label >姓名:</label><input v-model="contacs" placeholder="请填写您的姓名" type="text"></div>
            <div class="input-box"><label >身份证号码:</label><input v-model="contacsIdNo" placeholder="请填写您的身份证号码"  @keyup="contacsIdNo=contacsIdNo.replace(/[\W]/g,'')" type="text"></div>
            <div class="input-box"><label >手机号:</label><input v-model="phone" placeholder="请填写您的手机号码" type="number"></div>
            <div class="input-box"><label >邮箱：</label><input v-model="email" placeholder="请填写您的邮箱地址"  type="text"></div>
        </div>
        <div class="input-box-line"></div>
        <div class="content">
            <div class="input-box"><label >职业:</label><input v-model="job" placeholder="请填写您的职业" type="text"></div>
            <div class="input-box"><label >工作单位/学校:</label><input v-model="workingPlace" placeholder="请填写受助人工作单位或学校" type="text"></div>
        </div>
        <div class="input-box-line"></div>
        <div class="content">
            <div class="input-box" @click="showAddress=true"><label >地区:</label><div class="select"><span class="placeholder-text" v-if="provinceDesc===''">请选择地区</span><span>{{provinceDesc}}</span><span> {{cityDesc}}</span> <span> {{countyDesc}}</span><span class="iconfont iconxiangshangshouqi1"></span></div></div>
            <div class="input-box"><label >详细地址:</label><input v-model="address" placeholder="请填写您的详细地址" type="text"></div>
        </div>
        <div class="input-box-line"></div>
        <div class="content">
            <div class="input-box"><label >疾病名称:</label><input v-model="illnessName" placeholder="请填写受助者详细的疾病名称" type="text"></div>
            <div class="input-box"><label >确诊医院:</label><input v-model="hospitalName" placeholder="请填写确诊医院" type="text"></div>
            <div class="input-box" @click="openBotttomSheet">
                <label >事故发生时间:</label>
                <div class="select"><span class="placeholder-text" v-if="incidentTime===''">请选择事故发生时间</span><span>{{incidentTime}}</span><span class="iconfont iconxiangshangshouqi1"></span>
                </div>
<!--                <mu-date-input v-model="value2" label="横屏显示" label-float full-width landscape></mu-date-input>-->

            </div>

        </div>
        <div class="input-box-line"></div>
        <div class="content">
            <div class="input-box switch"><label >是否有社保/新农合:</label> <div class="right"><mu-switch v-model="switchData.switchVal" color="#f8b62d" :label="switchText.label"></mu-switch></div> </div>
<!--            <div class="input-box"><label >确诊医院:</label><input placeholder="请填写确诊医院" type="text"></div>-->
            <div class="input-box" @click="showLocation = true">
                <label >所在地:</label>
                <div class="select"><span class="placeholder-text" v-if="locationCity===''">请选择社保/新农合所在地</span><span>{{locationProvinceDesc}}</span><span> {{locationCityDesc}}</span><span> {{locationCountyDesc}}</span><span class="iconfont iconxiangshangshouqi1"></span>
                </div>
            </div>
        </div>
        <div class="input-box-line"></div>
        <div class="content">
            <div class="input-box switch"><label >是否有商业保险：:</label> <div class="right"><mu-switch v-model="switchData.switchVal1" color="#f8b62d" :label="switchText.label1"></mu-switch></div> </div>
            <div class="input-box"><label >保险公司名称:</label><input v-model="insuranceCompany" placeholder="请填写保险公司名称" type="text"></div>
            <div class="input-box" @click="showCompensateState=true">
                <label>目前理赔状况:</label>
                <div class="select"><span class="placeholder-text" v-if="compensateState===''">请选择目前理赔状况</span><span>{{compensateState}}</span><span class="iconfont iconxiangshangshouqi1"></span>
                </div>
            </div>
        </div>
        <div class="input-box-line"></div>
        <div class="content">
<!--            <div class="title"></div>-->
            <div class="input-box"><label >事情经过</label></div>
            <textarea v-model="incidentDetail" placeholder="  请简单描述事情经过（何时、何因、何地、经过、结果）"></textarea>
        </div>
        <div class="input-box-line"></div>
        <div class="content">
            <!--            <div class="title"></div>-->
            <div class="input-box"><label >加入前身体状况</label></div>
            <textarea   v-model="bodyStatus" placeholder="  如：健康、肢体运动功能障碍、躯体感觉障碍、器官移植、身体残疾、精神异常、智力缺陷、抑郁症等。"></textarea>
            <div class="tongYi">
                <div><label class="iconfont iconxuanze" :style="tongYiStyle" for="tongYi"></label><input v-model="tongYi"  id="tongYi" type="checkbox"></div><span>我保证以上信息均真实有效，不存在虚拟和隐瞒情形，否则将视为自动放弃申请互助尽权力。</span>
            </div>
        </div>
        <div class="btn" @click="submit">提交信息</div>
        <vue-picker
                :show="showAddress"
                :columns="3"
                :link='true'
                @cancel="showAddress=false"
                @confirm="confirmFn"
        ></vue-picker>
        <vue-picker
                :show="showLocation"
                :columns="3"
                :link='true'
                @cancel="showLocation=false"
                @confirm="confirmFn1"
        ></vue-picker>
        <vue-picker
                :show="showCompensateState"
                :select-data="compensateStateSelectData"
                @cancel="showCompensateState=false"
                @confirm="confirmFn2"
        ></vue-picker>
<!--        <mu-bottom-sheet :open="true"></mu-bottom-sheet>-->
<!--        <mu-container>-->
<!--            <mu-flex justify-content="center">-->
<!--                <mu-button @click="openBotttomSheet">OPEN Bottom Sheet</mu-button>-->
<!--            </mu-flex>-->
            <mu-bottom-sheet :open.sync="open">

                <mu-paper style="width: 100%"  :z-depth="1" class="demo-date-picker">
                    <mu-date-picker @change="closeBottomSheet" color="#f8b62d" style="width: 100%"  :date.sync="date"></mu-date-picker>
                </mu-paper>
            </mu-bottom-sheet>
    </div>

</template>

<script>
  import vuePicker from "../../../components/vuePickers/vuePicker";
  export default {
    name: 'InputForm',
    components: {
      vuePicker
    },
    data() {
      return {
        contacs: '',
        contacsIdNo: '',
        phone: '',
        email: '',
        job: '',
        workingPlace: '',
        address: '',
        illnessName: '',
        // incidentTime: '',
        // location: '',
        hospitalName: '',
        locationProvinceDesc: '',
        locationCityDesc: '',
        locationCountyDesc: '',
        locationProvince: '',
        locationCity: '',
        locationCounty: '',
        insuranceCompany: '',
        compensateState: '',
        incidentDetail: '',
        bodyStatus: '',
        showAddress: false,
        showLocation: false,
        showCompensateState: false,
        provinceDesc: '',
        cityDesc: '',
        countyDesc: '',
        province: '',
        city: '',
        county: '',
        open: false,
        value2: '',
        date: new Date(),
        switchVal:'',
        switchData: {
            switchVal:false,
            switchVal1: false
            },
        compensateStateSelectData: {data1: [
            {text: '核定阶段',value: '核定阶段'},
            {text: '已赔付', value: '已赔付'},
            {text: '被驳回', value: '被驳回'}
          ]},
        tongYi: false
      }
    },
    computed: {
        switchText() {
            return {
                label: this.switchData.switchVal ? '是' : '否',
                label1: this.switchData.switchVal1 ? '是' : '否'
            }
        },
        tongYiStyle () {
            return this.tongYi ? {color: '#f8b62d'}: {}
        },
        incidentTime() {
        if(typeof this.date === 'object'  ){
            return  this.date.Format("yyyy-MM-dd")
        }
            return ''


        },
    },
    created() {
      debugger

      if(this.$route.query.first != 8888) {
        this.$axios.post('v1/mutually/compensate/compensateDetail',{
          orderNo: this.$route.query.planNo
        }).then(res => {
          if(res.data.code!==200){
            this.$toast.error(res.data.msg)
            return
          }
          debugger
          let {contacs, contacsIdNo, phone, email, job, workingPlace, address, illnessName, incidentDetail, bodyStatus, hospitalName ,insuranceCompany, compensateState } = res.data.data
          // contacsIdNo = this.Util.decrypt(contacsIdNo)

          // this.$data = Object.assign(this.$data, {contacs, contacsIdNo, phone, email, job, workingPlace, address, illnessName, incidentDetail, bodyStatus ,hospitalName, insuranceCompany, compensateState})
          // // this.switchData.switchVal = !!res.data.data.socialSecurityFlag
          // this.switchData.switchVal1 = !!res.data.data.businessInsureFlag
          this.$data = Object.assign(this.$data, res.data.data)
          this.switchData.switchVal = !!res.data.data.socialSecurityFlag
          this.switchData.switchVal1 = !!res.data.data.businessInsureFlag
          // this.contacs = data.contacs
          // this.
        })
      }
      this.$axios.post('v1/mutually/compensate/compensateUserInfo',{
        planNo: this.$route.query.planNo

      }).then(res => {
          if(res.data.code!==200){
            this.$toast.error(res.data.msg)
            return
          }
          let data = res.data.data
          this.contacs = data.contacs
          this.contacsIdNo = data.contacsIdNo
      })
    },
    methods: {
      submit() {
        if(!this.tongYi){
            this.$toast.warning('需要确认信息真实有效才能进行')
            return
        }
        if(this.contacs.length <2){
            this.$toast.error('请输入正确的姓名')
            return
        }
          // var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
          // if (!reg.test(this.contacsIdNo)) {
          // this.$toast.error('请输入正确的身份证号码')
          // // this.warnTips({txt:'请输入正确的身份证号码'});
          // return false;
          // }
          const accountReg = /^1[3456789]\d{9}$/
          if(!accountReg.test(this.phone)) {
          this.$toast.error('请输入正确的手机号码')
          return
          }
        this.$axios.post('v1/mutually/compensate/compensateApplyText', {
            contacs: this.contacs,
            contacsIdNo: this.Util.encrypt(this.contacsIdNo),
            phone: this.phone,
            email: this.email,
            job: this.job,
            workingPlace: this.workingPlace,
            province: this.province,
            city: this.city,
            county: this.county,
            address: this.address,
            illnessName: this.illnessName,
            incidentTime: this.incidentTime,
            socialSecurityFlag: +this.switchData.switchVal,
            businessInsureFlag: +this.switchData.switchVal1,
            locationProvince: this.locationProvince,
            locationCity: this.locationCity,
            locationCounty: this.locationCounty,
            insuranceCompany: this.insuranceCompany,
            compensateState: this.compensateState,
            incidentDetail: this.incidentDetail,
            bodyStatus: this.bodyStatus,
            type: this.$route.query.type,
            planNo: this.$route.query.planNo,
            hospitalName: this.hospitalName,
            
            


        }).then(res => {
            if(res.data.code!==200){
                this.$toast.error(res.data.msg)
                return
            }
            this.$toast.success('提交成功,请继续操作')
            this.$router.push({path: '/compensate/imageForm', query: {orderNo: res.data.data}})

        })
      },
      closeBottomSheet () {
        this.open = false;
      },
      openBotttomSheet () {
        this.open = true;
      },
      confirmFn(val) {
        debugger
        this.showAddress = false;
        this.provinceDesc = val.select1.text
          // .substring(0,val.select1.text.length -1)
        this.cityDesc = val.select2.text
          // .substring(0,val.select2.text.length -1 )
        this.province = val.select1.value
        this.city = val.select2.value
        this.county = val.select3.value
        this.countyDesc = val.select3.text
        // this.defaultData = [val.select1];
      },
      confirmFn1(val) {
        debugger
        this.showLocation = false;
        this.locationProvinceDesc = val.select1.text
          // .substring(0,val.select1.text.length -1)
        this.locationCityDesc = val.select2.text
          // .substring(0,val.select2.text.length -1 )
        this.locationProvince = val.select1.value
        this.locationCity = val.select2.value
        this.locationCounty = val.select3.value
        this.locationCountyDesc = val.select3.text
        // this.defaultData = [val.select1];
      },
      confirmFn2(val) {
        debugger
        this.showCompensateState = false;
        this.compensateState = val.select1.text
          // .substring(0,val.select1.text.length -1)

        // this.defaultData = [val.select1];
      },
    }
  }
</script>

<style lang="scss" scoped>
    .btn{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size:15px;
        font-family:SourceHanSansCN-Normal;
        font-weight:400;
        color:rgba(255,255,255,1);
        background-color: $c-cheng;
    }
    .tongYi{
        padding-bottom: 40px;
        display: flex;
        &>div{
            display: inline-block;
            /*height:;*/
            /*float: left;*/
        }
        margin-top: 10px;
        .iconfont{
            vertical-align: middle;
        }
        input[type=checkbox]{
            visibility: hidden;
            /*float: right;*/
            /*margin-bottom: 20px;*/
        }
        label{
            /*float: left;*/
        }
        span{
            width:325px;
            height:26px;
            font-family:SourceHanSansCN-Normal;
            font-weight:bold;
            /*float: right;*/
            color: rgba(51, 51, 51, 1);
            /*padding-left: 20px;*/
        }
    }
    textarea{
        width: 100%;
        outline: none;
        resize: none;
        min-height:90px;
        border: 1px solid black;
    }
    .content{
        padding: 0px 12px 6px;
        background-color: $c-bai;
    }

    .input-box-line{
        width: 100%;
        padding-bottom: 6px;
        /*height: .5px;*/
        background-color: $c-hui;

    }
    .input-box{
        width: 100%;
        /*height:36px;*/
        display: flex;
        flex-wrap: wrap;
        &.switch{
            justify-content: space-between;
        }
        .placeholder-text{
            font-family:SourceHanSansCN-Normal;
            font-weight:400;
            color:rgba(112,112,112,1);
        }
        &:after{
            width: 100%;
            height: 1px;
            transform: scaleY(0.5);
            transform-origin: 50% 100%;
            /*height: .5px;*/
            content: '';
            display: block;
            z-index: 6666;
            background-color: $c-hui;
            /*<!--border-bottom: .5px solid $c-hui;-->*/
        }
        .select{
            position: relative;
            flex: 2;
            line-height: 36px;
            height: 36px;
            .iconfont{
                position: absolute;
                bottom: 0px;
                right: 0px;
                color: $c-cheng;
            }
        }
        label {
            white-space: nowrap;
            display: inline-block;
            width: 100px;
            line-height: 36px;
            height: 36px;
            background-color: $c-bai;
        }
        input{
            flex: 2;
            border: none;
            outline: none;
            width: auto;
            height: 36px;
        }

        .right{
            /*float: right;*/
            line-height: 36px;
        }
    }
    .form-content{
        padding-top: 23px;
        /*padding: 23px 12px 0px;*/
        .title{
            padding-bottom: 12px;
            font-size:$f16;
            font-family:SourceHanSansCN-Normal;
            font-weight:bold;
            color:rgba(51,51,51,1);
        }


    }
</style>
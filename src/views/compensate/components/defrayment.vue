<template>
    <div>
        <div class="form-content content">
            <div class="title" v-if="showBtn">请如实填写以下信息</div>
            <div class="input-box"><label >姓名:</label><input disabled="disabled" v-model="contacs" placeholder="请填写您的姓名" type="text"></div>
            <div class="input-box"><label >身份证号码:</label><input disabled="disabled" v-model="contacsIdNo" placeholder="请填写您的身份证号码" type="text"></div>
            <div class="input-box"><label >手机号:</label><input disabled="disabled" v-model="phone" placeholder="请填写您的手机号码" type="text"></div>
            <div class="input-box"><label >邮箱：</label><input disabled="disabled" v-model="email" placeholder="请填写您的邮箱地址" type="text"></div>
        </div>
        <div class="input-box-line"></div>
        <div class="content">
            <div class="input-box"><label >职业:</label><input  disabled="disabled"  v-model="job" placeholder="请填写您的职业" type="text"></div>
            <div class="input-box"><label >工作单位/学校:</label><input  disabled="disabled" v-model="workingPlace" placeholder="请填写受助人工作单位或学校" type="text"></div>
        </div>
        <div class="input-box-line"></div>
        <div class="content">
            <div class="input-box" ><label >地区:</label><div class="select"><span class="placeholder-text" v-if="province===''">请选择地区</span><span>{{province}}</span><span> {{city}}</span> <span> {{county}}</span><span class="iconfont iconxiangshangshouqi1"></span></div></div>
            <div class="input-box"><label >详细地址:</label><input disabled="disabled" v-model="address" placeholder="请填写您的详细地址" type="text"></div>
        </div>
        <div class="input-box-line"></div>
        <div class="content">
            <div class="input-box"><label >疾病名称:</label><input disabled="disabled" v-model="illnessName" placeholder="请填写受助者详细的疾病名称" type="text"></div>
            <div class="input-box"><label >确诊医院:</label><input disabled="disabled" placeholder="请填写确诊医院" type="text"></div>
            <div class="input-box" >
                <label >事故发生时间:</label>
                <div class="select"><span class="placeholder-text" v-if="incidentTime===''">请选择事故发生时间</span><span>{{incidentTime}}</span><span class="iconfont iconxiangshangshouqi1"></span>
                </div>
                <!--                <mu-date-input disabled="disabled" v-model="value2" label="横屏显示" label-float full-width landscape></mu-date-input>-->

            </div>

        </div>
        <div class="input-box-line"></div>
        <div class="content">
            <div class="input-box switch"><label >是否有社保/新农合:</label> <div class="right"><mu-switch disabled="disabled" v-model="switchData.switchVal" color="#f8b62d" :label="switchText.label"></mu-switch></div> </div>
            <!--            <div class="input-box"><label >确诊医院:</label><input placeholder="请填写确诊医院" type="text"></div>-->
            <div class="input-box" >
                <label >所在地:</label>
                <div class="select"><span class="placeholder-text" v-if="locationCity===''">请选择社保/新农合所在地</span><span>{{locationProvince}}</span><span> {{locationCity}}</span><span> {{locationCounty}}</span><span class="iconfont iconxiangshangshouqi1"></span>
                </div>
            </div>
        </div>
        <div class="input-box-line"></div>
        <div class="content">
            <div class="input-box switch"><label >是否有商业保险：:</label> <div class="right"><mu-switch disabled="disabled" v-model="switchData.switchVal1" color="#f8b62d" :label="switchText.label1"></mu-switch></div> </div>
            <div class="input-box"><label >保险公司名称:</label><input disabled="disabled" v-model="insuranceCompany" placeholder="请填写保险公司名称" type="text"></div>
            <div class="input-box" >
                <label>目前理赔状况:</label>
                <div class="select"><span class="placeholder-text" v-if="compensateState===''">请选择目前理赔状况</span><span>{{province}}</span><span> {{city}}</span><span class="iconfont iconxiangshangshouqi1"></span>
                </div>
            </div>
        </div>
        <div class="input-box-line"></div>
        <div class="content">
            <!--            <div class="title"></div>-->
            <div class="input-box"><label >事情经过</label></div>
            <textarea readonly  v-model="incidentDetail" placeholder="  请简单描述事情经过（何时、何因、何地、经过、结果）"></textarea>
        </div>
        <div class="input-box-line"></div>
        <div class="content">
            <!--            <div class="title"></div>-->
            <div class="input-box"><label >加入前身体状况</label></div>
            <textarea readonly  v-model="bodyStatus" placeholder="  如：健康、肢体运动功能障碍、躯体感觉障碍、器官移植、身体残疾、精神异常、智力缺陷、抑郁症等。"></textarea>
            <!-- <div class="tongYi">
                <div><label class="iconfont iconxuanze" :style="tongYiStyle" for="tongYi"></label><input v-model="tongYi"  id="tongYi" type="checkbox"></div><span>我保证以上信息均真实有效，不存在虚拟和隐瞒情形，否则将视为自动放弃申请互助尽权力。</span>
            </div> -->
        </div>
        <div class="btn" v-if="showBtn" v-promise-btn @click="submit">缴纳调查费用</div>

    </div>

</template>

<script>
export default {
    name: 'defrayment',
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
            incidentTime: '',
            // location: '',
            locationProvince: '',
            locationCity: '',
            locationCounty: '',
            locationProvinceValue: '',
            locationCityValue: '',
            locationCountyValue: '',
            insuranceCompany: '',
            compensateState: '',
            incidentDetail: '',
            bodyStatus: '',
            showAddress: false,
            showLocation: false,
            province: '',
            city: '',
            county: '',
            provinceValue: '',
            cityValue: '',
            countyValue: '',
            open: false,
            value2: '',
            date: undefined,
            switchVal:'',
            switchData: {
                switchVal:false,
                switchVal1: false
                },
            tongYi: false,
            orderNo: '',
            order: ''
      }
    },
    props:{
      showBtn: {
        type: Boolean,
        default: true
      }
    },
    computed: {
         switchText() {
            return {
                label: this.switchData.switchVal ? '是' : '否',
                label1: this.switchData.switchVal1 ? '是' : '否'
            }
        },
    },
    methods: {
        submit() {
          return this.$axios.post('v1/mutually/compensate/checkOrder',{
            orderNo: this.orderNo
          }).then(res => {
            debugger
            if(res.data.code!==200){
              this.$toast.error(res.data.msg)
              return
            }
            if(res.data.code===200){
              debugger
              this.order = res.data.data
              window.location = `${this.$axios.defaults.baseURL}/v1/mutually/payOrder/orderCheck?orderNo=${this.order.orderNo}&goodsName=${this.order.goodsName}&unitPrice=${this.order.unitPrice}&payAmount=${this.order.payAmount}&bounty=${this.order.bounty}&productCode=&type=1`
              console.log(res)
            }

          })
        }
    },
    created() {
        console.log(this.$data)
      debugger
        this.$axios.post('v1/mutually/compensate/compensateDetail',{
            orderNo: this.$route.query.orderNo
        }).then(res => {
          debugger
             if(res.data.code!==200){
                this.$toast.error(res.data.msg)
                return
            }
             debugger
          let {contacs, contacsIdNo, phone, email, job, workingPlace, address, illnessName, incidentDetail, bodyStatus, hospitalName ,insuranceCompany, compensateState,orderNo } = res.data.data
          contacsIdNo = this.Util.decrypt(contacsIdNo)
          this.orderNo = orderNo
          this.$data = Object.assign(this.$data, {contacs, contacsIdNo, phone, email, job, workingPlace, address, illnessName, incidentDetail, bodyStatus ,hospitalName, insuranceCompany, compensateState})
          // this.switchData.switchVal = !!res.data.data.socialSecurityFlag
          this.switchData.switchVal1 = !!res.data.data.businessInsureFlag
            // this.contacs = data.contacs
            // this.
        })
    }
}
</script>

<style lang="scss" scoped>
    input:disabled {
        background-color: $c-bai;
        color: rgb(84, 84, 84);
        cursor: default;
}
    textarea:disabled {
        border:1px solid rgba(220,220,220,1);
        background-color: $c-bai;
}
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
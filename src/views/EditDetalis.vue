<template>
    <div>
      <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
        <mu-button icon slot="left" @click="$router.go(-1)">
          <mu-icon value=":iconfont iconfanhui"></mu-icon>
        </mu-button>
        编辑资料
        <mu-button icon slot="right" >
           <!-- <span style="font-size:12px;">保</span><span style="font-size:12px;">存</span> -->
        </mu-button>
      </mu-appbar>
        <main>
<!--            <div class="input-box"><label >姓名:</label><input v-model="contacs" placeholder="请填写您的姓名" type="text"></div>-->
<!--            <div class="input-box"><label >姓名:</label>-->
<!--                <mu-select v-model="form.select" :active-step="activeStep"  :full-width="true">-->
<!--                    <mu-option v-for="(option,index) in options" :key="index" :label="option.label" :value="option.id"></mu-option>-->
<!--                </mu-select></div>-->


            <section class="details">
                <div class="rule margin-left">
                    <span class="width-left">昵称：</span><span ><input type="text" v-model="nickname"></span>
                    <!-- <mu-divider></mu-divider> -->
                </div>
                <div class="rule margin-left">
                    <span class="width-left">性别：</span>
                    <!-- <span><input type="text" v-model="sex"></span> -->
                    <!-- <mu-form-item prop="select" label="Select"> -->
                        <mu-select v-model="form.select" :active-step="activeStep"  :full-width="true">
                            <mu-option v-for="(option,index) in options" :key="index" :label="option.label" :value="option.id"></mu-option>
                        </mu-select>
                    <!-- </mu-form-item> -->
                    <!-- <mu-divider></mu-divider> -->
                </div>
                <div class="rule margin-left">
                    <span class="width-left">年龄：</span><span ><input type="text" @keyup="age=age.replace(/[\D]/g,'')" v-model="age"></span>
                    <!-- <mu-divider></mu-divider> -->
                </div>
                <div class="rule margin-left">
                    <!-- <span class="width-left">生日：</span><span ><input type="text" v-model="birth"></span> -->
                    <div class="input-box" @click="openBotttomSheet">
                <label >生日:</label>
                <div class="select"><span class="placeholder-text" v-if="incidentTime===''"></span><span>{{incidentTime}}</span><span class="iconfont iconxiangshangshouqi1"></span>
                </div>
<!--                <mu-date-input v-model="value2" label="横屏显示" label-float full-width landscape></mu-date-input>-->

            </div>
                    <!-- <mu-divider></mu-divider> -->
                </div>
                <!-- <div class="rule margin-left">
                    <span>星座：</span><span ><input type="text" v-model="constellation"></span>
                    <mu-divider></mu-divider>
                </div> -->

            </section>
            <section class="details">
                <div class="rule margin-left ">
                    <span class="width-left">职业：</span><span ><input  type="text" v-model="job"></span>
                    <!-- <mu-divider></mu-divider> -->
                </div>
                <div class="rule margin-left">
                    <span class="width-left">学校/公司：</span><input type="text" v-model="working_place">
                    <!-- <mu-divider></mu-divider> -->
                </div>
                <div class="rule margin-left ">
                    <!-- <span class="width-left">收货地址：</span><span><input  type="text" v-model="address"></span> -->
                    <div class="content">
                        <div class="input-box" @click="showAddress=true"><label >地区:</label><div class="select"><span class="placeholder-text" v-if="province===''">请选择地区</span><span>{{province}}</span><span> {{citys}}</span> <span> {{county}}</span><span class="iconfont iconxiangshangshouqi1"></span></div></div>
                        <div class="input-box"><label >详细地址:</label><input class="address" v-model="address" placeholder="请填写您的详细地址" type="text"></div>
                    </div>
                </div>
                    <!-- <mu-divider></mu-divider> -->

                <!-- <div class="rule margin-left">
                    <span>故乡：</span><span><input type="text" v-model="province"></span>
                </div> -->
                <div class="rule margin-left">
                    <span class="width-left">邮箱：</span><span><input type="text" v-model="email"></span>
                    <!-- <mu-divider></mu-divider> -->
                </div>
                <!-- <div class="rule margin-left">
                    <span class="width-left">个性签名：</span><span><input type="text" v-model="motto"></span>
                    <mu-divider></mu-divider>
                </div> -->
            </section>
        </main>
         <vue-picker
                :show="showAddress"
                :columns="3"
                :link='true'
                @cancel="showAddress=false"
                @confirm="confirmFn"
        ></vue-picker>

        <mu-bottom-sheet :open.sync="open">
                <mu-paper style="width: 100%"  :z-depth="1" class="demo-date-picker">
                    <mu-date-picker @change="closeBottomSheet" color="#f8b62d" style="width: 100%"  :date.sync="date"></mu-date-picker>
                </mu-paper>
        </mu-bottom-sheet>

        <section class="btn-edit"><div class="btn" @click="editdeta">保存</div></section>
    </div>
</template>
<script>
  import vuePicker from "@/components/vuePickers/vuePicker";

export default {
    name: 'editdetails',
    data() {
        return {
            nickname: '',
            sex: '',
            age: '',
            birth: '',
            constellation: '',
            job: '',
            working_place: '',
            address: '',
            email: '',
            province: '',
            city: '123',
            motto: '',
            activeStep: '',
            options: [
              {label:'男',
              id: 1}, {label:'女',
              id: 2}
            ],
            form: {
                select: ''
            },
            showAddress: false,
            citys: '',
            county: '',
            addressFull: '',
            // incidentTime: '',
            open: false,
            date: new Date(),
            provinceValue: "",
            cityValue: '',
            countyValue: '',
            
        }
    },
    computed: {
        addresso() {
          return  this.addressFull + this.address
        },
         incidentTime() {
        if(typeof this.date === 'object'  ){
            return  this.date.Format("yyyy-MM-dd")
        }
            return ''
        },
    },
  components: {vuePicker},
  created() {
      let data = this.$route.params.data
      this.nickname = data.nickname
    //   this.address = data.address
      this.city = data.city
      this.age = data.age
      this.email = data.email
      this.job = data.job
      this.account = data.account
      this.form.select = data.sex
      this.motto = data.motto
      this.working_place = data.workingPlace
      this.address = data.address
      this.province = data.provinceDesc
      this.citys = data.cityDesc
      this.county = data.countyDesc
       this.cityValue = data.city
       this.provinceValue = data.province
       this.countyValue = data.county
  },
    methods:{
        openBotttomSheet () {
            this.open = true;
        },
        closeBottomSheet () {
        this.open = false;
      },
         confirmFn(val) {
        debugger
        this.addressFull = val.select1.text + val.select2.text + val.select3.text
        this.showAddress = false;
        this.province = val.select1.text
        //   // .substring(0,val.select1.text.length -1)
        this.citys = val.select2.text
        //   // .substring(0,val.select2.text.length -1 )
        this.provinceValue = val.select1.value
        this.cityValue = val.select2.value
        this.countyValue = val.select3.value
        this.county = val.select3.text
        // this.defaultData = [val.select1];
      },
        editdeta() {
          debugger
          console.log(this.addresso)
        //   if(!this.address || !this.job){
        //     this.$toast.error('请填写完整信息')
        //   }
        //     // console.log(this.options[length])
        //     var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        //     if (!ePattern.test(this.email)) {
        //         this.$toast.error('邮箱错误')
        //         return
        //     }
        //     if(this.job == ''){
        //         this.$toast.error('请填写职业')
        //     }
        //     if (this.address == '') {
        //         this.$toast.error('请填写所在地')
        //     }
            debugger

            this.$axios.post('/v1/user/info/updateInfo',{
            "nickname":this.nickname,
            "sex":this.form.select,
            "age":this.age,
            "birth":this.incidentTime,
            "constellation":this.constellation,
            "job": this.job,
            "workingPlace":this.working_place,
            "address": this.address,
            "province": this.provinceValue,
            "city": this.cityValue,
            "county": this.countyValue,
            "email":this.email,
            "motto": this.motto,
            // "province": this.provinceValue,
            // "city": this.cityValue,
            // "county": this.countyValue
        }).then(res=>{
            debugger
              if(res.data.code!==200){
                this.$toast.error(res.data.msg)
                return
              }
              this.$router.go(-1)
            // this.detalis = res.data.data
            console.log(res)
        })
        }
    },
    // mounted() {
    //     console.log(this.options[this.activeStep])
    // }
}
</script>
<style scoped lang="scss">

    .xin:before{
    /*padding-right: 10px;*/
    content: '*';
    display: inline-block;
    position: absolute;
    top: 0px;
    right: 10px;
    color: red;
    font-size: 20px;
    /*width: 100px;*/
    /*height: 100px;*/
    z-index: 66666666666;
  }
  .xin{
    position: relative;
  }
  .iconxiangshangshouqi1 {
      padding-right: 12px;
  }
main{
    margin-top: 60px;
    .details{
        background-color: #fff;
        margin-top: 20px;
        .rule{
            // display:  flex;
            // flex-wrap: nowrap;
            // flex-direction: column;
            overflow: hidden;
            // height: 50px;
            line-height: 50px;
            position: relative;
            box-sizing: content-box;
            border-bottom: .5px solid $c-hui;
            span{
                // width: auto;
                // width: 100px;
                height: 100%;
                // display: inline-block;
                // width: 80px;
            }
        }
    }
}
input{
    flex: 2;
    height: 100%;
    width: 249px;
    // border: none;
    // width: 30px;
    // height: 100%;
    /*background-color: rgba(234,234,234,0.3);*/

    outline: none;
    border: none;
}
.mu-input{
    /*width: 100%;*/
    /*height: 100%;*/
    margin: 0;
    padding: 0;
    position: absolute;
    top: 10px;
    // padding-left: 10px;
        font-size: $f14;
}
.rule /deep/.mu-item     .mu-option.is-selected .mu-item {
  color: $c-cheng!important;
}
.rule /deep/ .mu-input-line, .mu-input-focus-line  .focus{
  height: 0px;
}
.btn-edit{
    // width: 100%;
    height: 50px;
    // background: red;
    // margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn{
        margin-top: 12px;
        background-color: #f8b62d;
        width: 80%;
        height: 40px;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        // padding: 5px;

    }
}
.width-left{
    display: inline-block;
    width: 80px;
}


.input-box{
        width: 100%;
        /*height:50px;*/
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
            // height: 1px;
            // transform: scaleY(0.5);
            // transform-origin: 50% 100%;
            /*height: .5px;*/
            content: '';
            display: block;
            z-index: 6666;
            border-bottom: .5px solid $c-hui;

            // background-color: $c-hui;
            /*<!--border-bottom: .5px solid $c-hui;-->*/
        }
        .select{
            position: relative;
            flex: 2;
            line-height: 50px;
            height: 50px;
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
            width: 80px;
            line-height: 50px;
            height: 50px;
            background-color: $c-bai;
        }
        input{
            flex: 2;
            border: none;
            outline: none;
            width: auto;
            height: 50px;
        }

        .right{
            /*float: right;*/
            line-height: 50px;
        }
    }
</style>

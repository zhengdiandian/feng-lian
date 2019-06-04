<template>
    <div>
        <header>
            <!-- <PageHeader :title="title"></PageHeader> -->
            <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
                <mu-button icon slot="left" @click="$router.go(-1)">
                    <mu-icon value=":iconfont iconfanhui"></mu-icon>
                </mu-button>
                    已满18岁家人实名认证
                <mu-button icon slot="right"  :ripple="false">
                </mu-button>
            </mu-appbar>
        </header>
        <vue-picker
            :show="show"
            :columns="2"
            :link='true'
            :defaultData="defaultData"
            @cancel="show=false"
            @confirm="confirmFn"
        ></vue-picker>
        <vue-picker
            :show="showRelation"
            :columns="1"
            :selectData="relationData"

            @cancel="showRelation=false"
            @confirm="confirmFn1"
        ></vue-picker>
        <main class="page-margin-top">
            <div class="information">
                <div class="infor-name-id">
                    姓名
                    <input style="padding-left: 55px;" type="text" v-model="userName" placeholder="请输入姓名">
                </div>
                <div class="infor-name-id">
                    身份证号码
                    <input type="text" placeholder="请输入身份证号码" v-model="id">
                </div>
                <div class="infor-name-id" @click="showPicker">
                    身份证地址
                    <span>
            {{province}}
            <span>省</span>
          </span>
                    <span>
            {{city}}
            <span>市</span>
          </span>
                </div>

            </div>
            <div class="input-box" @click="showRelation=true"><label >选择关系:</label><div class="select"><span class="placeholder-text" v-if="relation===''">请选择关系</span><span>{{relation}}</span> <span> </span><span class="iconfont iconyou1"></span></div></div>

            <div class="upload">
                <div class="uptitle">
                    <span>上传身份证正反面照片</span>
                </div>
                <section>
                    <upload @getFile="getFile($event, 'file1')" :file="file1"></upload>
                    <upload style="margin-top: 10px;" @getFile="getFile($event, 'file2')" :upload="upload"></upload>
                </section>
            </div>
            <div v-html="html"></div>

        </main>
        <div class="bottom-btn" v-promise-btn  @click="submit">授权并开通</div>
    </div>
</template>
<script>
  import PageHeader from "../../components/PageHeader/PageHeader";
  import upload from "../../components/UpLoad/UpLoad";
  import vuePicker from "../../components/vuePickers/vuePicker";



  // debugger
  // let userPwd = Util.encrypt('123456');
  // console.log('fdsfdas', unit)
  export default {
    name: "addFamilyTow",
    components: {
      PageHeader,
      upload,
      // awesomePicker,
      vuePicker
    },
    data() {
      return {
        userName: "",
        id: "",
        title: "实名认证",
        upload: "上传身份证反面",
        file1: null,
        file2: null,
        province: "",
        provinceValue: "",
        cityValue: "",
        city: "",
        show: false,
        defaultData: [],
        showRelation: false,
        relation: '',
        relationValue: '',
        relationData: {
          data1: [
            // {text: '自己', value: 0},
            {text: '爱人', value: 1},
            {text: '父亲', value: 2},
            {text: '母亲', value: 3},
            {text: '儿子', value: 4},
            {text: '女儿', value: 6},
          ]
        },

        html: ''
      };
    },
    created() {
      console.log(this.Util);
    },
    methods: {
      confirmFn1(val) {
        debugger
        this.showRelation = false;
        this.relation = val.select1.text

        this.provinceValue = val.select1.value

      },
      showPicker() {
        this.show = true;
      },
      confirmFn(val) {
        debugger
        this.show = false;

        this.province = val.select1.text.substring(0,val.select1.text.length -1)
        this.city = val.select2.text.substring(0,val.select2.text.length -1 )
        this.provinceValue = val.select1.value
        this.cityValue = val.select2.value
        this.defaultData = [val.select1];
      },

      getFile(file, params) {
        this[params] = file;
      },
      submit() {
        if (!this.file2 || !this.file1 || !this.userName || !this.city || !this.province || !this.relation){
          this.$toast.error('请您填写完整的表单在提交')
          return
        }
        // if(!this.id )
        debugger;
        // console.log('fdsfdas', unit)
        var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
        if (!reg.test(this.id)) {
          this.$toast.error('请输入正确的身份证号码')
          // this.warnTips({txt:'请输入正确的身份证号码'});
          return false;
        }
        return  this.$axios
          .post("v1/family/info/addFamily", {
            contacs: this.userName,
            contacsBackImg: this.file1,
            contacsFrontImg: this.file2,
            contacsIdNo: this.Util.encrypt(this.id),
            province: this.provinceValue,
            city: this.cityValue,
            type: 2,
            relation: this.relationValue,
            fullPath: '/myplan'
          })
          .then(res => {
            if(res.data.code!==200){
              this.$toast.error(res.data.msg)
              return
            }
            debugger
            if(res.data.data.type ===1){
              document.write(res.data.data.value)
              this.html = res.data.data.value
            }
            if(res.data.data.type ==0){
              this.$toast.success('添加成功')
            }
            this.$axios.post('v1/user/info/personalInfo').then(res => {
              this.$store.commit('set_userInfo',res.data.data)
            })
            console.log(res);
          });
      }
    }
  };
</script>
<style scoped lang="scss">
    .input-box{
        width: 100%;
        padding: 0px 12px;
        background-color: #fff;
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

    input {
        flex: 2;
        /*width: 300px;*/
        border: none;
        outline: none;
        padding-left: 20px;
        color: #9999af;
    }
    .information {
        width: $gw;
        margin-top: 5px;
        display: flex;
        flex-direction: column;
        .infor-name-id {
            display: flex;
            & > span {
                padding-left: 50px;
                span {
                    color: $c-hui;
                }
            }
            width: 375px;
            height: 44px;
            background: rgba(255, 255, 255, 1);
            font-size: $f14;
            // font-family: SourceHanSansCN-Normal;
            font-weight: 400;
            color: rgba(51, 51, 51, 1);
            padding-left: 12px;
            line-height: 42px;
        }
    }
    .upload {
        width: $gw;
        margin-top: 10px;
        margin-bottom: 60px;
        .uptitle {
            font-size: $f14;
            // font-family: SourceHanSansCN-Normal;
            font-weight: bold;
            color: rgba(51, 51, 51, 1);
            padding: 12px 0 10px 10px;
        }
    }
    .bottom-btn {
        width: 100%;
        height: 50px;
        position: fixed;
        left: 0px;
        bottom: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: $c-cheng;
        color: #fff;
        line-height: 50px;
        font-size: 15px;
        // font-family: SourceHanSansCN-Normal;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
    }
</style>

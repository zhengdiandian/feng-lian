<template>
  <div>
    <header>
      <PageHeader :title="title"></PageHeader>
    </header>
    <vue-picker
      :show="show"
      :columns="2"
      :link='true'
      :defaultData="defaultData"
      :selectData="pickData"
      @cancel="show=false"
      @confirm="confirmFn"
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
      <div class="upload">
        <div class="uptitle">
          <span>上传身份证正反面照片</span>
        </div>
        <section>
          <upload @getFile="getFile($event, 'file1')" :file="file1"></upload>
          <upload @getFile="getFile($event, 'file2')" :upload="upload"></upload>
        </section>
      </div>
    </main>
    <div class="bottom-btn" @click="submit">提交</div>
  </div>
</template>
<script>
import PageHeader from "../components/PageHeader/PageHeader";
import upload from "../components/UpLoad/UpLoad";
import vuePicker from "../components/vuePickers/vuePicker";
import awesomePicker from "vue-awesome-picker";
import { decode } from 'punycode';
import {provs_data, citys_data, dists_data} from 'vue-pickers/lib/areaData'


// debugger
// let userPwd = Util.encrypt('123456');
// console.log('fdsfdas', unit)
export default {
  name: "RealName",
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
      city: "",
      show: false,
      defaultData: [],
      pickData: {
        data1: provs_data,
        data2: citys_data,
        data3: dists_data
      }
    };
  },
  created() {
    console.log(this.Util);
  },
  methods: {
    showPicker() {
      this.show = true;
    },
    confirmFn(val) {
      debugger
      this.show = false;

      this.province = val.select1.text.substring(0,val.select1.text.length -1)
      this.city = val.select2.text.substring(0,val.select2.text.length -1 )
      this.defaultData = [val.select1];
    },

    getFile(file, params) {
      this[params] = file;
    },
    submit() {
      if (!this.file2 && !this.file1 && !this.userName && !this.city && !this.province){
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
      this.$axios
        .post("v1/user/info/certify", {
          contacs: this.userName,
          contacsBackImg: this.file1,
          contacsFrontImg: this.file2,
          contacsIdNo: this.Util.encrypt(this.id),
          province: this.province,
          city: this.city
        })
        .then(res => {
          if(res.data.code!==200){
            this.$toast.error(res.data.msg)
            return
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
input {
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
    & > span {
      padding-left: 50px;
      span {
        color: $c-hui;
      }
    }
    width: 375px;
    height: 44px;
    background: rgba(255, 255, 255, 1);
    font-size: 12px;
    font-family: SourceHanSansCN-Normal;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    padding-left: 12px;
    line-height: 42px;
  }
}
.upload {
  width: $gw;
  margin-top: 10px;
  .uptitle {
    font-size: 12px;
    font-family: SourceHanSansCN-Normal;
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
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>

<template>
  <div>
    <header>
      <!-- <PageHeader :title="title"></PageHeader> -->
      <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
      <mu-button icon slot="left" @click="$router.go(-1)">
      <mu-icon value=":iconfont iconfanhui"></mu-icon>
      </mu-button>
      实名认证
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
    <main class="page-margin-top">
      <div class="information">
        <div class="infor-name-id">
          姓名
          <input style="padding-left: 55px;" type="text" v-model="userName" placeholder="请输入姓名">
        </div>
        <div class="infor-name-id">
          身份证号码
          <input type="text" placeholder="请输入身份证号码" v-model="id" @keydown="idKey" @input="idInput">
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
          <upload style="margin-top: 10px;" @getFile="getFile($event, 'file2')" :upload="upload"></upload>
        </section>
      </div>
      <div v-html="html"></div>

    </main>
    <div class="bottom-btn" v-promise-btn  @click="submit">提交</div>
  </div>
</template>
<script>
import PageHeader from "../components/PageHeader/PageHeader";
import upload from "../components/UpLoad/UpLoad";
import vuePicker from "../components/vuePickers/vuePicker";
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
      provinceValue: "",
      cityValue: "",
      city: "",
      show: false,
      defaultData: [],
    };
  },
  created() {
    console.log(this.Util);
  },
  methods: {
     idInput(e) {
        this.id = this.id.trim().replace(/[^0-9X\s]/g,'').slice(0, 20)
      },
      idKey(e) {
            var phoneNum = this.id.trim();
            //如果是删除按键，则什么都不做
            if (e.keyCode === 8) {
                this.id = phoneNum;
                return;
            }
 
            var len = phoneNum.length;
            if (len === 6 || len === 15 ) {
                phoneNum += ' ';
                this.id = phoneNum;
            }
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
      if (!this.file2 && !this.file1 && !this.userName && !this.city && !this.province){
        this.$toast.error('请您填写完整的表单在提交')
        return
      }
      // if(!this.id )
      debugger;
      // console.log('fdsfdas', unit)
     const id = this.id.replace(/[^0-9X]/g,'')
      var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9X]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
      if (!reg.test(id)) {
        this.$toast.error('请输入正确的身份证号码')
        // this.warnTips({txt:'请输入正确的身份证号码'});
        return false;
      }
      return this.$axios
        .post("v1/user/info/certify", {
          contacs: this.userName,
          contacsBackImg: this.file1,
          contacsFrontImg: this.file2,
          contacsIdNo: this.Util.encrypt(this.id.replace(/[\W]/g, '')),
          province: this.provinceValue,
          city: this.cityValue,
          fullPath: this.$route.query.fullPath
        })
        .then(res => {
          if(res.data.code!==200){
            this.$toast.error(res.data.msg)
            return
          }
          debugger
          if(res.data.data.type ===0){
            // this.$toast.success('')
            this.$router.push({
            path: '/impower',
            query: {
              state: 200,
              fullPath: this.$route.fullPath
            }
          })
          }
          if(res.data.data.type ===1){
            document.write(res.data.data.value)
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

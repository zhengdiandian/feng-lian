<template>
    <div>
        <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
            <mu-button icon slot="left" @click="$router.go(-1)">
                <mu-icon value=":iconfont iconfanhui"></mu-icon>
            </mu-button>
            {{title}}
            <mu-button icon slot="right"  :ripple="false">
            </mu-button>

        </mu-appbar>
        <div class="content page-margin-top">
            <div class="input-box"><label >姓名:</label><input v-model="contacs" placeholder="请填写您的姓名" type="text"></div>
            <div class="input-box"><label >身份证号码:</label><input v-model="contacsIdNo" placeholder="请填写您的身份证号码" type="text"></div>
            <div class="input-box" @click="showAddress=true"><label >身份证地址:</label><div class="select"><span class="placeholder-text" v-if="province===''">请选择身份证地址</span><span>{{province}}</span><span> {{city}}</span> <span> </span><span class="iconfont iconyou1"></span></div></div>
            <div class="input-box" @click="showRelation=true"><label >选择关系:</label><div class="select"><span class="placeholder-text" v-if="relation===''">请选择关系</span><span>{{relation}}</span> <span> </span><span class="iconfont iconyou1"></span></div></div>

        </div>
        <div class="submit" @click="submit">完成</div>
        <vue-picker
            :show="showAddress"
            :columns="2"
            :link='true'
            @cancel="showAddress=false"
            @confirm="confirmFn"
        ></vue-picker>
        <vue-picker
            :show="showRelation"
            :columns="1"
            :selectData="relationData"

            @cancel="showRelation=false"
            @confirm="confirmFn1"
        ></vue-picker>
    </div>
</template>

<script>
  import vuePicker from "../../components/vuePickers/vuePicker";

  export default {
    name: 'addFamily',
    data() {
      return {
        showAddress: false,
        contacs: '',
        contacsIdNo: '',
        province: '',
        provinceValue: '',
        city: '',
        cityValue: '',
        title: '未满18岁家人实名认证',
        showRelation: false,
        relation: '',
        relationValue: '',
        relationData: {
          data1: [
            // {text: '自己', value: 0},
            // {text: '爱人', value: 1},
            // {text: '父亲', value: 2},
            // {text: '母亲', value: 3},
            {text: '儿子', value: 4},
            {text: '女儿', value: 6},
            ]
        }

      }
    },
    watch: {
      // $route() {
      //   if(this.$route.query.type ===1){
      //     this.title = '未满18岁家人实名认证'
      //   }
      // }
    },
    components: {
      vuePicker
    },
    methods: {
      submit() {
        if(!this.contacs || !this.contacsIdNo || !this.province || !this.relation) {
          this.$toast.error('请填写完整资料')
          return
        }
        if(this.contacs.length <2){
          this.$toast.error('请输入正确的姓名')
          return
        }
        var reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;
        if (!reg.test(this.contacsIdNo)) {
          this.$toast.error('请输入正确的身份证号码')
          // this.warnTips({txt:'请输入正确的身份证号码'});
          return false;
        }
        this.$axios.post('v1/family/info/addFamily', {
          contacs: this.contacs,
          contacsIdNo: this.contacsIdNo,
          province: this.provinceValue,
          city: this.cityValue,
          relation: this.relation,
          type: 0,
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

      },
      confirmFn(val) {
        debugger
        this.showAddress = false;
        this.province = val.select1.text
        // .substring(0,val.select1.text.length -1)
        this.city = val.select2.text
        // .substring(0,val.select2.text.length -1 )
        this.provinceValue = val.select1.value
        this.cityValue = val.select2.value
        // this.countyValue = val.select3.value
        // this.county = val.select3.text
        // this.defaultData = [val.select1];
      },
      confirmFn1(val) {
        debugger
        this.showRelation = false;
        this.relation = val.select1.text
        // .substring(0,val.select1.text.length -1)
        // this.city = val.select2.text
        // .substring(0,val.select2.text.length -1 )
        this.provinceValue = val.select1.value
        // this.cityValue = val.select2.value
        // this.countyValue = val.select3.value
        // this.county = val.select3.text
        // this.defaultData = [val.select1];
      },
    }
  }
</script>

<style lang="scss" scoped>
    .submit{
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height:50px;
        font-size: $f15;
        line-height: 50px;
        text-align: center;
        color: $c-bai;
        background:rgba(239,162,32,1);
    }
    .content{
        padding: 0px 12px 6px;
        background-color: $c-bai;
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

</style>
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
                    <span class="width-left">年龄：</span><span ><input type="text" v-model.number="age"></span>
                    <!-- <mu-divider></mu-divider> -->
                </div>
                <div class="rule margin-left">
                    <span class="width-left">生日：</span><span ><input type="text" v-model="birth"></span>
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
                    <span class="width-left">收货地址：</span><span><input  type="text" v-model="address"></span>
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
        <section class="btn-edit"><div class="btn" @click="editdeta">保存</div></section>
    </div>
</template>
<script>
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
            }
        }
    },
  created() {
      let data = this.$route.params.data
      this.nickname = data.nickname
      this.address = data.address
      this.city = data.city
      this.email = data.email
      this.obj = data.obj
      this.account = data.account
      this.form.select = data.sex
      this.motto = data.motto
  },
    methods:{
        editdeta() {
          debugger
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
            "birth":this.birth,
            "constellation":this.constellation,
            "job": this.job,
            "working_place":this.working_place,
            "address":this.address,
            "email":this.email,
            "province":this.province,
            "city":this.city,
            "motto": this.motto
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
    padding-left: 10px;
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
</style>

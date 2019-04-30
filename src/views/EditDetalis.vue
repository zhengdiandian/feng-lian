<template>
    <div>
      <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
        <mu-button icon slot="left" @click="$router.go(-1)">
          <mu-icon value=":iconfont iconfanhui"></mu-icon>
        </mu-button>
        编辑资料
        <mu-button icon slot="right" @click="editdeta">
           <span style="font-size:12px;">保</span><span style="font-size:12px;">存</span>
        </mu-button>
      </mu-appbar>
        <main>
            <section class="details">
                <div class="rule margin-left">
                    <span>昵称：</span><span ><input type="text" v-model="nickname"></span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span>性别：</span>
                    <!-- <span><input type="text" v-model="sex"></span> -->
                    <!-- <mu-form-item prop="select" label="Select"> -->
                        <mu-select v-model="form.select" :active-step="activeStep" >
                            <mu-option v-for="(option,index) in options" :key="index" :label="option.label" :value="option.id"></mu-option>
                        </mu-select>
                    <!-- </mu-form-item> -->
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span>年龄：</span><span ><input type="text" v-model="age"></span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span>生日：</span><span ><input type="text" v-model="birth"></span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span>星座：</span><span ><input type="text" v-model="constellation"></span>
                    <mu-divider></mu-divider>
                </div>

            </section>
            <section class="details">
                <div class="rule margin-left">
                    <span>职业：</span><span ><input type="text" v-model="job"></span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span>学校/公司：</span><span><input type="text" v-model="working_place"></span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span>所在地：</span><span><input type="text" v-model="address"></span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span>故乡：</span><span><input type="text" v-model="province"></span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span>邮箱：</span><span><input type="text" v-model="email"></span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span>个性签名：</span><span><input type="text" v-model="motto"></span>
                    <mu-divider></mu-divider>
                </div>
            </section>
        </main>
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
    methods:{
        editdeta() {
            // console.log(this.options[length])
            var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (!ePattern.test(this.email)) {
                // alert("’邮箱错误")
                return
            }
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
main{
    margin-top: 60px;
    .details{
        background-color: #fff;
        margin-top: 20px;
        .rule{
            height: 50px;
            line-height: 50px;
            position: relative;
            span{
                display: inline-block;
                width: 80px;
            }
        }
    }
}
input{
    // border: none;
    // width: 30px;
    height: 30px;
    background-color: rgba(234,234,234,0.3);
    outline: none;
    border: none;
}
.mu-input{
    width: 60px;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 10px;
}
</style>

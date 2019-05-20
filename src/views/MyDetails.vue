<template>
    <div>
      <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
        <mu-button icon slot="left" @click="$router.go(-1)">
          <mu-icon value=":iconfont iconfanhui"></mu-icon>
        </mu-button>
        详细资料
        <mu-button icon slot="right"  :ripple="false">
        </mu-button>
      </mu-appbar>
        <main>
            <section class="details">
                <div class="rule margin-left">
                    <span class="width-left">昵称：</span><span>{{detalis.nickname}}</span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span class="width-left">性别：</span><span>{{detalis.sex == 1?'男':'女'}}</span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span class="width-left">年龄：</span><span>{{detalis.age}}</span>
                    <mu-divider></mu-divider>
                </div>
                <div class="rule margin-left">
                    <span class="width-left">生日：</span><span>{{detalis.birth}}</span>
                    <mu-divider></mu-divider>
                </div>
                <!-- <div class="rule margin-left">
                    <span>星座：</span><span>{{detalis.constellation}}</span>
                    <mu-divider></mu-divider>
                </div> -->

            </section>
            <section class="details">
                <div class="rule margin-left">
                    <span class="width-left">职业：</span><span>{{detalis.job}}</span>
                    <mu-divider></mu-divider>
                </div>
                <!-- <div class="rule margin-left">
                    <span>学校/公司：</span><span style="margin-left: 0px;">{{detalis.workingPlace}}</span>
                    <mu-divider></mu-divider>
                </div> -->
                <div class="rule margin-left">
                    <span class="width-left">收货地址：</span><span>{{detalis.address}}</span>
                    <mu-divider></mu-divider>
                </div>
                <!-- <div class="rule margin-left">
                    <span>故乡：</span><span>{{detalis.hometown}}</span>
                    <mu-divider></mu-divider>
                </div> -->
                <div class="rule margin-left">
                    <span class="width-left">邮箱：</span><span>{{detalis.email}}</span>
                    <mu-divider></mu-divider>
                </div>
            </section>
        </main>
        <section class="btn-edit"><div class="btn" @click="edit">编辑资料</div></section>
    </div>
</template>
<script>
import { debug } from 'util';
export default {
    name: 'mydetails',
    data() {
        return {
            detalis:[]
        }
    },
    methods:{
        edit(){
            this.$router.push({
              name: 'Editdetails',
              params:{
                data: this.detalis
              }
            })
        }
    },
    mounted() {
        this.$axios.post('/v1/user/info/infoDetail').then(res=>{
             if(res.data.code!==200){
                this.$toast.error(res.data.msg)
                return
          }
            debugger
            this.detalis = res.data.data
            console.log(this.detalis)
        })
    },
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
        }
    }
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
    }
}
.width-left{
    display: inline-block;
    width: 80px;
}
</style>

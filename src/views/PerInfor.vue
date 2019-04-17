<template>
    <div>
        <header>
            <PerInforHeader></PerInforHeader>
        </header>
        <main>
           <div class="detaInfo">
               <section class="datalist">
                   <div class="listtext"><span>会员ＩＤ</span></div>
                   <div class="listInfo">{{datalist.ID}}</div>
               </section>
               <section class="datalist">
                   <div class="listtext"><span>邮箱</span></div>
                   <div class="listInfo">{{datalist.email}}</div>
               </section>
               <section class="datalist" style="height: 100px; position: relative; align-items: stretch;" >
                   <div class="listtext" style="margin-top: 10px;"><span>个人信息</span></div>
                   <div class="listInfo" style="margin-top: 30px;">{{datalist.gender}} {{datalist.age}} {{datalist.constellation}} {{datalist.address}}</div>
                   <div class="details"><span>详细信息</span><img src="../assets/you.png" alt=""></div>
               </section>
               <section class="datalist">
                   <div class="listtext"><span>体检报告</span></div>
                   <div class="listInfo"><span>体检报告</span></div>
                   <div class="states"><span>{{states.upload}}</span><img src="../assets/you.png" alt=""></div>
               </section>
               <section class="datalist">
                   <div class="listtext"><span>体检报告</span></div>
                   <div class="listInfo"><span>实名认证</span></div>
                   <div class="states"><span>{{states.atication}}</span><img src="../assets/you.png" alt=""></div>
               </section>
           </div>
        </main>
    </div>
</template>
<script>
import PerInforHeader from '../components/PerInforHeader/PerInforHeader'
export default {
    name: 'PerInfor',
    components: {
        PerInforHeader
    },
    data() {
        return {
            datalist: {
                    "ID": '8888 9999 001',
                    "email": '758384567@qq.com',
                    "gender": '男',
                    "age": 46,
                    "constellation": "天蝎座",
                    "address": "北京-朝阳"
                },
                states: {
                    "upload": "已上传",
                    "atication": "已完成"
                }
        }
    },
    mounted(){
        console.log(this.datalist);
    }
}
</script>
<style scoped lang="scss">
.detaInfo {
    width: $gw;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .datalist{
        display: flex;
        width: $gw;
        height: 60px;
        align-items: center;
        .listtext{
            width: 50px;
            height: 50px;
            border: 1px solid black;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 30px;
            span {
                display: inline-block;
                width: 30px;
            }
        }
        .listInfo {
            margin-left: 10px;
        }
        .details {
            position: absolute;
            top: 55px;
            left: 30px;
            width: 85%;
            padding: 0 0 5px 60px;
            border-bottom: 1px solid #9999AF;
            color: #9999AF;
            font-size: 12px;
            img {
                width: 20px;
                height: 20px;
                position: absolute;
                right: -10px;
            }
        }
        .states {
            display: flex;
            position: absolute;
            right: 0;
            span {
                position: relative;
                top: 3px;
                font-size: 16px;
                font-weight: bold;
                color: #9999AF;
            }
            img {
                width: 30px;
                height: 30px;
            }
        }
    }
  .routers-wrap{

    .router-item {
      width: 25%;
    }
  }
}
</style>

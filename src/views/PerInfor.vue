<template>
    <div>
        <header>
            <PerInforHeader ></PerInforHeader>
            <router-link tag="div" to="/code">
                <img class="erweima" src="" alt="">
            </router-link>
            
        </header>
        <main>
           <div class="detaInfo">
                <section class="datalist">
                    <div class="listtext"><span>会员ID：</span></div>
                    <div class="listInfo">{{datalist.ID}}</div>
                </section>
                <section class="datalist">
                    <div class="listtext"><span>邮箱：</span></div>
                    <div class="listInfo">{{datalist.email}}</div>
                </section>
                <section class="datalist" >
                    <div class="listtext" ><span>个人信息</span></div>
                    <div class="listInfo" >{{datalist.gender}} {{datalist.age}} {{datalist.constellation}} {{datalist.address}}</div> 
                    <span style="font-size: 12px; color: #ccc; margin-left: 8px;">详细信息</span>
                    <mu-icon value=":iconfont iconyou1"></mu-icon>
                </section>
                <div style="margin-top: 10px;">
                <router-link tag="div" to="/report">
                    <section class="datalist">
                        <div class="listtext"><span>体检报告</span></div>
                        <mu-icon value=":iconfont iconyou1"></mu-icon>
                    </section>
                </router-link>
                <router-link tag="div" to="/real">
                    <section class="datalist">
                        <div class="listtext"><span>体检报告</span></div>
                        <mu-icon value=":iconfont iconyou1"></mu-icon>
                    </section>
                </router-link>
                </div>
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
header{
    position: relative;
    .erweima{
    width: 20px;
    height: 20px;
    background: #000;
    position: absolute;
    top: 13px;
    right: 10px;
}
}
.detaInfo {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: auto;
    border-radius: 20px;
    background: #fff;
    margin-bottom: 10px;
    .datalist{
        display: flex;
        height: 60px;
        align-items: center;
        .listtext{
            width: 60px;
            height: 50px;
            display: flex;
            margin-left: 30px;
            align-items: center;
        }
        .listInfo {
            margin-left: 10px;
        }
        .iconyou1{
        position: absolute;
        right: 20px;
        font-size: 20px;
        color: yellow;
      }
    }
}
</style>

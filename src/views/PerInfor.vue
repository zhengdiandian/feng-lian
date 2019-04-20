<template>
    <div>
        <header>
            <PerInforHeader :imgUrl="imgUrl"></PerInforHeader>
            <router-link tag="div" to="/code"><mu-icon value=":iconfont iconerweima"></mu-icon></router-link>
        </header>
        <main>
           <div class="detaInfo">
                <section class="datalist">
                    <div class="listtext"><span>会员ID：</span></div>
                    <div class="listInfo" style="color:rgba(53,142,253,1);">{{datalist.ID}}</div>
                </section>
                <section class="datalist">
                    <div class="listtext"><span>邮箱：</span></div>
                    <div class="listInfo">{{datalist.email}}</div>
                </section>
                <section class="datalist" >
                    <div class="listtext" style="width: 75px;"><span>个人信息：</span></div>
                    <div class="listInfo" >{{datalist.gender}} {{datalist.age}} {{datalist.constellation}} {{datalist.address}}</div> 
                    <span style="width:50px;height:18px;font-size:11px;font-family:SourceHanSansCN-Normal;font-weight:400;color:#707070;">详细信息</span>
                    <mu-icon value=":iconfont iconyou1"></mu-icon>
                </section>
            </div>
                <div class="detaInfo" style="height: 120px;">
                <router-link tag="div" to="/report">
                    <section class="datalist" style="height: 50px;">
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
                },
                imgUrl: require('../assets/PNG/head.png')
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
    .iconerweima{
    font-size: 20px;
    color: #fff;
    position: absolute;
    top: 13px;
    right: 10px;
}
}
.detaInfo {
    width:328px;
    height:133px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 3px 0px rgba(0, 0, 0, 0.1);
    border-radius:5px;
    display: flex;
    flex-direction: column;
    margin: auto;
    border-radius: 20px;
    background: #fff;
    margin-bottom: 10px;
}
    .datalist{
        display: flex;
        height: 60px;
        align-items: center;
        .listtext{
            width:58px;
            height:11px;
            font-size:12px;
            font-family:SourceHanSansCN-Normal;
            font-weight:400;
            color:rgba(51,51,51,1);
            display: flex;
            margin-left: 14px;
            align-items: center;
        }
        .listInfo {
            width: 150px;
            height: 18px;
            font-size:12px;
            font-family:SourceHanSansCN-Normal;
            font-weight:400;
            margin-left: 12px;
        }
        .iconyou1{
        position: absolute;
        right: 20px;
        font-size: 20px;
        color: #EF9B1E;
      }
    }
</style>

<template>
    <div>
        <header>
            <PerInforHeader :imgUrl="datalist.headPortrait?datalist.headPortrait:'../assets/PNG/avatarDefault.png'"></PerInforHeader>
            <router-link v-if="userInfo.type>=200" tag="div" to="/code"><mu-icon value=":iconfont iconerweima"></mu-icon></router-link>
        </header>
        <main>
           <div class="detaInfo">
                <section class="datalist">
                    <div class="listtext"><span>会员ID：</span></div>
                    <div class="listInfo" style="color:rgba(53,142,253,1);">{{datalist.userCode}}</div>
                </section>
                <section class="datalist">
                    <div class="listtext"><span>邮箱：</span></div>
                    <div class="listInfo">{{datalist.email?datalist.email: '无'}}</div>
                </section>
                <section class="datalist" @click="$router.push('/mydetails')">
                    <div class="listtext" style="width: 75px;"><span>个人信息：</span></div>
                    <div class="listInfo" >{{datalist.personalInfo}}</div>
                    <span class="info-text">详细信息</span>
                    <mu-icon value=":iconfont iconyou1"></mu-icon>
                </section>
            </div>
                <div class="detaInfo" style="height: 94px;">
                <div tag="div" @click="toReport" to="/report">
                    <section class="datalist" style="height: 50px;">
                        <div class="listtext"><span>体检报告</span></div>
                        <mu-icon value=":iconfont iconyou1"></mu-icon>
                        <span style="position: absolute;right: 65px; font-size: 12px; font-family: SourceHanSansCN-Normal;">{{datalist.healthyState == 1 ? '已上传': '未上传'}}</span>
                    </section>
                </div>
                <div @click="toReal" to="/real">
                    <section class="datalist">
                        <div class="listtext"><span>实名认证</span></div>
                        <mu-icon value=":iconfont iconyou1"></mu-icon>
                        <span style="position: absolute;right: 65px; font-size: 12px; font-family: SourceHanSansCN-Normal;">{{datalist.state == 100 ? '未认证': '已认证'}}</span>
                    </section>
                </div>
                </div>
        </main>
    </div>
</template>
<script>
import axios from 'axios'
import PerInforHeader from '../components/PerInforHeader/PerInforHeader'
import { mapState } from 'vuex'
export default {
    name: 'PerInfor',
    components: {
        PerInforHeader
    },
    data() {
        return {
            datalist: [],
            states: {
                "upload": "已上传",
                "atication": "已完成"
            },
            imgUrl: require('../assets/PNG/head.png')
        }
    },

    created(){

        this.getlist()

    },
    computed: mapState(['userInfo']),
    methods: {
        toReport() {
          if(this.datalist.healthyState===1){
            this.$toast.success('已经上传过了')
            return
          }
          this.$router.push('/report')
        },
        toReal() {
          if(this.datalist.state===200){
            this.$toast.success('已经认证过了')
            return
          }
          this.$router.push({name: 'real',query:{fullPath: this.$route.fullPath}})
        },
        getlist() {
            this.$axios.post('/v1/user/info/personalInfo').then( (res) => {

                this.datalist = res.data.data
                debugger
                console.log(this.datalist)
            })
        }
    }
}
</script>
<style scoped lang="scss">
  .info-text{
    font-size:12px;
    font-weight:400;
    color:#707070;
  }
header{
    position: relative;
    .iconerweima{
    font-size: 22px;
    color: #fff;
    position: absolute;
    top: 10px;
    right: 14px;
}
}
.detaInfo {
    width:351px;
    height:143px;
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
        height: 48px;
        align-items: center;
        .listtext{
            // width:58px;
            height:12px;
            font-size:12px;

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

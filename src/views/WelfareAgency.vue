<template>
    <div>
      <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
        <mu-button icon slot="left" @click="$router.go(-1)">
          <mu-icon value=":iconfont iconfanhui"></mu-icon>
        </mu-button>
        福利社
        <mu-button icon slot="right"  :ripple="false">
        </mu-button>
      </mu-appbar>
        <main class="page-margin-top">
            <div>
                <div class="agen-text">我的收益</div>
                <section class="profit">
                    <div class="users">
                         <!-- @click="$router.push('/share')" -->
                        <span class="number">{{welf.sharedCount}}</span>
                        <span style="font-size: 14px;">我分享的用户 &nbsp; (人)</span>
                    </div>
                    <router-link class="users" tag="div" to="/myreward">
                        <span class="number">{{welf.balance}}</span>
                        <span style="font-size: 14px;">我的奖励 &nbsp; (元)</span>
                    </router-link>
                </section>
            </div>
           <!-- <div class="my-coupon">
               <span>我的优惠劵</span>
               <section class="coupon">
                   <div class="coupon-list">
                       <div style="display: flex">
                           <span>积分商城劵</span>
                           <div>
                               <span>{{30}}</span><span>元</span>
                           </div>
                       </div>
                       <div class="use">立即使用</div>
                   </div>
               </section>
           </div> -->
        </main>
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader/PageHeader'
import {mapState} from 'vuex'
export default {
    name: 'welfareAgency',
    components: {
        PageHeader
    },
    data() {
        return {
            upload: '福利社',
            welf: []
        }
    },
    methods: {
        Tomyreward() {
            if (this.userInfo.state == 200) {
            this.$router.push('/myreward')
            } else {
                this.$toast.error('请先完成实名认证')
        }
        },
    },
    computed: mapState(['userInfo']),
    mounted() {
        this.$axios.post('/v1/finance/profit/index').then((res)=> {
            if(res.data.code !==200){
                this.$toast.error(res.data.msg)
                return
          }
            this.welf = res.data.data
        })
    }
}
</script>
<style scoped lang="scss">
.profit{
    width:351px;
    height:60px;
    background:rgba(239,162,32,1);
    border-radius:5px;
    margin: auto;
    overflow: hidden;
    display: flex;
    .users{
        font-family:ArialMT;
        color:rgba(51,51,51,1);
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    .number{
        font-weight:bold;
        font-size: 20px;
    }
}
.agen-text{
    display: inline-block;
    font-size:13px;
    font-weight:bold;
    color:rgba(51,51,51,1);
    padding: 12px;
}
.coupon-list{
    width: 90%;
    height: 100px;
    background-color: aqua;
    margin: auto;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    .use{
        width: 60px;
        height: 30px;
        background-color: #fff;
        border-radius: 10px;
        font-size: 14px;
        text-align: center;
        line-height: 30px;
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
}
</style>

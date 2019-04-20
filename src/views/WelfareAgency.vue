<template>
    <div>
        <header>
            <PageHeader :title="upload"></PageHeader>
        </header>
        <main>
           <div class="my-profit">
               <span>我的收益</span>
               <section class="profit">
                   <div class="users">
                       <span class="number">123</span>
                       <span>我分享的用户(人)</span>
                   </div>
                   <div class="users">
                       <span class="number">456</span>
                       <span>我的奖励(元)</span>
                   </div>
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
export default {
    name: 'welfareAgency',
    components: {
        PageHeader
    },
    data() {
        return {
            upload: '福利社'
        }
    }
}
</script>
<style scoped lang="scss">
.profit{
    width: 90%;
    height: 70px;
    margin: auto;
    background-color: aquamarine;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    .users{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
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
        font-size: 12px;
        text-align: center;
        line-height: 30px;
        position: absolute;
        right: 10px;
        bottom: 10px;
    }
}
</style>

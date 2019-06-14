<template>
    <div class="page-margin-top">
        <header>
            <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
                <mu-button icon slot="left" @click="$router.go(-1)">
                <mu-icon value=":iconfont iconfanhui"></mu-icon>
                </mu-button>
                    我的卡包
                <mu-button icon slot="right" >
                <!-- <span style="font-size:12px;">保</span><span style="font-size:12px;">存</span> -->
                </mu-button>
            </mu-appbar>
        </header>
        <main v-if="cardList.length>0">

            <div class="BankCard">
                <section class="bank" v-for="(bank,i) in cardList" :key="i">
                    <div class="bankImg">
                        <img :src="bank.img" alt="">
                    </div>
                    <section class="bankText">
                        <div>
                            <div>{{bank.bankName}}</div>
                            <span style="font-size:14px; ">储蓄卡</span>
                            <div style="padding-top: 12px">{{bank.cardNo}}</div>
                        </div>
                    </section>
                </section>
            </div>
            <!-- <div class="Reminder" >
                <div>您的绑卡申请已提交</div>
            </div> -->
          

        </main>
        <div class="none" v-if="cardList.length>0">
          <div class="Reminder" >
                <div>温馨提示</div>
                <span>1、系统只支持添加一张储蓄卡，更换储蓄卡，将添加新的储蓄卡，添加成功后自动替换原储蓄卡</span>
                <span>2.当您提交绑卡信息后，请刷新页面，如未显示卡片信息，说明绑卡失败，请重新绑卡。</span>
            </div>
          <div class="Btn">
            <div class="btn" @click="$router.push('/addBank')">更改银行卡</div>
          </div>
        </div>
        <!--<div class="issue" @click="$router.push('/bankIssue')">常见问题</div>-->
        <div class="Btn" v-else>
          <div class="btn" @click="$router.push('/addBank')">添加银行卡</div>
        </div>
        
    </div>
</template>

<script>
  export default {
    name: 'CardBag',
    data() {
      return {
        cardList: []
      }
    },
    computed: {

    },
    created () {
      this.$axios.get('v1/card/debitCard/getCardList').then(res => {
        if(res.data.code!==200){
          this.$toast.error(res.data.msg)
          return
        }
        debugger
        this.cardList = res.data.data
      })
    }
  }
</script>

<style lang="scss" scoped>

  .none{
    padding-top: 12px;
  }
  .issue{
    width: 100%;
    position: fixed;
    left: 0px;
    bottom: 14px;
    text-align: center;
    font-size:13px;
    font-family:SourceHanSansCN-Medium;
    font-weight:500;
    color:rgba(248,182,45,1);
  }
  .Btn{
    padding-top: 30px;
  }
  .btn{
    width:351px;
    height:33px;
    line-height: 33px;
    text-align: center;
    font-size:$f15;
    
    color: $c-bai;
    background:$c-cheng;
    border-radius:17px;
    margin: auto;
    // margin-top: 50px;
  }
main{
    padding-top: 12px;
}
.BankCard{
    width:351px;
    height:112px;
    background: $c-bai;
    border-radius:5px;
    margin: auto;
    margin-bottom: 12px;
    .bank {
        width:351px;
        height: 100%;
        display: flex;
      border-radius: 4px;
      background: url("../assets/PNG/bankbg.png") center no-repeat;
      background-size: cover;
      color: $c-bai;
    }
    .bankImg{
        width: 40px;
        height: 40px;
        padding:5px ;
        background-color: $c-bai;
        border-radius: 50%;
        /*padding: 6.2vw;*/
        margin: 18px ;
      img{
        display: inline-block;
        border-radius: 50%;

        /*width: 35px;*/
        /*height: 35px;*/
        /*width: 100%;*/
      }
    }
    .bankText{
        width: 100%;
        padding-top: 18px;
        font-size:16px;
    }
}
.Reminder{
    width:351px;
    border-radius: 4px;
    // height: 92px;
    background: $c-bai;
    border-radius:5px;
    margin: auto;
    &>div{
        color: $c-cheng;
        padding: 11px;
    }
    &>span{
        display: inline-block;
        width: 95%;
        margin-left: 12px;
        font-size: $f14;
    }
}
</style>

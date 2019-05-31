<template>
    <div>
        <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
          <mu-button icon slot="left" @click="$router.go(-1)">
            <mu-icon value=":iconfont iconfanhui"></mu-icon>
          </mu-button>
          公示详情
          <mu-button icon slot="right" :ripple="false">
          </mu-button>
        </mu-appbar>
        <main>
          <div class="tips">为保护个人隐私，公示10日后不在展示用户信息</div>
          <div class="info">
            <section class="info-head">
              <div class="info-img"><img :src="detaliList.headPortrait" alt=""></div>
              <div class="info-text">
                <div>姓名：{{detaliList.contacs}}</div>
                <div>{{detaliList.sex == 1? '男': '女'}}   {{detaliList.age}}岁   {{detaliList.productName}}</div>
              </div>
            </section>
            <div class="xian"></div>
            <div class="footer-text"><span>已加入互助计划{{detaliList.joinDays}}天，共分摊互助金为{{detaliList.totalApportion}}元</span></div>
          </div>
          <div class="text-info" style="display: flex"><span>上链信息</span><span style="flex: 2; overflow: hidden;text-overflow: ellipsis; white-space: nowrap">{{}}</span> <span class="btn text-blue" @click="$toast.success('复制成功')">点击复制</span></div>
          <section class="info-detalis">
            <div class="detalis">
                <div>{{detaliList.illnessApply}}</div>
                <div>本期互助计划有 {{detaliList.joinedCount}}位会员参与互助金分摊您将为该会员分摊 {{detaliList.apportionAverage}}元互助金</div>
            </div>
            <div class="detalis-date">
              <div>公示日期：{{detaliList.publicityDate}}</div>
              <div>加入日期：{{detaliList.joinDate}}</div>
              <div>生效日期：{{detaliList.effectiveDate}}</div>
            </div>
          </section>
          <section class="platform-result">
            <div class="result-title">平台审核结果</div>
            <div class="result-content">{{detaliList.auditResult}}</div>
            <div class="objection">
              <i class="iconfont iconyiyishenqing1"></i>
              <span>我有异议</span>
            </div>
          </section>
          <section class="platform-result">
            <div class="result-title">事件概括</div>
            <div class="result-content pad-buttom">{{detaliList.incidentProbably}}</div>
          </section>
          <section class="platform-result">
            <div class="result-title">调查过程</div>
            <div>
              <div class="process" v-for="i in 3" :key="i">
                <div class="Serial-number">{{i}}</div>
                <div class="process-text">{{detaliList.investigation}}</div>
              </div>
            </div>
          </section>
          <section class="platform-result">
            <div class="result-title">相关材料</div>
          
            <div class="parent" style="text-align: center;">
              <div v-for="(icon,index) in detaliList.imageDataList " :key="index">
                <div class="chlid"><img :src="icon.imgDeal" alt=""></div>
                <span v-if="icon.type === 1">体检报告</span>
                <span v-if="icon.type === 2">缴费凭证</span>
                <span v-if="icon.type === 3">申请表凭证</span>
                <span v-if="icon.type === 4">病历报告</span>
                <span v-if="icon.type === 5">诊断报告</span>
                <span v-if="icon.type === 6">身份证</span>
                <span v-if="icon.type === 7">银行卡</span>
              </div>
          </div>  
          </section>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'NoticeDetails',
        data () {
          return {
            orderNo: this.$route.params.orderNo,
            stage: this.$route.params.stage,
            detaliList: {}
          }
        },
        created() {
          this.$axios.post('/v1/publicity/publicity/userPublicity',{
            "orderNo": this.orderNo,
            "stage": this.stage
          }).then(res=>{
            this.detaliList = res.data.data
          })
        }
    }
</script>

<style lang="scss" scoped>
#app>div{
  background:rgba(245,245,245,1);
}
.parent {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}
.chlid{
  width: 100px;
  height: 100px;
  margin-left: 12px;
  margin-bottom: 5px;
  border: 1px solid darkcyan;
  img{
    width: 100%;
    height: 100%;
    // border: 1px solid red;
  }
}
.process{
  display: flex;
  padding-bottom: 12px;
  width: 350px;
  // overflow: hidden;
  .Serial-number{
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: $c-cheng;
    text-align: center;
    line-height: 22px;
  }
  .process-text{
    width: 300px;
    padding-left: 12px;
    word-wrap:break-word;
    
  }
}
.platform-result{
  margin-top: 10px;
  background-color: $c-bai;
  &>div{
    padding: 0 12px;
  }
  .result-title{
    padding: 12px 0 12px 12px;
    font-size: $f14;
    font-weight:bold;
  }
  .result-content{
    width: 90%;
    overflow: hidden;
  }
  .pad-buttom{
    padding-bottom: 12px;
  }
  .objection{
    display: flex;
    justify-content: flex-end;
    color: $c-cheng;
    font-size: 16px;
    padding-bottom: 12px;
    .iconyiyishenqing1{
      font-size: 20px;
    }
    span{
      position: relative;
      top: 3px;
    }
  }
}
.info-detalis{
  background-color: $c-bai;
  .detalis-date{
    padding: 5px 12px;
  }
}
.detalis {
  width:351px;
  height:76px;
  background:rgba(255,227,179,1);
  border-radius:5px;
  margin: auto;
  padding: 5px 12px;
  &>div{
    padding-bottom: 5px;
  }
}
.text-info{
      padding: 0 12px;
      width:375px;
      height:50px;
      line-height: 50px;
      background: $c-bai;
      & span:first-child{
        min-width: 60px;
        display: inline-block;
        margin-right: 12px;
      }
    }
.tips{
  width:375px;
  height:24px;
  background:rgba(54,153,255,1);
  color: $c-bai;
  text-align: center;
  line-height: 24px;
}
main{
  padding-top: 50px;
}
.info{
  width: 100%;
  height: 122px;
  background-color: $c-cheng;
  .info-head{
    padding: 13px 13px 0px 24px;
    display: flex;
    // align-items: center;
  }
  .info-img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    // background-color: red;
    margin-right: 13px;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .info-text{
    color: $c-bai;
    &>div{
      padding-top: 5px;
    }
  }
  .xian{
    height: 1px;
    width: 90%;
    background-color: $c-bai;
    margin: auto;
    margin-top: 12px;
  }
}
.footer-text{
  margin: auto;
  width: 320px;
  text-align: center;
  line-height: 35px;
  color: $c-bai;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
</style>
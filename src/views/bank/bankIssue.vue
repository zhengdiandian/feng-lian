<template>
  <div class="wrap page-margin-top">
    <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui"></mu-icon>
      </mu-button>
      银行卡问题
      <mu-button icon slot="right" >
        <!-- <span style="font-size:12px;">保</span><span style="font-size:12px;">存</span> -->
      </mu-button>
    </mu-appbar>
    <div class="content">
      <div class="card-wrap">
        <div class="card">
          <div class="img"></div>
          <div>账户更名</div>
        </div>
        <div class="card">
          <div class="img"></div>
          <div>绑卡问题</div>
        </div>
      </div>
    </div>
    <div class="help-wrap">
      <!--<mu-sub-header>常见问题</mu-sub-header>-->

      <mu-list  class="list" toggle-nested=""  :key="i">
        <mu-list-item button :ripple="false" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''"     >
          <mu-list-item-title>sdfdasf、dsfdas</mu-list-item-title>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down" ></mu-icon>
          </mu-list-item-action>
          <!--<mu-list-item  button :ripple="false" >-->
          <p slot="nested" >dsfdsafds</p>

          <!--</mu-list-item>-->
          <!-- <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 2</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button :ripple="false" slot="nested">
            <mu-list-item-title>List Item 3</mu-list-item-title>
          </mu-list-item> -->

        </mu-list-item>

      </mu-list>
      <div class="help-btn-wrap">
        <a :href="'tel:'+CustomerService" class="btn">
          <span class="iconfont iconlianxikefu"></span>
          <span>联系客服</span>
        </a>
        <div class="btn" @click="$router.push('/UnderstandUs')">
          <span class="iconfont iconguanyu"></span>
          <span>了解我们</span>
        </div>
      </div>
    </div>
    <a :href="'tel:'+CustomerService" class="btn">
      <span class="iconfont iconlianxikefu"></span>
      <span>联系客服</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'bankIssue',
    data() {
      return {
        CustomerService: ''
      }
    },
    created(){
      this.$axios.post('v1/manage/config/getTextList',{
            "keys": 'CustomerService'
        }).then(res=>{
            if(res.data.code !==200){
                    this.$toast.error(res.data.msg)
                    return
            }
            this.CustomerService = res.data.data.CustomerService
        })
    }
  }
</script>

<style lang="scss" scoped>
  ul,li{
    margin: 0;
    padding: 0;
  }
  .list{
    background-color: $c-bai;

  }
  .help-wrap{
    padding-bottom: 6px;
    & /deep/ .mu-item{
      border-bottom: .5px solid $c-hui;
      padding: 0px;
      padding-left: 12px;
    }
  }
.wrap{
  background-color: $c-hui;
}
  .card-wrap{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    padding: 12px;
    background-color: $c-hui;
    .card{
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding-top: 21px;
      width:170px;
      height:93px;
      background:rgba(255,255,255,1);
      border-radius:5px;
      .img{
        /*margin-top: 8px;*/
        width:34px;
        height:27px;
        background-color: red;
      }
      div{
        font-size:12px;
          
        font-weight:bold;
      }
    }
  }
.btn{
  position: fixed;
  left: 50%;
  bottom: 12px;
  transform: translateX(-50%);
  display: inline-block;
  width:132px;
  height:35px;
  border:1px solid rgba(239,162,32,1);
  border-radius:17px;
  text-align: center;
  line-height: 35px;
  color: $c-cheng;
}
</style>

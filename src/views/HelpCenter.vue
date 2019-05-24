<template>
    <div>
        <header>
            <nav>
                <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)"></mu-icon>
                <!-- <div class="title font-16">{{title}}</div> -->
                <div class="record">帮助中心</div>
            </nav>
            <div class="header-btn">
                <a :href="'tel:'+CustomerService" class="btn">
                    <span class="iconfont iconlianxikefu"></span>
                    <span>联系客服</span>
                </a>
            </div>
        </header>
        <main>
            <div class="main-problem"><span>常见问题</span></div>
            <mu-list  class="list" toggle-nested="" v-for="(item,i) in homeinfor" :key="i">
                <mu-list-item button :ripple="false" nested :open="open === 'send'" @toggle-nested="open = arguments[0] ? 'send' : ''"     >
                <mu-list-item-title style="font-size: 14px;">{{i+1}}、{{item.title}}</mu-list-item-title>
                <mu-list-item-action>
                    <mu-icon class="toggle-icon" size="24" value="keyboard_arrow_down" ></mu-icon>
                </mu-list-item-action>
                <!--<mu-list-item  button :ripple="false" >-->
                    <p slot="nested" v-html="item.content"></p>
                <!--</mu-list-item>-->
                <!-- <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-title>List Item 2</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button :ripple="false" slot="nested">
                    <mu-list-item-title>List Item 3</mu-list-item-title>
                </mu-list-item> -->

                </mu-list-item>
                <mu-divider></mu-divider>
            </mu-list>
        </main>
    </div>
</template>

<script>
    export default {
        name: 'HelpCenter',
        data() {
            return {
                homeinfor: [],
                CustomerService: ''
            }
        },
        created(){
        this.$axios.post('/v1/manage/post/index').then( res=> {
            if(res.data.code !==200){
                this.$toast.error(res.data.msg)
                return
            }
            this.homeinfor = res.data.data.issueList
            console.log(this.homeinfor)
        })
        this.$axios.post('v1/manage/config/getTextList',{
            "keys": 'CustomerService'
        }).then(res=>{
            if(res.data.code !==200){
                    this.$toast.error(res.data.msg)
                    return
            }
            this.CustomerService = res.data.data.CustomerService
        })
    },
    methods:{
        open(){}
    }
}
</script>

<style lang="scss" scoped>
header{
    background-image: url('../assets/26-1帮助中心_02.png');
    background-size: 100% 100%;
}
nav {
    width: $gw;
    height: 44px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    color: white;
    .iconfanhui{
        font-size: 20px;
        margin-left: 5px;
        position: absolute;
        left: 12px;
    }
}
.header-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    .btn{
      width:132px;
      height:35px;
      border:1px solid $c-bai;
      border-radius:17px;
      text-align: center;
      line-height: 35px;
      color: $c-bai;
      border-radius: 25px;
      margin: 35px 0px 35px 0px;
      display: flex;
      justify-content: center;
      font-size: 14px;
      .iconfont{
        padding-right: 5px;
      }
    }
}
.main-problem{
    margin-top: 20px;
    margin-left: 12px;
    width:80px;
    height:10px;
    background:linear-gradient(0deg,rgba(248,182,45,1) 0%,rgba(255,196,73,1) 100%);
    border-radius:5px;
    text-align: center;
    span{
        position: relative;
        top: -12px;
        font-size: $f14;
    }
}
</style>
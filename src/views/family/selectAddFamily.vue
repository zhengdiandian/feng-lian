<template>
    <div>
        <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
            <mu-button icon slot="left" @click="$router.go(-1)">
                <mu-icon value=":iconfont iconfanhui" @click="$router.go(-1)"></mu-icon>
            </mu-button>
                选择年龄范围
            <mu-button icon slot="right"  :ripple="false">
                <!--<mu-icon value=":iconfont iconshubanshenglvehao" size="24"></mu-icon>-->
            </mu-button>
        </mu-appbar>
        <div class="type-wrap page-margin-top">
            <div class="type-wrap-img"><img src="../../assets/image/满18岁.png" alt=""><div>满18岁家人</div></div>
            <div class="btn" @click="$router.push('/addFamilyTwo')"  >添加满18岁家人</div>
        </div>
        <div class="type-wrap">
            <div class="type-wrap-img"><img src="../../assets/image/未满18岁.png" alt=""><div>未满18岁家人</div></div>
            <div class="btn" @click="toAdd(0)">添加未满18岁家人</div>
        </div>
    </div>
</template>

<script>
export default {
name: 'selelctAddFamily',
  methods: {
    toAdd(type) {
      this.$router.push({path: '/addFamily'})
    },
  }
}
</script>

<style lang="scss" scoped>
    .type-wrap{
        width:375px;
        padding: 0px 12px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        height:302px;
        /*text-align: center;*/
        &-img{
            width: 91px;
            display: inline-block;
            img{
                width: 100%;
            }
            div{
                text-align: center;
                font-size:14px;
                font-family:SourceHanSansCN-Normal;
                font-weight:bold;
                color:rgba(112,112,112,1);
            }
        }
        .btn{
            width: 100%;
            height: 33px;
            line-height: 33px;
            text-align: center;
            color: $c-bai;
            align-self: flex-end;
            justify-self: flex-end;
            background:rgba(248,182,45,1);
            border-radius:17px;
        }
    }
</style>
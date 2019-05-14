<template>
    <div class="item-row">
      <div class="item" v-for="(data,i) in datas" :key="i">
        <div class="item-img">
          <img item-row-icon :src="data.img" alt="">
        </div>
        <div class="title">{{data.title}}</div>
        <div class="text">{{data.content}}</div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ItemRow.vue',
    props: {
      datas: {
        type: Array,
        default: function() {
          return [ {
            title: '互助范围',
            text: '60 (大病) + 20(轻症)'
          }]
        },

      }
    }
  }
</script>

<style lang="scss" scoped>

  .item-row{
    width: 100%;
    display: flex;
    justify-content: space-between;
    &-icon{
      /*width: 50px;*/
      /*height: 50px;*/
      font-size: 40px;
      color: #EFA220;

    }
    /*flex-wrap: wrap;*/
  }
  .item{
    width: 25%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    text-align: center;
    margin-bottom: 12px;
    line-height: 15px;
    .item-img{
      width: 30px;
      height: 30px;
      margin-left: 26.2px;
      margin-bottom: 12px;
    }
    // overflow: hidden;
    // img{
    //   display: inline-block;
    //   justify-self: center;
    //   width: 30px;
    //   height: 30px;
    //   margin-bottom: 6px;
    // }
    .title{
      font-size:14px;
      font-family:SourceHanSansCN-Normal;
      font-weight:bold;
      color:rgba(51,51,51,1);
    }
    .text{
      display: inline-block;
      // width: 60px;
      // height: 60px;
      font-size:12px;
      font-family:SourceHanSansCN-Normal;
      font-weight:400;
      color:rgba(51,51,51,1);
    }
  }

</style>

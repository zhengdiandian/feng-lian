<template>
    <div class="item-row">
      <div class="item" v-for="(data,i) in datas" :key="i">
        <span :class="'iconfont '+ data.icon"  class="item-row-icon"></span>
        <div class="title">{{data.title}}</div>
        <div class="text">{{data.text}}</div>
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
      font-size: 50px;

    }
    /*flex-wrap: wrap;*/
  }
  .item{
    width: 25%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .text{
      /*text-align: center;*/

    }
  }

</style>

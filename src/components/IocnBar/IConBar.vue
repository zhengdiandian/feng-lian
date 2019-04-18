<template>
    <div class="icon-bar">
     
      
      <div  class="icon-bar">
        <slot class="icon-bar-icon"></slot>
        {{leftText}}</div>
      <div class="icon-bar">{{rightText}}  <span class="you"></span></div>
      

    </div>
</template>

<script>
  export default {
    name: 'IConBar.vue',
    props: ['bgc','color' ,'icon','rightText', 'leftText']
  }
</script>

<style lang="scss" scoped>
  .icon-bar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: pink;
    height: 40px;
    border-radius: 20px;
  }
  .icon{
    width: 30px;
    font-size: 30px;
    height: 30px;
  }
  div{
    vertical-align: middle;
  }
  .you{
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url('../../assets/img/右.svg') center no-repeat;
    background-size: 100%;
    /*font-size: 40px;*/
  }
</style>

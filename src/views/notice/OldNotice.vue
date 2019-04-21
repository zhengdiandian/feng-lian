<template>
  <div>
    <div class="title">

    </div>
    <ul>
      <li>
        <Card></Card>
      </li>
    </ul>
  </div>
</template>

<script>
  import Card from "../../components/NoticeCard/NoticeCard";
  export default {
    name: 'oldNotice',
    components:{
      Card
    }
  }
</script>

<style lang="scss" scoped>
ul{
  margin: 0px;
  padding: 0px;
  margin-left: 28px;
}
  .card{
    width: 333px;

  }
</style>

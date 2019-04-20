<template>
  <div class="wrap">
      <card></card>
  </div>
</template>

<script>
  import Card from '../../components/NoticeCard/NoticeCard'
  export default {
    name: 'NewNotice',
    components: {
      Card
    }
  }
</script>

<style lang="scss" scoped>
  .wrap{
    padding: 11px 11px 14px;
  }
</style>

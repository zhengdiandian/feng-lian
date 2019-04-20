<template>
    <div class="card">
      <div class="title"></div>
    </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      title: {
        type: String,
        default: '峰链互助公式'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>

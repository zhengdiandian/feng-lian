<template>
    <div>
      <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
        <mu-button icon slot="left">
          <mu-icon value="keyboard_arrow_left"></mu-icon>
        </mu-button>
        <mu-button flat slot="right">跳过此步骤</mu-button>
      </mu-appbar>
    </div>
</template>

<script>
  export default {
    name: 'ForgetPassword'
  }
</script>

<style scoped>

</style>

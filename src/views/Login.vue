<template>
  <div class="wrap">
    <div class="pwd-wrap">
      <mu-text-field
        v-model="pwd"
        icon='home'
        error-text='密码错误'
        :action-icon="visibility ? 'visibility_off' : 'visibility'"
        :action-click="() => (visibility = !visibility)"
        :type="visibility ? 'text' : 'password'"
      >
      </mu-text-field>
    </div>
  </div>
</template>
<script>
export default {
  name: "Loing",
  data() {
    return {
        pwd: '',
        visibility: false
    };
  }
};
</script>
<style lang="scss" scoped>
</style>



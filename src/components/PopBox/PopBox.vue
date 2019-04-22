<template>
    <div class="shadom" ref="shadom" @click="$emit('close')">
        <div class="center">

            <slot></slot>
        </div>
    </div>
</template>
<script>
// import { debug } from 'util';
export default {
    name: 'popBox',
    created() {
        document.documentElement.style.overflow = 'hidden'

    },
    mounted() {
        document.documentElement.style.overflow = 'hidden'

        // debugger        
        // this.$refs.shadom.style.height = document.documentElement.style.height

    },
    beforeDestroy() {
        document.documentElement.style.overflow = 'auto'
    }
}
</script>
<style lang="scss" scoped>

.shadom{
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    // width: 375px;
    // height: 100%;
    background-color:rgba(0, 0, 0, .7);
    .center{
      background-color: #fff;
      
line-height: 20px;
border-radius: 4px;
border: 1px solid rgba(187, 187, 187, 1);
    }
}
</style>

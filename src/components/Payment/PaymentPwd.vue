<template>
    <div>
        <!-- <div class="input">
            <input type="password" v-model="i1" maxlength="1">
            <input type="password" v-model="i2" maxlength="1">
            <input type="password" v-model="i3" maxlength="1">
            <input type="password" v-model="i4" maxlength="1">
            <input type="password" v-model="i5" maxlength="1">
            <input type="password" v-model="i6" maxlength="1">
        </div> -->
        <div class="input">
            <div v-for="(item,index) in inputList" :key="index">
                <input type="password" v-model="item.val" maxlength="1"  class="border-input" @keyup="nextFocus($event,index)">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PaymentPwd',
        data() {
            return {
                // i1: '',
                // i2: '',
                // i3: '',
                // i4: '',
                // i5: '',
                // i6: ''
                inputList: [{val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}, {val: ""}],
            }
        },
        methods: {
            /*对焦到下一个input框去*/
            nextFocus(el,index) {
                var dom = document.getElementsByClassName("border-input"),
                    currInput = dom[index],
                    nextInput = dom[index + 1],
                    lastInput = dom[index - 1];
                /*这里的keyCode 根据不同的平台或许不同,安卓就是不是8*/
                if (el.keyCode != 8) {
                    if (index < (this.inputList.length - 1)) {
                        nextInput.focus();
                    } else {
                        currInput.blur();
                    }
                }else{
                    if (index !=0) {
                        lastInput.focus();
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.input{
    display: flex;
    justify-content: center;
    input{
        width: 40px;
        height: 40px;
        border: 1px solid black;
        text-align: center;
        margin-left: 5px;
    }
}
</style>
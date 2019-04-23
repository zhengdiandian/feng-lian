<template>
    <div>
        <div style="display: flex;justify-content: center;">
            <div class="uploadimg">
                <img src="../../assets/img/相机.svg" alt="">
                <span>{{upload}}</span>
                <input class="justID" type="file">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'UpLoad',
    props:{
        upload: {
            type: String,
            default: '上传身份证正面'
        }
    }
}
</script>
<style scoped lang="scss">
.uploadimg{
        width:375px;
        height:93px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(234,234,234,1);
        padding: 4px 10px;
        line-height: 20px;
        position: relative;
        cursor: pointer;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #ccc;
        img{
            width: 32px;
            height: 32px;
        }
        .iconshouye1{
            font-size: 30px;
            margin-bottom: 12px;
        }
        input {
            position: absolute;
            font-size: 100px;
            right: 0;
            top: 0;
            opacity: 0;
            filter: alpha(opacity=0);
            cursor: pointer;
            width: $gw;
            height: 100px;
        }
    }
</style>
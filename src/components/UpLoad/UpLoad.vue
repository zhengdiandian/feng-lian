<template>
    <div>
        <div style="display: flex;justify-content: center;">
            <div class="uploadimg">
                <span>上传证件正面照</span>
                <input class="justID" type="file">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'UpLoad'
}
</script>
<style scoped lang="scss">
.uploadimg{
        width: 40%;
        padding: 4px 10px;
        height: 100px;
        line-height: 20px;
        position: relative;
        cursor: pointer;
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 4px;
        overflow: hidden;
        display: inline-block;
        margin: 10px 10px 0 10px;
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
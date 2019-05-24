<template>
    <div class="form-content content">
        <div class="title">请如实上传相关资料</div>
        <div class="warning">点击 <span class="iconwenhao iconfont"></span>可查看相应示例图</div>
        <div class="file-box">
            <div class="file-box-title">
                1、缴费凭证 <span class="iconwenhao iconfont"></span>
                <div class="file-box-content">
                    <file-input  type="add" upload="继续上传" :show-img="false"></file-input>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import  FileInput from '../../../components/UpLoad/UpLoad'
export default {
    name: 'imageForm',
    components: {
        FileInput
    }
}
</script>

<style lang="scss" scoped>
    .form-content{
        /*padding-top: 23px;*/
        padding: 23px 12px 0px;
        .title{
            padding-bottom: 8px;
            font-size:$f16;
            font-family:SourceHanSansCN-Normal;
            font-weight:bold;
            color:rgba(51,51,51,1);
    }
        .warning{
            font-family:SourceHanSansCN-Normal;
            font-weight:bold;
            color:rgba(255,22,22,1);
        }
        .iconwenhao{
            font-weight: normal;
            font-size: 18px;
            color: $c-cheng
        }


    }
</style>
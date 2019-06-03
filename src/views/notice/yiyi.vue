<template>
    <div class="page-margin-top wrap">
        <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
            <mu-button icon slot="left" @click="$router.go(-1)">
                <mu-icon value=":iconfont iconfanhui"></mu-icon>
            </mu-button>我有异议
            <mu-button icon slot="right" :ripple="false"></mu-button>
        </mu-appbar>
        <div class="content-wrap">
            <div class="content">
                <textarea placeholder="请输入您要反馈的内容"></textarea>
                <div class="img-box">
                    <file-input  style="display: inline-block"    type="add" upload="上传图片" size="small"  :show-img="false"></file-input>
                </div>
            </div>


        </div>
        <div class="input-box"><label >手机号:</label><input v-model="phone" placeholder="请填写您的手机号码" type="text"></div>

        <div class="submit">提交</div>
    </div>
</template>

<script>
  import  FileInput from '../../components/UpLoad/UpLoad'

  export default {
    name: 'yiyi',
    components: {
      FileInput
    }
  }
</script>

<style lang="scss" scoped>
    .submit{
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: $f15;
        color: $c-bai;
    }
    .input-box{
        width: 100%;
        /*height:36px;*/
        display: flex;
        flex-wrap: wrap;
        padding-left: 12px;
        &.switch{
            justify-content: space-between;
        }
        .placeholder-text{
            font-family:SourceHanSansCN-Normal;
            font-weight:400;
            color:rgba(112,112,112,1);
        }
        &:after{
            width: 100%;
            height: 1px;
            transform: scaleY(0.5);
            transform-origin: 50% 100%;
            /*height: .5px;*/
            content: '';
            display: block;
            z-index: 6666;
            background-color: $c-hui;
            /*<!--border-bottom: .5px solid $c-hui;-->*/
        }
        .select{
            position: relative;
            flex: 2;
            line-height: 36px;
            height: 36px;
            .iconfont{
                position: absolute;
                bottom: 0px;
                right: 0px;
                color: $c-cheng;
            }
        }
        label {
            white-space: nowrap;
            display: inline-block;
            /*width: 100px;*/
            line-height: 36px;
            height: 36px;
            background-color: $c-bai;
        }
        input{
            flex: 2;
            padding-left: 10px;
            border: none;
            outline: none;
            width: auto;
            height: 36px;
        }

        .right{
            /*float: right;*/
            line-height: 36px;
        }
    }


    textarea{
        width: 100%;
        outline: none;
        resize: none;
        border: none;
        padding: 14px;
        min-height: 170px;
        /*height:90px;*/
    }
.content-wrap{
    padding: 10px 0px;
    background-color: $c-hui;
}
    .content{
        background-color: $c-bai;
    }
    .img-box{
        padding: 14px;
    }
</style>
<template>
    <div>
        <header>
            <PageHeader :title="title"></PageHeader>
        </header>
        <main class="page-margin-top">
            <div class="information">
                <div class="infor-name-id">姓名<input style="padding-left: 55px;" type="text" placeholder="请输入姓名"></div>
                <div class="infor-name-id">身份证号码<input type="text" placeholder="请输入身份证号码"></div>
            </div>
            <div class="upload">
                <div class="uptitle"><span>上传身份证正反面照片</span></div>
                <section>
                    <upload></upload>
                    <upload :upload="upload"></upload>
                </section>
            </div>
        </main>
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader/PageHeader'
import upload from '../components/UpLoad/UpLoad'
export default {
    name: 'RealName',
    components: {
        PageHeader,
        upload
    },
    data() {
        return {
            title: '实名认证',
            upload: '上传身份证反面'
        }
    }
}
</script>
<style scoped lang="scss">
input {
    border: none;
    outline: none;
    padding-left: 20px;
    color: #9999AF;
}
.information{
    width: $gw;
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    .infor-name-id{
        width:375px;
        height:44px;
        background:rgba(255,255,255,1);
        font-size:12px;
        font-family:SourceHanSansCN-Normal;
        font-weight:400;
        color:rgba(51,51,51,1);
        padding-left: 12px;
        line-height: 42px;
    }
}
.upload {
    width: $gw;
    margin-top: 10px;
    .uptitle {
        font-size:12px;
        font-family:SourceHanSansCN-Normal;
        font-weight:bold;
        color:rgba(51,51,51,1);
        padding: 12px 0 10px 10px;
    }
}
</style>

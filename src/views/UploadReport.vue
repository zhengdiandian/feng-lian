<template>
    <div>
        <header>
            <PageHeader :title="upload"></PageHeader>
        </header>
        <main>
            <div class="report">
                <span>{{upload}}</span>
                <div class="pictures">
                    <img src="" alt="">
                </div>
            </div>
            <div class="upload">
                <section>
                    <upload :upload="upload"></upload>
                    <upload :upload="upload"></upload>
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
    name: 'uploadrepost',
    components: {
        PageHeader,
        upload
    },
    data() {
        return {
            upload: '上传体检报告'
        }
    }
}
</script>
<style scoped lang="scss">
.report{
    span{
        display: inline-block;
        font-size:13px;
        font-family:SourceHanSansCN-Normal;
        font-weight:400;
        color:rgba(51,51,51,1);
        margin: 12px 0 12px 12px;
    }
}
.pictures{
    width:85px;
    height:50px;
    border-radius:5px;
    background-color: #ccc;
    margin: 0 12px 12px;
}
</style>

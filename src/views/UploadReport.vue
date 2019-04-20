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
        width:74px;
        height:12px;
        font-size:12px;
        font-family:SourceHanSansCN-Normal;
        font-weight:400;
        color:rgba(51,51,51,1);
        margin: 11px 0 11px 11px;
    }
}
.pictures{
    width:79px;
    height:45px;
    border-radius:5px;
    background-color: #ccc;
    margin: 0 11px 11px;
}
</style>

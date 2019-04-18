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
    name: 'RealName',
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
    margin-left: 10px;
}
.pictures{
    width: 120px;
    height: 80px;
    background-color: #ccc;
    border-radius: 10px;
}
</style>

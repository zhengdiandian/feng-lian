<template>
    <div>
        <header>
            <PageHeader :title="upload"></PageHeader>
        </header>
        <main class="page-margin-top">
            <div class="report">
                <span>{{upload}}</span>
                <div class="pictures">
                    <img src="" alt="">
                </div>
            </div>
            <div class="upload">
                <section>
                    <!-- <upload :upload="upload"></upload>
                    <upload :upload="upload"></upload>
                    <upload :upload="upload"></upload> -->
                    <!-- <div class="upload">
                        <picture-input ref="pictureInput" @change="onChange" width="375" height="200" margin="16" accept="image/jpeg,image/png" size="10"></picture-input>
                    </div> -->
                </section>
            </div>
        </main>
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader/PageHeader'
import upload from '../components/UpLoad/UpLoad'
import PictureInput from 'vue-picture-input'
export default {
    name: 'uploadrepost',
    components: {
        PageHeader,
        upload,
        PictureInput
    },
    data() {
        return {
            upload: '上传体检报告'
        }
    },
    methods: {
        // onChange () {
        //     console.log('New picture selected!')
        //     if (this.$refs.pictureInput.image) {
        //         console.log('Picture loaded.')
        //     } else {
        //         console.log('FileReader API not supported: use the <form>, Luke!')
        //     }
        // }
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

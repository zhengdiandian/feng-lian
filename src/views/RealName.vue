<template>
    <div>
        <header>
            <PageHeader :title="title"></PageHeader>
        </header>
        <main>
            <div class="information">
                <div class="infor-name-id">姓名：<input type="text" placeholder="请输入姓名"></div>
                <!-- <div style="width: 80%;margin: auto;height: 1px; border: 0.1px solid #9999AF;"></div> -->
                <div class="infor-name-id">身份证号码：<input type="text" placeholder="请输入身份证号码"></div>
            </div>
            <div class="upload">
                <div class="uptitle"><span>上传身份证正反面照片</span></div>
                <section>
                    <upload></upload>
                    <upload></upload>
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
            title: '实名认证'
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
    height: 100px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .infor-name-id{
        width: 80%;
        margin: auto;
    }
}
.upload {
    width: $gw;
    margin-top: 10px;
    .uptitle {
        margin-left: 20px;
        span{
            font-weight: bold;
            font-size: 16px;
        }
    }
}
</style>

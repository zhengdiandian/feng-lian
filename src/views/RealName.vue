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
                <div style="width: $gw;">
                    <div class="uploadimg">
                        <input class="justID" type="file">
                    </div>
                    <div class="uploadimg">
                        <input class="backID" type="file">
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import PageHeader from '../components/PageHeader/PageHeader'
export default {
    name: 'RealName',
    components: {
        PageHeader
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
        span{
            font-weight: bold;
            font-size: 16px;
        }
    }
    .uploadimg{
        width: 40%;
        padding: 4px 10px;
        height: 100px;
        line-height: 20px;
        position: relative;
        cursor: pointer;
        color: #888;
        background: #fafafa;
        border: 1px solid #ddd;
        border-radius: 4px;
        overflow: hidden;
        display: inline-block;
        *display: inline;
        *zoom: 1;
        input {
            position: absolute;
            font-size: 100px;
            right: 0;
            top: 0;
            opacity: 0;
            filter: alpha(opacity=0);
            cursor: pointer
        }
    }
    .uploadimg:hover {
        color: #444;
        background: #eee;
        border-color: #ccc;
        text-decoration: none
    }
}
</style>

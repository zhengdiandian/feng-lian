<template>
    <div>
        <header>
            <PageHeader :title="upload"></PageHeader>
        </header>
        <main>
            <div class="add-family">
                <span>我的家人</span>
                <section class="add-family-list">
                    <div class="list">
                        <div class="list-img">
                            <img src="" alt="">
                        </div>
                        <span>{{name}}</span>
                        <span>自己</span>
                    </div>
                    <div class="list">
                        <div class="list-img">
                            <img src="" alt="">
                        </div>
                        <span>添加家人</span>
                    </div>
                </section>
            </div>
            <div class="purchase-plan">
                <span>我的购买计划</span>
            </div>
        </main>
        <footer>
            <div class="ordinary-claims">申请理赔</div>
            <div class="Second-claims">申请秒赔</div>
        </footer>
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
            upload: '我的计划',
            name: 'yyyy'
        }
    }
}
</script>
<style scoped lang="scss">
.add-family{
    margin-bottom: 10px;
}
.add-family-list{
    display: flex;
    flex-wrap: wrap;
    .list{
    display: flex;
    flex-direction: column;
    width: 25%;
    text-align: center;
    align-items: center;
    .list-img{
        width: 50px;
        height: 50px;
        border: 2px solid yellow;
        border-radius: 50%;
    }
}
}
footer{
    width: 100%;
    height: 50px;
    // border: 1px solid black;
    position: fixed;
    bottom: 0;
    display: flex;
    text-align: center;
    line-height: 50px;
    color: #fff;
    .ordinary-claims{
        width: 70%;
        height: 100%;
        background-color: #eea31f;
    }
    .Second-claims{
        width: 30%;
        height: 100%;
        background-color: #f26d00;
    }
}
</style>

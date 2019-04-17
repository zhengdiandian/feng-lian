<template>
    <div>
        <header>
            <PerInforHeader></PerInforHeader>
        </header>
        <main>
            <div class="detaInfo">
                <section class="detail" v-for="items in detail" :key="items">
                    <div class="detali-list" >
                        <div class="datelist">
                            <span>{{items}}</span>
                        </div>
                    </div>
                </section>
                <div>{{datalist.ID}}</div>
                <div>{{datalist.email}}</div>
                <div>{{datalist.gender}} {{datalist.age}} {{datalist.constellation}} {{datalist.address}}</div>
            </div>
        </main>
    </div>
</template>
<script>
import PerInforHeader from '../components/PerInforHeader/PerInforHeader'
export default {
    name: 'PerInfor',
    components: {
        PerInforHeader
    },
    data() {
        return {
            detail: [
                "会员ID",
                "邮箱",
                "个人信息",
                "体检报告",
                "体检报告 "
            ],
            datalist: {
                    "ID": '8888 9999 001',
                    "email": '758384567@qq.com',
                    "gender": '男',
                    "age": 46,
                    "constellation": "天蝎座",
                    "address": "北京-朝阳"
                }
        }
    },
    mounted(){
        console.log(this.datalist);
    }
}
</script>
<style scoped lang="scss">
.detaInfo {
    width: $gw;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    .detail {
        width: $gw;
        .detali-list{
            display: flex;
            align-items: center;
        }
        .datelist{
            width: 50px;
            height: 50px;
            text-align: center;
            border: 1px solid black;
            border-radius: 50%;
            margin: 10px 0 10px 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            span {
                display: inline-block;
                width: 30px;
            }
        }
    }
}
</style>

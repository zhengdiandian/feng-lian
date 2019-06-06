<template>
    <div class="form-content content">
        <div class="title file-box">请如实上传相关资料</div>
        <div class="warning file-box">点击 <span class="iconwenhao iconfont" @click="openBotttomSheet"></span>可查看相应示例图</div>
        <div class="file-box">
            <div class="file-box-title">
                1、缴费凭证 <span @click="show_pic('PayProve')" class="iconwenhao iconfont"></span>
                <div class="file-box-content">
                    <ul>
                        <li class="image-box" v-for="(img,i) in payProve"  :key="i"><img :src="img" :key="i" alt=""></li>
                        <li><file-input  style="display: inline-block" @getFile="getFile"   type="add" upload="继续上传" size="small"  :show-img="false"></file-input></li>
                    </ul>

                </div>
            </div>
        </div>
        <div class="file-box">
            <div class="file-box-title">
                2、申请表填写完成后拍照上传 <span @click="show_pic('ApplyForm')" class="iconwenhao iconfont"></span>
                <div class="file-box-content">
                    <ul>
                        <li class="image-box" v-for="(img,i) in applyForm" :key="i"><img :src="img" :key="i" alt=""></li>
                        <li><file-input  style="display: inline-block" @getFile="getApplyForm"   type="add" upload="继续上传" size="small"  :show-img="false"></file-input></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="file-box">
            <div class="file-box-title">
                3、病例报告 <span @click="show_pic('IllnessInform')" class="iconwenhao iconfont"></span>
                <div class="file-box-content">
                    <ul>
                        <li class="image-box" v-for="(img,i) in illnessInform" :key="i"><img :src="img" :key="i" alt=""></li>
                        <li><file-input  style="display: inline-block" @getFile="getIllnessInform"   type="add" upload="继续上传" size="small"  :show-img="false"></file-input></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="file-box">
            <div class="file-box-title">
                4、诊断证明 <span @click="show_pic('TreatProve')" class="iconwenhao iconfont"></span>
                <div class="file-box-content">
                    <ul>
                        <li class="image-box" v-for="(img,i) in treatProve" :key="i"><img :src="img" :key="i" alt=""></li>
                        <li><file-input  style="display: inline-block" @getFile="getTreatProve"   type="add" upload="继续上传" size="small"  :show-img="false"></file-input></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="file-box">
            <div class="file-box-title">
                5、身份证正反面照片
                <div class="file-box-content">
                    <ul>
<!--                        <li class="image-box" v-for="(img,i) in payProve"><img :src="img" :key="i" alt=""></li>-->
                        <li><file-input  style="display: inline-block" @getFile="getContacsId"    upload="身份证正面照" size="small"  ></file-input></li>
                        <li><file-input  style="display: inline-block" @getFile="getContacsId"   type="add" upload="身份证反面照" size="small"  ></file-input></li>

                    </ul>
                </div>
            </div>
        </div>
        <div class="file-box">
            <div class="file-box-title">
                6、上传银行卡照片
                <div class="file-box-content">
                    <ul>
<!--                        <li class="image-box" v-for="(img,i) in payProve"><img :src="img" :key="i" alt=""></li>-->
                        <li><file-input  style="display: inline-block" @getFile="getCardImg"   type="add" upload="银行卡照片" size="small"  ></file-input></li>
                    </ul>
                </div>
            </div>
        </div>

<!--        <mu-bottom-sheet :open.sync="open">-->
<!--                <div class="shi-li" style="width: 100%"  :z-depth="1">-->
<!--                    <img src="https://placehold.it/350x200" alt="">-->
<!--                </div>-->

<!--&lt;!&ndash;            <mu-paper style="width: 100%"  :z-depth="1" class="demo-date-picker">&ndash;&gt;-->
<!--&lt;!&ndash;                <mu-date-picker color="#f8b62d" style="width: 100%"  :date.sync="date"></mu-date-picker>&ndash;&gt;-->
<!--&lt;!&ndash;            </mu-paper>&ndash;&gt;-->
<!--        </mu-bottom-sheet>-->
        <PopBox v-if="showPop" style="z-index: 666666;" >
            <div class="pic_img">
                <img :src="shiLiImg" alt="">
                <div class="btn" @click="showPop = false"><i class="iconfont iconcha"></i></div>
            </div>
        </PopBox>
        <div class="submit" v-promise-btn @click="submit" >提交资料</div>
    </div>
</template>

<script>
import  FileInput from '../../../components/UpLoad/UpLoad'
import  PopBox from '../../../components/PopBox/PopBox'
export default {
    name: 'imageForm',
    components: {
        FileInput,
        PopBox
    },
    data() {
        return {
        open: false,
        payProve: [],
        applyForm: [],
        illnessInform: [],
        treatProve: [],
        contacsId: [],
        cardImg: '',
        showPop: false,
          shiLiImg: ''
        }
    },
    methods: {
        show_pic(keys) {
          return this.$axios.post('v1/manage/config/getImgList', {
            keys
          }).then(res => {
            if(res.data.code !== 200) {
              this.$toast.error(res.data.msg)
              return
            }
            debugger
            this.shiLiImg = res.data.data[keys]
            this.showPop = true

          })
        },
        getFile(file, imgUrl,base) {
          debugger
        this.payProve.push(file)
        debugger
        // this[params] = file;
        },
        getApplyForm(file, imgUrl, base ) {
            this.applyForm.push(file)
        },
        getIllnessInform(file, imgUrl, base ) {
            this.illnessInform.push(file)
        },
        getTreatProve(file, imgUrl, base ) {
            this.treatProve.push(file)
        },
        getContacsId(file, imgUrl, base ) {
            this.contacsId.push(file)
        },
        getCardImg(file, imgUrl, base ) {
            this.cardImg = file
        },



        submit() {
          debugger
          if(!this.payProve.length ){
            this.$toast.error('请上传缴费凭证')
            return
          }
          if(!this.applyForm.length ){
            this.$toast.error('请上传申请表')
            return
          }
          if(!this.illnessInform.length ){
            this.$toast.error('请上传病例报告')
            return
          }
          if(!this.treatProve.length ){
            this.$toast.error('请上传诊断证明')
            return
          }
          if(!this.contacsId.length ){
            this.$toast.error('请上传身份证')
            return
          }
          if(!this.cardImg ){
            this.$toast.error('请上传银行卡照片')
            return
          }

            return this.$axios.post('v1/mutually/compensate/compensateApplyImg', {
            orderNo: this.$route.query.orderNo,
            payProve: this.payProve.toString(),
            applyForm: this.applyForm.toString(),
            illnessInform: this.illnessInform.toString(),
            treatProve: this.treatProve.toString(),
            contacsId: this.contacsId.toString(),
            cardImg: this.cardImg


            })
              .then(res => {
              debugger
                if(res.data.code !== 200) {
                    this.$toast.error(res.data.msg)
                    return
                }
                this.$toast.success('提交成功等待审核')
                this.$router.push('/myPlanNews')
            })
        },
        closeBottomSheet () {
        this.open = false;
        },
        openBotttomSheet () {
        this.open = true;
        },
    }
}
</script>

<style lang="scss" scoped>
    .pic_img{
        width: 375px;
        height: 300px;
        img{
            width: 100%;
            height: 100%;
        }
        .btn{
            position: absolute;
            top: 50px;
            right: 50px;
            color: #fff;
        }
    }
    ul,li{
        padding: 0px;
        margin: 0px;
        list-style: none;
        display: inline-block;

    }
    li{
        margin: 5px 0px;
    }
    ul{
        padding: 15px 0px;
    }
    .file-box{
        padding: 0px 12px;
    }

    .form-content{
        /*padding-top: 23px;*/
        padding: 23px 0px 0px;
        .title{
            /*padding-bottom: 8px;*/
            font-size:$f16;
            font-family:SourceHanSansCN-Normal;
            font-weight:bold;
            color:rgba(51,51,51,1);
    }
        .warning{
            font-family:SourceHanSansCN-Normal;
            font-weight:bold;
            color:rgba(255,22,22,1);
        }
        .iconwenhao{
            font-weight: normal;
            font-size: 18px;
            color: $c-cheng
        }


    }
    .file-box-content{
        display: flex;
        justify-content: start;
        /*align-items: center;*/
        li{
            margin-right: 15px;
            vertical-align: middle;
        }

    }
    .image-box{
        width:100px !important;
        height:100px !important;
        background:rgba(255,255,255,1);
        img{
            width: 100%;
        }
    }
    .submit{
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 15px;
        background-color: $c-cheng;
        text-align:center;
        color: $c-bai;

    }
    img{
        width: 100%;
    }
</style>
<template>
    <div>
        <div class="form-content content">
        <div class="title">请如实填写以下信息</div>
        <div class="input-box"><label >姓名:</label><input placeholder="请填写您的姓名" type="text"></div>
        <div class="input-box"><label >身份证号码:</label><input placeholder="请填写您的身份证号码" type="text"></div>
        <div class="input-box"><label >手机号:</label><input placeholder="请填写您的手机号码" type="text"></div>
        <div class="input-box"><label >邮箱：</label><input placeholder="请填写您的邮箱地址" type="text"></div>
        </div>
        <div class="input-box-line"></div>
        <div class="content">
            <div class="input-box"><label >职业:</label><input placeholder="请填写您的职业" type="text"></div>
            <div class="input-box"><label >工作单位/学校:</label><input placeholder="请填写受助人工作单位或学校" type="text"></div>
        </div>
        <div class="input-box-line"></div>
        <div class="content">
            <div class="input-box" @click="showAddress=true"><label >地区:</label><div class="select"><span class="placeholder-text" v-if="province===''">请选择地区</span><span>{{province}}</span><span> {{city}}</span><span class="iconfont iconxiangshangshouqi1"></span></div></div>
            <div class="input-box"><label >详细地址:</label><input placeholder="海兰子胡同6条22号" type="text"></div>
        </div>
        <div class="input-box-line"></div>
        <div class="content">
            <div class="input-box"><label >疾病名称:</label><input placeholder="请填写受助者详细的疾病名称" type="text"></div>
            <div class="input-box"><label >确诊医院:</label><input placeholder="请填写确诊医院" type="text"></div>
            <div class="input-box" @click="openBotttomSheet">
                <label >疾病名称:</label>
                <div class="select"><span class="placeholder-text" v-if="province===''">请选择地区</span><span>{{province}}</span><span> {{city}}</span><span class="iconfont iconxiangshangshouqi1"></span>
                </div>
<!--                <mu-date-input v-model="value2" label="横屏显示" label-float full-width landscape></mu-date-input>-->

            </div>

        </div>
        <div class="input-box-line"></div>
        <vue-picker
                :show="showAddress"
                :columns="2"
                :link='true'
                @cancel="showAddress=false"
                @confirm="confirmFn"
        ></vue-picker>
<!--        <mu-bottom-sheet :open="true"></mu-bottom-sheet>-->
<!--        <mu-container>-->
<!--            <mu-flex justify-content="center">-->
<!--                <mu-button @click="openBotttomSheet">OPEN Bottom Sheet</mu-button>-->
<!--            </mu-flex>-->
            <mu-bottom-sheet :open.sync="open">

                <mu-paper style="width: 100%"  :z-depth="1" class="demo-date-picker">
                    <mu-date-picker color="#f8b62d" style="width: 100%"  :date.sync="date"></mu-date-picker>
                </mu-paper>
<!--                <mu-list @item-click="closeBottomSheet">-->
<!--                    <mu-sub-header>Select One</mu-sub-header>-->
<!--                    <mu-list-item button>-->
<!--                        <mu-list-item-action>-->
<!--                            <mu-icon value="grade" color="orange"></mu-icon>-->
<!--                        </mu-list-item-action>-->
<!--                        <mu-list-item-title>Star</mu-list-item-title>-->
<!--                    </mu-list-item>-->
<!--                    <mu-list-item button>-->
<!--                        <mu-list-item-action>-->
<!--                            <mu-icon value="inbox" color="blue"></mu-icon>-->
<!--                        </mu-list-item-action>-->
<!--                        <mu-list-item-title>Inbox</mu-list-item-title>-->
<!--                    </mu-list-item>-->
<!--                    <mu-list-item button>-->
<!--                        <mu-list-item-action>-->
<!--                            <mu-icon value="chat" color="green"></mu-icon>-->
<!--                        </mu-list-item-action>-->
<!--                        <mu-list-item-title>Chat</mu-list-item-title>-->
<!--                    </mu-list-item>-->
<!--                    <mu-list-item button>-->
<!--                        <mu-list-item-action>-->
<!--                            <mu-icon value="email" color="cyan"></mu-icon>-->
<!--                        </mu-list-item-action>-->
<!--                        <mu-list-item-title>Email</mu-list-item-title>-->
<!--                    </mu-list-item>-->
<!--                </mu-list>-->
            </mu-bottom-sheet>
<!--        </mu-container>-->
    </div>

</template>

<script>
  import vuePicker from "../../../components/vuePickers/vuePicker";

  export default {
    name: 'InputForm',
    components: {
      vuePicker
    },
    data() {
      return {
        showAddress: false,
        province: '',
        city: '',
        provinceValue: '',
        cityValue: '',
        open: false,
        value2: '',
        date: undefined
      }
    },
    methods: {
      closeBottomSheet () {
        this.open = false;
      },
      openBotttomSheet () {
        this.open = true;
      },
      confirmFn(val) {
        debugger
        this.showAddress = false;
        this.province = val.select1.text
          // .substring(0,val.select1.text.length -1)
        this.city = val.select2.text
          // .substring(0,val.select2.text.length -1 )
        this.provinceValue = val.select1.value
        this.cityValue = val.select2.value
        // this.defaultData = [val.select1];
      },
    }
  }
</script>

<style lang="scss" scoped>
    .content{
        padding: 12px 12px 6px;
        background-color: $c-bai;
    }

    .input-box-line{
        width: 100%;
        padding-bottom: 6px;
        /*height: .5px;*/
        background-color: $c-hui;

    }
    .input-box{
        width: 100%;
        /*height:36px;*/
        display: flex;
        flex-wrap: wrap;
        .placeholder-text{
            font-family:SourceHanSansCN-Normal;
            font-weight:400;
            color:rgba(112,112,112,1);
        }
        &:after{
            width: 100%;
            height: 1px;
            transform: scaleY(0.5);
            transform-origin: 50% 100%;
            /*height: .5px;*/
            content: '';
            display: block;
            z-index: 6666;
            background-color: $c-hui;
            /*<!--border-bottom: .5px solid $c-hui;-->*/
        }
        .select{
            position: relative;
            flex: 2;
            line-height: 36px;
            height: 36px;
            .iconfont{
                position: absolute;
                bottom: 0px;
                right: 0px;
                color: $c-cheng;
            }
        }
        label {
            white-space: nowrap;
            display: inline-block;
            width: 100px;
            line-height: 36px;
            height: 36px;
            background-color: $c-bai;
        }
        input{
            flex: 2;
            border: none;
            outline: none;
            width: auto;
            height: 36px;
        }
    }
    .form-content{
        padding-top: 23px;
        /*padding: 23px 12px 0px;*/
        .title{
            padding-bottom: 12px;
            font-size:$f16;
            font-family:SourceHanSansCN-Normal;
            font-weight:bold;
            color:rgba(51,51,51,1);
        }


    }
</style>
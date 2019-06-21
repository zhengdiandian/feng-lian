<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary" text-color="#666" z-depth="0">
      <mu-button icon slot="left" @click="$router.push('/my')">
        <mu-icon value=":iconfont iconfanhui"></mu-icon>
      </mu-button>我的计划
      <mu-button icon slot="right" :ripple="false"></mu-button>
    </mu-appbar>
    <div class=""></div>
    <main>

      <div class="purchase-plan page-margin-top">
        <mu-paper :z-depth="1" class="demo-loadmore-wrap">
          <mu-container ref="container" class="demo-loadmore-content">
            <mu-load-more :loading="loading" @load="load" :loaded-all="loadedAll" >
                    <div class="add-family">
        <span
          style="font-size:14px;  font-weight:bold;color:rgba(51,51,51,1); margin-left: 12px;"
        >我的家人</span>
        <section class="add-family-list">
          <div class="list" v-for="(item, i) in relationList" :key="i">
            <div class="list-img">
              <img :src="item.headPortrait" alt>
            </div>
            <span style="font-size:12px;">{{item.contacs}}</span>
            <span style="font-size:12px;">{{item.relationDesc}}</span>
          </div>
          <!--                    <div class="list">-->
          <!--                        <div class="list-img">-->
          <!--                            <img src="../assets/PNG/积分头像2.png" alt="">-->
          <!--                        </div>-->
          <!--                        <span style="font-size:12px;">{{name}}</span>-->
          <!--                        <span style="font-size:12px;">自己</span>-->
          <!--                    </div>-->
          <!--                    <div class="list">-->
          <!--                        <div class="list-img">-->
          <!--                            <img src="../assets/PNG/积分头像2.png" alt="">-->
          <!--                        </div>-->
          <!--                        <span style="font-size:12px;">{{name}}</span>-->
          <!--                        <span style="font-size:12px;">自己</span>-->
          <!--                    </div>-->
          <!--                    <div class="list">-->
          <!--                        <div class="list-img">-->
          <!--                            <img src="../assets/PNG/积分头像2.png" alt="">-->
          <!--                        </div>-->
          <!--                        <span style="font-size:12px;">{{name}}</span>-->
          <!--                        <span style="font-size:12px;">自己</span>-->
          <!--                    </div>-->
          <!--                    <div class="list">-->
          <!--                        <div class="list-img">-->
          <!--                            <img src="../assets/PNG/积分头像2.png" alt="">-->
          <!--                        </div>-->
          <!--                        <span style="font-size:12px;">{{name}}</span>-->
          <!--                        <span style="font-size:12px;">自己</span>-->
          <!--                    </div>-->
          <div class="list" v-if="addFlag">
            <div class="list-img" @click="toAddFamily">
              <img src="../assets/PNG/添加家人.png" alt>
            </div>
            <span style="font-size:12px;" @click="toAddFamily">添加家人</span>
          </div>
        </section>
      </div>
            <span class="plan-text">我的购买计划</span>

              <section
                class="card"
                :class="[activeIndex==i? 'active': '']"
                style="margin:0;"
                v-for="(myplan,i) in myplan.list"
                :key="i"
              >
                <div @click="clickActiveIndexHangdle(i)">
                  <card
                    :img="myplan.headPortrait"
                    :state="myplan.payState==100?'未实名':'已实名'"
                    :productName="myplan.productName"
                    :amount="amount"
                    :amountMoney="myplan.balance"
                    :waiting="myplan.leftWattingDays + '天'"
                    :waitingperiod="waitingperiod"
                    :date=" ':' +myplan.joinDate"
                    :name="myplan.contacs"
                  >
                    <template v-slot:lable v-if="myplan.state == 500">
                      <div class="slot-lable">
                        <!-- <img src="../assets/img/审核中.png" alt=""> -->
                        <!-- <img src="../assets/img/通过.png" alt=""> -->
                        <!-- <img src="../assets/img/驳回.png" alt=""> -->
                        <img src="../assets/img/已退款.png" alt>
                      </div>
                    </template>
                    <template v-slot:btnOpen>
                      <div class="btn-wrap">
                        <div
                          class="btn content-center"
                          @click="$router.push({name: 'planInitial',query:{planNo: myplan.planNo, productCode: myplan.productCode}})"
                        >查看计划</div>
                      </div>
                    </template>
                  </card>
                </div>
                <div
                  @click.stop="clickActiveIndexHangdle(i)"
                  v-if="activeIndex===i"
                  class="selected yes"
                ></div>
                <div
                  @click.stop="clickActiveIndexHangdle(i)"
                  v-else
                  class="selected iconfont iconweixuanzhong"
                ></div>
              </section>
            </mu-load-more>
          </mu-container>
        </mu-paper>
         <div class="LoadingShow" v-if="loadedAll === true">加载完成</div>
      </div>
    </main>
    <!--        <footerBtn></footerBtn>-->
       

    <mu-dialog
      title="申请驳回"
      width="600"
      max-width="80%"
      :esc-press-close="false"
      :overlay-close="false"
      :open.sync="openAlert"
    >
      您的申请已被驳回是否重新申请
      <mu-button
        slot="actions"
        style="color: rgba(234,234,234,1)"
        flat
        color="rgba(234,234,234,1)"
        @click="closeAlertDialog"
      >取消</mu-button>
      <mu-button slot="actions" flat color="#f8b62d" @click="yes">重新申请</mu-button>
    </mu-dialog>
    <footer>
      <div
        class="ordinary-claims"
        v-promise-btn
        @click="toComponsate(0)"
        :style="{backgroundColor: activeIndex===undefined? 'rgba(234,234,234,1)': ''}"
      >申请理赔</div>
      <div
        @click="toComponsate(1)"
        v-if="activeIndex!==undefined &&myplan.list[activeIndex].compensateFlag "
        class="Second-claims"
        v-promise-btn
      >申请秒赔</div>
    </footer>
  </div>
</template>
<script>
import PageHeader from "../components/PageHeader/PageHeader";
import footerBtn from "../components/footerBtn/FooterBtn";
import card from "../components/Card/Card";
export default {
  name: "myplan",
  components: {
    PageHeader,
    footerBtn,
    card
  },
  data() {
    return {
      openAlert: false,
      amount: "余额",
      waitingperiod: "等待期:",
      name: "Bytan.zZ",
      myplan: [],
      planNo: "",
      activeIndex: null,
      productCode: "",
      relationList: [],
      activeIndex: undefined,
      refreshing: false,
      loading: false,
      pageSize: 5,
      page: 1,
      type: 0,
      addFlag: 0,
      loadedAll: false
    };
  },
  methods: {
    yes() {
      this.$router.push({
        path: "/compensate/inputForm",
        query: {
          type: this.type,
          planNo: this.myplan.list[this.activeIndex].planNo
        }
      });
    },
    openAlertDialog() {
      this.openAlert = true;
    },
    closeAlertDialog() {
      this.openAlert = false;
    },
    toAddFamily() {
      debugger;
      if (this.relationList[0].joinFlag) {
        this.$router.push("/selectAddFamily");
      } else {
        this.$toast.error("您还没加入计划");
      }
    },
    // open() {
    //     this.$router.push({
    //         name: 'planInitial',
    //         query:{planNo: this.planNo , productCode: this.productCode}
    //     })
    // },
    clickActiveIndexHangdle(index) {
      if (this.activeIndex === index) {
        this.activeIndex = undefined;
        return;
      }
      this.activeIndex = index;
    },
    toComponsate(type) {
      debugger;
      if (this.activeIndex === undefined) {
        return;
      }
      let plan = this.myplan.list[this.activeIndex];
      if (plan.state === 200 || plan.state === 300) {
        return this.$axios
          .post("v1/mutually/compensate/compensateDetail", {
            orderNo: this.myplan.list[this.activeIndex].planNo
          })
          .then(res => {
            debugger;
            let data = res.data.data;
            debugger;

            if (res.data.code === 8888) {
              debugger;
              this.$router.push({
                path: "/compensate/inputForm",
                query: {
                  type: type,
                  planNo: this.myplan.list[this.activeIndex].planNo,
                  first: res.data.code
                }
              });
              return;
            }
            // if(!data.payProveFlag){
            //   this.$router.push({path: '/compensate/imageForm', query: {orderNo: res.data.data.orderNo}})
            //   return
            // }
            // if(res.data.code !==200){
            //   this.$toast.error(res.data.msg)
            //   return
            // }

            let state = res.data.data.state;
            if (state == 150 || state == 450 || state == 750 || state == 900) {
              this.type = type;
              this.openAlertDialog();
              return;
            }
            // if(state==100) {
            //   this.$toast.message('初审审核中')
            //   return
            // }
            // if(state ===200){
            //   this.$toast.message('等待首次划款中')
            //   return
            // }
            // if(state=== 300) {
            //   this.$toast.message('人工审核中')
            //   return
            // }
            // if(state===450){
            //   this.$toast.message('人工审核中')
            //
            // }
            if (state == 400) {
              //todo  去支付费用
              this.$router.push({
                path: "/compensate/defrayment",
                query: {
                  orderNo: this.myplan.list[this.activeIndex].planNo,
                  type: type
                }
              });
              return;
            }

            // this.$toast.warning(errorText)

            // }
            debugger;
            // if(res.data.code === 8888) {
            //   debugger
            //   this.$router.push({
            //     path: '/compensate/inputForm',
            //     query: {
            //       type: 1,
            //       planNo: this.myplan.list[this.activeIndex].planNo
            //     }
            //   })
            // }
            if (state == 0) {
              debugger;
              this.$router.push({
                path: "/compensate/inputForm",
                query: {
                  type: type,
                  planNo: this.myplan.list[this.activeIndex].planNo
                }
              });
              return;
            }
            debugger;
            this.$router.push({
              path: "/compensateInfo",
              query: {
                orderNo: this.myplan.list[this.activeIndex].planNo,
                type: res.data.data.type
              }
            });
          });
      } else {
        let errorText = "";
        switch (plan.state) {
          case 0:
            errorText = "计划初始化中";
            break;
          case 100:
            errorText = "计划还在等待期中";
            break;
          case 400:
            errorText = "计划已失效";
            break;
          case 500:
            errorText = "计划已退出";
            break;
        }
        this.$toast.warning(errorText);
      }
      // }
    },
    // refresh () {
    //     this.refreshing = true;
    //     this.$refs.container.scrollTop = 0;
    //     setTimeout(() => {
    //         this.refreshing = false;
    //         // this.text = this.text === 'List' ? 'Menu' : 'List';
    //         // this.num = 10;
    //     }, 2000)
    // },
    load() {
      debugger;
      this.loading = true;
      this.page++;
      this.get_list();
      // setTimeout(() => {
      //     this.loading = false;
      //     // this.num += 10;
      // }, 2000)
    },
    get_list(flag) {
      debugger;
      this.$axios
        .post("/v1/mutually/plan/planList", {
          page: this.page,
          pageSize: this.pageSize
        })
        .then(res => {
          if (res.data.code !== 200) {
            this.$toast.error(res.data.msg);
            return;
          }
          if (flag) {
            this.myplan = res.data.data;
          } else {
            // debugger
            res.data.data.list.forEach(item => {
              // debugger
              this.myplan.list.push(item);
              
              
              // if (res.data.data.list == []) {
              //   console.log(132132)
              // }
            });
          }
          this.loading = false;
          debugger
          if (res.data.data.list.length == 0) {
            this.loadedAll = true;
          }
        });
    }
  },
  created() {
    debugger;
    // this.$axios.get('/v1/mutually/plan/planList').then(res=>{
    //   if(res.data.code !==200){
    //     this.$toast.error(res.data.msg)
    //     return
    //   }
    //   console.log(res)
    //   this.myplan = res.data.data
    //   // console.log(this.myplan)
    //   this.myplan.list.forEach(element => {
    //     this.planNo = element.planNo
    //     this.productCode = element.productCode
    //     console.log(this.productCode)
    //   });
    // })
    this.get_list(true);

    this.$axios.get("v1/family/info/familyList").then(res => {
      if (res.data.code !== 200) {
        this.$toast.error(res.data.msg);
        return;
      }
      this.relationList = res.data.data;
      this.addFlag = this.relationList[0].addFlag;
      // console.log(res)
    });
  }
};
</script>
<style scoped lang="scss">
.demo-loadmore-wrap {
  width: 100%;
  height: 800px;
  // min-height: 500px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: $c-bai;
  &::-webkit-scrollbar {
    display: none;
  }
  .mu-appbar {
    width: 100%;
  }
}
.LoadingShow{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
}
.demo-loadmore-content {
  // flex: 1;
  // height: 600px;

  min-height: 500px;

  overflow: auto;
  width: 100%;
  // -webkit-overflow-scrolling: touch;
}
.slot-lable {
  // width: 100px;
  // height: 500px;
  // position: relative;
  position: absolute;
  right: 0px;
  top: 6px;
  width: 50px;
  height: 50px;
  z-index: 99;
  img {
    // position: absolute;
    // right: 0px;
    // top: 16px;
    // width: 50px;
    // height: 50px;
    // z-index: 99;
  }
}
.card {
}
span {
}
.add-family {
  margin-bottom: 10px;
}
.card {
  position: relative;
  height: 160px;

  &.active {
  }
  .selected {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
    &.yes {
      background: url("../assets/img/选中.svg") center no-repeat;
      background-size: 100% 100%;
    }
    &.iconweixuanzhong {
      color: $c-bai;
    }
  }
  .iconxuanzhong {
    color: $c-bai;
  }
  // padding: 0px 12px;
  margin: auto;
}
.add-family-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
  .list {
    display: flex;
    flex-direction: column;
    width: 25%;
    text-align: center;
    align-items: center;
    .list-img {
      width: 50px;
      height: 50px;
      background: $c-cheng;
      border: 2px solid rgba(239, 162, 32, 1);
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
      .iconjiahaotianjia {
        font-size: 25px;
        position: relative;
        top: 6px;
        color: white;
      }
    }
  }
}
.plan-text {
  font-size: $f15;
  font-weight: bold;
  color: rgb(51, 51, 51);
  padding: 12px 12px 0;
  display: inline-block;
}
footer {
  width: 100%;
  height: 49px;
  z-index: 9999999999;
  // border: 1px solid black;
  position: fixed;
  bottom: 0;
  display: flex;
  text-align: center;
  line-height: 50px;
  color: #fff;
  .ordinary-claims {
    /*width: 70%;*/
    flex: 2;
    height: 100%;
    background-color: #eea31f;
  }
  .Second-claims {
    width: 30%;
    height: 100%;
    background-color: #f26d00;
  }
}
.btn-wrap {
  width: 80px;
  height: 33px;
  background: $c-bai;
  border-radius: 10px;
  margin: 20px 0 0 10px;
  color: $c-cheng;
  line-height: 33px;
}
.purchase-plan {
  padding-bottom: 60px;
}
</style>

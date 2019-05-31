<template>
  <div style="padding-top: 80px;">
    <!-- <div class="title-date">
      2019
    </div>-->
    <mu-paper :z-depth="1" class="demo-loadmore-wrap">
      <mu-container ref="container" class="demo-loadmore-content">
        <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
          <mu-list>
            <div style="padding-top: 20px;">
              <div v-for="(item,index) in niticeList" :key="index">
                <div class="card">
                  <div class="title">蜂链互助公示</div>
                  <div class="dateInfo">{{item.stage}}</div>
                  <div class="info-wrap">
                    <div>
                      <div>
                        <span>{{item.publicityCount}}</span> 人
                      </div>
                      <div>本期公示人数</div>
                    </div>
                    <div class="xian"></div>
                    <div>
                      <div>
                        <span>{{item.totalAmount}}</span> 人
                      </div>
                      <div>预计分摊总额</div>
                    </div>
                    <div class="xian"></div>
                    <div>
                      <div>
                        <span>{{item.shareCount}}</span> 人
                      </div>
                      <div>分摊人数</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </mu-list>
        </mu-load-more>
      </mu-container>
      
    </mu-paper>

    <!-- <div class="contact-wrap">
      <div class="contact">
        <span class="iconfont iconlianxikefu"></span>联系客服
      </div>
    </div> -->
  </div>
</template>

<script>
// import Card from "../../components/NoticeCard/NoticeCard";
export default {
  name: "oldNotice",
  // components:{
  //   Card
  // }
  data() {
    return {
      page: 1,
      pageSize: 3,
      niticeList: [],
      refreshing: false,
      loading: false,
      num: 5
    };
  },
  methods: {
    refresh () {
      this.refreshing = true;
      this.$refs.container.scrollTop = 0;
      setTimeout(() => {
        this.refreshing = false;
      }, 2000)
    },
    load () {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.niticeList = this.niticeList.concat(this.niticeList)
      }, 2000)
    }
  },
  created() {
    this.$axios
      .post("/v1/publicity/publicity/publicityList", {
        page: this.page,
        pageSize: this.pageSize
      })
      .then(res => {
        if (res.data.code !== 200) {
          this.$toast.error(res.data.msg);
          return;
        }
        this.niticeList = res.data.data;
        console.log(this.niticeList);
      });
  }
};
</script>

<style lang="scss" scoped>
.demo-loadmore-wrap {
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  // background-color: $c-hui;
  .mu-appbar {
    width: 100%;
  }
}
.demo-loadmore-content {
  // flex: 1;
  overflow: auto;
  width: 100%;
  -webkit-overflow-scrolling: touch;
}
.title-date {
  padding: 12px;
  font-size: $f15;
  // padding-top: 90px;
  font-weight: bold;
  color: $c-black;
}
// ul {
//   list-style: none;
//   margin: 0px;
//   padding: 0px;
//   color: $c-cheng;
//   margin-left: 28px;
//   li {
//     position: relative;
//     padding-bottom: 12px;
//     &:before {
//       position: absolute;
//       left: -14px;
//       top: 50%;
//       transform: translate(-50%, -50%);
//       content: "";
//       display: inline-block;
//       width: 10px;
//       height: 10px;
//       background: rgba(239, 162, 32, 1);
//       border-radius: 50%;
//     }
//   }
// }
.card {
  width: 333px;
  margin: auto;
  margin-bottom: 12px;
}
.contact-wrap {
  color: $c-cheng;
  width: 100%;
  margin-top: 13px;
  display: flex;
  justify-content: center;
  padding-bottom: 70px;
}
.contact {
  span.iconfont {
    font-size: 24px;
    // vertical-align: middle;
    padding-right: 13px;
  }
  width: 132px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  // border: 1px solid $c-cheng;
  border-radius: 17px;
}

.mu-sub-header {
  color: $c-bai;
  font-size: 3.733vw;
  line-height: 1.5;
  padding-left: 4.267vw;
  width: 100%;
  // content: "viewport-units-buggyfill; font-size: 3.733vw; line-height: 12.8vw; padding-left: 4.267vw";
}
.card .title {
  color: #fff;
  // font-family: SourceHanSansCN-Normal;
  font-weight: 700;
  padding: 0px !important;
  font-size: 14px;
}
.card {
  color: #fff;
  font-size: 12px;
  /*width:351px;*/
  /*max-height:126px;*/
  background: rgba(239, 162, 32, 1);
  border-radius: 5px;
  padding: 12px 20px 13px 12px;
  background: url("../../assets/gongshi.png") center no-repeat;
  background-size: 100% 100%;
  background-origin: padding-box;
  color: $c-bai;
  .dateInfo {
    margin: 12px 0 18px 0px;
    width: 100px;
    height: 22px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 11px;
    text-align: center;
    line-height: 21px;
    background: rgba(255, 255, 255, 0.2);
  }
  .info-wrap {
    display: flex;
    overflow: hidden;
    // padding-top: 40px;
    height: auto;
    justify-content: space-between;
    & > div {
      & span {
        font-size: 18px;

        font-weight: bold;
      }
      text-align: center;
      /*width: 33%;*/
    }
    .xian {
      /*height: 33px;*/
      border-right: 1px solid $c-bai;
    }
    & > div:last-of-type {
      border: none;
    }
  }
}
</style>

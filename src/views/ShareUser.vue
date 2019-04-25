<template>
  <div>
    <mu-appbar
      style="width: 100%;"
      color="primary"
      text-color="#666"
      z-depth="0"
    >
      <mu-button icon slot="left" @click="$router.go(-1)">
        <mu-icon value=":iconfont iconfanhui"></mu-icon>
      </mu-button>
      订单详情
      <mu-button icon slot="right" :ripple="false"> </mu-button>
    </mu-appbar>
    <main class="page-margin-top">
      <div class="headerNav">
        <div class="headerLogin">
          <img src="../assets/PNG/head.png" alt="" />
        </div>
        <router-link tag="div" to="/perinfor">
          <section class="information">
            <span class="name">姓名：{{ name }}</span
            ><span class="state">已实名</span>
            <div class="number"><span>18800004239</span></div>
            <div class="autograph">海内存知己，天涯若比邻</div>
          </section>
        </router-link>
      </div>
      <mu-sub-header class="list-title">我分享的用户共{{amount}}人</mu-sub-header>
      <mu-list
        class="user-list"
        textline="two-line"
        toggle-nested
        :nested-indent="false"
      >
        <mu-list-item
          class="title"
          button
          :ripple="false"
          nested
          :open="open === 'list1'"
          nested-list-class="user-item"
          @toggle-nested="open = arguments[0] ? 'list1' : ''"
        >
          <mu-list-item-action>
            一级分享
          </mu-list-item-action>
          <mu-list-item-title></mu-list-item-title>
          <mu-list-item-action>
            <mu-icon
              class="toggle-icon"
              size="24"
              value="keyboard_arrow_down"
            ></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <template v-if="open == 'list1'">
          <mu-list

            v-for="( { prefix, prefixData }, i) in oneList.list"
            :key="i"
            class="user-list"
            textline="two-line"
            :nested-indent="false"
          >
            <mu-sub-header class="list-title">{{prefix}}</mu-sub-header>

            <mu-list-item
              class="title"
              button
              :ripple="false"
              nested
              :open="open === 'send'"
              nested-list-class="user-item"
              @toggle-nested="open = arguments[0] ? 'send' : ''"
            >
              <mu-list-item tag="div" avatar :ripple="false" v-for="({contacs,headPortrait, nickname},i) in prefixData">
                <mu-list-item-action>
                  <mu-avatar size="33">
                    <img :src="headPortrait" />
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title style="color:rgba(51, 51, 51, 1)" >nickname</mu-list-item-title>
                  <mu-list-item-sub-title>
                    <span style="color:rgba(112,112,112,1)">contacs</span>
                  </mu-list-item-sub-title>
                </mu-list-item-content>
              </mu-list-item>
            </mu-list-item>
          </mu-list>

        </template>
      </mu-list>
      <mu-list
        class="user-list"
        textline="two-line"
        toggle-nested
        :nested-indent="false"
      >
        <mu-list-item
          class="title"
          button
          :ripple="false"
          nested
          :open="open === 'list2'"
          nested-list-class="user-item"
          @toggle-nested="open = arguments[0] ? 'list2' : ''"
        >
          <mu-list-item-action>
            二级级分享
          </mu-list-item-action>
          <mu-list-item-title></mu-list-item-title>
          <mu-list-item-action>
            <mu-icon
              class="toggle-icon"
              size="24"
              value="keyboard_arrow_down"
            ></mu-icon>
          </mu-list-item-action>
        </mu-list-item>
        <template v-if="open == 'list2'">
          <mu-list

            v-for="( { prefix, prefixData }, i) in towList.list"
            :key="i"
            class="user-list"
            textline="two-line"
            :nested-indent="false"
          >
            <mu-sub-header class="list-title">{{prefix}}</mu-sub-header>

            <mu-list-item
              class="title"
              button
              :ripple="false"
              nested
              :open="open === 'send'"
              nested-list-class="user-item"
              @toggle-nested="open = arguments[0] ? 'send' : ''"
            >
              <mu-list-item tag="div" avatar :ripple="false" v-for="({contacs,headPortrait, nickname},i) in prefixData">
                <mu-list-item-action>
                  <mu-avatar size="33">
                    <img :src="headPortrait" />
                  </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content>
                  <mu-list-item-title style="color:rgba(51, 51, 51, 1)" >nickname</mu-list-item-title>
                  <mu-list-item-sub-title>
                    <span style="color:rgba(112,112,112,1)">contacs</span>
                  </mu-list-item-sub-title>
                </mu-list-item-content>
              </mu-list-item>
            </mu-list-item>
          </mu-list>

        </template>
      </mu-list>

    </main>
  </div>
</template>
<script>
import PageHeader from "../components/PageHeader/PageHeader";
export default {
  name: "shareuser",

  components: {
    PageHeader
  },
  data() {
    return {
      open: "send",
      upload: "我分享的用户",
      name: "yangsda",
      oneList: [],
      towList: [],
      amount: 0
    };
  },
  computed: {

  },
  created() {
    this.$axios.post('/v1/user/share/shareList', {
      type: 0
    }).then(res =>{
      console.log(res)
      this.oneList = res.data.data
      this.amount +=res.data.data.list.length

    })
    this.$axios.post('/v1/user/share/shareList', {
      type: 1
    }).then(res =>{
      console.log(res)
      this.towList = res.data.data
      this.amount +=res.data.data.list.length
    })
  }
};
</script>
<style scoped lang="scss">
li {
  list-style: none;
}
.list-title {
  /*margin: 12px 0;*/
  /*background: url("") center no;*/
  font-size: 13px;
  font-family: SourceHanSansCN-Normal;
  font-weight: bold;
  color: rgba(51, 51, 51, 1);
}
.user-list /deep/ .title > .mu-item-wrapper > .mu-item {
  height: 44px;
  background: rgba(255, 255, 255, 1);
  .mu-list {
  }
}
.user-list /deep/ .mu-item.has-avatar {
  height: auto;
  height: 50px;
  padding: 0px;
  background: rgba(255, 255, 255, 1);
}
.user-list /deep/ .mu-item__open {
  /*padding: 0px;*/
}
.mu-item {
  /*height:44px;*/
}

.page-margin-top {
  /*margin-top: ;*/
  padding-top: 56px;
}
.headerNav {
  width: 351px;
  height: 85px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 12px auto 0px;
  display: flex;
  align-items: center;
  position: relative;
  .headerLogin {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(207, 207, 207, 1);
    border: 2px solid rgba(239, 162, 32, 1);
    margin-left: 12px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .information {
    margin-left: 13px;
    .name {
      width: 108px;
      height: 14px;
      font-size: 13px;
      font-family: SourceHanSansCN-Normal;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
    }
    .number {
      font-size: 10px;
      font-family: SourceHanSansCN-Normal;
      font-weight: bold;
      color: rgba(112, 112, 112, 1);
      font-size: 10px;
    }
    .autograph {
      font-size: 12px;
      font-family: SourceHanSansCN-Normal;
      font-weight: bold;
      color: rgba(112, 112, 112, 1);
      margin-top: 20px;
    }
  }
  .state {
    display: inline-block;
    width: 40px;
    height: 15px;
    line-height: 15px;
    background: rgba(239, 162, 32, 1);
    border: 0px solid rgba(255, 255, 255, 1);
    font-size: 12px;
    font-family: SourceHanSansCN-Normal;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-left: 6px;
  }
}
</style>

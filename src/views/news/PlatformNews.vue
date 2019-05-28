<template>
    <div>
        <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
          <mu-button icon slot="left" @click="$router.go(-1)">
            <mu-icon value=":iconfont iconfanhui"></mu-icon>
          </mu-button>
          平台消息
          <mu-button icon slot="right" :ripple="false">
          </mu-button>
        </mu-appbar>
        <main>
            <mu-paper :z-depth="1" class="demo-loadmore-wrap" style="padding-top: 35px;">
            <mu-container ref="container" class="demo-loadmore-content">
              <mu-load-more  :refreshing="refreshing" :loading="loading" @load="load">
                <mu-list>
                  <!-- <template v-for="(item,i) in num">
                    <mu-list-item :key="i">
                      <mu-list-item-title>{{text}} Item {{i}}</mu-list-item-title>
                    </mu-list-item>
                  </template> -->
                  <div v-for="(item,index) in postList" :key="index">
                    <!-- <div v-for="(i,index) in num" :key="index"></div> -->
                    <div class="postList" @click="tab(index)">
                      <div class="postList-date">{{item.postDate}}5月8日 &nbsp; &nbsp; 晚上21:32</div>
                      <div class="postList-img-title">
                        <img src="@/assets/gongshi.png" alt="">
                        <div class="postList-title">与强者同行，蜂链科技总裁周鹏参加第八届亚太地区商学院沙漠挑战赛</div>
                      </div>
                    </div>
                    <div class="postData" v-for="(items,index) in postList.slice(1)" :key="index" @click="tab(index)">
                        <div class="postData-title">中国已做好全面应对的准备，大国风范不外如是</div>
                        <img class="postData-img" src="@/assets/PNG/中青年.png" alt="">
                    </div>
                  </div>

                </mu-list>
              </mu-load-more>
            </mu-container>
          </mu-paper>
        </main>
    </div>
</template>

<script>
export default {
  name: 'PlatformNews',
  data () {
    return {
      postList: [],
      num: 5,
      refreshing: false,
      loading: false,
      page: 1,
      pageSize: 15
    }
  },
  created () {

  },
  methods: {
    // refresh () {
    //   this.refreshing = true;
    //   this.$refs.container.scrollTop = 0;
    //   setTimeout(() => {
    //     this.refreshing = false;
    //     // this.text = this.text === 'List' ? 'Menu' : 'List';
    //     this.num = 20;
    //   }, 2000)
    // },
    tab (i) {
      console.log(i)
      this.$router.push({
        name: 'NewsDetail',
        params: {
          'id': i
        }
      })
    },
    load () {
      this.loading = true
      this.get_search_list();
    },
    get_postList () {
      this.$axios.post('/v1/manage/post/postList', {
        'page': this.page,
        'pageSize': this.pageSize,
        'type': 1
      }).then(res => {
        
        console.log(res)

        if (res.data.data.length > 0 ) {

						if (this.page == 1) {
							this.postList = res.data.data;
						}
						else {
							this.postList = this.postList.concat(res.data.data);
						}
						this.page++;
					} else {
						//not more data
						// this.finished = true;
					}
					
					if(res.data.data.length < this.page_size){
						//not more data
						// this.finished = true;
					}
					
					this.loading = false;
					console.log(res.data.data.length);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-loadmore-wrap {
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  background-color: $c-hui;
  .mu-appbar {
    width: 100%;
  }
}
.demo-loadmore-content {
  // flex: 1;
  overflow: auto;
  width: 100%;
  // -webkit-overflow-scrolling: touch;
}
.postList{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .postList-date{
    padding: 12px 0 12px 0px;
    color: #707070;
  }
}
.postList-title{
  position: absolute;
  bottom: 0px;
  padding: 12px;
  color: $c-bai;
}
.postList-img-title{
  width:351px;
  height:150px;
  border-radius:3px;
  overflow: hidden;
}
.postData{
  width:351px;
  height:75px;
  background: $c-bai;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.postData-title{
  padding: 12px;
}
.postData-img{
  width: 50px;
  height: 50px;
  margin: 13px 14px 13px 0;
}
</style>

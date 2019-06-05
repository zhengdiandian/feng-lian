<template>
    <div>
        <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
          <mu-button icon slot="left" @click="$router.go(-1)">
            <mu-icon value=":iconfont iconfanhui"></mu-icon>
          </mu-button>
          系统消息
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
                    <div class="postList" @click="tab(item.message[0].id)">
                      <div class="postList-date">{{item.postDate}}</div>
                      <div class="postList-img-title" >
                        <img :src="item.message[0].img" alt="">
                        <div class="postList-title">{{item.message[0].postTitle}}</div>
                      </div>
                    </div>
                    <div class="postData" v-for="(items,index) in item.message.slice(1)" :key="index" @click="tab(items.id)">
                        <div class="postData-title">{{items.postTitle}}</div>
                        <img class="postData-img" :src="items.img" alt="">
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
      pageSize: 1
    }
  },
  created () {
    this.get_postList ()
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
        query: {
          'id': i
        }
      })
    },
    load () {
      this.loading = true
      // this.page++
      this.get_postList();
    },
    get_postList() {
      this.$axios.post('/v1/manage/post/postList', {
        'page': this.page,
        'pageSize': this.pageSize,
        'type': 0
      }).then(res => {
        
        // console.log(res)
        // this.postList = res.data.data;
        if (res.data.data.length > 0 ) {

						if (this.page == 1) {
							this.postList = res.data.data;
						}
						else {
							this.postList = this.postList.concat(res.data.data);
						}
						this.page++;
          } 
						this.loading = false;          
					
				// 	if(res.data.data.length < this.page_size){
				// 		//not more data
				// 		// this.finished = true;
				// 	}
					
				// 	this.loading = false;
				// 	console.log(res.data.data.length);
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
  // color: $c-bai;
}
.postList-img-title{
  width:351px;
  height:150px;
  border-radius:3px;
  overflow: hidden;
  // border-bottom: 1px solid #000;
  img{
    width: 100%;
    height: 100%;
  }
}
.postData{
  width:351px;
  height:75px;
  background: $c-bai;
  display: flex;
  // justify-content: center;
  align-items: center;
  margin: auto;
  // border-bottom: 1px solid $c-cheng;
}
.postData-title{
  padding: 12px;
  position: relative;
  
}
.postData-img{
  width: 50px;
  height: 50px;
  position: absolute;
  right: 20px;
  // background: $c-cheng;
}
</style>

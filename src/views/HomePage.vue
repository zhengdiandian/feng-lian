<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary" text-color='#666'>
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
        <h3>shouye</h3>
      <mu-button flat slot="right">LOGIN</mu-button>
    </mu-appbar>
    <mu-carousel class="banner">
      <mu-carousel-item>
        <img src="https://i0.hdslb.com/bfs/live/10096926.jpg@.webp?04161413">
      </mu-carousel-item>
      <mu-carousel-item>
        <img src="https://i0.hdslb.com/bfs/live/10096926.jpg@.webp?04161413">
      </mu-carousel-item>
      <mu-carousel-item>
        <img src="https://i0.hdslb.com/bfs/live/10096926.jpg@.webp?04161413">
      </mu-carousel-item>
      <mu-carousel-item>
        <img src="https://i0.hdslb.com/bfs/live/10096926.jpg@.webp?04161413">
      </mu-carousel-item>
    </mu-carousel>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "homePage",
  data() {
    return {
      shift: "movies"
    };
  },
  components: {}
};
</script>
<style lang="scss" scoped>
.banner {
  width: $gw;
  height: 270px;
}
h3{
    text-align: center;
}
</style>

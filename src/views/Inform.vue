<template>
  <div>
    <mu-appbar style="width: 100%;" color="primary" text-color='#666' z-depth="0">
      <mu-button icon slot="left" @click="$router.go(-1)">
      <mu-icon value=":iconfont iconfanhui"></mu-icon>
      </mu-button>
      健康告知
      <mu-button icon slot="right"  :ripple="false">
      </mu-button>
    </mu-appbar>
    <div class="page-margin-top">
      <!-- <img :src="this.writingImg" alt=""> -->
      <img :src="MutualRule.healthyImg" alt="" srcset="">
      <div class="wrap" style="margin-bottom:50px;">
        <div v-html="MutualRule.healthyText"></div>
        <!--<div class="importance">-->
          <!--<span class="icon">-->
            <!--重要-->
          <!--</span>-->
          <!--Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem possimus assumenda error labore perspiciatis, voluptate molestias obcaecati qui. Aliquid quos hic porro nulla earum facere quis eos, saepe nemo minima.-->
          <!--T, dignissimos, nobis ipsum dolores distinctio ad iure rerum alias natus!-->
        <!--</div>-->
        <!--<div class="space importance">-->

          <!--<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus atque, cumque dolor dolores est et-->
            <!--facere ipsam laboriosam minus nesciunt nobis officia placeat provident, quas quibusdam sapiente tempora vel!-->
          <!--</div>-->
          <!--<div>Animi asperiores delectus eos ex, nulla soluta voluptatibus. Consectetur deserunt dignissimos distinctio-->
            <!--dolor labore laboriosam numquam officia quis sequi, voluptatum? Aliquam aperiam, est iste libero non-->
            <!--officiis saepe tempora unde.-->
          <!--</div>-->
          <!--<div>Ab aliquam aliquid aut consequuntur cum distinctio dolore earum esse facilis hic laudantium minima nam-->
            <!--quas quasi, quidem ratione rem repellat sapiente sed unde. Aliquid amet aperiam architecto officia quo.-->
          <!--</div>-->
          <!--<div>Consectetur, culpa delectus doloribus eligendi ex excepturi harum id illum incidunt ipsam nemo, nostrum-->
            <!--odio perferendis repellat repudiandae sed veniam voluptates voluptatum! Beatae culpa, distinctio excepturi-->
            <!--facere laboriosam perspiciatis tempore!-->
          <!--</div>-->
          <!--<div>A ad asperiores consectetur, cum dignissimos dolorem eum illo illum inventore maiores vel vitae.-->
            <!--Cupiditate, deserunt dignissimos dolore esse labore maxime necessitatibus non optio possimus quaerat quos-->
            <!--suscipit, tempore voluptas!-->
          <!--</div>-->
          <!--<div>Animi deserunt distinctio dolor, dolorum eius eveniet illo magnam magni minus nisi non nostrum placeat,-->
            <!--praesentium quibusdam quis recusandae reprehenderit sequi, sit tempora tenetur. Animi distinctio iure optio-->
            <!--pariatur voluptatem!-->
          <!--</div>-->
          <!--<div>Ab alias assumenda dolorem dolorum ea eius eligendi enim eos et exercitationem expedita explicabo facere-->
            <!--fugit harum itaque iure nemo nesciunt, numquam officiis, quas quo sapiente sunt temporibus tenetur-->
            <!--voluptatem.-->
          <!--</div>-->
          <!--<div>Accusamus assumenda aut beatae corporis, et eum expedita facere harum incidunt itaque modi molestiae-->
            <!--natus necessitatibus neque numquam odit placeat, quasi qui quidem quo reprehenderit sed similique suscipit-->
            <!--voluptas voluptatibus.-->
          <!--</div>-->
          <!--<div>Accusantium amet blanditiis, cumque earum est id in minima, nobis obcaecati praesentium rem, sunt vero-->
            <!--voluptas. Alias aliquam cumque, error ex exercitationem labore, libero molestias nostrum possimus-->
            <!--repellendus totam unde.-->
          <!--</div>-->
          <!--<div>Accusamus aperiam blanditiis dolorum eos hic illo illum incidunt iusto nemo neque obcaecati perferendis-->
            <!--perspiciatis provident, quam quidem quisquam sunt tempore veritatis vero voluptas. Ad ea et modi-->
            <!--necessitatibus perferendis.-->
          <!--</div>-->
          <!--<div>Aliquid amet asperiores atque blanditiis commodi, cum delectus dicta dolor error, expedita facilis fugiat-->
            <!--impedit laudantium molestiae nam nemo neque nobis odio omnis placeat porro quis quos repellat voluptatibus-->
            <!--voluptatum.-->
          <!--</div>-->
          <!--<div>Aliquam assumenda esse fugit in itaque odio quaerat tempore! Aut doloribus ex hic ipsa ipsam minima odit-->
            <!--omnis quod ratione ullam! Aliquam dolore eius eos id itaque porro quod, voluptates?-->
          <!--</div>-->
          <!--<div>Natus nemo omnis perspiciatis placeat quam repudiandae unde! A ab ad, aperiam aspernatur corporis fugit-->
            <!--ipsam molestiae nam nostrum obcaecati perferendis quibusdam quo quod recusandae, saepe sint veniam voluptas-->
            <!--voluptatum!-->
          <!--</div>-->
          <!--<div>A aliquid assumenda culpa debitis delectus distinctio, dolore dolores ea eum facere fugit illum ipsa-->
            <!--ipsum, laudantium maxime nam nesciunt nisi nulla odit provident sed sit sunt suscipit tempora velit!-->
          <!--</div>-->
          <!--<div>Ab, ad at autem corporis culpa dicta doloremque doloribus dolorum earum error expedita facere hic id-->
            <!--illum labore magnam maiores molestias neque obcaecati officia reiciendis tempora ut veniam veritatis-->
            <!--voluptatem!-->
          <!--</div>-->
          <!--<div>Animi et libero odit sapiente voluptatum! Dolorem enim explicabo hic numquam officiis omnis pariatur,-->
            <!--praesentium quaerat quos recusandae similique veniam! Commodi cum fugit harum porro repudiandae voluptates!-->
            <!--Ipsum, nesciunt ullam.-->
          <!--</div>-->
          <!--<div>Consequuntur deserunt dignissimos dolores fugiat, minus neque nostrum numquam obcaecati quos repellat-->
            <!--repellendus saepe? Earum enim quaerat sapiente! A aut consectetur, debitis expedita id porro quibusdam-->
            <!--reiciendis sit voluptate voluptatem!-->
          <!--</div>-->
          <!--<div>Ab atque nihil sed! Animi, commodi cumque delectus ea est fugiat fugit laudantium natus necessitatibus,-->
            <!--quas ratione sequi suscipit, tempore velit veniam. Magni, numquam, quod. Dolorum labore mollitia porro-->
            <!--voluptates?-->
          <!--</div>-->
          <!--<div>Accusantium aliquam amet, aspernatur, consequuntur cumque error incidunt libero nam numquam odit-->
            <!--provident quod similique velit! Adipisci, debitis deleniti distinctio doloremque fuga modi mollitia,-->
            <!--placeat, quae quis repellat vero voluptate!-->
          <!--</div>-->
          <!--<div>A ad delectus dolorum incidunt ipsa non, possimus quam reiciendis vel vitae. A adipisci autem distinctio-->
            <!--ea facilis illum ipsa ipsum, iure laboriosam quisquam recusandae, reiciendis sint sunt totam voluptas!-->
          <!--</div>-->
          <!--<div>Aliquam assumenda eos impedit in laborum necessitatibus perspiciatis suscipit temporibus voluptates.-->
            <!--Culpa dicta dolore doloribus ea fugiat ipsum minima obcaecati optio possimus quisquam quo quod quos-->
            <!--repudiandae vel, velit, vero.-->
          <!--</div>-->
          <!--<div>Consequuntur culpa ducimus, eaque esse odit quaerat recusandae? Ab ad beatae cum, debitis delectus-->
            <!--distinctio, doloremque, labore nihil non odio quo repellat. Asperiores delectus eos laborum mollitia-->
            <!--officiis repudiandae sint.-->
          <!--</div>-->
          <!--<div>Asperiores consequatur corporis cupiditate dolorem, enim, et impedit iusto laboriosam maiores maxime-->
            <!--mollitia nemo odio omnis pariatur possimus qui quos reprehenderit sed sit tempore tenetur velit veritatis-->
            <!--vitae. Deserunt, temporibus?-->
          <!--</div>-->
          <!--<div>Amet aperiam aut consequuntur culpa debitis deserunt dolorem eligendi eos exercitationem facilis fuga-->
            <!--illum, maiores minus modi nam nemo nostrum omnis optio quas quasi quisquam quo rem rerum voluptate-->
            <!--voluptatum?-->
          <!--</div>-->
          <!--<div>Aperiam eveniet fuga harum ipsum iusto laboriosam, laborum laudantium minus nihil numquam obcaecati omnis-->
            <!--perferendis quaerat quam reprehenderit sit suscipit vel veritatis. Deleniti hic ipsa itaque, laborum odit-->
            <!--repudiandae sit?-->
          <!--</div>-->
          <!--<div>Animi dignissimos expedita nulla, odio reiciendis repellendus veritatis. Ab dignissimos nesciunt placeat-->
            <!--suscipit! Animi, consequatur cupiditate facilis itaque minima modi neque nulla optio perferendis quae quam-->
            <!--rerum saepe sit voluptatem?-->
          <!--</div>-->
          <!--<div>Autem laudantium nemo optio possimus rerum ut voluptates? Ad amet commodi dolorum ea fugiat illo illum-->
            <!--itaque iure molestiae natus, obcaecati quas quos ratione repellat sapiente sunt veniam voluptatibus-->
            <!--voluptatum?-->
          <!--</div>-->
          <!--<div>Deleniti dolore eos, illum incidunt ipsam officiis quasi suscipit. Assumenda atque, commodi consequatur-->
            <!--consequuntur delectus distinctio earum error molestiae nam necessitatibus nihil officiis placeat quidem-->
            <!--ratione rem tempora veniam voluptatem!-->
          <!--</div>-->
          <!--<div>Beatae consequuntur dolor eos illo ipsa ipsum, natus nisi quibusdam? Accusamus adipisci amet debitis-->
            <!--distinctio ea eaque itaque natus numquam, odio qui quidem, quos ratione sit temporibus, ullam velit veniam.-->
          <!--</div>-->
          <!--<div>Accusamus architecto aspernatur aut corporis, debitis deserunt ducimus eveniet expedita fugit illo illum,-->
            <!--maiores nobis nostrum optio quaerat quam ratione recusandae reiciendis rem repudiandae sed soluta tempora-->
            <!--unde voluptatem voluptatum.-->
          <!--</div>-->
          <!--Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem possimus assumenda error labore perspiciatis, voluptate molestias obcaecati qui. Aliquid quos hic porro nulla earum facere quis eos, saepe nemo minima.-->
          <!--T, dignissimos, nobis ipsum dolores distinctio ad iure rerum alias natus!-->
        <!--</div>-->
      </div>

    </div>
    <div class="btn-wrap">
      <div class="btn" >不符合条件</div>
      <div class="btn" @click="ToJoinPlan">符合条件, 继续</div>
    </div>
  </div>

</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'Inform',
    data() {
      return {
        // writingImg: this.writingData.writingImg,
        // writing: this.writingData.writing,
        // MutualRule: this.$route.params.MutualRule,
        productCode: this.$route.params.productCode
      }
    },
    methods:{
      ToJoinPlan() {
        this.$router.push({
          name: 'joinPlan',
          params:{
            productCode:this.productCode,
            MutualRule: this.MutualRule
          }
        })
      }
    },
    computed: mapState(['MutualRule'])
  }
</script>

<style lang="scss" scoped>
  .btn-wrap{
    width: 100%;
    position: fixed;
    bottom: 0px;
    left: 0px;
    & .btn:last-child{
      background-color: $c-cheng;
      color: $c-bai;
    }
    .btn{

      display: inline-block;
      width: 50%;
      height:50px;
      text-align: center;
      line-height: 50px;
      background:rgba(255,255,255,1);
    }
  }
    img{
      width:100%;
      height:150px;
    }
    .wrap{
      padding: 12px 15px 12px 22px;
    }
 .space{
   margin-top: 12px;
 }
  .importance{
    width:339px;
    padding: 12px;
    /*height:123px;*/
    background:$c-hui;
    .icon{
      display: inline-block;
      text-align: center;
      width:60px;
      height:25px;
      line-height: 25px;
      color: $c-bai;
      background:rgba(239,162,32,1);
      vertical-align: bottom;
    }
  }
</style>

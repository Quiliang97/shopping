<template>
  <div class="container">
    <!-- 顶部标签 -->
    <van-nav-bar title="购物车">
      <template #right> </template>
    </van-nav-bar>
    <div class="shangpin">
      <div class="box1" v-for="(item,index) in list" :key="index">
        <van-checkbox v-model="checked">
          <van-card
            :num="item.num"
            :tag="item.tag"
            :price="item.price"
            :desc="item.desc"
            :title="item.title"
            :thumb="item.thumb"
            :origin-price="item.originPrice"
          >
          <template #num>
            <van-stepper v-model="item.num" />
          </template>
          </van-card>
        </van-checkbox>
      </div>
      
    </div>
    <LoadingMore :status.sync="loadingType"></LoadingMore>
    <van-submit-bar
      :price="totalPrice"
      button-text="提交订单"
      @submit="onSubmit"
    />
    <FooterBar></FooterBar>
  </div>
</template>
<script>
import FooterBar from "@/components/FooterBar";
import LoadingMore from "@/components/LoadingMore";
// 
import { Toast } from "vant";

export default {
  components: { FooterBar,LoadingMore },
  data() {
    return {
      active: 2,
      checked: true,
      loadingType:'loading',
      list:[]
    };
  },
  computed:{
    totalPrice(){
      var total = 0;
      this.list.map(a=>{
        total += a.price * a.num;
      })
      total = total*100
      return total;
    }
  },
  created(){
    this.getList();
  },
  methods: {
    getList(){
      this.loadingType = 'loading'
      setTimeout(()=>{
        this.list = [{
            num:1,
            tag:"热卖",
            price:1000,
            desc:"描述信息",
            title:"OPPO K9 65W超级闪充 90Hz",
            thumb:"//m.360buyimg.com/babel/s584x584_jfs/t1/159316/17/20577/82915/607e98d3E8c95f229/a8985a8f9dc05290.jpg!q70.dpg",
            originPrice:"4599"
          },
          {
            num:1,
            tag:"热卖",
            price:4299,
            desc:"描述信息",
            title:"OPPO K9 65W超级闪充 90Hz",
            thumb:"//m.360buyimg.com/babel/s584x584_jfs/t1/159316/17/20577/82915/607e98d3E8c95f229/a8985a8f9dc05290.jpg!q70.dpg",
            originPrice:"4599"
          }
        ]
        this.loadingType = 'nomore'
      },5500)
    },
    onClickLeft() {
      Toast("返回");
    },
    onClickRight() {
      Toast("按钮");
    },
    onClick() {
      this.$router.push({
        path: "/goods",
      });
    },
    onSubmit(){

    }
  },
};
</script>
<style scoped>
.container {
  width: 100%;
}

.van-submit-bar {
  margin-bottom: 1.7rem;
}
.shangpin /deep/ .van-checkbox .van-checkbox__label {
  width: 100%;
  margin-left: 8px;
  color: #323233;
  line-height: 20px;
}
.shangpin .box1 {
  width: 95%;
  margin: 0.3rem auto;
  /* border-radius: 0.1rem; */
  background: rgb(247, 245, 245);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
</style>
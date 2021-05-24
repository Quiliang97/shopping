<template>
  <div class="container">
    <!-- 顶部标签 -->
    <van-nav-bar title="购物车" left-text="返回" left-arrow>
      <template #right> </template>
    </van-nav-bar>
    <div class="shangpin">
      <div class="box1">
        <van-checkbox v-model="checked">
          <van-card
            num="1"
            tag="热卖"
            price="4299"
            desc="描述信息"
            title="OPPO K9 65W超级闪充 90Hz"
            thumb="//m.360buyimg.com/babel/s584x584_jfs/t1/159316/17/20577/82915/607e98d3E8c95f229/a8985a8f9dc05290.jpg!q70.dpg"
            origin-price="4599"
          />
        </van-checkbox>
      </div>
      <div class="box1">
        <van-checkbox v-model="checked">
          <van-card
            num="1"
            tag="特价"
            price="6288"
            desc="描述信息"
            title="小米11 Ultra 至尊 5G "
            thumb="//m.360buyimg.com/babel/s584x584_jfs/t1/160453/12/19378/100951/6077edbcE10e6e6d1/2066877cbb6f964a.jpg!q70.dpg"
            origin-price="6588"
          />
        </van-checkbox>
      </div>
      <div class="box1">
        <van-checkbox v-model="checked">
          <van-card
            num="1"
            tag="优惠"
            price="4398"
            desc="描述信息"
            title="vivo X60 Pro  华彩"
            thumb="//m.360buyimg.com/babel/s584x584_jfs/t1/174413/30/7319/65951/608bef7dE88319d3f/478a7ed5be4ad76c.jpg!q70.dpg"
            origin-price="4498"
          />
        </van-checkbox>
      </div>
      <div class="box1">
        <van-checkbox v-model="checked">
          <van-card
            num="1"
            tag="新品"
            price="8188"
            desc="描述信息"
            title="华为 HUAWEI Mate 40 Pro "
            thumb="//m.360buyimg.com/babel/s584x584_jfs/t1/162900/27/11867/71424/6049ed4eEdd49f572/1d353a7b5f8d67b8.jpg!q70.dpg"
            origin-price="8288"
          />
        </van-checkbox>
      </div>
    </div>
    <van-submit-bar
      :price="2367350"
      button-text="提交订单"
      @submit="onSubmit"
    />
    <FooterBar></FooterBar>
  </div>
</template>
<script>
import FooterBar from "@/components/FooterBar";
// 
import { Toast } from "vant";

export default {
  data() {
    return {
      active: 2,
      checked: true,
    };
  },
  components: { FooterBar },

  methods: {
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
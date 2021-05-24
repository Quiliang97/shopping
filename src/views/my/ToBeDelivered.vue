<template>
  <div class="container">
    <!-- 顶部标签 -->
    <van-nav-bar
      title="待发货"
      left-text="返回"
      left-arrow
      @click-left="onClick()"
    />
    <div class="shangpin">
      <div class="box1">
        <van-card
          num="1"
          tag="优惠"
          price="4398"
          desc="描述信息"
          title="vivo X60 Pro  华彩"
          thumb="//m.360buyimg.com/babel/s584x584_jfs/t1/174413/30/7319/65951/608bef7dE88319d3f/478a7ed5be4ad76c.jpg!q70.dpg"
          origin-price="4498"
        />
      </div>
      <van-steps :active="active1">
        <van-step>买家下单</van-step>
        <van-step>买家付款</van-step>
        <van-step>等待发货</van-step>
      </van-steps>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import Vant from "vant";
Vue.use(Vant);
import { Toast } from "vant";

export default {
  data() {
    return {
      active: 2,
      checked: true,
      active1: 1,
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
    onClick() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.container {
  width: 100%;
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
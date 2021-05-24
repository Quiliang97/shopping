<template>
  <div class="container">
    <!-- 顶部标签 -->
    <van-nav-bar
      title="收藏"
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
      <div class="box1">
        <van-card
          num="1"
          tag="特价"
          price="6288"
          desc="描述信息"
          title="小米11 Ultra 至尊 5G "
          thumb="//m.360buyimg.com/babel/s584x584_jfs/t1/160453/12/19378/100951/6077edbcE10e6e6d1/2066877cbb6f964a.jpg!q70.dpg"
          origin-price="6588"
        />
      </div>
      <div class="box1">
        <van-card
          num="1"
          tag="新品"
          price="8188"
          desc="描述信息"
          title="华为 HUAWEI Mate 40 Pro "
          thumb="//m.360buyimg.com/babel/s584x584_jfs/t1/162900/27/11867/71424/6049ed4eEdd49f572/1d353a7b5f8d67b8.jpg!q70.dpg"
          origin-price="8288"
        />
      </div>
    </div>
  </div>
</template>
<script>
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
.van-button {
  width: 2rem;
  float: right;
  margin-right: 0.4rem;
  margin-top: 0.2rem;
  background: rgb(255, 255, 255);
  border: 1px solid red;
  color: red;
}
</style>
<template>
  <div class="container">
    <!-- 顶部标签 -->
    <van-nav-bar
      title="历史记录"
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
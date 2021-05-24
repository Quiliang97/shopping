<template>
  <div class="container">
    <!-- 顶部标签 -->
    <van-nav-bar
      title="余额"
      left-text="返回"
      left-arrow
      @click-left="onClick()"
    />
    <van-cell-group>
      <van-cell title="余额" icon="gold-coin-o" value="2399￥" />
    </van-cell-group>
    <van-cell is-link title="充值" @click="show = true" />
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
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
      show: false,
      actions: [{ name: "微信" }, { name: "支付宝" }, { name: "银行卡" }],
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
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
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
.van-cell__value span {
  color: red;
  font-size: 0.6rem;
  font-weight: bold;
}
</style>
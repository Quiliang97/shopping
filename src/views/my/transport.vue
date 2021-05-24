<template>
  <div class="container">
    <!-- 顶部标签 -->
    <van-nav-bar
      title="待收货"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-card
      num="1"
      tag="特价"
      price="6288"
      desc="描述信息"
      title="小米11 Ultra 至尊 5G "
      thumb="//m.360buyimg.com/babel/s584x584_jfs/t1/160453/12/19378/100951/6077edbcE10e6e6d1/2066877cbb6f964a.jpg!q70.dpg"
      origin-price="6588"
    />

    <van-steps direction="vertical" :active="0">
      <van-step>
        <h3>【城市】物流状态1</h3>
        <p>2016-07-12 12:40</p>
      </van-step>
      <van-step>
        <h3>【城市】物流状态2</h3>
        <p>2016-07-11 10:00</p>
      </van-step>
      <van-step>
        <h3>快件已发货</h3>
        <p>2016-07-10 09:30</p>
      </van-step>
    </van-steps>
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
</style>
<template>
  <div class="container">
    <!-- 顶部搜索 -->
    <van-search
      v-model="value"
      shape="round"
      background="#6bd5f5"
      placeholder="请输入搜索关键词"
    />
    <!-- 顶部导航 -->
    <van-tabs v-model="active" animated>
      <van-tab v-for="X in index" :key="X" :title="X">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <router-link to="/goods">
            <van-card
              price="8999.00"
              desc="12.9英寸平板电脑 2021年新款(128G WLAN版/M1芯片Liquid视网膜XDR屏/MHNF3CH/A) 深空灰色"
              title="Apple iPad Pro"
              thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
              origin-price="9299"
              tag="标签"
            />
          </router-link>
        </van-pull-refresh>
      </van-tab>
    </van-tabs>

    <FooterBar></FooterBar>
  </div>
</template>

<script>

import FooterBar from "@/components/FooterBar";


import { Toast } from "vant";


export default {
  data() {
    return {
      value: "",
      count: 0,
      isLoading: false,
      index: ["综合", "销量", "评价", "价格"],
      active: 2,
    };
  },
  components: { FooterBar },

  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
};
</script>
<style scoped>
.container {
  width: 100%;
}
</style>
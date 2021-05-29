<template>
  <div class="container">
    <!-- 顶部搜索 -->
    <Search ref="search" @search="onSearch"></Search>
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

  </div>
</template>

<script>


import Search from '@/components/Search'
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
  components: { Search },
  created(){
    
  },
  mounted(){
    this.$refs.search.childFunction();
    console.log(this.$refs.search.num);
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },

    onSearch(data,arg1,arg2){
      console.log('监听到子组件方法search',data,arg1)
    }
  },
};
</script>
<style scoped>
.container {
  width: 100%;
}
</style>
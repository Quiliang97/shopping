<template>
    <div class="container">
        <van-search
  v-model="value"
  shape="round"
  background="#ff9600"
  placeholder="请输入搜索关键词"
/>

<van-tabs v-model="active" animated>
  <van-tab v-for="X in index" :key="X" :title=" X">
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <router-link to="/goods">
  <van-card

  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
  origin-price="10.00"
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
import Vue from 'vue'
import FooterBar from '@/components/FooterBar';
import { Search } from 'vant';
import { PullRefresh } from 'vant';
import { Card } from 'vant';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);

Vue.use(Card);

Vue.use(PullRefresh);
import { Toast } from 'vant';


Vue.use(Search);
export default {
    data() {
    return {
      value: '',
       count: 0,
      isLoading: false,
      index:["综合","销量","评价","价格"],
        active: 2,
    };
  },
  components:{FooterBar,},

  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
  },
    
}
</script>
<style scoped>
.container{
    width: 100%;

   
}
    
</style>
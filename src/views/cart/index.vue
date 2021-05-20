<template>
    <div class="container">
      <van-nav-bar title="购物车" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>

<van-tabs v-model="active">
  <van-tab v-for="index in 4" :key="index">
    <template #title> <van-icon name="more-o" />全部 </template>
    
   <van-card
  num="2"
  tag="标签"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
  origin-price="10.00"
/>
  </van-tab>
</van-tabs>
<van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />

        <FooterBar></FooterBar>
    </div>
</template>
<script>
import FooterBar from '@/components/FooterBar'
import Vue from 'vue';
import { NavBar } from 'vant';
import { Toast } from 'vant';
import { Icon } from 'vant';
import { Tab, Tabs } from 'vant';
import { Card } from 'vant';
import { SubmitBar } from 'vant';

Vue.use(SubmitBar);

Vue.use(Card);

Vue.use(Tab);
Vue.use(Tabs);

Vue.use(Icon);

Vue.use(NavBar);
export default{
     data() {
    return {
      active: 2,
    };
  },
    components:{FooterBar}
,
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
  }
</script>
<style scoped>
.container{
    width: 100%;
}

.van-submit-bar {
    margin-bottom: 1.7rem;
}
</style>
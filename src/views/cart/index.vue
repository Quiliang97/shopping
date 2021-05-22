<template>
    <div class="container">
      <van-nav-bar title="购物车" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="search" size="18" />
  </template>
</van-nav-bar>

<van-tabs v-model="active">
  <van-tab title="最近">
    <van-card  @click="onClick()"
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
>
  <template #tags>
    <van-tag plain type="danger">标签</van-tag>
    <van-tag plain type="danger">标签</van-tag>
  </template>
  <template #footer>
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </template>
</van-card>
  </van-tab>
  <van-tab title="喜欢">内容 2</van-tab>
  <van-tab title="看了又看">内容 3</van-tab>
  <van-tab title="收藏">内容 4</van-tab>
</van-tabs>
<van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />

  <FooterBar></FooterBar>
    </div>
</template>
<script>
import FooterBar from '@/components/FooterBar'
import Vue from 'vue';

import Vant from 'vant';

Vue.use(Vant);
import { Toast } from 'vant';

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
   onClick(){
     this.$router.push({
             path:"/goods"
         })
   }
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
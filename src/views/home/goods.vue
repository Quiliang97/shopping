<template>
    <div class="container">
      <van-nav-bar title="商品详情" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="share-o" size="18" />
   
  </template>
</van-nav-bar>
<div class="swipe">
    <van-swipe :autoplay="5000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>
</div>

<div class="xinxi">
    <div class="jiage">￥5999 <van-i<van-icon name="star-o" /></div>
    <div class="name"> Apple iPad Air 10.9英寸 <van-tag type="warning">热卖</van-tag></div>
    <van-row gutter="20">
  <van-col span="8">卖家包邮</van-col>
  <van-col span="8">月销量：<span>99</span></van-col>
  <van-col span="8">湖北/武汉</van-col>
</van-row>
</div>

<div class="guige">
    <van-cell-group>
  <van-cell title="商品库存" value="2358台" />
   <van-cell title="满包邮" value="68元" />
    <van-cell title="购买类型" value="默认" />
     <van-cell title="优惠" value="20元优惠券" />
       <van-cell title="服务" value="VIP" />
 
 
</van-cell-group>
<van-divider dashed>商品介绍</van-divider>

<div class="jieshao">
    <img src="//img13.360buyimg.com/cms/jfs/t1/147289/3/13468/518240/5fa4c23eEf7e3abec/f8c71ace59ed6625.jpg!q70.dpg.webp" alt="">
</div>

</div>


<div class="buttmo-box">
<van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="shop-o" text="店铺" />
  <van-goods-action-button color="#ff9600" type="warning" text="加入购物车" />
  <van-goods-action-button color="#f11826" type="danger" text="立即购买" />
</van-goods-action>
</div>


           </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { Icon } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from 'vant';
import { Tag } from 'vant';
import { Col, Row } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Divider } from 'vant';

Vue.use(Divider);

Vue.use(Cell);
Vue.use(CellGroup);

Vue.use(Col);
Vue.use(Row);

Vue.use(Tag);

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

Vue.use(Lazyload);

Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.use(Icon);
Vue.use(NavBar);

import { Toast } from 'vant';

export default {
    data() {
    return {
      images: [
        '//m.360buyimg.com/mobilecms/s750x750_jfs/t1/176993/7/4981/94794/60a473d8E7c4f8d86/d3d4998ecd93ece0.jpg!q80.dpg.webp',
        '//m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/111952/24/18007/46901/5f616ea4E7891ecc6/11b385fe3e994d05.jpg!q70.dpg.webp',
        '//m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/121423/21/12711/95744/5f61584fE2353358e/5d54ae47ef8194d3.jpg!q70.dpg.webp',
        '//m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/146176/10/8525/33360/5f616eadEcb1ec8c4/6d37bf0195f3fede.jpg!q70.dpg.webp',
      ],
    };
  },
  methods: {
     
    onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    },
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
  },
};

</script>
<style scoped>


.container{
    width: 100%;
   

   
}
.container /deep/ .van-nav-bar__content {
    
     color: #ff9600;
}

.swipe {
    width: 100%;
    height: 10rem;
   
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
.swipe /deep/.van-swipe {
    width: 100%;
    
}
.swipe /deep/.van-swipe img {
    width: 100%;
    height: auto;
}
    
.buttmo-box {
    width: 100%;
    background: rgb(226, 111, 111);
}
 .container .xinxi {
    width: 100%;
  background: rgb(252, 255, 251);
  margin-top: .2rem;
    padding: .3rem 0;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    
   
}
.jiage {
    font-size: .8rem;
    color: chocolate;
    margin-left: .3rem;
    border: 1 solid rgb(235, 233, 233);

}
.jiage .van-icon {
    padding: .3rem;
    margin-left: 5rem;
}
.name {
     font-size: .6rem;
      margin-left: .7rem;
      margin-bottom: .3rem;
}

.van-row .van-col {
    font-size: .2rem;
   text-align: center;
   color: rgb(187, 185, 185);
}

.guige {
    width: 100%;
    margin-top: .3rem;
    
}

.jieshao {
    width: 100%;
}
.jieshao img {
    width: 100%;
}
</style>
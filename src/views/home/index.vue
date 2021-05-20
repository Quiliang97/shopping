<template>
    <div class="container">
       <van-search
  v-model="value"
  shape="round"
  background="#ff9600"
  placeholder="请输入搜索关键词"
/>
<router-link to="/details">
<van-row type="flex" justify="space-around">
   <van-col span="4">三星</van-col>
    
  <van-col span="4" >苹果</van-col>
  <van-col span="4">华为</van-col>
  <van-col span="4">小米</van-col>
  <van-col span="4">魅族</van-col>
</van-row>  
</router-link>


<div class="swipe">
<!-- 轮播图 -->
<van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img v-lazy="image" />
  </van-swipe-item>
</van-swipe>
</div>

<div  class=" box2">
    <van-row class="box1" type="flex" justify="space-around">
    <van-col span="4"><img src="https://img.alicdn.com/tfs/TB1AgS.D1T2gK0jSZFvXXXnFXXa-400-400.png" alt=""></van-col>
   <van-col span="4"><img src="https://img.alicdn.com/tfs/TB1.Y9mMEY1gK0jSZFMXXaWcVXa-800-800.jpg" alt=""></van-col>
   <van-col span="4"><img src="https://img.alicdn.com/tfs/TB16TYrG4z1gK0jSZSgXXavwpXa-1200-1200.png" alt=""></van-col>
   <van-col span="4"><img src="https://gw.alicdn.com/tfs/TB1a0jqXwFY.1VjSZFqXXadbXXa-400-400.jpg" alt=""></van-col>
</van-row>  
  <van-row class="box1" type="flex" justify="space-around">
    <van-col span="4"><img src="https://gw.alicdn.com/tfs/TB1LFOZcUKF3KVjSZFEXXXExFXa-400-400.jpg" alt=""></van-col>
   <van-col span="4"><img src="https://img.alicdn.com/tfs/TB1AgS.D1T2gK0jSZFvXXXnFXXa-400-400.png" alt=""></van-col>
   <van-col span="4"><img src="https://img.alicdn.com/tfs/TB1AgS.D1T2gK0jSZFvXXXnFXXa-400-400.png" alt=""></van-col>
   <van-col span="4"><img src="https://img.alicdn.com/tfs/TB1AgS.D1T2gK0jSZFvXXXnFXXa-400-400.png" alt=""></van-col>
</van-row>  
</div>
<van-notice-bar
  left-icon="volume-o"
  text="夏日清凉特惠价，快来抢购吧！“清凉一夏”网店特价大酬宾，全场7.8折，清凉盛夏！"
/>
<div class="huodong">
    <div class="img1"> <img src="https://gdp.alicdn.com/imgextra/i1/1669409267/O1CN01LwnjHX2IKKvmMAD1t_!!1669409267.jpg" alt=""></div>
    <div class="img2"></div>
    <div class="img2"></div>
</div>
<!-- 新品上市 -->
<div class="xinpin">
    <p>新品上市！</p>

</div>
<div class="shangpin"></div>










        <FooterBar></FooterBar>
    </div>
</template>
<script>
import Vue from 'vue'
import FooterBar from '@/components/FooterBar'
import 'vant/lib/index.css';
import { Search } from 'vant';
import { Lazyload } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { NoticeBar } from 'vant';

Vue.use(NoticeBar);

Vue.use(Swipe);
Vue.use(SwipeItem)

Vue.use(Lazyload);
Vue.use(SwipeItem);
Vue.use(Search);
import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);

import { Toast } from 'vant';

export default {
  data() {
    return {
      value: '',
      images: [
        'https://img.alicdn.com/imgextra/i3/4131678395/O1CN01bP01Fp2BsxbXv6Kh5_!!4131678395-0-shop_design.jpg',
        'https://img.alicdn.com/imgextra/i3/4131678395/O1CN01dOgRBA2BsxbUXsGyt_!!4131678395-0-shop_design.jpg',
        'https://img.alicdn.com/imgextra/i1/4131678395/O1CN01vUFLQQ2BsxbTSvYIZ_!!4131678395-0-shop_design.jpg',
      ],
    };
  },
//   搜索栏
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
  },
   components:{FooterBar,}
};

   

</script>

  
<style scoped>
.container{
    width: 100%;

   
}
/* 顶部导航 */
 .container /deep/ .van-row {
     height: 1rem;
    background: #ff9600;
    color: #fff;
    font-size: 0.5rem;
    text-align: center
   
   };
   
   /* 轮播图 */
   .swipe{
    width: 100%;
    height:5rem;
    background: rgb(242, 106, 106);
   }
  .swipe /deep/ .van-swipe .van-swipe-item {
   width: 100%;
    height: 4rem;
  
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    overflow:hidden;
  }
.van-swipe .van-swipe-item img {
    
     height: 100%;
     margin-left: -2rem;
}
   /* .my-swipe .van-swipe-item {
       width: 80%;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  } */

 
 
.container .box2 /deep/ .van-row .van-col {
    width: 1.4rem;
     height: 1.4rem;
    background: #e2dfdb;
    color: #fff;
    font-size: 0.5rem;
    text-align: center;
    
    border-radius: 5rem;
    margin: auto 0;
    line-height: 1.4rem;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
   
   };
   .container .box2 /deep/ .van-row .van-col img {
     width: 1.4rem;
     height: auto;
   }
  .container .box2{
    margin-top: .2rem;
   }
  .container .box2 >>>.box1 {
       background: #ffffff;
       height:1.8rem;

   }
.huodong{
     margin-top: .3rem;
    width: 100%;
    height: 5rem;
   
}
 .huodong .img1 {
     /* border-radius: .2rem; */
     margin-left: 0.5rem;
     width: 4rem;
     height: 100%;
     background: rgb(179, 210, 250);
     float: left;
     overflow:hidden;
 }
 .huodong .img1 img {
    width: 4rem;
    margin-top: -1.7rem;
     
 }
.huodong .img2 {
      border-radius: .2rem;
    margin-left: 4.8rem;
    margin-bottom: .3rem;
     width: 4.7rem;
     height: 47%;
     background: rgb(179, 210, 250);
}

.xinpin {
    margin-top: .3rem;
    width: 100%;
    height: 1.2rem;
    border-bottom:1px solid rgb(233, 229, 229);
    margin-bottom: 10rem;
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.2);
}
.xinpin p {
     line-height: 1.2rem;
    font-size: .4rem;
    margin-left: 0.3rem;
}
 .container .box2 /deep/ .van-row .van-col img {
     width: 1.4rem;
     border-radius: 5rem;
     height: auto;
   }
</style>
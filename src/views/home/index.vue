<template>
  <div class="container">
    <!-- 搜索栏 -->
    <van-search
      v-model="value"
      shape="round"
      background="#fff"
      placeholder="请输入搜索关键词"
    />

    <!-- 顶部导航栏 -->
    <!-- <router-link to="/details">
      <van-row type="flex" justify="space-around">
        <van-col span="4">三星</van-col>
        <van-col span="4">苹果</van-col>
        <van-col span="4">华为</van-col>
        <van-col span="4">小米</van-col>
        <van-col span="4">魅族</van-col>
      </van-row>
    </router-link> -->

    <div class="swipe">
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 品牌按钮 -->
    <div class="box2">
      <van-row class="box1" type="flex" justify="space-around">
        <van-col span="4"
          ><router-link to="/details"><img
            src="https://img.alicdn.com/tfs/TB1AgS.D1T2gK0jSZFvXXXnFXXa-400-400.png"
            alt=""
        /></router-link></van-col>
        <van-col span="4"
          ><router-link to="/details"><img
            src="https://img.alicdn.com/tfs/TB1.Y9mMEY1gK0jSZFMXXaWcVXa-800-800.jpg"
            alt=""
        /></router-link></van-col>
        <van-col span="4"
          ><router-link to="/details"><img
            src="https://img.alicdn.com/tfs/TB16TYrG4z1gK0jSZSgXXavwpXa-1200-1200.png"
            alt=""
        /></router-link></van-col>
        <van-col span="4"
          ><router-link to="/details"><img
            src="https://gw.alicdn.com/tfs/TB1a0jqXwFY.1VjSZFqXXadbXXa-400-400.jpg"
            alt=""
        /></router-link></van-col>
      </van-row>
      <van-row class="box1" type="flex" justify="space-around">
        <van-col span="4"
          ><router-link to="/details"><img
            src="https://gw.alicdn.com/tfs/TB1LFOZcUKF3KVjSZFEXXXExFXa-400-400.jpg"
            alt=""
        /></router-link></van-col>
        <van-col span="4"
          ><router-link to="/details"><img
            src="https://gw.alicdn.com/imgextra/i3/O1CN01ny1OeB1XgydVPVUHU_!!6000000002954-0-tps-800-800.jpg"
            alt=""
        /></router-link></van-col>
        <van-col span="4"
          ><router-link to="/details"><img
            src="https://gw.alicdn.com/tfs/TB1pT1YcUCF3KVjSZJnXXbnHFXa-400-400.jpg"
            alt=""
        /></router-link></van-col>
        <van-col span="4"
          ><router-link to="/details"><img
            src="https://img.alicdn.com/tps/TB2J_rQeMMPMeJjy1XdXXasrXXa_!!2019781857-0-daren.jpg"
            alt=""
        /></router-link></van-col>
      </van-row>
    </div>

    <van-notice-bar
      left-icon="volume-o"
      text="夏日清凉特惠价，快来抢购吧！“清凉一夏”网店特价大酬宾，全场7.8折，清凉盛夏！"
    />

    <!-- 活动图片 -->
    <div class="huodong">
      <div class="img1">
        <img
          src="https://gdp.alicdn.com/imgextra/i1/1669409267/O1CN01LwnjHX2IKKvmMAD1t_!!1669409267.jpg"
          alt=""
        />
      </div>
      <div class="img2">
        <img
          src="//m.360buyimg.com/babel/jfs/t1/190530/5/4565/41687/60a928f4E70e7999d/3b083b5d82a1e665.png"
          alt=""
        />
      </div>
      <div class="img2">
        <img
          src="//m.360buyimg.com/babel/jfs/t1/196758/35/3708/61500/60a31fb3E896c15e4/2bfbf2baf7fdb8f8.png"
          alt=""
        />
      </div>
    </div>
    <!-- 新品上市 -->
    <div class="xinpin">
      <p class="title">新品上市！</p>
      <van-row type="flex" justify="space-around">
        <van-col span="11">
          <img
            src="//m.360buyimg.com/babel/s584x584_jfs/t1/159316/17/20577/82915/607e98d3E8c95f229/a8985a8f9dc05290.jpg!q70.dpg"
            alt=""
          />
          <h6>OPPO K9 65W超级闪充 90Hz</h6>
          <div class="jiage">
            <h5>￥4599</h5>
            <span>46人付款</span>
          </div>
        </van-col>

        <van-col span="11">
          <img
            src="//m.360buyimg.com/babel/s584x584_jfs/t1/160453/12/19378/100951/6077edbcE10e6e6d1/2066877cbb6f964a.jpg!q70.dpg"
            alt=""
          />
          <h6>小米11 Ultra 至尊 5G</h6>
          <div class="jiage">
            <h5>￥6599</h5>
            <span>96人付款</span>
          </div>
        </van-col>

        <van-col span="11">
          <img
            src="//m.360buyimg.com/babel/s584x584_jfs/t1/174413/30/7319/65951/608bef7dE88319d3f/478a7ed5be4ad76c.jpg!q70.dpg"
            alt=""
          />
          <h6>vivo X60 Pro 华彩</h6>
          <div class="jiage">
            <h5>￥4498</h5>
            <span>78人付款</span>
          </div>
        </van-col>
        <van-col span="11">
          <img
            src="//m.360buyimg.com/babel/s584x584_jfs/t1/162900/27/11867/71424/6049ed4eEdd49f572/1d353a7b5f8d67b8.jpg!q70.dpg"
            alt=""
          />
          <h6>华为 HUAWEI Mate 40 Pro</h6>
          <div class="jiage">
            <h5>￥8288</h5>
            <span>963人付款</span>
          </div>
        </van-col>
        <van-col span="11">
          <img
            src="//m.360buyimg.com/babel/s584x584_jfs/t1/159316/17/20577/82915/607e98d3E8c95f229/a8985a8f9dc05290.jpg!q70.dpg"
            alt=""
          />
          <h6>OPPO K9 65W超级闪充 90Hz</h6>
          <div class="jiage">
            <h5>￥4599</h5>
            <span>46人付款</span>
          </div>
        </van-col>

        <van-col span="11">
          <img
            src="//m.360buyimg.com/babel/s584x584_jfs/t1/160453/12/19378/100951/6077edbcE10e6e6d1/2066877cbb6f964a.jpg!q70.dpg"
            alt=""
          />
          <h6>小米11 Ultra 至尊 5G</h6>
          <div class="jiage">
            <h5>￥6599</h5>
            <span>96人付款</span>
          </div>
        </van-col>

        <van-col span="11">
          <img
            src="//m.360buyimg.com/babel/s584x584_jfs/t1/174413/30/7319/65951/608bef7dE88319d3f/478a7ed5be4ad76c.jpg!q70.dpg"
            alt=""
          />
          <h6>vivo X60 Pro 华彩</h6>
          <div class="jiage">
            <h5>￥4498</h5>
            <span>78人付款</span>
          </div>
        </van-col>
        <van-col span="11">
          <img
            src="//m.360buyimg.com/babel/s584x584_jfs/t1/162900/27/11867/71424/6049ed4eEdd49f572/1d353a7b5f8d67b8.jpg!q70.dpg"
            alt=""
          />
          <h6>华为 HUAWEI Mate 40 Pro</h6>
          <div class="jiage">
            <h5>￥8288</h5>
            <span>963人付款</span>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="shangpin"></div>

    <FooterBar></FooterBar>
  </div>
</template>
<script>
import Vue from "vue";
import FooterBar from "@/components/FooterBar";
import "vant/lib/index.css";

import { Search } from "vant";
import { Lazyload } from "vant";
import { Swipe, SwipeItem } from "vant";
import { NoticeBar } from "vant";
import { Tag } from "vant";

Vue.use(Tag);

Vue.use(NoticeBar);

Vue.use(Swipe);
Vue.use(SwipeItem);

Vue.use(Lazyload);
Vue.use(SwipeItem);
Vue.use(Search);
import { Col, Row } from "vant";

Vue.use(Col);
Vue.use(Row);

import { Toast } from "vant";

export default {
  data() {
    return {
      value: "",
      images: [
        "https://img.alicdn.com/imgextra/i3/4131678395/O1CN01bP01Fp2BsxbXv6Kh5_!!4131678395-0-shop_design.jpg",
        "https://img.alicdn.com/imgextra/i3/4131678395/O1CN01dOgRBA2BsxbUXsGyt_!!4131678395-0-shop_design.jpg",
        "https://img.alicdn.com/imgextra/i1/4131678395/O1CN01vUFLQQ2BsxbTSvYIZ_!!4131678395-0-shop_design.jpg",
      ],
    };
  },
  //   搜索栏
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast("取消");
    },
  },
  components: { FooterBar },
};
</script>

  
<style scoped>
.container {
  width: 100%;
  padding-bottom: 60px;
}
/* 顶部导航 */
.container /deep/ .van-row {
  background: #6bd5f5;
  color: #fff;
  font-size: 0.5rem;
  text-align: center;
}

/* 轮播图 */
.swipe {
  width: 100%;
  /* height: 5rem; */
  /* background: rgb(242, 106, 106); */
}
.swipe /deep/ .van-swipe .van-swipe-item {
  width: 100%;
  height: 4rem;

  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
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
  /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); */
}
.container .box2 /deep/ .van-row .van-col img {
  width: 1.4rem;
  height: auto;
}
.container .box2 {
  margin-top: 0.2rem;
}
.container .box2 >>> .box1 {
  background: #ffffff;
  height: 1.8rem;
}
.huodong {
  margin-top: 0.3rem;
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
  overflow: hidden;
}
.huodong .img1 img {
  width: 4rem;
  margin-top: -1.7rem;
}
.huodong .img2 {
  border-radius: 0.2rem;
  margin-left: 4.8rem;
  margin-bottom: 0.3rem;
  width: 4.7rem;
  height: 47%;
  background: rgb(179, 210, 250);
  overflow: hidden;
}
.huodong .img2 img {
  height: 100%;
}

.xinpin {
  margin-top: 0.3rem;
  width: 100%;
  border-top: 1px solid rgb(233, 229, 229);
  /* box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.2); */
}
.xinpin .title {
  line-height: 1.2rem;
  font-size: 0.4rem;
  padding-left: 0.3rem;
  border-bottom: 1px solid rgb(233, 229, 229);
}
.container .box2 /deep/ .van-row .van-col img {
  width: 1.4rem;
  border-radius: 5rem;
  height: auto;
}

.xinpin .van-row {
  background: rgb(255, 255, 255);
}
.xinpin .van-col {
  height: 6rem;
  margin-top: 0.3rem;
  border-radius: 3px;
  color: #000;
  padding: 0;
  border:1px solid #eee;
}
.xinpin .van-col img {
  width: 100%;
  border-radius: 0.3rem;
}
.xinpin .van-col h6 {
  margin: 0 .3rem;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;text-align:left;font-weight: normal;
}
.xinpin .van-col h5 {
  float: left;
  font-size: 0.4rem;
  margin: 0 0.3rem;
  color: red;
}
.xinpin .van-col span {
  font-size: 0.3rem;
  color: rgb(175, 171, 171);
}
</style>
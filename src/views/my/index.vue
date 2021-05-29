<template>
  <div class="container">
    <div class="MP">
      <div class="img">
        <img
          src="@/assets/images/42e8d91a66b86a127fc0fbf180f37cd1.jpeg"
          alt=""
        />
      </div>
      <div class="id">注册/登录</div>
    </div>
    <div class="YW">
      <van-grid direction="horizontal" :column-num="3" :border="0">
        <van-grid-item
          @click="onClickRouter('/discount')"
          icon="point-gift-o"
          text="优惠"
        />

        <van-grid-item
          @click="onClickRouter('/money')"
          icon="balance-o"
          text="余额"
        />

        <van-grid-item
          @click="onClickRouter('/address')"
          icon="location-o"
          text="地址"
        />
      </van-grid>
    </div>
    <div class="YW">
      <div class="BT">
        <p>全部订单</p>
      </div>
      <van-grid :border="0">
        <van-grid-item
          @click="onClickRouter('/wait')"
          icon="balance-list-o"
          text="待支付"
        />

        <van-grid-item
          @click="onClickRouter('/ToBeDelivered')"
          icon="logistics"
          text="待发货"
        />

        <van-grid-item
          @click="onClickRouter('/transport')"
          icon="gift-card-o"
          text="待收货"
        />

        <van-grid-item
          @click="onClickRouter('/Service')"
          icon="phone-circle-o"
          text="售后"
        />
      </van-grid>
    </div>
    <div class="YW">
      <div class="BT">
        <p>全部功能</p>
      </div>
      <!-- 商品规格 -->
      <div class="guige">
        <van-cell-group>
          <van-cell title="历史记录" @click="onClickRouter('/History')" />
          <van-cell
            title="我的收藏"
            value="3件"
            @click="onClickRouter('/Collection')"
          />

          <van-cell title="分享给好友" @click="showShare = true" />
          <van-share-sheet
            v-model="showShare"
            title="立即分享给好友"
            :options="options"
            @select="onSelect"
          />
        </van-cell-group>
      </div>

      <FooterBar></FooterBar>
    </div>
    <div class=".buttom"></div>
  </div>
</template>
<script>
import FooterBar from "@/components/FooterBar";

import { Toast } from "vant";




export default {
  data() {
    return {
      active: this.$router.path,
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
    };
  },
  components: { FooterBar },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/home",
      });
      //    console.log(111);
    },
    onClickRight() {
      Toast("按钮");
    },
    onClickRouter(x) {
      console.log(x);
      this.$router.push({
        path: x,
      });
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  },
};
</script>
<style scoped>
.container {
  width: 100%;
}

.container /deep/ .van-icon-arrow-left span {
  color: #ff9600;
}
.MP {
  position: relative;
  width: 9.3rem;
  height: 5rem;

  margin: 0.6rem auto;
  border-radius: 0.4rem;
  font-size: 0.2rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F36b2217d0b8702aad5008fcda48b21e101fe185aa574-9NopvU_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1624448322&t=8ca4676c823b7bad831e7c5c70ccea80");
}
.van-grid-item {
  color: #ff9600;
}

.img {
  float: left;
  margin-left: 1rem;
  margin-top: 1rem;
  width: 2rem;
  height: 2rem;
  font-size: 0.8rem;
  border-radius: 3rem;
  overflow: hidden;
}
.img img {
  width: 150%;
  height: auto;
  margin-left: -0.5rem;
}

.MP .id {
  width: 3rem;
  height: 5rem;

  margin-left: 3rem;
  font-size: 0.5rem;

  line-height: 3rem;
  text-align: center;
}
.YW {
  position: relative;
  width: 9.3rem;
  margin: 0.2rem auto;
  border-radius: 0.2rem;
  font-size: 0.1rem;
  padding: 0.1rem 0;
  border:1px solid #eee;
}
.YW .BT {
  width: 100%;
}
.YW .BT p {
  line-height: 0.4rem;
  font-size: 0.4rem;
  padding: .3rem .4rem;
  border-bottom:1px solid #eee;
}
.container:last-child {
  margin-bottom: 2rem;
}
</style>
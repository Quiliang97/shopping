<template>
  <div class="container">
    <!-- 顶部 -->
    <van-nav-bar
      title="商品详情"
      left-text="返回"
     
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!-- 商品轮播图 -->
    <div class="swipe">
      <van-swipe :autoplay="5000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 商品标题 -->
    <div class="xinxi">
      <div class="jiage">￥8999 <van-i<van-icon name="star-o" /></div>
      <div class="name">
        Apple iPad Air 10.9英寸 <van-tag type="warning">热卖</van-tag>
      </div>
      <van-row gutter="20">
        <van-col span="8">卖家包邮</van-col>
        <van-col span="8">月销量：<span>99</span></van-col>
        <van-col span="8">湖北/武汉</van-col>
      </van-row>
    </div>
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />

    <!-- 商品规格 -->
    <div class="guige">
      <van-cell-group>
        <van-cell title="商品库存" value="2358台" />
        <van-cell title="满包邮" value="68元" />
        <van-cell title="购买类型" value="默认" @click="show = true" />
        <van-cell title="优惠" value="20元优惠券" />
        <van-cell title="服务" value="VIP" />
      </van-cell-group>
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        :goods-id="goodsId"
        :quota="quota"
        :quota-used="quotaUsed"
        :hide-stock="sku.hide_stock"
        :message-config="messageConfig"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />

      <!-- 商品介绍 -->
      <van-divider dashed>商品介绍</van-divider>
      <div class="jieshao">
        <img
          src="//img13.360buyimg.com/cms/jfs/t1/147289/3/13468/518240/5fa4c23eEf7e3abec/f8c71ace59ed6625.jpg!q70.dpg.webp"
          alt=""
        />
      </div>
    </div>

    <!-- 底部加入购物车 -->
    <div class="buttmo-box">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="shop-o" text="店铺" />
        <van-goods-action-button
          color="#ff9600"
          type="warning"
          text="加入购物车"
        />
        <van-goods-action-button
          color="#f11826"
          type="danger"
          text="立即购买"
        />
      </van-goods-action>
    </div>
  </div>
</template>

<script>

import { Toast } from "vant";

export default {
  data() {
    return {
      images: [
        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/176993/7/4981/94794/60a473d8E7c4f8d86/d3d4998ecd93ece0.jpg!q80.dpg.webp",
        "//m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/111952/24/18007/46901/5f616ea4E7891ecc6/11b385fe3e994d05.jpg!q70.dpg.webp",
        "//m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/121423/21/12711/95744/5f61584fE2353358e/5d54ae47ef8194d3.jpg!q70.dpg.webp",
        "//m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/146176/10/8525/33360/5f616eadEcb1ec8c4/6d37bf0195f3fede.jpg!q70.dpg.webp",
      ],
      show: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "128G", // skuKeyName：规格类目名称
            k_s: "s1", // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "128G", // skuValueName：规格值名称
                imgUrl: "//m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/111952/24/18007/46901/5f616ea4E7891ecc6/11b385fe3e994d05.jpg!q70.dpg.webp", // 规格类目图片，只有第一个规格类目可以定义图片
                previewImgUrl: "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/176993/7/4981/94794/60a473d8E7c4f8d86/d3d4998ecd93ece0.jpg!q80.dpg.webp", // 用于预览显示的规格类目图片
              },
              {
                id: "1",
                name: "256G",
                imgUrl: "//m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/111952/24/18007/46901/5f616ea4E7891ecc6/11b385fe3e994d05.jpg!q70.dpg.webp",
                previewImgUrl: "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/176993/7/4981/94794/60a473d8E7c4f8d86/d3d4998ecd93ece0.jpg!q80.dpg.webp",
              },
            ],
            largeImageMode: true, //  是否展示大图模式
          },
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 100, // 价格（单位分）
            stock_num: 110, // 当前 sku 组合对应的库存
          },
        ],
        price: "8999", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
        messages: [
          {
            // 商品留言
            datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
            multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
            name: "留言", // 留言名称
            type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
            required: "1", // 是否必填 '1' 表示必填
            placeholder: "", // 可选值，占位文本
          },
        ],
        hide_stock: false, // 是否隐藏剩余库存
      },
      goods: {
        picture: "https://img01.yzcdn.cn/1.jpg",
      },
      messageConfig: {
        // 数据结构见下方文档
        // 图片上传回调，需要返回一个promise，promise正确执行的结果需要是一个图片url
        uploadImg: () => {
          return new Promise((resolve) => {
            setTimeout(
              () =>
                resolve(
                  "//m.360buyimg.com/mobilecms/s1265x1265_jfs/t1/111952/24/18007/46901/5f616ea4E7891ecc6/11b385fe3e994d05.jpg!q70.dpg.webp"
                ),
              1000
            );
          });
        },
        // 最大上传体积 (MB)
        uploadMaxSize: 3,
        // placeholder 配置
        placeholderMap: {
          text: "123",
          tel: "456",
        },
        // 初始留言信息
        // 键：留言 name
        // 值：留言内容
        initialMessages: {
          留言: "留言信息",
        },
      },
    };
  },
  methods: {
    onClickIcon() {},
    onClickButton() {
      Toast("点击按钮");
    },
    onClickLeft() {
       this.$router.go(-1);
      
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>
<style scoped>
.container {
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
  margin-top: 0.2rem;
  padding: 0.3rem 0;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
.jiage {
  font-size: 0.8rem;
  color: chocolate;
  margin-left: 0.3rem;
  border: 1 solid rgb(235, 233, 233);
}
.jiage .van-icon {
  padding: 0.3rem;
  margin-left: 5rem;
}
.name {
  font-size: 0.6rem;
  margin-left: 0.7rem;
  margin-bottom: 0.3rem;
}

.van-row .van-col {
  font-size: 0.2rem;
  text-align: center;
  color: rgb(187, 185, 185);
}

.guige {
  width: 100%;
  margin-top: 0.3rem;
}

.jieshao {
  width: 100%;
}
.jieshao img {
  width: 100%;
}
</style>
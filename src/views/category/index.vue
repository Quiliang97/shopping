<template>
  <div class="container">
    <!-- 顶部搜索 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <!-- 侧边搜索 -->
    <van-tree-select
      height="100vw"
      :items="items"
      :main-active-index.sync="active"
    >
      <template #content>
        <van-card
          num="1"
          tag="优惠"
          price="4398"
          desc="描述信息"
          title="vivo X60 Pro  华彩"
          thumb="//m.360buyimg.com/babel/s584x584_jfs/t1/174413/30/7319/65951/608bef7dE88319d3f/478a7ed5be4ad76c.jpg!q70.dpg"
          origin-price="4498"
        />
        <van-card
          num="1"
          tag="优惠"
          price="4398"
          desc="描述信息"
          title="vivo X60 Pro  华彩"
          thumb="//m.360buyimg.com/babel/s584x584_jfs/t1/174413/30/7319/65951/608bef7dE88319d3f/478a7ed5be4ad76c.jpg!q70.dpg"
          origin-price="4498"
        />
        <van-card
          num="1"
          tag="优惠"
          price="4398"
          desc="描述信息"
          title="vivo X60 Pro  华彩"
          thumb="//m.360buyimg.com/babel/s584x584_jfs/t1/174413/30/7319/65951/608bef7dE88319d3f/478a7ed5be4ad76c.jpg!q70.dpg"
          origin-price="4498"
        />
      </template>
    </van-tree-select>
    <FooterBar></FooterBar>
  </div>
</template>
<script>
import FooterBar from "@/components/FooterBar";



export default {
  data() {
    return {
      activeKey: 0,
      active: 0,
      items: [{ text: "手机" }, { text: "电脑" },{ text: "耳机" },{ text: "显卡" }],
    };
  },
  components: { FooterBar },
};
</script>
<style scoped>
.container {
  width: 100%;
}

.container /deep/ .van-tree-select {
  height: 10rem;
}
</style>
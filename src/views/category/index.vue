<template>
    <div class="container">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
       <van-sidebar v-model="activeKey">
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
  <van-sidebar-item title="标签名称" />
</van-sidebar>
    
        <FooterBar></FooterBar>
    </div>
</template>
<script>
import FooterBar from '@/components/FooterBar'
import Vue from 'vue';
import { Search } from 'vant';
import { TreeSelect } from 'vant';
import { Sidebar, SidebarItem } from 'vant';

Vue.use(Sidebar);
Vue.use(SidebarItem);
import { Card } from 'vant';

Vue.use(Card);

Vue.use(TreeSelect);

Vue.use(Search);
export default{
    data() {
    return {
      activeKey: 0,
    };
  },
    components:{FooterBar}
}
</script>
<style scoped>
.container{
    width: 100%;
}

.container /deep/ .van-tree-select {
    height: 10rem;
}
</style>
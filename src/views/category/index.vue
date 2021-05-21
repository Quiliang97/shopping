<template>
    <div class="container">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
       <van-sidebar v-model="activeKey">
  <van-sidebar-item title="手机" />
  <van-sidebar-item title="电脑" />
  <van-sidebar-item title="外设" />
</van-sidebar>
    
        <FooterBar></FooterBar>
    </div>
</template>
<script>
import FooterBar from '@/components/FooterBar'
import Vue from 'vue';
import Vant from 'vant';
// import { Search } from 'vant';
// import { TreeSelect } from 'vant';
// import { Sidebar, SidebarItem } from 'vant';

// Vue.use(Sidebar);
// Vue.use(SidebarItem);
// import { Card } from 'vant';

// Vue.use(Card);

// Vue.use(TreeSelect);


// Vue.use(Search);
Vue.use(Vant);
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
<template>
    <div class="container">
   <van-nav-bar class="col" title="我的" left-text="返回" left-arrow>
  <template #right>
    <van-icon name="setting-o" size="18"/>
  </template>
</van-nav-bar>
        <div class="MP">
            <div class="img"><img src="@/assets/images/42e8d91a66b86a127fc0fbf180f37cd1.jpeg" alt=""></div>
            <div class="id"> 秋露渐了</div>
        </div>
        <div class="YW">
         <van-grid direction="horizontal" :column-num="3" :border="0">
  <van-grid-item icon="point-gift-o" text="优惠"   />

  <van-grid-item icon="balance-o" text="余额" />
 
  <van-grid-item icon="points" text="积分" />
  
</van-grid>
        </div>
        <div class="YW">
            <div>
                <van-icon name="send-gift-o" size="20" />
                全部订单
                <van-divider />
            </div>
            <van-grid :border="0">
                    <van-grid-item icon="balance-list-o" text="待支付"   />

                    <van-grid-item icon="logistics" text="待发货" />

                    <van-grid-item icon="gift-card-o" text="待收货" />

                    <van-grid-item icon="phone-circle-o" text="售后" />
                    
             </van-grid>
            
            
        </div>

         <div class="YW">
            <div>
                <van-icon name="gem-o" size="20" />
                我的服务
                <van-divider />
            </div>
            <van-grid :border="0">
                    <van-grid-item icon="balance-list-o" text="待支付"   />

                    <van-grid-item icon="logistics" text="待发货" />

                    <van-grid-item icon="gift-card-o" text="待收货" />

                    <van-grid-item icon="phone-circle-o" text="售后" />
                    
                    <van-grid-item icon="balance-list-o" text="待支付"   />

                    <van-grid-item icon="logistics" text="待发货" />

                    <van-grid-item icon="gift-card-o" text="待收货" />

                    <van-grid-item icon="phone-circle-o" text="售后" />
                    
                    <van-grid-item icon="balance-list-o" text="待支付"   />

                   
                    
             </van-grid>
            
            
        </div>
        <div class="bottom"></div>
        <FooterBar></FooterBar>
    </div>
</template>
<script>
import FooterBar from '@/components/FooterBar'
import Vue from 'vue';
import { NavBar } from 'vant';
import { Toast } from 'vant';
import { Icon } from 'vant';
import { Grid, GridItem } from 'vant';
import { Divider } from 'vant';

Vue.use(Divider);

Vue.use(Grid);
Vue.use(GridItem);



Vue.use(NavBar);
Vue.use(Icon);
export default{
    data() {
        return {
            
        }
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
.container /deep/ .van-nav-bar__content i, .van-nav-bar__title{
    color: #ff9600;
}
.container /deep/ .van-icon-arrow-left span{
    color: #ff9600;
}
.MP {
    position: relative;
    width: 9.3rem;
    height: 5rem;
    background:#ff9600;
    margin: .6rem auto;
   border-radius: .4rem;
      font-size: .2rem;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);


}
.img {
    float: left;
     margin-left: 1rem;
     margin-top: 1rem;
    width: 2rem;
    height: 2rem;
    font-size: .8rem;
     border-radius: 3rem;
     overflow: hidden;
     
   
     
}
.img img {
    width: 150%;
    height: auto;
    margin-left: -.5rem;
  }

.MP .id{
  
   width: 3rem;
    height: 5rem;

    margin-left: 3rem;
    font-size: .5rem;
    
    line-height: 3rem;
    text-align: center;

    
}
.YW {
    position: relative;
    width: 9.3rem;
    margin: .2rem auto;
    border-radius: .2rem;
    font-size: .1rem;
    padding: .1rem 0 ;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
.bottom {
    margin-bottom: 10rem;
}

</style>
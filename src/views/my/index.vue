<template>
    <div class="container">
            <van-nav-bar
            title="我的"
            left-text="返回"
            right-text="设置"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
            />
        <div class="MP">
            <div class="img"><img src="@/assets/images/42e8d91a66b86a127fc0fbf180f37cd1.jpeg" alt=""></div>
            <div class="id"> 秋露</div>
        </div>
        <div class="YW">
         <van-grid direction="horizontal" :column-num="3" :border="0">
            <van-grid-item icon="point-gift-o" text="优惠"   />

            <van-grid-item icon="balance-o" text="余额" />
            
            <van-grid-item icon="points" text="积分" />
            
        </van-grid>
        </div>
        <div class="YW">
            <div class="BT">
                <p>全部订单</p>
              
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
            <div class="BT">
               
                <p>全部功能</p>
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

import { Toast } from 'vant';
import Vant from 'vant';

Vue.use(Vant);

export default{
    data() {
        return {
            
        }
    },
    components:{FooterBar}
,
methods: {
    onClickLeft() {
         this.$router.push({
             path:"/home"
         })
    //    console.log(111);
     
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

.container /deep/ .van-icon-arrow-left span{
    color: #ff9600;
}
.MP {
    position: relative;
    width: 9.3rem;
    height: 5rem;

    margin: .6rem auto;
   border-radius: .4rem;
      font-size: .2rem;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    background-image: url('//hbimg.huabanimg.com/853e60b7553331a985af1b0bc1778d4c2028e316677ec-mJ8XAr_fw658/format/webp');
    
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
.YW  .BT {
    width: 100%;
    height: 1rem;

}
.YW  .BT p{
line-height: .4rem;
font-size: .4rem;
margin-left: .4rem;
}
.bottom {
    margin-bottom: 10rem;
}

</style>
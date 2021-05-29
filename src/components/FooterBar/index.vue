<template>
    <div class="footer-bar">
        <van-tabbar v-model="active">
        
        <van-tabbar-item @click="onClickLeft(active)" name="/home" icon="home-o">首页</van-tabbar-item>
    
        <van-tabbar-item @click="onClickLeft(active)" name="/category" icon="apps-o">分类</van-tabbar-item>

    
        <van-tabbar-item @click="onClickLeft(active)" name="/cart" icon="cart-o">购物车</van-tabbar-item>

    
        <van-tabbar-item @click="onClickLeft(active)" name="/my" icon="user-o">我的</van-tabbar-item>
           
             
        </van-tabbar>
    </div>
</template>
<script>


export default {
    data(){
        return {
             active: this.$route.path=='/'?'/home':this.$route.path,
             
        }
        // 
    },
    created(){
       
        
        
}
,
methods: {
     onClickLeft(x) {
         console.log(x);
       this.$router.push({
             path:x
         })
    },
},
}
</script>

<style scoped>
.footer-bar{
    
    position: fixed;
    bottom: 0;
    left:0;
    width: 100%;
   
    background:#fff;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    display: flex;
    
    
}
.footer-bar /deep/ .van-tabbar-item--active{
    color:#ee0a24;
}
.footer-bar .item{
    font-size: .4rem;
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction:column;
    text-decoration: none;
    color: #cdcdcd;

}
.footer-bar .item.active{
    color: #ee0a24;
}

.footer-bar .item img{
    width: .8rem;
    height: .8rem;
    align-items: center;
    margin: .2rem auto .1rem ;

}
</style>
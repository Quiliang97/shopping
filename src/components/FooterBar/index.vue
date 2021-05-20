<template>
    <div class="footer-bar">
        <router-link class="item" :class="{active: currentPath=='/home'}" to="/home">
            <img src="@/assets/images/首页-选中 (1).png">
            <span class="txt">首页</span>
        </router-link>
        <router-link class="item" :class="{active: currentPath=='/category'}" to="/category">
            <img src="@/assets/images/分类 (1).png">
            <span class="txt">分类</span>
        </router-link>
         <router-link class="item" :class="{active: currentPath=='/cart'}" to="/cart">
            <img src="@/assets/images/购物 车 (1).png">
            <span class="txt">购物车</span>
        </router-link>
        <router-link class="item" :class="{active: currentPath=='/my'}" to="/my">
            <img src="@/assets/images/我 的 (1).png">
            <span class="txt">我的</span>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return {
            currentPath: this.$route.path
        }
        // 
    },
    created(){
        // console.log('route',this.$route)
        // console.log('router',this.$router)
         
}
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
    color: #ff9600;
}

.footer-bar .item img{
    width: .8rem;
    height: .8rem;
    align-items: center;
    margin: .2rem auto .1rem ;

}
</style>
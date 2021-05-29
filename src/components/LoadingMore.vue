<template>
    <div class="loading-more">
        <div class="" v-if="status=='loading'"><van-loading size="24px" color="#0094ff" vertical>加载中...</van-loading></div>
        <!-- <div class="" v-if="status=='more'">下拉加载更多</div> -->
        <div class="nomore" v-if="status=='nomore'">加载完成</div>
    </div>
</template>
<script>
export default{
    props:{
        status:{
            type: String,
            default:''
        }
    },
    data(){
        return {
            // status: 'loading',//
        }
    },
    // created(){
    //     this.$emit('update:status','111')
    // }
}
</script>
<style>
.nomore{
    font-size: .5rem;
    text-align: center;
    color: rgb(206, 201, 201);
}
</style>
<template>
    <van-search
      v-model="keywords"
      shape="round"
      background="#6bd5f5"
      placeholder="请输入搜索关键词"
      @click="onclick"
    />
</template>
<script>
export default{
    data(){
        return {
            keywords:'',
            num:123222
        }
    },
    methods:{
        onclick(){
            this.$emit('search',this.keywords,'ttt')
        },
        childFunction(){
            console.log('这是子组件的方法')
        }
    }
}
</script>
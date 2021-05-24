<template>
  <div class=".box1">
  
 <router-view></router-view>

   
<!-- <FooterBar></FooterBar> -->
  </div>
  
  
</template>

<script>
import Vue from 'vue';
import { Form } from 'vant';
import { Field } from 'vant';
import FooterBar from "@/components/FooterBar";
Vue.use(Field);
Vue.use(Form);

export default {
  data() {
    return {
      username: '123',
      password: '123',
       
        
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  
  },
  // components:{FooterBar,}
};

  

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box1{
  width: 100%;
  height: 100%;
  background: rgb(165, 88, 88);

}
.van-checkbox{
  font-size: 0.5rem;
}
</style>

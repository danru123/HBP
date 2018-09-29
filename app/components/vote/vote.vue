<template>
    <div class="box">
        <h1 @click="routerGo()">
            我是投票
        </h1>
        <!-- <router-link :to="url">我是投票</router-link> -->
       <foot></foot> 
    </div>
</template>

<script>
import foot from '../common/foot.vue'
export default {
    data(){
        return {
            // url:'/vote/detail',
        }
    },
    components:{
        foot
    },
    methods:{
        routerGo(){
            //路由跳转
            this.$router.push('/vote/detail') 
        },
    }
}
</script>

<style>
    .box{
        width: 100%;
        height: 100%;
        background-color: #52caec;
    }
    
</style>

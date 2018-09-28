<template>
    <div class="box">
        <h1 @click="routerGo('/vote/failed_vote')">
            我是投票
        </h1>
       <foot></foot> 
    </div>
</template>

<script>
import foot from '../common/foot.vue'
export default {
    data(){
        return {
        }
    },
    methods:{
        routerGo(url){
            this.$router.push({path:url})   
        }
    },
    components:{
        foot
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

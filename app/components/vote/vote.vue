<template>
    <div class="box">
        <h1>
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

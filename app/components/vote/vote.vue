<template>
    <div class="box">
        <!-- <h1>
            我是投票
        </h1> -->
        <curator></curator>
        <!-- <curatorsuccess></curatorsuccess> -->
       <foot></foot> 
    </div>
</template>

<script>
// import curatorsuccess from './curatorsuccess/curatorsuccess.vue'
import curator from './curator/curator.vue'
import foot from '../common/foot.vue'
export default {
    data(){
        return {
        }
    },
    components:{
        curator,
        // curatorsuccess,
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

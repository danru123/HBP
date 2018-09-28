<template>
    <div class="box">
        <div class="fa_close">X</div>
        <div class="fail_vo">
            <div class="fa_h1">
                <h1>您未能中奖</h1>
                <h1>但还有机会哦！</h1>
            </div>
            <div class="fa_p">
                <p>感谢您投出的宝贵一票，</p>
                <p>每人每天有2次投票机会</p>
                <p>虽然您未能中奖，但你还有机会</p>
                <p>请继续支持您喜欢的策展人哦</p>
            </div>
        </div>
        
    </div>
   
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style scoped>
    .box{
        width: 100%;
        height: 100%;
        background-color: #52caec;
    }
    .fa_close{
        width:1.3rem;
        height:1.3rem;
        border-radius:50%;
        color: #e4dcd3;
        border:2px solid #e4dcd3;
        text-align: center;
        line-height: 1.3rem;
        font-size: 0.7rem;
        font-family: '微软雅黑';
        position: absolute;
        right:57px;
        top: 7rem;
    }
    .fail_vo{
        width: 90%;
        height: 9rem;
        border:2px solid #e4dcd3;
        margin: 0 auto;
        text-align: center;
        position: relative;
        top: 9rem;
    }
    .fail_vo .fa_h1{
        color:#e4dcd3;
        line-height: 1.5rem;
        margin-top: 0.7rem;
        letter-spacing: 12px;
    }
    .fail_vo .fa_p{
        color:#e4dcd3;
        line-height: 1.0rem;
        margin-top: 0.7rem;
        letter-spacing: 12px;
        font-size: 0.5rem;
    }
</style>

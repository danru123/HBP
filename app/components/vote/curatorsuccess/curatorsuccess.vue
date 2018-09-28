<template>
    <div class="success_warp">
        <p class="close">
            <i class="iconfont icon-cuo"></i>
        </p>
        <div class="cont_box">
            <h2>
                <i class="iconfont icon-dui"></i>
                <span>投票成功</span>
            </h2>
            <div class="con_tit">
                <span class="con_tit_span">感谢您透出的宝贵一票,</span>
                <span class="con_tit_span">请继续支持您喜欢的策展人哦!</span>
            </div>
            <div class="sweepstake">
                <span class="con_tit_span">同时,您获得抽奖机会一次!</span>
                <div class="sweepstake_btn">立即抽奖</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>

<style>
    .success_warp{
        color: #E4DCD3;
        padding-top: 7rem;
    }
    .close .icon-cuo{
        float: right;
        font-size: 2.5rem;
        margin-top: -3rem;
        margin-right: 0.66rem;
        font-weight: normal;
    }
    .cont_box{
        width: 13.7rem;
        height:13.7rem;
        margin: 0 1.1rem;
        border: 4px solid #E4DCD3;
    }
    .cont_box h2{
        letter-spacing :3px;
        text-align: center;
        margin-top: 2rem;
        font-size: 1.3rem;
        width: 11.3rem;
        padding-bottom: 1.5rem;
    }
    .cont_box h2 .icon-dui{
        font-size: 2.2rem;
        font-weight: normal;
        float: left;
        margin: -0.3rem 0 0 3rem;
    }
    .cont_box h2 span{
        float: right;
        right: 0.3rem;
    }
    .con_tit{
        margin: 1rem 0;
    }
    .con_tit_span{
        width: 100%;
        font-size: 0.8rem;
        display: inline-block;
        letter-spacing :3px;
        text-align: center;
        line-height: 1.2rem;
    }
    .sweepstake{
        margin:2rem 0;
    }
    .sweepstake_btn{
        background: #E4DCD3;
        width: 11.3rem;
        height: 2rem;
        margin: 0.4rem 1.2rem;
        color: #52caec;
        text-align: center;
        line-height: 2rem;
        font-size: 0.8rem;
    }
</style>

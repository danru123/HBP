<template>
    <div class="box" @touchmove='move' @touchstart='start'>
        <div class="top">

        </div>
        <div class="content">
            <p class="time slideInLeft animated">2018</p>
            <p class="title slideInRight animated">Hyundai Blue Prize</p>
            <p class="con">助力中国青年策展人的多领域艺术实践平台</p>
            <p class="line"></p>
            <p class="rote">入围作品线上投票</p>
            <p class="start">正式开始</p>
        </div>
        <div class="ball">
            <div id="global_scroll">
                <img src="../../assets/scroll.png" alt="">
            </div>
        </div>
    </div>
    
</template>

<script>
// import $ from 'zepto'
export default {
<<<<<<< HEAD
    data(){
        return {
            startY:null,
            distanceY:null
        }
    },
    methods:{
        move(e){
            this.distanceY=e.touches[0].clientY-this.startY;
            if(this.distanceY<0){
               this.$router.push('/description') 
            }
        },
        start(e){
            this.startY=e.touches[0].clientY;
        }
    }
=======
    
>>>>>>> d7315c7f936445fb3cbff20b9a7cdfc4e13c40e3
}
</script>

<style lang='less' scoped>
    .box{
        width: 100%;
        height: 100%;
        background-color: #52caec;
        padding-top: 8rem;
        box-sizing: border-box;
        overflow: hidden;
    }
    #global_scroll{
        width: 2.5rem;
        height: 2.5rem;
        position: absolute;
        left:44%;
        transform: translateX(-50%);
        bottom: 4%;
        animation: scroll 2s infinite;
    }
    @keyframes scroll {
        0% {
            transform: translateX(0) translateY(0px) translateZ(0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1);
        }
        50% {
            transform: translateX(0) translateY(10px) translateZ(0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1);
        }
        100% {
            transform: translateX(0px) translateY(0) translateZ(0) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1);
        }
    }
    #global_scroll img{
        width: 100%;
        height: 100%;
    }
    .content{
        width: 66%;
        margin: 0 auto;
        color:#e4dcd3;
    }
    .content{
        .time,.title,.con{
            font-size: 0.9rem;
        }
        .con{
            letter-spacing:0.15rem;
            animation: bottomTnto4 0.8s linear forwards;
            position: absolute;
            opacity: 0;
        }
        .line{
            width: 68%;
            border:1px solid #e4dcd3;
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            animation: line3 0.8s linear forwards;
            animation-delay: .2s;
            position: absolute;
            opacity: 0;
        }
        .rote{
            font-size: 0.8rem;
            letter-spacing:0.5rem;
            animation: bottomTnto2 0.8s linear forwards;
            animation-delay: .4s;
            position: absolute;
            opacity: 0;
        }
        .start{
            font-size: 1rem;
            letter-spacing:1.64rem;
            font-weight:500;
            font-family: '微软雅黑';
            position: absolute;
            animation: bottomTnto1 0.8s linear forwards;
            animation-delay: .6s;
            opacity: 0;
        }
        @keyframes bottomTnto1 {
            from{
                bottom:-2rem;
                opacity: 0;
            }
            to{
                bottom:12rem;
                opacity: 1;
            }
        }
        @keyframes bottomTnto2 {
            from{
                bottom:-2rem;opacity: 0;
            }
            to{
                bottom:13.5rem;
                opacity: 1;
            }
        }
        @keyframes line3 {
            from{
                bottom:-2rem;opacity: 0;
            }
            to{
                bottom:14.5rem;
                opacity: 1;
            }
        }
        @keyframes bottomTnto4 {
            from{
                bottom:-2rem;opacity: 0;
            }
            to{
                bottom:15.5rem;
                opacity: 1;
            }
        }
    }
    .top{
        position: absolute;
        top: -8rem;
        height: 15rem;
        width: 17rem;
        margin: 0 auto;
        border: 4px solid #95def3;
        border-radius: 50%;
        left: 50%;
        transform: translate(-50%);
    }
    .ball{
        width:100%;
        height: 6rem;
        position: absolute;
        bottom: 0;
        background:url('../../assets/01_06_01.gif') no-repeat;
        background-size: 100% 100%;
    }
</style>

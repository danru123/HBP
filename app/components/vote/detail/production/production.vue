<template>
    <div class="box">
        <div id="certify" style="width:80%;height:650px">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for='item of imgUrl'>
                        <img :src="item">
                    </div>
                </div>
            </div>
        </div>
        <div class="b">
            <img src="../../../../../assets/s.png">
            <img src="../../../../../assets/t.png">
        </div>
    </div>
</template>

<script>
import Swiper from '../../../../../assets/swiper.min.js'
import '../../../../../assets/swiper.css'
import $ from "jquery"

import img1 from '../../../../../assets/certify01.png'
import img2 from '../../../../../assets/certify02.png'
import img3 from '../../../../../assets/certify03.png'
import img4 from '../../../../../assets/certify04.png'
import img5 from '../../../../../assets/certify05.png'
export default {
    data(){
        return {
            imgUrl:[
                img1,
                img2,
                img3,
                img4,
                img5    
            ],
        }
    },
    mounted(){
        var vm = this;
        vm.swiper = this.swiper
        vm.$nextTick(function(){
            var swiper = new Swiper('.swiper-container', {
              effect: 'coverflow',
              grabCursor: true,
              // loop:true,
              centeredSlides: true,
              slidesPerView: 'auto',
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true,
              },
              pagination: {
                el: '.swiper-pagination',
              },
            });



        })
    },
    components:{
        Swiper
    }
}
</script>

<style>
    .box{
        width: 100%;
        height: 100%;
        background-color: #52caec;
    }
    .swiper-slide img{
        width: 200px;
        height: 200px;
    }
    .b{
        text-align: center;
    }
</style>

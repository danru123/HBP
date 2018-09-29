<template>
    <div class="box">
        <div class="title">
            <p class="future">
                “Future Humanity”
            </p>
            <p>“未来演化”</p>
        </div>
        <div class="con_title fadeInDownBig animated">
            <p >2018</p>
            <p>Hyundai Blue Prize</p>
        </div>
        <div class="con">
            <p class="animated fadeInLeftBig">
               未来演化”( Future Humanity) 是本届展览创作的灵感，结合现代汽车的Creative  Energy理念，意在激发和寻求人类与科技、文化以及我们自身相关的共同愿景和使命。通过本次大奖，在发现中国策展新力量的同时，激发出更多关注当下和未来社会发展的论题与大众共享。 
            </p>
            <p class="animated fadeInRightBig">
                本奖项分为“创意能量”( Creativity)和“创新未来”( Sustainability )两大奖项，专门授予那些具备多元化思维，能对中国当代社会现象和问题提出独到见解的创新型策展人才。
            </p>
        </div>
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

<style scoped>
    .box{
        width: 100%;
        height: 100%;
        background-color: #52caec;
    }
    .title{
        width: 80%;
        text-align: center;
        height: 7rem;
        margin:0 auto;
        background: #fff;
        color:#52caec;
        font-size: 1rem;
         box-sizing: border-box;
        padding-top: 3rem;
    }
    .con_title{
        margin-top: 1rem;
        width: 100%;
        text-align: center;
        color:#e4dcd3;
    }
    .con_title p{
        width: 58%;
        margin: 0 auto;
        text-align: left;
        font-size: 1rem;
    }
    .con{
        width: 80%;
        margin:0 auto;
        color: #e4dcd3;
        font-size: 0.6rem;
    }
    .con p{
        margin-top: 1.2rem;
        letter-spacing:0.1rem;
    }
</style>

<template>
   <div class="curator">
       <h3>策展人</h3>
       <p class="curator_tit">
           感谢您家兔到大众评委的阵营中,大众评委的选票将占到权重的15%
       </p>
       <p class="vote_start_time">
           投票通道开启时间：10月1日-10月31日
       </p>
       <p class="vote_rule">
           投票规则：每天可获得两次投票机会。
       </p>
       <ul class="vote_curator">
           <li class="vo_item" v-for="item of data">
               <img :src="item.images" alt="">
                <div class="tit_con">
                     <div class="vo_tit">{{item.title}}</div>
                    <span class="vote_name">{{item.name}}</span>
                </div>
               <div class="give_vote">{{item.vote}}</div>
           </li>           
       </ul>
   </div>
</template>

<script>
export default {
    data(){
        return {
            data:[]
        }
    },
    created () {
        var vm=this;
        this.$http.get('../data/data.json').then((res) => {
            vm.data = res.data.data
            console.log(res.data.data);
        })
    }
}
</script>

<style scoped>
    li{
    }
    .curator{
        padding: 0 0.8rem;
        color:#E4DCD3;
        font-size: 0.8rem;
        letter-spacing :5px;
    }
    .curator h3{
        font-weight: 700;
        line-height: 30px;
        padding: 1.1rem 0;
        text-align: center;
    }
    .curator .curator_tit,.vote_start_time,.vote_rule{
        margin-bottom: 0.4rem;
        font-size: 0.6rem;
    }
    .curator .vote_curator .vo_item{
        width: calc(95% / 3);
        padding: 0.22rem 0.1rem;
        list-style: none;
        float: left; 
        transform:translate3d(0,100px,0);
        -webkit-transform:translate3d(0,100px,0);
        opacity:0;
        transition: opacity 1s ease-in-out 0.7s,transform 1s ease-in-out;
        -webkit-transition: opacity 1s ease-in-out 0.7s,transform 1s ease-in-out;
        animation:box 1s ease-in-out;
        -webkit-animation:box 1s ease-in-out;
        animation-fill-mode:forwards;
        -webkit-animation-fill-mode:forwards;       
    }
     .curator .vote_curator li:nth-of-type(1){
        transform:translate3d(0,600px,0);
        -webkit-transition:all 1s ease-in-out;
        animation: box 1s ease-in-out 0.5s;
        -webkit-animation: box 1s ease-in-out 0.5s;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
      }
       .curator .vote_curator li:nth-of-type(2){
        transform:translate3d(0,700px,0);
        -webkit-transition:all 1s ease-in-out;
        animation: box 1.3s ease-in-out 0.5s;
        -webkit-animation: box 1s ease-in-out 0.5s;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
      }
        .curator .vote_curator li:nth-of-type(3){
        transform:translate3d(0,800px,0);
        -webkit-transition:all 1s ease-in-out;
        animation: box 1.5s ease-in-out 0.5s;
        -webkit-animation: box 1s ease-in-out 0.5s;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
      }
      .curator .vote_curator li:nth-of-type(4){
        transform:translate3d(0,600px,0);
        -webkit-transition:all 1s ease-in-out;
        animation: box 1s ease-in-out 0.5s;
        -webkit-animation: box 1s ease-in-out 0.5s;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
      }
       .curator .vote_curator li:nth-of-type(5){
        transform:translate3d(0,700px,0);
        -webkit-transition:all 1s ease-in-out;
        animation: box 1.3s ease-in-out 0.5s;
        -webkit-animation: box 1s ease-in-out 0.5s;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
      }
        .curator .vote_curator li:nth-of-type(6){
        transform:translate3d(0,800px,0);
        -webkit-transition:all 1s ease-in-out;
        animation: box 1.5s ease-in-out 0.5s;
        -webkit-animation: box 1s ease-in-out 0.5s;
        animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
      }
     @-webkit-keyframes box{
        to{
          -webkit-transform:translate3d(0,0px,0);
          opacity:1;
        }
      }
    .curator .vote_curator .vo_item img{
        width: 4.6rem;
    }
    .tit_con{
        height: 3.2rem;
    }
    .curator .vote_curator .vo_item .give_vote{
        width: 100%;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
        font-size: 0.7rem;
        border: 1px solid #E4DCD3;
        margin-top: 0.1rem;
    }
    .curator .vote_curator .vo_item .vo_tit{
        font-weight: normal;
        text-align: left!important;
        font-size: 0.56rem;
    }
    .vote_name{
        display: inline-block;
        font-size: 0.5rem;
        text-align: left!important;
        line-height: 1rem;
        height: 1rem;
    }
</style>

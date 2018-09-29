<template>
    <div class="box">
        <div class="top">
            <p>2018</p>
            <p>Hyundai Blue Prize</p>
            <div>X</div>
        </div>
        <div class="cont" v-for='item of L'>
            <div class="c_t">
                <img :src="item.i">
                <span>{{item.name}}</span>
                <p>{{item.cont}}<a href="javascript:;">更多详情</a></p>
                
            </div>
            <div class="c_c">
                <ul>
                    <li v-for='(item,index) of xiang' @click='routerGo(item.u,index)' :class='{active:index==num}'>
                        {{item.n}}
                    </li>
                </ul>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import '../../../../assets/rem.js'

export default {
    data(){
        return {
            L:[
                {
                    i:"../../../../assets/1.png",
                    name:"刘倩兮",
                    cont:"刘倩兮，来自北京的策展人与写作者，现任泰康空间策展人，曾供职于纽约0893杂志。"
                }
            ],
            xiang:[
                {
                    n:"作品&方案",
                    u:'/vote/detail/production'
                },
                {
                    n:'介绍',
                    u:'/vote/detail/introduce'
                }
            ],
            num:0
        }
    },
    methods:{
        routerGo(url,index){
            this.num = index;
            //路由跳转
            this.$router.push({path:url})
        }
    }
}
</script>

<style scoped>
    ul{
        list-style: none;
    }
    .box{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background-color: #52caec;
        float: left;
    }
    .box .top{
        width: 80%;
        margin: 40px auto;
        position: relative;
    }
    .box .top p{
        color: #e4dcd3;
        font-size: 1rem;
    }
    .box .top div{
        float: right;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #e4dcd3;
        text-align: center;
        line-height: 60px;
        color: #e4dcd3;
        position: absolute;
        right: 0;
        top: 0.7rem;
    }
    .cont{
        width: 80%;
        overflow: hidden;
        margin: 0 auto;
    }
    .c_t{
        overflow: hidden
    }
    .cont .c_t img{
        width: 180px;
        height: 180px;
        float: left;
        margin-right: 20px;
    }
    .cont .c_t span{
        color: #e4dcd3;
        letter-spacing: 14px;
        font-weight: 700;
    }
    .cont .c_t p{
        font-size: 0.5rem;
        color: #e4dcd3;
        letter-spacing: 2px;
        line-height: 53px;
    }
    .cont .c_t a{
        color:#e4dcd3 ;
        text-decoration: underline
    }
    .c_c{
        margin-top:30px;
    }
    .c_c ul {
        overflow: hidden;
        border-bottom: 2px solid #e4dcd3;
    }
    .c_c ul li{
        float: left;
        padding: 20px 95px;
        color:#e4dcd3;
        font-size: 0.55rem;
        letter-spacing: 5px; 
    }
    .c_c ul li.active{
        border-bottom: 5px solid  #e4dcd3;
    }
</style>

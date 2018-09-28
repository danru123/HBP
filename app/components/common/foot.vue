<template>
    <ul class="foot">
        <li v-for='(item,i) of tab' >
            <router-link :to='item.url' :class="{cur:item.title==$route.name}">{{item.title}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return {
            tab:[
                {
                    title:"描述",
                    url:'/description'
                },
                {
                    title:'评审',
                    url:'/review'
                },
                {
                    title:'投票',
                    url:'/vote'
                }
            ],
            num:0
        }
    },
    methods:{
        
    }
}
</script>

<style scoped>
    ul.foot{
        list-style: none;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2rem;
        overflow: hidden;
        line-height: 2rem;
        background: #f5f5f5;
        z-index: 999;
    }
    ul.foot li{
        float: left;
        width: calc(100% / 3);
        text-align: center;
     }
    ul.foot li a{
        text-decoration: none;
        color: #666;
        font-size: 0.8rem;
    }
    ul.foot li a.cur{
        color:#52caec;
    }
</style>

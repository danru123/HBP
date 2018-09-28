<template>
<div>
    <ul class="foot">
        <li v-for='item of tab'>
            <router-link :to='item.url'>{{item.title}}</router-link>
        </li>
    </ul>
</div>
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
            ]
        }
    }
}
</script>

<style scoped>
    ul{
        list-style: none;
    }
    ul li{
        float: left;
        width: calc(100% / 3);
        text-align: center;
        
    }
    ul li a{
        text-decoration: none;
        color: #666;
    }
    .foot{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #f5f5f5;
        z-index: 999;
    }
</style>

<template>
    <div class="box">
        <div class="content">
            <div class="container">
                <div class="title">
                    投票说明
                </div>
                <p>2018 Hyundai Blue Prize 诚挚的邀请您加入本届赛事的评委阵营,您的一票或许将决定最终的大赛结果。</p>

                <p>投票时间 : 10月1日 - 10月31日</p>
                
                <p>投票分<span>大众投票</span>和<span>媒体投票</span></p>

                <p>所有的线上网友均可为您喜欢的参展人投票,分值权重15%。</p>

                <p style="letter-spacing:0.2rem">受邀的专业媒体投票通道，分值权重85%。</p>
                
                
                <router-link to="/verify" tag="div" class="public btn">
                <span>大众评审</span></router-link>
                <router-link to="/verify" tag="div" class="media btn">
                <span>媒体评审</span></router-link>

            </div>
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
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
    }
    div.content{
        padding-top: 2rem;
        width: 14rem;
        margin-left: 1rem;
        text-align: center;
        letter-spacing: 0.7rem;
        color: #ddd;
        font-weight: 700;
        font-size: 0.8rem;
    }
    div.title{
        margin-bottom: 2rem;
        letter-spacing: 0.5rem
    }
    p{
        letter-spacing: 0.1rem;
        margin-bottom: 1.5rem;
        color: #ddd;
        font-size: 0.65rem;
        text-align: left;
        line-height: 0.8rem;
    }
    p span{
        color: #eee;
    }
    
    div.btn{
        letter-spacing: 0.1rem;
        background: #ddd;
        color:#52caec;
        height: 2rem;
        line-height: 2rem;
        text-align: left;
        margin-bottom: 0.3rem;
    }
    div.btn span{
        float: right;
        margin-right: 4rem;
        font-size: 0.7rem;
    }
    
</style>

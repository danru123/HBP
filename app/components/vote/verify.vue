<template>
    <div class="box">
        
        <div class="content">
            <i @click="close" class="iconfont icon-cuo"></i>
            <div class="container">
                <div class="title">投票验证</div>
                <div class="subTitle">
                    <span>媒体评审</span>
                    <span>投票通道</span>
                </div>
                <div class="hint">
                    请输入您的手机号获得邀请码
                </div>
                <input type="text" class="phone">
                <div class="button">
                    <i class="iconfont icon-icon"></i>
                    <span>获取邀请码</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    methods: {
        close(){
            this.$router.push('/vote');
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
    div.content{
        padding-top: 2.5rem;
        width: 13rem;
        overflow: hidden;
        margin-left: 1.5rem;
    }
    div.container{
        width: 13rem;
        box-sizing: border-box;
        border: 0.15rem solid #ddd;
        overflow: hidden;
        padding-bottom: 2rem;
    }
    div.title{
        text-align: center;
        font-size: 0.8rem;
        border-bottom: 0.01rem solid #eee;
        padding-top: 0.7rem;
        padding-bottom: 0.7rem;
        color: #ddd
    }
    div.subTitle{
        text-align: center;
        padding: 1.5rem 0;
    }
    div.subTitle span{
        display: block;
        font-size: 1rem;
        color: #eee;
    }
    div.hint{
        width: 11rem;
        margin-left: 1rem;
        border-bottom: 0.01rem solid #fff;
        border-top: 0.01rem solid #fff;
        font-size: 0.73rem;
        letter-spacing: 0.1rem;
        text-align: center;
        padding: 0.6rem 0;
        color: #ddd;
        margin-bottom: 1.5rem;
    }
    input.phone{
        width: 11rem;
        margin-left: 1rem;
        border: 1px solid #fff;
        background: transparent;
        height: 2rem;
        margin-bottom: 0.7rem;
        font-size: 1rem;
        color: #fff;
        outline: none;
    }
    div.button{
        width: 11rem;
        height: 2rem;
        background: #ddd;   
        margin-left: 1rem;
    }
    div.button i.icon-icon{
        font-size: 2.1rem;
        margin-left: 2rem;
        color:#52caec;
        float: left;
    }
    div.button span{
        font-size: 0.7rem;
        margin-left: 1rem;
        float: left;
        margin-top: 0.5rem;
        color: #52caec;
        font-weight: 700
    }
    i.icon-cuo{
        font-size: 2rem;
        float: right;
        color: #ddd;
    }
    
</style>

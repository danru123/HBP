<template>
    <div class="box">
        <div class="content">
            <div class="title">
                <div class="tit_left">
                    <span>2018</span><br>
                    <span>Hyundai Blue Prize</span>
                </div>
                <div class="tit_right">
                    <i @click="close" class="iconfont icon-cuo"></i>
                </div>
            </div>
            <div class="personage">
                <div class="header_img">
                    <img src="../../../assets/lqx.png" alt="">
                </div>
                <div class="name">刘倩兮</div>
                <div class="intro">泰康空间策展人，曾任职于纽约 ARTFORUM 杂志。评论性文章见于 ARTFORUM、《艺术界》等。</div>
            </div>
            <div class="throught">
                <h3>经历</h3>
                <p class="through_text">
                    来自北京的策展人与写作者，现任泰康空间策展人。
                    曾供职于纽约ARTFORUM杂志，参与《白立方内外一ARTFORUM当 代艺术评论50年》的编辑工作。她关注全球化语境中的图像生产、传播和跨文化阅读，以及对后人类状况的相关话题的反思。她曾先后于清华大学美术学院和美国康涅狄格大学获得艺术史及理论硕士学位。策划的项目包括“日光亭。 开放源系列工作坊”、“ 无边的现实多重的现在一一湖北当代艺术样本”、 “原初风景”等。她的文章见于ARTFORUM、《艺术界》、ArtA-siaPacific、FL ASH ART等。
                </p>
            </div>
            <div class="pack_up">
                <i class="iconfont icon-sort-up"></i>
                <span>收起</span>
            </div>
        </div>
        <div class="btns">
            <span class="voter"><img src="../../../assets/love.png">给她投票</span>
            <span class="share"><i class="iconfont icon-share"></i><span>分享给朋友</span></span>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        close(){
            this.$router.push('/vote');
        }
    }
};
</script>

<style scoped>
.box {
  width: 100%;
  height: 100%;
  background-color: #52caec;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  overflow: hidden;
}
div.content{
    width: 13.5rem;
    margin-left: 2.5em;
    padding-top: 1rem;
    margin-bottom: 3rem;
}
div.title{
    width: 13.5rem;
    overflow: hidden;
}
div.title div.tit_left{
    float: left;
    color: #ddd;
    font-size: 0.7rem;
    font-weight: 600;
}
div.title div.tit_right{
    float: right;
}
div.title div.tit_right i{
    font-size: 2.3rem;
    opacity: 0.7;
    color: #ddd;
}
div.personage{
    clear: both;
    overflow: hidden;
    margin-top: 0.3rem;
    margin-bottom: 1rem;
}
div.personage div.header_img{
    width: 4rem;
    float: left;
    margin-right: 0.7rem;
}
div.personage div.header_img img{
    vertical-align: top;
    width: 4rem;
    display: block;
}
div.name,div.intro{
    color: #ddd;
    font-size: 0.65rem;
    float: left;
}
div.name{
    letter-spacing: 0.4rem;
    font-weight: bold;
    margin-top: -0.3rem;
}
div.intro{
    width: 8.8rem;
    letter-spacing: 0.031rem;
}
h3{
    color: #ddd;
}
p.through_text{
    color: #ddd;
    line-height: 1rem;
    font-size: 0.6rem;
    letter-spacing: 0.02rem;
}
div.pack_up{
    margin-top: 0.7rem;
    color: #ddd;
}
div.pack_up i{
    opacity: 0.7;
    font-size: 1.5rem;
    vertical-align: middle;
    margin-right: 0.3rem;
}
div.pack_up span{
    font-size: 0.6rem;
    font-weight: 600;
    margin-top: -0.5rem;
    vertical-align: middle;
    opacity: 1;
}
div.btns{
    text-align: center;
}
div.btns>span{
    display: inline-block;
    background: #ddd;
    color: #52caec;
    font-size: 0.7rem;
    padding: 0.5rem;
}
div.btns span i{
    font-size: 0.9rem;
    vertical-align: middle;
    margin-right: 0.1rem;
}
div.btns span span{
    vertical-align: middle;
}
div.btns span img{
    vertical-align: middle;
    width: 1rem;
    float: left;
    margin-right: 0.3rem;
}
</style>

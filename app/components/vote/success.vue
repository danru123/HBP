<template>
    <div class="box">
        <div class="content">
            <i class="iconfont icon-cuo"></i>
            <div class="container">
                <div class="title">
                    <i class="iconfont icon-dui"></i>
                    <span>投票成功</span>
                </div>
                <p>感谢您投出的宝贵一票，<br>请继续支持您喜欢的策展人哦！<br>同时，您获得购将机会一次！</p>
                <button>你已中奖</button>
            </div>
            <div class="prize">
                <i class="icon"></i>
                <p>
                    恭喜你获得<br>
                    <span class="prize_title">现代汽车WRC 礼品套装</span><br>
                    <span class="prize_con">(钥匙链,定制车模和帽子三件套)</span>
                </p>
                <img class="prize_img" src="../../../assets/cart.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {};
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
div.content {
  padding-top: 1.5rem;
  width: 13rem;
  overflow: hidden;
  margin-left: 1.5rem;
}
div.container {
  width: 13rem;
  box-sizing: border-box;
  border: 0.15rem solid #ddd;
  overflow: hidden;
  padding-bottom: 1.5rem;
}
div.title{
    overflow: hidden;
    text-align: center;
    font-size: 1.3rem;
    margin-top: 1rem;
    color:#ddd;
    margin-bottom: 0.5rem;
}
div.title i.iconfont{
    font-size: 2rem;
    vertical-align: middle;
    opacity: 0.5;
    font-weight: normal;
}
p{
    text-align: center; 
    font-size:0.65rem;
    line-height: 1.2rem;
    color: white;
    opacity: 0.7;
    letter-spacing: 0.1rem;
    margin-bottom: 1rem;
}
button{
    background: #ddd;
    color: #52caec;
    border: none;
    outline: none;
    width: 10rem;
    height: 2rem;
    font-size: 0.7rem;
    font-weight: 900;
    margin: 0 auto;
    display: block; 
    letter-spacing: 0.15rem;
}
div.prize{
    margin-top: 0.7rem;
    width: 13rem;
    border: 0.01rem solid rgba(255, 255, 255, 0.9);
    position: relative;
    box-sizing: border-box;
}
div.prize p{
    margin-bottom: 0.1rem;
}
div.prize i.icon{
    display: block;
    width: 0.7rem;
    height: 0.5rem;
    border: 0.01rem solid rgba(255, 255, 255, 0.9);
    border-right:none;
    border-bottom:none;
    transform: rotate(45deg);
    background:#52caec;
    margin: 0 auto;
    margin-top: -0.21rem;
}
img.prize_img{
    width: 11rem;
    display: block; 
    margin: 0 auto;
    margin-bottom: 0.3rem;
}
i.icon-cuo {
  font-size: 2rem;
  float: right;
  color: #ddd;
  font-weight: 100;
  margin-bottom: 0.3rem;
  opacity: 0.5;
}
</style>

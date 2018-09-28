<template>
    <div class="box">
        <div class="content">
            <i class="iconfont icon-cuo"></i>   
            <div class="container">  
                <div class="title">
                    <i class="iconfont icon-dui"></i>
                    <span>您已中奖</span>
                </div>
                <div class="subTitle">
                    感谢您投出的宝贵一票,<br>
                    请继续支持您喜欢的策展人哦!<br>
                    同时，您将获得奖品一份！<br>
                    填写以下信息便于发放奖品哦！
                </div>

                <div class="import">
                    <input type="text" placeholder="您的姓名">
                    <input type="text" placeholder="您的电话">
                    <input type="text" placeholder="您的地址">
                </div>
                <div class="submit">
                    提 交 !
                </div>
            </div>  
            <p class="remark">
                备注：我们将根据您填写的资料配送奖品，请务必填写正确的个人信息。
            </p>
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
  width: 13.5rem;
  padding-top: 1.5rem;
  margin-left: 2.5em;
}
div.content i.icon-cuo {
  float: right;
  color: #ddd;
  font-size: 2rem;
  overflow: hidden;
  font-weight: normal;
  opacity: 0.7;
}
div.content div.container {
  clear: both;
  border: 0.2rem solid #ddd;
  box-sizing: border-box;
}
div.content div.container div.title {
  margin-top: 0.7rem;
  text-align: center;
  font-size: 1.5rem;
  color: #ddd;
  margin-bottom: 0.5rem;
}
div.title i {
  font-size: 2rem;
  vertical-align: middle;
  opacity: 0.5;
}
div.title span {
  vertical-align: middle;
}
div.subTitle {
  text-align: center;
  line-height: 1.4rem;
  color: #ddd;
  font-size: 0.7rem;
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
}
div.import {
  margin-bottom: 1rem;
}
div.import input {
  width: 11.6rem;
  margin-left: 0.5rem;
  outline: none;
  border: 0.07rem solid #ddd;
  height: 2rem;
  background: transparent;
  margin-bottom: 0.2rem;
  font-size: 0.8rem;
  padding-left: 0.2rem;
  color: #ddd;
  padding-right: 0.2rem;
}
div.import input::-webkit-input-placeholder {
  color: #ddd;
}
div.submit {
  width: 12rem;
  margin-left: 0.6rem;
  text-align: center;
  background: #ddd;
  margin-bottom: 1rem;
  height: 2rem;
  font-size: 0.6rem;
  color: #52caec;
  line-height: 2rem;
  font-weight: 800;
}
p.remark{
    margin-top: 1rem;
    color: #ddd;
    letter-spacing: 0.1rem
}
</style>

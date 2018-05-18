<template>
  <div>
    <div class="shopcart" @touchmove.prevent>
      <div class="shopcart-header">
        <h1>购物车</h1>
      </div>
      <div class="shopcar-wrapper">
        <div class="top-content">
          <ul class="ul">
            <li class="li">30天无忧退货</li>
            <li class="li">48小时快速退款</li>
            <li class="li">满88元免邮费</li>
          </ul>
        </div>
      </div>
      <div class="md-wrappert">
        <div class="md-content">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" width="124" height="124"/>
          <div class="text">去添加点什么吧</div>
          <div class="login">
            <router-link to="/personal">登录</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus" rel="stylesheet/stylus">
.shopcart
  width: 100%
  background: #f4f4f4
  position: fixed
  top: 0
  left: 0
  bottom: 96px
  z-index: 1
  .shopcart-header
    width: 100%
    height: 88px
    background: #fff
    font-size: 20px
    line-height: 88px
    text-align: center
    color: #333
  .shopcar-wrapper
    width: 100%
    height: 70px
    line-height: 70px
    .top-content
      text-align: center
      .ul
        display: flex
        .li
          flex: 1
          font-size: 24px
          list-style: none
  .md-wrappert
    width: 100%
    padding: 400px 0
    .md-content
      text-align: center
      .text
        font-size: 28px
        color: #999
      .login
        width: 480px
        height: 92px
        background: #b4282d
        color: #fff
        line-height: 92px
        margin: 80px auto
        & > a
          padding: 28px 208px
          color: #fff
          text-decoration: none
          font-size: 28px
</style>

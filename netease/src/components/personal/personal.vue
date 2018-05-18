<template>
  <transition name="">
    <div class="personal" @touchmove.prevent>
      <div class="personal-wrapper">
        <div class="personal-header">
          <div class="header-container">
            <router-link class="icon-home" to="/index"></router-link>
            <img class="text-icon" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" width="86" height="27" />
          </div>
        </div>
        <div class="personal-content">
          <div class="content-pic">
            <img class="text-pic" src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" width="134" height="45"/>
          </div>
          <div class="content-container">
            <div class="tel-ipt">手机号码登录</div>
            <div class="email-ipt">邮箱帐号登录</div>
            <div class="reg">手机号快捷注册</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
</script>

<style lang="stylus" rel="stylesheet/stylus">
.personal
  width: 100%
  height: 100%
  background: #F2F5F4
  position: fixed
  top: 0
  left: 0
  z-index: 10
  .personal-wrapper
    width: 100%
    .personal-header
      width: 100%
      height: 88px
      background: #fff
      .header-container
        width: 90%
        height: 88px
        margin: 0 auto
        color: #999
        text-align: center
        overflow: hidden
        .icon-home
          font-size: 44px
          text-decoration: none
          color: #999
          position: absolute
          top: 22px
          left: 22px
        .text-icon
          margin-top: 16px
    .personal-content
      width: 100%
      margin: 200px 0
      .content-pic
        text-align: center
      .content-container
        text-align: center
        color: #fff
        line-height: 94px
        font-size: 28px
        margin-top: 100px
        .tel-ipt
          width: 670px
          height: 94px
          background: #b4282d
          border: 1px solid #b4282d
          margin: 0 auto
        .email-ipt
          width: 670px
          height: 94px
          border: 2px solid #b4282d
          color: #333
          margin: 40px auto
        .reg
          color: #333
          margin: 40px auto
</style>

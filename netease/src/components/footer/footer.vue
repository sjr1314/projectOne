<template>
  <div class="footer">
    <div class="footer-wrapper">
      <div class="tab">
        <router-link to="/index" class="tab-item">
          <div class="icon-home icon"></div>
          <span class="text">首页</span>
        </router-link>
      </div>
      <div class="tab">
        <router-link to="/classify" class="tab-item">
          <div class="icon-menu icon"></div>
          <span class="text">分类</span>
        </router-link>
      </div>
      <div class="tab">
        <router-link to="/shopcart" class="tab-item">
          <div class="icon-truck icon"></div>
          <span class="text">购物车</span>
        </router-link>
      </div>
      <div class="tab">
        <router-link to="/personal" class="tab-item">
          <div class="icon-user icon"></div>
          <span class="text">个人</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.footer
  width: 100%
  height: 100px
  background: #fff
  position: fixed
  bottom: 0
  border-top: 2px solid #ccc
  padding: 4px 0
  z-index: 10
  .footer-wrapper
    display: flex
    text-align: center
    margin-top: 10px
    .tab
      flex: 1
      color: red
      .tab-item
        text-decoration: none
        color: #7B7B7B
        &.active
          color: rgb(240,20,20)
        .icon
          font-size: 50px
        .text
          font-size: 24px
</style>

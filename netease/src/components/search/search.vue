<template>
  <transition name="move">
    <div class="search" @touchmove.prevent>
      <div class="search-header">
        <div class="search-container">
          <div class="textIpt">
            <span class="icon-search"></span>
            <input class="text" type="text" placeholder="人手一只进口日式电动牙刷仅129" />
            <router-link class="cancel" to="/index">取消</router-link>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">

export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.search
  width: 100%
  height: 100%
  background: #f4f4f4
  position: fixed
  top: 0
  left: 0
  z-index: 10
  transform: translate3d(0, 0, 0)
  &.move-enter-active,&.move-leave-active
    transition: all 0.2s linear
  &.move-enter,&.move-leave-active
    transform: translate3d(100%, 0, 0)
  .search-header
    width: 100%
    height: 88px
    background: #fff
    border-bottom: 2px solid #ccc
    .search-container
      width: 95%
      margin: 0 auto
      overflow: hidden
      .textIpt
        width: 604px
        height: 56px
        background: #f4f4f4
        border-radius: 6px
        color: #999
        line-height: 56px
        margin-top: 16px
        .icon-search
          width: 28px
          height: 28px
          padding: 20px
        .text
          width: 520px
          height: 40px
          background: #f4f4f4
          border: none
          outline:none
        .cancel
          font-size: 24px
          color: #999
          text-decoration: none
          position: absolute
          right: 36px
          top: 16px
</style>

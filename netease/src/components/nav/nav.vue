<template>
  <transition name="move">
    <div class="nav" ref="nav" v-show="showFlag">
      <div @click="hide">返回</div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.nav
  width: 100%
  background: #fff
  position: fixed
  top: 0
  left: 0
  bottom: 0
  z-index: 30
  transform: translate3d(0, 0, 0)
  &.move-enter-active,&.move-leave-active
    transition: all 0.2s linear
  &.move-enter,&.move-leave-active
    transform: translate3d(100%, 0, 0)
</style>

<template>
  <div class="header">
    <div class="header-container">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png" alt="" />
      <router-link  class="input" to="/search">
        <span class="icon-search"></span>
        <span class="text" >搜索商品, 共9659款好物</span>
      </router-link >
    </div>
    <transition name="move">
      <div class="textItem">
        <div class="text-wrapper" ref="textWrapper">
          <ul class="text-list" ref="textList">
            <li class="text-item" v-for="(textList,index) in iconContent.textItem" :key="index"
            :value="index"
            @click="selectNav(index)"
            :class="{active:index==isShow}">{{ textList.text }}</li>
          </ul>
        </div>
      </div>
    </transition>
    <lunbo></lunbo>
    <div class="self">
      <div class="one">
        <ul>
          <li class="icon-item" v-for="(iconItem,index) in iconContent.self" :key="index">
            <img :src="iconItem.icon" alt="" />
            <span class="text">{{ iconItem.text }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="border"></div>
    <v-nav ref="nav" :textList="selectedNav"></v-nav>
  </div>
</template>

<script type="text/ecmascript-6">
import lunbo from '../lunbo/lunbo'
import BScroll from 'better-scroll'
import nav from '@/components/nav/nav'
export default {
  data () {
    return {
      isShow: 0,
      selectedNav: {}
    }
  },
  props: {
    cateList: {
      type: Array
    },
    goods: {
      type: Object
    },
    iconContent: {
      type: Object
    }
  },
  watch: {
    'iconContent' () {
      this.$nextTick(() => {
        this._initText()
      })
    }
  },
  methods: {
    _initText () {
      if (this.iconContent.textItem) {
        let textWidth = 50
        let margin = 12
        let width = (textWidth + margin) * this.iconContent.textItem.length - margin
        this.$refs.textList.style.width = width + 'px'
        this.$nextTick(() => {
          if (!this.textScroll) {
            this.textScroll = new BScroll(this.$refs.textWrapper, {
              scrollX: true,
              eventPassthrough: 'vertical'
            })
          } else {
            this.textScroll.refresh()
          }
        })
      }
    },
    selectNav (index) {
      this.$refs.nav.show()
      this.isShow = index
      if (index) {
        this.$refs.textList.style.transform = 'translate3d(-40px, 0, 0)'
        this.$refs.textList.style.transition = 'all 0.5s linear'
      } else {
        this.$refs.textList.style.transform = 'translate3d(0, 0, 0)'
        this.$refs.textList.style.transition = 'all 0.5s linear'
      }
    }
    /* changeIndex (index) {
      this.isShow = index
      if (index > 6) {
        this.$refs.textList.style.transform = 'translate3d(-200px, 0, 0)'
        this.$refs.textList.style.transition = 'all 0.5s linear'
      } else {
        this.$refs.textList.style.transform = 'translate3d(0, 0, 0)'
        this.$refs.textList.style.transition = 'all 0.5s linear'
      }
    } */
  },
  components: {
    lunbo,
    'v-nav': nav
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
  width: 100%
  height: 636px
  overflow: hidden
  .header-container
    width: 90%
    margin: 14px auto
    img
      width: 138px
      height: 40px
      display: inline-block
      vertical-align: middle
    .input
      width: 55%
      display: inline-block
      vertical-align: middle
      background: #f4f5f7
      padding: 8px 78px
      color: #666
      border-radius: 10px
      text-decoration: none
      .text
        font-size: 28px
        color: #666
  .textItem
    padding: 8px
    .text-wrapper
      width: 100%
      overflow hidden
      white-space nowrap
      .text-list
        font-size: 28px
        .active
          border-bottom: 6px solid red
        .text-item
          width: 88px
          height: 60px
          text-align: center
          line-height: 60px
          margin-right: 12px
          display inline-block
          &:last-child
            margin: 0
  .self
    width: 100%
    height: 72px
    .one
      display: inline-block
      .icon-item
        list-style: none
        display: inline-block
        padding: 16px 0 16px 36px
        img
          width: 32px
          height: 32px
          vertical-align: middle
        .text
          font-size: 24px
          vertical-align: middle
  .border
    width: 100%
    height: 20px
    background: #f4f5f7
</style>

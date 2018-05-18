<template>
  <transition name="">
    <div class="classify" @touchmove.prevent>
      <div class="classify-wrapper">
        <div class="classify-header">
          <div class="search-ipt">
            <router-link class="icon-search" to="/search">搜索商品, 共9637款好物</router-link >
          </div>
        </div>
        <div class="cateList">
          <div class="left-menu" ref="menuWrapper">
            <ul>
              <li class="menu_item" v-for="(item,index) in cateList"
                :key="index"
                ref="menuList"
                @click="selectMenu(index)"
                :class="{'current': currentIndex === index}">
                <span class="theme">{{ item.name }}</span>
              </li>
            </ul>
          </div>
          <div class="right-commodity" ref="rightWrapper">
            <ul>
              <li class="commodity-list" v-for="(item,index) in cateList"
                :key="index"
                ref="commodityList">
                <img :src="item.img" width="264" height="96" />
                <div class="title">{{ item.title }}</div>
                <ul class="allCommodImg">
                  <li class="commodityInfo" v-for="(commod,index) in item.commodity" :key="index">
                    <img :src="commod.img" width="72" height="72" />
                    <div class="text">{{ commod.description }}</div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
const ERR_OK = 0
const debug = process.env.NODE_ENV !== 'production'
export default {
  data () {
    return {
      cateList: [],
      listHeight: [],
      scrollY: 0
    }
  },
  created () {
    this.$http.get('/api/cateList')
      .then((response) => {
        response = response.body
        this.cateList = response.data
      })
    const url = debug ? '/api/cateList' : 'http://ustbhuangyi.com/sell/api/cateList'
    this.$http.get(url)
      .then((response) => {
        response = response.body
        console.log(response)
        if (response.errno === ERR_OK) {
          this.cateList = response.data
          this.$nextTick(() => {
            this._initScroll()
            this._calculateHeight()
          })
        }
      })
  },
  methods: {
    _initScroll () {
      // 左边菜单滚动
      this.menuScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      })
      // 右边商品滚动
      this.commodityScroll = new BScroll(this.$refs.rightWrapper, {
        click: true,
        probeType: 3
      })
      // 产品滚动，左边菜单跟着一起滚动
      this.commodityScroll.on('scroll', (pos) => {
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y))
        }
      })
    },
    // 与下面的computed计算属性（currentIndex）结合使用
    _calculateHeight () {
      let commodityList = this.$refs.commodityList
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < commodityList.length; i++) {
        let item = commodityList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    // 左边菜单块点击哪一个就是哪一个  跟selectMenu结合使用
    _followScroll (index) {
      let menuList = this.$refs.menuList
      let el = menuList[index]
      this.menuScroll.scrollToElement(el, 300, 0, -100)
    },
    // 右边产品滑动到哪一个是哪一个
    selectMenu (index) {
      let commodityList = this.$refs.commodityList
      let el = commodityList[index]
      this.commodityScroll.scrollToElement(el, 300, 0, 2)
    }
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i]
        let height2 = this.listHeight[i + 1]
        if (!height2 || (this.scrollY >= height1 && this.scrollY <= height2)) {
          this._followScroll(i)
          return i
        }
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.classify
  width: 100%
  background: #fff
  position: fixed
  top: 0
  left: 0
  bottom: 96px
  z-index: 1
  .classify-wrapper
    width: 100%
    .classify-header
      width: 100%
      height: 88px
      overflow: hidden
      border-bottom: 4px solid #f4f5f7
      .search-ipt
        width: 80%
        margin: 16px auto
        height: 56px
        background: #ededed
        border-radius: 10px
        font-size: 28px
        color: #333
        text-align: center
        line-height: 56px
        .icon-search
          padding: 0 12px
          color: #333
          text-decoration: none
    .cateList
      display: flex
      position: absolute
      top: 92px
      bottom: 0
      width: 100%
      overflow: hidden
      .left-menu
        flex: 0 0 162px
        width: 81px
        background: #f3f5f7
        font-size: 28px
        .menu_item
          display: table
          height: 108px
          width: 112px
          padding: 0 24px
          text-align: center
          &.current
            position: relative
            z-index: 10
            margin-top: -1px
            background: white
            font-weight: 700
          .theme
            display: table-cell
            width: 112px
            vertical-align: middle
            font-size: 26px
            border-bottom: 2px solid #ccc
      .right-commodity
        flex: 1
        .commodity-list
          margin: 0 36px
          padding: 30px 0 240px 0
          list-style: none
          font-size: 24px
          text-align: center
          .title
            padding: 20px 0
          .allCommodImg
            width: 528px
            height: 620px
            margin: 0 auto
            .commodityInfo
              list-style: none
              display: inline-block
              padding: 30px 10px
</style>

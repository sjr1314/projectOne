<template>
  <div class="contentOne">
    <div class="contentOne-wrapper">
      <div class="brandTitle">
        <span class="title">{{ brandProvide.title }}</span>
        <img :src="brandProvide.icon" width="15" height="15" />
      </div>
    </div>
    <div class="brandPic">
      <div class="brandPic-wrapper">
        <ul>
          <li class="brandPic" v-for="(item,index) in brandProvide.content" :key="index">
            <img :src="item.pic" width="177" height="120" />
            <div class="picText">
              <span class="text">{{ item.text }}</span>
              <div class="price">{{ item.price }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bg">
      <div class="bg-wrapper">
        <span class="text">新品首发</span>
        <div class="btn">查看全部</div>
      </div>
    </div>
    <div class="pics">
      <div class="pic-wrapper" ref="picWrapper">
        <ul class="pic-list" ref="picList">
          <li class="pic-item" v-for="(pic,index) in goods.picArr" :key="index">
            <img :src="pic" width="120" height="90" />
          </li>
        </ul>
      </div>
    </div>
    <div class="bgt">
      <div class="bg-wrapper">
        <span class="text">人气推荐</span>
        <div class="btn">查看全部</div>
      </div>
    </div>
    <div class="pict" ref="pict">
      <div class="pic-wrappert" ref="picWrappert">
        <ul class="pic-listt" ref="picListt">
          <li class="pic-itemt" v-for="(pict,index) in goods.picArrt"
           :key="index">
            <img :src="pict" width="100%" height="100%"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  props: {
    brandProvide: {
      type: Object
    },
    goods: {
      type: Object
    }
  },
  watch: {
    'goods' () {
      this.$nextTick(() => {
        this._initPic()
        this._initPics()
      })
    }
  },
  methods: {
    _initPic () {
      if (this.goods.picArr) {
        let picWidth = 140
        let margin = 6
        let width = (picWidth + margin) * this.goods.picArr.length - margin
        this.$refs.picList.style.width = width + 'px'
        this.$nextTick(() => {
          if (!this.picScroll) {
            this.picScroll = new BScroll(this.$refs.picWrapper, {
              scrollX: true,
              eventPassthrough: 'vertical'
            })
          } else {
            this.picScroll.refresh()
          }
        })
      }
    },
    _initPics () {
      if (this.goods.picArrt) {
        let picWidth = 140
        let margin = 6
        let width = (picWidth + margin) * this.goods.picArrt.length - margin
        this.$refs.picListt.style.width = width + 'px'
        this.$nextTick(() => {
          if (!this.Scroll) {
            this.Scroll = new BScroll(this.$refs.picWrappert, {
              scrollX: true,
              eventPassthrough: 'vertical'
            })
          } else {
            this.Scroll.refresh()
          }
        })
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.contentOne
  width: 100%
  height: 110px
  .contentOne-wrapper
    width: 100%
    height: 110px
    .brandTitle
      font-size: 32px
      text-align: center
      line-height: 110px
      .title
        vertical-align: middle
      img
        width: 30px
        height: 30px
        vertical-align: middle
        padding: 8px 0 0 8px
  .brandPic
    width: 100%
    .brandPic-wrapper
      width: 100%
      .brandPic
        width: 50%
        height: 40%
        display: inline-block
        list-style: none
        position: relative
        background: #f4f5f7
        margin-top: 6px
        .picText
          padding: 12px
          position: absolute
          top: 0
          left: 0
          .text
            font-size: 28px
            color: #333
          .price
            color: #333s
            font-size: 26px
  .bg
    width: 100%
    height: 300px
    background: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png")
    background-size: 100% 100%
    margin-top: 6px
    text-align: center
    overflow: hidden
    .bg-wrapper
      margin-top: 60px
      .text
        font-size: 34px
        color: #8ba0b6
      .btn
        width: 240px
        height: 40px
        padding: 16px 0
        font-size: 28px
        background: #D8E5F1
        color: #8ba0b6
        margin: 30px auto
        border-radius: 10px
  .pics
    padding 36px
    .pic-wrapper
      width 100%
      overflow hidden
      white-space nowrap
      .pic-list
        font-size 0
        .pic-item
          display inline-block
          margin-right 12px
          width 280px
          height 280px
          background: #f4f4f4
          img
            width 280px
            height 280px
          &:last-child
            margin 0
  .bgt
    width: 100%
    height: 300px
    background: url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png")
    background-size: 100% 100%
    margin-top: 6px
    text-align: center
    overflow: hidden
    .bg-wrapper
      margin-top: 60px
      .text
        font-size: 34px
        color: #8ba0b6
      .btn
        width: 240px
        height: 40px
        padding: 16px 0
        font-size: 28px
        background: #D8E5F1
        color: #8ba0b6
        margin: 30px auto
        border-radius: 10px
  .pict
    padding: 36px
    padding-bottom: 160px
    .pic-wrappert
      width: 100%
      overflow: hidden
      white-space: nowrap
      .pic-listt
        font-size: 0
        .pic-itemt
          display: inline-block
          margin-right: 12px
          width: 280px
          height: 280px
          background: #f4f4f4
          img
            width: 280px
            height: 280px
          &:last-child
            margin: 0
</style>

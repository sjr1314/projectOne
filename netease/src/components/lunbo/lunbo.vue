<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/ea5de94a60cd746c1ced27f569f2ccc4.jpg?imageView&thumbnail=750x0&quality=75"/></div>
      <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/e573b38c8c1dcce779275c31ab109da0.jpg?imageView&thumbnail=750x0&quality=75" alt="" /></div>
      <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/a18d9c0f5a83be64ade4ee99ff03bbd7.jpg?imageView&thumbnail=750x0&quality=75" alt="" /></div>
      <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/73a36a918e8ae8894c49c7ecfa121474.jpg?imageView&thumbnail=750x0&quality=75" alt="" /></div>
      <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/8cdbd8050e07181ff321511674bffe49.jpg?imageView&thumbnail=750x0&quality=75" alt="" /></div>
      <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/37b33bc2d390b186cd5aa931a5a8bb6e.jpg?imageView&thumbnail=750x0&quality=75" alt="" /></div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false
      },
      pagination: {
        el: 'swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      onTouchEnd: function () {
        mySwiper.startAutoplay()
      }
    })
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.swiper-container
  width: 100%
  height: 400px
  overflow: hidden
  .swiper-wrapper
    width: 100%
    height: 100%
    .swiper-slide
      background-position: center
      background-size: cover
      width: 100%
      height: 100%
      img
        width: 100%
        height: 100%
        background-size: 100% 100%
</style>

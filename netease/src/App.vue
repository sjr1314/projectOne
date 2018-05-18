<template>
  <div id="app">
    <v-header :iconContent="iconContent" :goods="goods"></v-header>
    <content-one :brandProvide="brandProvide" :goods="goods"></content-one>
    <v-footer :iconContent="iconContent"></v-footer>
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
import header from '@/components/header/header'
import contentOne from '@/components/content/contentOne'
import footer from '@/components/footer/footer'
export default {
  data () {
    return {
      isRouterAlive: true,
      cateList: [],
      goods: {},
      iconContent: {},
      brandProvide: {}
    }
  },
  created () {
    this.$http.get('/api/cateList')
      .then((response) => {
        response = response.body
        this.cateList = response.data
      })
    this.$http.get('/api/goods')
      .then((response) => {
        response = response.body
        this.goods = response.data
      })
    this.$http.get('/api/iconContent')
      .then((response) => {
        response = response.body
        this.iconContent = response.data
      })
    this.$http.get('/api/brandProvide')
      .then((response) => {
        response = response.body
        this.brandProvide = response.data
      })
  },
  methods: {
    reload () {
      this.$nextTick(() => (this.isRouterAlive = true))
    }
  },
  components: {
    'v-header': header,
    contentOne,
    'v-footer': footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>

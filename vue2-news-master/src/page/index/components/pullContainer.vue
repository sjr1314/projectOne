<template>
    <div class="container" :class="type" v-infinite-scroll="loadBottomAjax" infinite-scroll-disabled="bottomLock" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
        <my-loading :visible="loading" :reload="init" />
        <div class="globalTip">
            <div class="dataCount">已为你推荐{{dataCount}}条新内容</div>
            <div class="noNewData">没有最新的内容了</div>
            <div class="requestFail">网络请求失败,请检查网络</div>
        </div>
        <mt-loadmore :top-method="loadTopAjax" @top-status-change="handleTopChange" ref="loadmore" :auto-fill='false' :distance='indexSwiper'>
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus == 'pull'"><img class='pullLoading' src="~@/assets/img/loading.png"> 下拉刷新↓</span>
                <span v-show="topStatus == 'drop'"><img class='pullLoading' src="~@/assets/img/loading.png"> 释放更新↑</span>
                <span v-show="topStatus == 'loading'"><img class='pullLoading' src="~@/assets/img/loading.gif"> 加载中...</span>
            </div>
            <my-banner :json="bannerJson" v-if='bannerJson.length > 0'/>
            <list-item :itemJson="stickJson" v-if='stickJson.length > 0'/>
            <list-item :itemJson="contentJson" v-if='contentJson.length > 0'/>
            <div class="bottomLoad" v-if="contentJson.length > 0">
                <div class="loading" v-show='bottomLoading'>加载中...</div>
                <div class="noData" v-if='bottomNoData'>没有更多的内容了</div>
            </div>
        </mt-loadmore>
    </div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    props: ['type'],
    data() {
        return {
            classPage: 1,
            stickJson: [],
            bannerJson: [],
            contentJson: [],
            dataCount: 0,
            topStatus: '',
            bottomLock: false,
            bottomLoading: true,
            bottomNoData: false,
            loading: false
        }
    },
    computed: {
        ...mapState('index', [
          'indexActive',
          'indexPage',
          'indexLocation',
          'indexSwiper'
        ]),
        ...mapGetters('index', [
          'activeMeta'
        ])
    },
    watch: {
        indexActive(val) {
            this.init()
        },
        classPage(val) {
            this.indexPage[this.indexActive] = val
            this.set_indexPage(this.indexPage)
        },
        contentJson(val) {
            this.set_currentContent(val)
        }
    },
    methods: {
        ...mapMutations('index', [
            'set_currentContent',
            'set_indexPage',
            'set_indexLocation'
        ]),
        ...mapActions('index', [
            'get_listItem_cache',
            'get_listItem_data',
            'get_stick_data',
            'get_banner_data'
        ]),
        init() {
            if (this.indexActive === this.type && this.contentJson.length === 0) {
                this.loading = 'loading'
                this.classPage = this.activeMeta.page
                this.get_banner_data().then(res => {
                    if (res) {
                        this.bannerJson = res
                    }
                })
                this.get_stick_data().then(res => {
                    if (res) {
                        this.stickJson = res
                    }
                })
                this.get_listItem_cache(this.indexActive)
                .then(res => {
                    if (res) {
                        this.contentJson = res
                        this.handleLocaltion('get')
                        this.loading = false
                    } else {
                        this.loadTopAjax()
                    }
                })
            }
        },
        loadTopAjax() {
            this.get_listItem_data(this.classPage)
            .then(res => {
                this.loading = false
                if (res) {
                    this.contentJson.unshift(...res)
                    this.dataCount = res.length
                    this.classPage++
                    $(`.container.${this.type} .dataCount`).slideDown(200).delay(1000).slideUp(200)
                    this.newLookHere()
                } else {
                    $(`.container.${this.type} .noNewData`).slideDown(200).delay(1000).slideUp(200)
                }
                this.$refs.loadmore.onTopLoaded()
                this.loading = false
                $(`.container.${this.type} .requestFail`).hide()
            })
            .catch(err => {
                console.log('loadTop发生错误', err)
                if (this.contentJson.length > 0) {
                    $(`.container.${this.type} .requestFail`).show()
                    this.loading = false
                } else {
                   this.loading = 'error'
                }
            })
        },
        loadBottomAjax () {
            this.bottomLock = true
            this.get_listItem_data(this.classPage)
            .then(res => {
                if (res) {
                    this.contentJson.push(...res)
                    this.classPage++
                } else {
                    this.bottomLoading = false
                    this.bottomNoData = true
                }
                this.bottomLock = false
            })
        },
        newLookHere() {
            if (this.dataCount >= 10) {
                let lookIndex = this.contentJson.findIndex((n) => n.type === 'lookHere')
                this.contentJson.splice(lookIndex, 1)   // 删除数据里面的look数据
                this.contentJson.splice(10, 0, {type: 'lookHere'})  // 始终在第11个位置里添加look数据
            }
            this.$nextTick(() => {
                $(`.${this.indexActive} #lookHere`).prev().css('border', 'none')    // 去除look元素的上一个元素的border边框
            })
        },
        lookHereClick() {
            $(`.container.${this.type}`).on('click', '#lookHere', () => {
                $(`.container.${this.indexActive}`).animate({scrollTop: 0}, () => {
                    this.loadTopAjax()
                })
            })
        },
        handleTopChange(status) {
            this.topStatus = status
        },
        handleLocaltion(type) {
            if (this.indexActive === this.type) {
                if (type === 'get') {
                    this.$nextTick(() => {
                        $(`.container.${this.type}`).scrollTop(this.activeMeta.location)
                   })
                } else if (type === 'set') {
                    let scrollTop = $(`.container.${this.type}`).scrollTop()
                    if (scrollTop >= 0) {
                        this.indexLocation[this.indexActive] = scrollTop
                        this.set_indexLocation(this.indexLocation)
                    }
                }
            }
        },
        saveScroll() {
            this.handleLocaltion('set')
        }
    },
    mounted() {
        this.init()
        this.lookHereClick()
    },
    activated() {
        this.handleLocaltion('get')
        window.addEventListener('beforeunload', this.saveScroll) // 为了刷新之后保持当前滚动条位置，监听方法不能带参数
    },
    deactivated() {
        this.handleLocaltion('set')
        window.removeEventListener('beforeunload', this.saveScroll) // 为了刷新之后保持当前滚动条位置，监听方法不能带参数
    }
}
</script>
<style lang='stylus'>
.container {
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    position: relative;
    .globalTip{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        div{
            height: 32px;
            line-height: 34px;
            font-size: 14px;
            color: #2a90d7;
            background: rgba(213, 233, 247, .9);
            text-align: center;
            display: none;
            &.requestFail {
                color: #f56767;
                background: #FBE9EF;
            }
        }
    }
    .mint-loadmore-top {
        height: 50px;
        line-height: 50px;
        font-size: 14px;
    }
    .pullLoading{
        width: 24px;
        height: 24px;
        vertical-align: middle;
        margin-top: -4px;
        margin-right: 3px;
    }
}
</style>

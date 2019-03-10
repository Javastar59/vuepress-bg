<template>
  <div class="page-detail">
    <div class="container">
      <fullscreen ref="fullscreen" @change="fullscreenChange">
        <div :class="fullscreen ? 'full-content':'page-detail-content'">
          <div class="title" >
            <span @click="toggle">{{title}}</span>
          </div>
          <Content/>
        </div>
      </fullscreen>
      <page-right></page-right>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Vue from 'vue'
  import zoom from 'medium-zoom'
  import PageRight from './PageRight.vue'
  import Footer from './Footer'
  import fullscreen from 'vue-fullscreen'
  Vue.use(fullscreen)

  export default {

    data(){
      return {
        fullscreen: false
      }
    },

    methods: {
      toggle () {
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
          return;
        }
        this.$refs['fullscreen'].toggle();
      },
      fullscreenChange (fullscreen) {
        this.fullscreen = fullscreen
      }
    },

    mounted () {
      setTimeout(() => {
        zoom('.content img')
      }, 1000)
    },

    computed: {
      title() {
        return this.$page.frontmatter.title
      },
      path() {
        return window.location.pathname
      }
    },

    components: {
      zoom,
      PageRight,
      Footer
    }
  }
</script>

<style lang="stylus">
  @import './styles/config.styl'

  .medium-zoom-overlay {
    z-index: 100;
  }

  .medium-zoom-overlay ~ img {
    z-index: 101;
  }

  .full-content{
      width 100%
      float left
      border-radius 2px
      background #ffffff
      img{
        max-width 1200px
        width 100%
      }
      .title{
        font-size 26px
        font-weight bold
        padding 20px
        border-bottom: 1px solid #eaecef;
        span {
          &:hover{
            cursor pointer
            color #007fff
          }
        }
      }
      .line{
        height 10px
        width 100%
        background #f3f3f3
      }
    }
  .page-detail{
    .container{
      overflow hidden
      width 960px
      min-height 80vh
      margin 80px auto 0
    }
    .page-detail-content{
      width 70%
      float left
      border-radius 2px
      background #ffffff
      .title{
        font-size 26px
        font-weight bold
        padding 20px
        border-bottom: 1px solid #eaecef;
        span {
          &:hover{
            cursor pointer
            color #007fff
          }
        }
      }
      .line{
        height 10px
        width 100%
        background #f3f3f3
      }
    }
    .leancloud-visitors{
      text-align right
      padding 0 8px 8px 0
      span{
        font-size 12px
        color #999
      }
    }
    .vlist{
      padding: 0 10px
    }
  }

  @media screen and (max-width: $MQMobile) {
    .page-detail{
      .container{
        overflow hidden
        width 100%
        margin 60px auto 0
      }
      .page-detail-content{
        width 100%
        float none
        .title span{
          pointer-events none
        }
      }
    }
  }
</style>

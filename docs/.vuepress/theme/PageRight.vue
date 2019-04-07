<template>
  <div class="d-page-right">
    <div class="about-me">
      <div class="title">关于作者</div>
        <img class="user-img" src="https://cdn.star59.top/user-img.jpg" @click.prevent="toAbout('/about/')" />
        <div class="info">姓名：曹兴</div>
        <div class="info">爱好：学习</div>
        <div class="info">简介：一枚Java开发程序猿</div>
      <a class="more-about" @click.prevent="toAbout('/about/')">更多</a>
    </div>
    <hot-article></hot-article>
  </div>
</template>

<script>
  import HotArticle from './HotArticle'
  export default {
    components: {
      HotArticle
    },
    methods:{
      toAbout(link) {
        this.$router.push(link)
      }
    }
  }
</script>


<style lang="stylus">
  @import './styles/config.styl'
  .d-page-right{
    width 26%
    float left
    margin-left 2%
    border-radius 2px
    text-align left
    .about-me{
      background #ffffff
      .title{
        font-size 16px
        padding 10px 16px
        border-bottom 1px solid #f3f3f3
      }
      .user-img{
        width 70px
        height 70px
        border-radius 35px
        display block
        margin 10px auto
        -webkit-transition: -webkit-transform 1s ease-out;
        &:hover{
          cursor pointer
          transform: rotate(360deg) scale(1)
        }
      }
      .info{
        font-size 14px
        color #666
        margin 10px 20px
      }
      .more-about{
        text-align center
        height 30px
        line-height 30px
        border-top 1px solid #eeeeee
        width 100%
        font-size 12px
        display inline-block
        &:hover{
          cursor pointer
        }
      }
    }
  }
  @media screen and (max-width: $MQMobile) {
    .d-page-right{
      display none
    }
  }
</style>


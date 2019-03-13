<template>
  <div :class="barFixed === true ? 'fixed':'hot-article'">
    <div class="title">最近更新</div>
    <ul>
      <li v-for="item in hotArticle" :key="item.link">
        <a @click.prevent="toHotArticle(item.link)">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>

  const hotArticle = [
    {
      title: '基于VuePress搭建个人网站',
      link: '/essay/vuepress.html'
    }, {
      title: 'MySQL性能优化',
      link: '/database/mysql1.html'
    }, {
      title: 'Docker学习笔记',
      link: '/deploy/docker1.html'
    }
  ];

  export default {
    data() {
      return {
        hotArticle: hotArticle,
        barFixed: false
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 440) {
          this.barFixed = true;
        }else {
          this.barFixed = false
        }
      },
      toHotArticle(link) {
        this.$router.push(link)
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="stylus">
  @import './styles/config.styl'
  .fixed{
    background #ffffff
    border-radius 2px
    text-align left
    position fixed
    top 70px
    width 249px
    .title{
      font-size 16px
      padding 10px 16px
      border-bottom 1px solid #f3f3f3
    }
    ul{
      list-style none
      padding-right 20px
      li{
        font-size 12px
        overflow hidden
        white-space pre-wrap
        word-wrap break-word
        margin-bottom 10px
        a{
          color #666
          &:hover{
            cursor pointer
            color #20a0ff
          }
        }
        &:before{
          content ''
          display inline-block
          width 4px
          height 4px
          border-radius 2px
          background #666
          margin-right 10px
          vertical-align middle
        }
      }
    }
  }
  .hot-article{
    background #ffffff
    border-radius 2px
    text-align left
    margin-top 20px
    padding-bottom 10px
    .title{
      font-size 16px
      padding 10px 16px
      border-bottom 1px solid #f3f3f3
    }
    ul{
      list-style none
      padding-right 20px
      li{
        font-size 12px
        overflow hidden
        white-space pre-wrap
        word-wrap break-word
        margin-bottom 10px
        a{
          color #666
          &:hover{
            cursor pointer
            color #20a0ff
          }
        }
        &:before{
          content ''
          display inline-block
          width 4px
          height 4px
          border-radius 2px
          background #666
          margin-right 10px
          vertical-align middle
        }
      }
    }
  }
  @media screen and (max-width: $MQMobile) {
    .hot-article{
      display none
    }
  }
</style>


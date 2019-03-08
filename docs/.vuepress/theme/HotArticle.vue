<template>
  <div class="hot-article">
    <div class="title">最近更新</div>
    <ul>
      <li v-for="item in hotArticle" :key="item.link">
        <a target="_blank" :href="item.link">{{item.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>

  const hotArticle = [
    {
      title: 'java核心知识点',
      link: '/java.html'
    }, {
      title: 'spring原理',
      link: '/spring.html'
    }, {
      title: '平时收藏的一些技术网站网站',
      link: '/collection.html'
    }
  ];

  export default {
    data() {
      return {
        hotArticle: hotArticle
      }
    }
  }
</script>

<style lang="stylus">
  @import './styles/config.styl'
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


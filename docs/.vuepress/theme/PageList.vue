<template>
  <div class="d-page">
    <div class="d-page-left">
      <div class="item-list-box" v-if="list.length > 0">
        <div class="item-head">文章分类
          <span>
            <a :class="pathStr == '/essay/'?'bluer':''" @click.prevent="handlerLink('/essay/')">推荐</a>
            <a :class="pathStr == '/front/'?'bluer':''" @click.prevent="handlerLink('/front/')">前端</a>
            <a :class="pathStr == '/java/'?'bluer':''" @click.prevent="handlerLink('/java/')">JAVA后端</a>
            <a :class="pathStr == '/database/'?'bluer':''" @click.prevent="handlerLink('/database/')">数据库</a>
            <a :class="pathStr == '/deploy/'?'bluer':''" @click.prevent="handlerLink('/deploy/')">运维</a>
            <a :class="pathStr == '/others/'?'bluer':''" @click.prevent="handlerLink('/others/')">其他</a>
          </span>
        </div>
        <div
          class="item-list"
          v-for="(item, index) in list"
          :key="index">
          <div class="item-list-foot">
            <div class="tags" >
              <span class="tag" @click="handlerTag(item.tags)">
                <span :class="tagStatus == ''?'':'tag-color'"> * </span>
                {{item.tags}}</span>
            </div>
            <div class="date">
              {{ item.date }}
            </div>
          </div>
          <div class="item-list-title">
            <span class="title-content" @click="handlerClick(item.link)">
              {{ item.title }}
            </span>
          </div>
          <div class="item-list-content">
            <div class="description">
              {{ item.description }}
            </div>
          </div>
        </div>
        <div class="get-more" v-if="totalSize !== currentLen" @click="handleMore">查看更多</div>
      </div>
      <div class="no-list" v-else>
        抱歉，暂时还没有更新！
      </div>
    </div>
    <div class="d-page-right">
      <div class="about-me">
        <div class="title">关于作者</div>
        <img class="user-img" src="https://cdn.star59.top/user-img.jpg" @click.prevent="toAbout('/about/')" />
        <div class="info">姓名：曹兴</div>
        <div class="info">昵称：star</div>
        <div class="info">爱好：电影</div>
        <div class="info">简介：一枚Java开发程序猿</div>
        <a class="more-about" @click.prevent="toAbout('/about/')">更多</a>
      </div>

      <div class="hot-tags">
        <div class="title">文章标签</div>
        <ul>
          <li v-for="item in singleTagLists">
            <a @click.prevent="handlerTag(item)">{{item}}</a>
          </li>
        </ul>
      </div>

      <hot-article></hot-article>
    </div>

  </div>
</template>

<script>
  import PageRight from './PageRight.vue'
  import HotArticle from './HotArticle'

  export default {
    data () {
      return {
        pageNo: 1,
        pageSize: 2,
        currentLen: 0,
        pathStr: '',
        tagStatus: '',
        filterGetSize: 0,
        filterGetList: [],
        singleTagLists: []
      }
    },

    components: {
      PageRight, HotArticle
    },

    computed: {
      items () {
        this.pathStr = this.$page.path;
        let arr = this.$page.frontmatter.items.map(value => value.tags);
        this.singleTagLists = [...new Set(arr)];
        return this.$page.frontmatter.items
      },

      totalSize () {
        if (this.tagStatus != '') {
          const data = this.items.filter(value => this.tagStatus == value.tags);
          this.filterGetSize = data.length == 0 ? 0 : data.length;
          return data.length == 0 ? 0 : data.length;
        }
        return this.items && this.items.length || 0
      },

      list: {
        get() {
          if (this.items === null) {
            return []
          }
          let showList = this.items;
          if (this.tagStatus != '') {
            const data = this.items.filter(value => this.tagStatus == value.tags);
            this.filterGetList = data;
            showList = data.length == 0 ? [] : data;
          }
          const cdata = this.formatData(showList.slice(0,10));
          this.currentLen = cdata.length
          return cdata
        },

        set() {}
      }
    },

    methods: {

      toAbout(link) {
        this.$router.push(link)
      },

      handlerTag(tag) {
        this.tagStatus = '';
        this.tagStatus = tag;
      },

      handlerLink (link) {
        this.tagStatus = '';
        this.$router.push(link)
      },

      handlerClick (link) {
        this.$router.push(this.$page.path + link + '.html')
      },

      handleMore () {
        if (this.currentLen === this.totalSize) {
          return
        }

        let listData = this.list
        const start = this.currentLen
        const end = this.currentLen + 10

        if (this.tagStatus != '') {
          listData.push(...this.filterGetList.slice(start, end));
        } else {
          listData.push(...this.items.slice(start, end));
        }

        this.list = this.formatData(listData)
        this.currentLen = listData.length
      },

      formatData(data) {
        return data.map((item) => {
          const date = item.date.substring(0, 10)
          return { ...item, date}
        })
      }
    }
  }
</script>

<style lang="stylus">
  @import './styles/config.styl'

  .d-page {
    width 960px
    min-height 80vh
    margin: 20px auto
    overflow hidden
    .d-page-left{
      width 72%
      float left
      .item-list-box{
        width 100%
      }
      .item-head {
        background #fff
        border-radius 2px
        border-bottom 1px solid #eee
        padding 17px
        font-size 16px
        font-weight bold
        .bluer{
          color #007fff
        }
        span {
          margin-left 250px
          a {
            padding 5px
            color #707780
            &:hover{
              cursor pointer
              color #007fff
            }
          }
        }
      }
      .item-list {
        background #fff
        border-radius 2px
        border-bottom 1px solid #eee
        border-left 1px solid #eee
        border-right 1px solid #eee
        padding 20px
        &:hover{
          background #f6f6f6
        }
        .item-list-title{
          font-size 18px
          font-weight bold
          margin-bottom 10px
          color #333333
        }
        .item-list-content{
          width: 100%;
          font-size: 14px;
          color: #707780;
          line-height: 1.5;
          margin-bottom 10px
        }
        .item-list-foot{
          margin-bottom 10px
          overflow hidden
          .date{
            float right
            font-size 12px
            color #bbbbbb
          }
          .tags{
            float left
            .tag{
              float left
              margin-right 6px
              border-radius 2px
              padding 0 8px
              font-size 12px
              color #20a0ff
              border 1px solid #20a0ff
              &:hover{
                cursor pointer
              }
            }
          }
        }
      }
      .title-content{
        &:hover {
          cursor pointer
          color #20a0ff
        }
      }
      .tag-color{
        color red
        font-weight bold
      }
      .get-more{
        width 100%
        height 40px
        line-height 40px
        text-align center
        color #6a8bad
        background #fff
        margin-top 20px
        cursor pointer
      }
    }
    .no-list{
      width 100%
      background #fff
      min-height 70vh
      line-height 70vh
      text-align center
      color #6a8bad
    }
  }
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
  .hot-tags{
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
  .sel-hot-tags{
    color #20a0ff
  }
  @media screen and (max-width: $MQMobile) {
    .d-page {
      width 100%
      margin: 10px auto
      .item-head{
        display none
      }
      .d-page-left{
        width 100%
      }
    }
    .d-page-right{
      display none
    }
  }
</style>

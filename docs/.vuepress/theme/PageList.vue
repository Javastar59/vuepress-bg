<template>
  <div class="d-page">
    <div class="d-page-left">
      <div class="item-list-box" v-if="list.length > 0">
        <div class="item-head">文章分类
          <span>
            <a :class="pathStr == '/essay/'?'bluer':''" @click="handlerLink('/essay/')">推荐</a>
            <a :class="pathStr == '/front/'?'bluer':''" @click="handlerLink('/front/')">前端</a>
            <a :class="pathStr == '/java/'?'bluer':''" @click="handlerLink('/java/')">JAVA后端</a>
            <a :class="pathStr == '/database/'?'bluer':''" @click="handlerLink('/database/')">数据库</a>
            <a :class="pathStr == '/deploy/'?'bluer':''" @click="handlerLink('/deploy/')">运维</a>
            <a :class="pathStr == '/others/'?'bluer':''" @click="handlerLink('/others/')">其他</a>
          </span>
        </div>
        <div
          class="item-list"
          v-for="(item, index) in list"
          :key="index"
          @click="handlerClick(item.link)"
        >
          <div class="item-list-foot">
            <div class="tags">
              <span class="tag">{{item.tags}}</span>
            </div>
            <div class="date">
              {{ item.date }}
            </div>
          </div>
          <div class="item-list-title">{{ item.title }}</div>
          <div class="item-list-content">
            <div class="description">
              {{ item.description }}
            </div>
          </div>
        </div>
        <div class="get-more" v-if="totalSize !== currentLen" @click="handleMore">查看更多</div>
      </div>
      <div class="no-list" v-else>
        暂未更新!!
        <a href="star59@163.com">点我发邮件</a>
      </div>
    </div>
    <page-right></page-right>
  </div>
</template>

<script>
  import PageRight from './PageRight.vue'

  export default {
    data () {
      return {
        pageNo: 1,
        pageSize: 2,
        currentLen: 0,
        pathStr: ''
      }
    },

    components: {
      PageRight
    },

    computed: {
      items () {
        this.pathStr = this.$page.path;
        return this.$page.frontmatter.items
      },

      totalSize () {
        return this.items && this.items.length || 0
      },

      list: {
        get() {
          if (this.items === null) {
            return []
          }
          const data = this.formatData(this.items.slice(0,10))
          this.currentLen = data.length
          return data
        },

        set() {}
      }
    },

    methods: {

      handlerLink (link) {
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

        listData.push(...this.items.slice(start, end))

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
        padding 20px
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
        padding 20px
        &:hover{
          background #e9f2f7
          /*box-shadow:0px 3px 3px #c8c8c8*/
          cursor pointer
        }
        &:hover .item-list-title{
          color #20a0ff
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
          // letter-spacing: 2px;
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
            }
          }
        }
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
  }
</style>

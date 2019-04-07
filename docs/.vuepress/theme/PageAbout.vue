<template>
  <div class="page-about">
    <div class="page-about-content">
      <h1 class="title">个人简历</h1>
      <section class="content-hd">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <div class="section-title">基本信息</div>
          <span class="section-title-r"></span>
        </header>
        <section class="name">曹兴</section>
        <div class="person">
          <section class="info">
            <div>男 / 24</div>
            <div>商洛学院 · 计算机科学与技术专业</div>
            <div>本科 / 2018年毕业</div>
          </section>
          <section class="info ml">
            <div><a href="https://www.star59.top/">https://www.star59.top</a></div>
            <div><a href="#">sunstar59@163.com</a></div>
            <div>15389673176</div>
          </section>
        </div>
      </section>
      <section class="content-hd">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <div class="section-title">求职意向</div>
          <span class="section-title-r"></span>
        </header>
        <div class="person">
          <section class="info">
            <div>求职意向：初级Java开发工程师 <span style="margin-left: 90px">期望行业：互联网/计算机软件</span></div>
            <div>期望薪资：7K-8K/月 <span style="margin-left: 158px">地点：四川成都</span></div>
          </section>
        </div>
      </section>
      <section class="practice">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <div class="section-title">工作经历</div>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          <div class="item" v-for="item in practiceList">
            <header class="item-hd">
              <span class="item-time weight">{{item.time}}</span>
              <span class="weight">{{item.title}}</span>
              <span class="item-name weight">{{item.company}}</span>
            </header>
            <div class="item-bd">
              <div class="section-content">{{item.content}}</div>
            </div>
          </div>
        </div>
      </section>
      <section class="skill">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <div class="section-title">专业技能</div>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          <ul class="section-list">
            <li v-for="item in skillList">
              <p class="section-content">{{item.item}}</p>
            </li>
          </ul>
        </div>
      </section>
      <section class="project">
        <header class="section-hd">
          <span class="section-title-l"></span>
          <div class="section-title">项目经验</div>
          <span class="section-title-r"></span>
        </header>
        <div class="section-bd">
          <div class="item" v-for="item in projectList" :key="item.time">
            <header class="item-hd">
              <span class="item-time weight">{{item.time}}</span>
              <span class="item-name weight">{{item.title}}</span>
            </header>
            <div class="item-bd">
              <p class="section-content">{{item.content}}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <a target="_blank" href="/个人简历-Java开发-曹兴.pdf" class="download">下载简历</a>
  </div>
</template>

<script>
  export default {
    computed: {
      projectList() {
        return this.$page.frontmatter.projectList
      },
      skillList() {
        return this.$page.frontmatter.skillList
      },
      practiceList() {
        return this.$page.frontmatter.practiceList
      }
    }
  }
</script>

<style lang="stylus">
  @import './styles/config.styl'

  .page-about
    width 900px
    margin 20px auto
    .download
      display block
      font-size 16px
      color #999999
      width 300px
      height 35px
      border 1px solid #eeeeee
      border-radius 4px
      text-align center
      line-height 35px
      background #fff
      margin 40px auto
      font-size 14px
      cursor pointer
  .page-about-content
    background #ffffff
    overflow hidden
    padding 0 40px 40px
    .weight
      font-weight bold
      font-size 14px
    .content-hd
      overflow hidden
      .name
        text-align left
        color #333
        font-size 20px
        padding 0 15px
        margin-bottom 10px
    .title
      text-align center
      font-size 24px
      font-weight normal
      margin 40px 0
    .person
      margin-left 40px
      .info
        color #555
        line-height 30px
        float left
        div
          font-size 14px
          a
            color #666666
            font-weight normal
      .ml
        margin-left 100px
    .section-hd
      position relative
      height 32px
      margin 20px auto
      overflow hidden
      .section-title
        position relative
        z-index 1
        width 24%
        min-width 100px
        margin 0 auto
        padding 4px 10px
        -moz-border-radius 32px
        -webkit-border-radius 32px
        border-radius 32px
        font-size 16px
        text-align center
        background-color #eee
        color #666
      .section-title-l, .section-title-r
        position absolute
        top 50%
        display inline-block
        width 35%
        height 0
        vertical-align middle
        border-top 1px solid #ededed
      .section-title-l
        left 0
      .section-title-r
        right 0
    .item-hd
      overflow hidden
      span
        &:first-child
          width 140px
        float left
        display inline-block
        margin-right 80px
    .section-content
      font-size 14px
      line-height 1.5
      margin 10px
</style>



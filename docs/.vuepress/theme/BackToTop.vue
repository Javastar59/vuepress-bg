<template>
  <transition name="fade">
    <svg v-if="show"
         class="go-to-top"
         @click="scrollToTop"
         viewBox="0 0 1024 1024"
         xmlns="http://www.w3.org/2000/svg">
        <path d="M513.5 16.7c-273.4 0-495 221.6-495 495s221.6 495 495 495 495-221.6 495-495-221.6-495-495-495z m321.8 816.7c-41.8 41.8-90.5 74.6-144.6 97.5-56.1 23.7-115.7 35.7-177.1 35.7-61.4 0-121-12-177.1-35.7-54.2-22.9-102.8-55.7-144.6-97.5-41.9-41.8-74.7-90.4-97.6-144.6-23.7-56.1-35.7-115.7-35.7-177.1 0-61.4 12-121 35.7-177.1 22.9-54.2 55.7-102.8 97.5-144.6s90.5-74.6 144.6-97.5c56.1-23.7 115.7-35.7 177.1-35.7 61.4 0 121 12 177.1 35.7 54.2 22.9 102.8 55.7 144.6 97.5s74.6 90.5 97.5 144.6c23.7 56.1 35.7 115.7 35.7 177.1 0 61.4-12 121-35.7 177.1-22.8 54.2-55.6 102.8-97.4 144.6z" fill="#999999" p-id="8397"></path><path d="M668.4 477.8c-3.3 2.1-7.1 3.1-10.8 3.1-6.6 0-13-3.3-16.9-9.2l-100.9-158c-1.8-2.8-3.9-5.2-6.3-7.2v479c0 11-9 20-20 20s-20-9-20-20v-479c-2.4 2-4.5 4.4-6.3 7.2l-100.9 158c-6 9.3-18.3 12-27.6 6.1s-12-18.3-6.1-27.6l100.9-158c13.1-20.6 35.6-32.9 60-32.9s46.9 12.3 60 32.9l100.9 158c6 9.3 3.3 21.7-6 27.6zM675.8 257.8H351.2c-11 0-20-9-20-20s9-20 20-20h324.6c11 0 20 9 20 20s-8.9 20-20 20z" fill="#999999" p-id="8398"></path>
    </svg>
  </transition>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  props: {
    threshold: {
      type: Number,
      default: 100
    }
  },

  data () {
    return {
      scrollTop: null
    }
  },

  mounted () {
    this.scrollTop = this.getScrollTop()
    window.addEventListener('scroll', debounce(() => {
      this.scrollTop = this.getScrollTop()
    }, 100))
  },

  methods: {
    getScrollTop () {
      return window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop || 0
    },

    scrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.scrollTop = 0
    }
  },

  computed: {
    show () {
      return this.scrollTop > this.threshold
    }
  }
}
</script>

<style scoped>
.go-to-top {
  cursor: pointer;
  position: fixed;
  bottom: 2rem;
  right: 3rem;
  width: 2rem;
  z-index: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

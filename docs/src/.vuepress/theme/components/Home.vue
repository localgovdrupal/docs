<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
    <header class="hero">
      <h1
        class="sr-only"
        v-if="data.heroText !== null"
        id="main-title"
      >
        {{ data.heroText || $title || 'Hello' }}
      </h1>

      <div
      v-if="data.heroImages && data.heroImages.length"
      class="hero-images"
    >
      <div
        v-for="(heroImage, index) in data.heroImages"
        :key="index"
        class="hero-image"
      >
        <img
          v-if="heroImage.image"
          :src="$withBase(heroImage.image)"
          :alt="heroImage.altText || 'hero'"
        >
        <div v-else class="hero-image-empty"><span class="text">{{ heroImage.altText }}</span></div>
      </div>
      <div class="hero-image-placeholder"></div>
    </div>


      <p
        v-if="data.tagline !== null"
        class="description"
      >
        {{ data.tagline || $description || 'Welcome to your VuePress site' }}
      </p>

      <p
        v-if="data.actionText && data.actionLink"
        class="action"
      >
        <NavLink
          class="action-button"
          :item="actionLink"
        />
      </p>
    </header>

    <div
      v-if="data.features && data.features.length"
      class="features"
    >
      <div
        v-for="(feature, index) in data.features"
        :key="index"
        class="feature"
      >
        <span class="start">{{ feature.start }}</span>
        <span class="end">{{ feature.end }}</span>
      </div>
    </div>

    <Content class="theme-content" />

    <div class="social-block" v-if="data.githubLink||data.twitterLink||data.youtubeLink">
      <a v-if="data.githubLink" v-bind:href="data.githubLink">
        <svg width="101" height="99" viewBox="0 0 101 99" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M50.209 0.0845947C22.4444 0.0845947 0 22.5775 0 50.4021C0 72.6451 14.381 91.4725 34.3316 98.137C36.8255 98.6369 37.7399 97.054 37.7399 95.7211C37.7399 94.5548 37.6567 90.5561 37.6567 86.3907C23.6913 89.3898 20.7819 80.3926 20.7819 80.3926C18.5374 74.5611 15.2123 73.0616 15.2123 73.0616C10.6403 69.9792 15.5448 69.9792 15.5448 69.9792C20.6156 70.3125 23.2757 75.1443 23.2757 75.1443C27.7646 82.8085 34.9967 80.6425 37.9061 79.3096C38.3218 76.0606 39.6518 73.8114 41.065 72.5618C29.9259 71.3955 18.2049 67.0635 18.2049 47.7362C18.2049 42.238 20.2 37.7394 23.3588 34.2405C22.8601 32.9909 21.1144 27.8259 23.8576 20.9114C23.8576 20.9114 28.0971 19.5785 37.6567 26.0764C41.6469 24.9934 45.9695 24.4103 50.209 24.4103C54.4485 24.4103 58.7711 24.9934 62.7612 26.0764C72.3209 19.5785 76.5604 20.9114 76.5604 20.9114C79.3036 27.8259 77.5579 32.9909 77.0591 34.2405C80.3011 37.7394 82.2131 42.238 82.2131 47.7362C82.2131 67.0635 70.4921 71.3121 59.2699 72.5618C61.0987 74.1446 62.6781 77.1436 62.6781 81.8921C62.6781 88.64 62.595 94.055 62.595 95.7211C62.595 97.054 63.5094 98.6369 66.0032 98.137C85.9538 91.4725 100.335 72.6451 100.335 50.4021C100.418 22.5775 77.8904 0.0845947 50.209 0.0845947Z" fill="black"/>
          <path d="M19.0364 72.3118C18.9533 72.5617 18.5376 72.645 18.2051 72.4784C17.8726 72.3118 17.6232 71.9786 17.7895 71.7286C17.8726 71.4787 18.2883 71.3954 18.6208 71.562C18.9533 71.7286 19.1195 72.0619 19.0364 72.3118Z" fill="black"/>
          <path d="M21.0312 74.5612C20.7818 74.8111 20.2831 74.6445 20.0337 74.3112C19.7012 73.978 19.618 73.4782 19.8674 73.2282C20.1168 72.9783 20.5324 73.1449 20.8649 73.4782C21.1975 73.8947 21.2806 74.3945 21.0312 74.5612Z" fill="black"/>
          <path d="M23.0261 77.477C22.6936 77.7269 22.1948 77.477 21.9454 77.0604C21.6129 76.6439 21.6129 76.0608 21.9454 75.8941C22.2779 75.6442 22.7767 75.8941 23.0261 76.3107C23.3586 76.7272 23.3586 77.2271 23.0261 77.477Z" fill="black"/>
          <path d="M25.7695 80.3093C25.5201 80.6426 24.9382 80.5592 24.4395 80.1427C24.0238 79.7262 23.8576 79.143 24.1901 78.8931C24.4395 78.5599 25.0213 78.6432 25.5201 79.0597C25.9357 79.393 26.0189 79.9761 25.7695 80.3093Z" fill="black"/>
          <path d="M29.5103 81.8921C29.4271 82.3087 28.8452 82.4753 28.2633 82.3087C27.6815 82.1421 27.3489 81.6422 27.4321 81.309C27.5152 80.8925 28.0971 80.7258 28.679 80.8925C29.2609 81.0591 29.5934 81.4756 29.5103 81.8921Z" fill="black"/>
          <path d="M33.5834 82.2253C33.5834 82.6419 33.0847 82.9751 32.5028 82.9751C31.9209 82.9751 31.4221 82.6419 31.4221 82.2253C31.4221 81.8088 31.9209 81.4756 32.5028 81.4756C33.0847 81.4756 33.5834 81.8088 33.5834 82.2253Z" fill="black"/>
          <path d="M37.4074 81.559C37.4905 81.9755 37.0749 82.392 36.493 82.4753C35.9111 82.5586 35.4123 82.3087 35.3292 81.8922C35.2461 81.4756 35.6617 81.0591 36.2436 80.9758C36.8255 80.8925 37.3242 81.1424 37.4074 81.559Z" fill="black"/>
        </svg>
        <span>{{ data.githubText }}</span>
      </a>
      <a v-if="data.twitterLink" v-bind:href="data.twitterLink">
        <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50.2111" cy="50.2111" r="50.2111" fill="black"/>
          <path d="M40.5152 70.0877C59.1324 70.0877 69.3153 54.6634 69.3153 41.2876C69.3153 40.8495 69.3153 40.4133 69.2857 39.9792C71.2667 38.5463 72.9767 36.7721 74.3357 34.7397C72.4883 35.5583 70.5286 36.0952 68.522 36.3323C70.635 35.0673 72.2165 33.0776 72.972 30.7337C70.9851 31.9128 68.8113 32.7437 66.5446 33.1906C62.7113 29.1145 56.2993 28.9177 52.2232 32.7511C49.5944 35.2233 48.479 38.9072 49.2949 42.4224C41.1563 42.0143 33.5735 38.1703 28.4338 31.8468C25.7472 36.4718 27.1195 42.3886 31.5676 45.3588C29.9568 45.3111 28.3811 44.8765 26.9735 44.0919C26.9735 44.1333 26.9735 44.1767 26.9735 44.2202C26.9748 49.0385 30.3712 53.1885 35.0941 54.1426C33.6039 54.549 32.0403 54.6084 30.5236 54.3163C31.8497 58.4396 35.6498 61.2643 39.9802 61.3456C36.396 64.1625 31.9683 65.6917 27.4096 65.6871C26.6042 65.6856 25.7996 65.6368 25 65.5411C29.6289 68.5116 35.0149 70.0872 40.515 70.0799" fill="white"/>
        </svg>
        <span>{{ data.twitterText }}</span>
      </a>
      <a v-if="data.youtubeLink" v-bind:href="data.youtubeLink">
        <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50.2111" cy="50.2957" r="50.2111" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M70.7041 32.1265C73.0088 32.7465 74.8232 34.573 75.4395 36.8923C76.5586 41.0962 76.5586 49.8672 76.5586 49.8672C76.5586 49.8672 76.5586 58.6383 75.4395 62.8422C74.8237 65.1615 73.0088 66.9882 70.7041 67.608C66.5273 68.7345 49.7793 68.7345 49.7793 68.7345C49.7793 68.7345 33.0312 68.7345 28.8545 67.608C26.5498 66.9882 24.7354 65.1615 24.1191 62.8422C23 58.6383 23 49.8672 23 49.8672C23 49.8672 23 41.0962 24.1191 36.8923C24.7349 34.573 26.5498 32.7463 28.8545 32.1265C33.0312 31 49.7793 31 49.7793 31C49.7793 31 66.5273 31 70.7041 32.1265ZM58.2983 49.8676L44.3003 57.8307V41.9038L58.2983 49.8676Z" fill="white"/>
        </svg>
        <span>{{ data.youtubeText }}</span>
      </a>
    </div>

    <div
      v-if="data.footer"
      class="footer"
    >
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  name: 'Home',

  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
@keyframes fadein-left {
  from {
    transform translate3d(10px, 0, 0)
    opacity 0
  }

  to {
    transform translate3d(0, 0, 0)
    opacity 1
  }
}

@keyframes fadein-top {
  from {
    transform translate3d(0, 10px, 0)
    opacity 0
  }

  to {
    transform translate3d(0, 0, 0)
    opacity 1
  }
}

.home
  margin 0px auto
  display block
  color black
  header
    background #1E1D6B
    color white
    padding-top (98px + $navbarHeight)
    padding-bottom 80px
  .hero
    text-align center
    .hero-images
      display flex
      font-size 18px
      max-width 960px
      margin 0 auto
      overflow hidden
      .hero-image
        margin-right 18px
        opacity 0
        animation fadein-left 0.4s ease
        animation-delay 0s
        animation-fill-mode forwards
        &:nth-of-type(2)
          animation-delay 0.1s
        &:nth-of-type(3)
          animation-delay 0.2s
        img
          width: 250px
          height: 250px
      .hero-image-empty
        display flex
        align-items center
        justify-content center
        border 2px dashed white
        border-radius 100%
        width: 250px
        height: 250px
        text-align center
        .text
          max-width 180px
      .hero-image-placeholder
        border 2px dashed white
        border-radius 100%
        min-width: 250px
        max-width: 250px
        height: 250px
        position relative
        box-sizing border-box
        opacity 0
        animation fadein-left 0.4s ease
        animation-delay 0s
        animation-fill-mode forwards
        animation-delay 0.3s
        &::after
          content ''
          width 100%
          height calc(100% + 4px)
          position absolute
          top -2px
          left 0
          background linear-gradient(to right, transparent, #1E1D6B 48%)
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 960px
      font-size 3.125rem
      line-height 1.3
      font-weight 700
      opacity 0
      animation fadein-top 0.4s ease
      animation-delay 0s
      animation-fill-mode forwards
      animation-delay 0.3s
    .action-button
      display inline-block
      font-size 2rem
      font-weight: 700
      color #fff
      background-color none
      padding 1.2rem 2rem
      transition background-color .1s ease
      box-sizing border-box
      border 4px solid white
      opacity 0
      animation fadein-top 0.4s ease
      animation-delay 0s
      animation-fill-mode forwards
      animation-delay 0.35s
  .features
    max-width 820px
    margin 0 auto
    margin-top 4rem
    margin-bottom 3rem
    display flex
    flex-direction column
    align-items center
    font-size 2.875rem
    font-weight 700
  .feature
    margin-bottom 16px
    opacity 0
    animation fadein-top 0.4s ease
    animation-delay 0s
    animation-fill-mode forwards
    animation-delay 0.2s
    &:nth-of-type(2)
      animation-delay 0.25s
    &:nth-of-type(3)
      animation-delay 0.3s
    .end
      color: #0762B5
  .social-block
    max-width 820px
    margin 0 auto
    display flex
    justify-content space-evenly
    margin-top 98px
    padding-bottom 32px
    border-bottom 4px solid black
    a
      display flex
      flex-direction column
      align-items center
      font-weight 700
      color black
      text-align center
      &:hover
        color #0762B5
      svg
        margin-bottom 20px
  .theme-content
    max-width 820px
    margin 0 auto
    font-size 24px
    font-weight 500
    text-align center
  .footer
    padding 2.5rem
    text-align center
    font-weight 700
//@media (max-width: $MQMobile)

//@media (max-width: $MQMobileNarrow)
</style>

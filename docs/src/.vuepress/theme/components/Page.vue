
<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />

    <div v-if="isBlog" class="author-info">Written by <a v-if="this.$frontmatter.author_url" :href="this.$frontmatter.author_url">{{ author }}</a><span v-else>{{ author }}</span><span> on <time :datetime="this.$frontmatter.date">{{ this.$frontmatter.date | prettyDate }}</time></span></div>

    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@parent-theme/components/PageEdit.vue'
import PageNav from '@parent-theme/components/PageNav.vue'
export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems'],
  computed: {
    author() {
      return this.$frontmatter.author;
    },
    isBlog() {
      let route = true;
      return this.$route.path.startsWith('/blog') ? true : false;
    }
  },
  filters: {
    prettyDate: function (value) {
      if (!value) return '';
      const date = new Date(value);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };

      return date.toLocaleDateString('en-GB', options)
    }
  }
}
</script>

<style lang="stylus">
.author-info
  color $textColor
  max-width: 740px
  margin 0 auto
  padding 2rem 2.5rem
  @media (max-width: $MQNarrow)
    padding 2rem
  @media (max-width: $MQMobileNarrow)
    padding 1.5rem
</style>

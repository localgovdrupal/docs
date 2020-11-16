/* Thanks to https://snipcart.com/blog/vuepress-tutorial-vuejs-documentation */

<template>
  <div>
    <div class="blog-card" v-for="post in posts">
      <h2>
        <router-link :to="post.path">{{ post.frontmatter.title }}</router-link>
      </h2>

      <div class="published">
        <span class="label">Published</span>
        <span><time v-bind:datetime="post.frontmatter.date">{{ post.frontmatter.date | prettyDate }}</time></span>
      </div>

      <div>
        <p>{{ post.frontmatter.description }}</p>
      </div>

      <router-link :to="post.path">Read more</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$site.pages
        .filter(x => x.path.startsWith('/blog/') && !x.frontmatter.blog_index && x.frontmatter.published)
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
    },
  },
  filters: {
    prettyDate: function (value) {
      if (!value) return ''
      const date = new Date(value)
      const options = { year: 'numeric', month: 'long', day: 'numeric' };

      return date.toLocaleDateString('en-GB', options)
    }
  }
}
</script>

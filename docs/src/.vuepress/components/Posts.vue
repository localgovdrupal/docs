<template>
  <div class="posts" v-if="posts.length">
    <div class="post" v-for="post in posts">
      <router-link :to="post.path">
        <h2>{{ post.frontmatter.title }}</h2>
      </router-link>

      <div class="">
        <span v-if="post.frontmatter.author">{{ post.frontmatter.author }} - </span>
        <time :datetime="post.frontmatter.date">{{ post.frontmatter.date | prettyDate }}</time>
      </div>

      <p>{{ post.frontmatter.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      let posts = this.$site.pages
        .filter(
          (p) =>
            p.relativePath.startsWith('blog') &&
            !p.relativePath.includes('README.md')
        )
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        )
      return posts
    },
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

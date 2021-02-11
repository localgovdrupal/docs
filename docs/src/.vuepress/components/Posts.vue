<template>
  <div class="posts" v-if="posts.length">
    <div class="post" v-for="post in posts">
      <router-link :to="post.path">
        <h2>{{ post.frontmatter.title }}</h2>
      </router-link>
      <time :datetime="post.frontmatter.date">{{ post.frontmatter.date }}</time>
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
}
</script>

<script lang="ts">
import blogData from '@temp/blog-data'

export default {
  computed: {
    posts() {
      return blogData
    }
  },
  methods: {
    prettyDate(value) {
      if (!value) return '';
      const date = new Date(value);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };

      return date.toLocaleDateString('en-GB', options)
    }
  }
}
</script>

<template>
  <div class="posts" v-if="posts.length">
    <div class="post" v-for="post in posts">
      <router-link :to="post.path">
        <h2>{{ post.frontmatter.title }}</h2>
      </router-link>

      <div class="">
        <span v-if="post.frontmatter.author">{{ post.frontmatter.author }} - </span>
        <time :datetime="post.frontmatter.date">{{ prettyDate(post.frontmatter.date) }}</time>
      </div>

      <p>{{ post.frontmatter.description }}</p>
    </div>
  </div>
</template>
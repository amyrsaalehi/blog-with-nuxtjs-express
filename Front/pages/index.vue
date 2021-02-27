<template>
  <b-container v-if="posts && posts.length > 0">
    <b-row v-for="post in posts" align-h="center mt-3" v-bind:key="post.id">
      <Post :post="post" usage="main"/>
    </b-row>
  </b-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const posts = await $axios.$get(
      "http://127.0.0.1:8000/model-viewsets/post/",
      {
        headers: {
          Authorization: "Token 3de13344b5040653d52bfe1f3ebdde7272fe5758",
        },
      }
    );

    return {
      posts,
    };
  },
  head() {
    return {
      title: "Blog",
    };
  },
};
</script>

<style lang="scss">
a {
  padding: 1rem 1.25rem;
  color: #999;
  transition: 500ms;

  &:hover {
    text-decoration: none;
    // animation-name: decorating;
    // animation-duration: 500ms;
    // animation-iteration-count: 1;
    // animation-timing-function: ease-in-out;
    // animation-fill-mode: forwards;
    color: #fff;
  }
}

@keyframes decorating {
  from {
    border-bottom: 0;
  }
  to {
    border-bottom: 1px solid #1d1d1d;
  }
}
</style>

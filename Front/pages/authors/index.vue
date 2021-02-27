<template>
  <b-container v-if="authors && authors.length > 0">
    <b-row align-h="center mt-3">
      <b-col
        v-for="author in authors"
        v-bind:key="author.id"
        sm="12"
        md="6"
        lg="4"
        class="mt-4"
      >
        <Author :author="author" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const authors = await $axios.$get(
      "http://127.0.0.1:8000/model-viewsets/author/",
      {
        headers: {
          Authorization: "Token 3de13344b5040653d52bfe1f3ebdde7272fe5758",
        },
      }
    );

    return {
      authors,
    };
  },
  head() {
    return {
      title: "",
      titleTemplate: "Authors %s",
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

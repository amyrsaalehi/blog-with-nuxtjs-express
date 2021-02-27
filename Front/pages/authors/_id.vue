<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-avatar
        :src="`https://picsum.photos/1000/600/?image=${this.$route.params.id}`"
        :alt="author.name"
        size="25rem"
      ></b-avatar>
    </b-row>
    <b-row>
      <b-col>
        <h1 class="heading text-center">
          {{ author.name }}
        </h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p class="email-container">
          Email:
          <a class="email" :href="`mailto:${author.email}`">{{
            author.email
          }}</a>
        </p>
      </b-col>
    </b-row>

    <b-row>
      <b-col v-for="post in author.posts" :key="post.id" sm="12" md="6" lg="4">
        <Post :post="post" usage="author" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  async asyncData(context) {
    const author = await context.$axios.$get(
      `http://127.0.0.1:8000/model-viewsets/author/${context.route.params.id}/`,
      {
        headers: {
          Authorization: "Token 3de13344b5040653d52bfe1f3ebdde7272fe5758",
        },
      }
    );
    context.app.head.title = await author.name;
    return {
      author,
    };
  },
};
</script>

<style lang="scss" scoped>
.heading {
  color: #353535;
}

.email-container {
  color: #555;
  .email {
    color: rgb(74, 179, 105);
    padding: 0;
    &:hover {
      color: rgb(25, 119, 54);
    }
  }
}

.link {
  border-radius: 5px;
  color: #fff;
  padding: 5px 7px;
  background-color: #383838;
  &:hover {
    background-color: #000;
  }
  position: relative;
  bottom: 5%;
  left: 0;
}
</style>
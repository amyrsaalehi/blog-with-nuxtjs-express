<template>
  <b-container>
    <b-row>
      <b-col sm="12" class="background">
        <b-img-lazy
          :src="`https://picsum.photos/1000/600/?image=${this.$route.params.id}`"
          class="img"
          :alt="post.title"
        ></b-img-lazy>
        <NuxtLink class="link" :to="`/authors/${post.author.id}`">
          <span class="author-name">{{ post.author.name }}</span>
        </NuxtLink>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h1 class="heading text-center">
          {{ post.title }}
        </h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p class="body">
          {{ post.body }}
        </p>
      </b-col>
    </b-row>

    <b-row>
      <!-- <b-col sm="12">
        <p class="author">
          By
          <NuxtLink class="link" :to="`/authors/${post.author.id}`">
            <span class="author-name">{{ post.author.name }}</span>
          </NuxtLink>
        </p>
      </b-col> -->
      <!-- <b-col sm="12">
        <p class="author">
          Author's Email:
          <a class="mail" :href="`mailto:${post.author.email}`">{{
            post.author.email
          }}</a>
        </p>
      </b-col> -->
    </b-row>

    <b-row>
      <b-col sm="12" md="6">
        <p class="dates">
          Creatated At: {{ post.created_at.slice(0, 16).replace("T", " ") }}
        </p>
      </b-col>
      <b-col sm="12" md="6">
        <p class="dates">
          Last Update: {{ post.updated_at.slice(0, 16).replace("T", " ") }}
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  // head() {
  //   return {
  //     title: this.post.title
  //   }
  // },
  async asyncData(context) {
    const post = await context.$axios.$get(
      `http://127.0.0.1:8000/model-viewsets/post/${context.route.params.id}/`,
      {
        headers: {
          Authorization: "Token 3de13344b5040653d52bfe1f3ebdde7272fe5758",
        },
      }
    );
    context.app.head.title = await post.title
    return {
      post,
    };
  },
};
</script>

<style lang="scss" scoped>
.background {
  width: 100%;
  height: 500px;
  position: relative;
  // background: url('https://picsum.photos/1000/600/?image=20') center center no-repeat;
  // background-size: cover;
}
.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.heading {
  margin-top: 1.5rem;
  color: #494949;
}

.body {
  //   margin-top: 0.9rem;
  text-align: justify;
  color: #777;
}

.author {
  color: #777;
}

.dates {
  @extend .body;
  font-size: 0.7rem;
}

.mail {
  padding: 0;
  color: #17a2b8;
}

.author-name {
  font-style: italic;
  font-size: 1.1rem;
}
</style>
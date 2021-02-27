<template>
  <b-card
    v-if="post"
    header-text-variant="white"
    header-bg-variant="dark"
    class="overflow-hidden w-100"
  >
    <b-row no-gutters>
      <b-col :md="usage === 'main' ? 6 : 12" class="overflow-hidden">
        <b-card-img
          :src="`https://picsum.photos/400/400/?image=${randomNumber}`"
          alt="Image"
          class="rounded-0 zoom"
        ></b-card-img>
      </b-col>
      <b-col :md="usage === 'main' ? 6 : 12">
        <b-card-body :title="post.title" class="h-100">
          <b-container>
            <b-row>
              <b-col cols="12">
                <p class="paragraph overflow-hidden">
                  {{ post.body.slice(0, 450) }}...
                </p>
              </b-col>
            </b-row>

            <b-row>
              <b-col cols="12">
                <p class="date">Published at {{ dateTime }}</p>
              </b-col>
              <b-col cols="12" v-if="usage.main">
                <p class="author">Published by 
                  <NuxtLink :to="`/authors/${post.author.id}`">
                    {{ post.author.name }}
                  </NuxtLink>
                </p>
              </b-col>
              <b-col>
                <b-button
                variant="info"
                @click="postDetails"
                block
                >
                Read More
                </b-button>
              </b-col>
            </b-row>
          </b-container>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: ["post", "usage"],
  data() {
    return {
      randomNumber: 1,
      dateTime: "",
    };
  },
  mounted() {
    this.randomNumber = Math.floor(Math.random() * 10);
    this.dateTime = this.post.created_at.slice(0, 16).replace("T", " ");
  },
  methods: {
    postDetails(e) {
      e.preventDefault();
      this.$router.push({
        path: `/posts/${this.post.id}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.paragraph {
  color: #777;
  text-align: justify;
  max-height: 12rem;
}

.date {
  color: #999;
}

.author {
  @extend .date;
  a {
    border-radius: 5px;
    color: #fff;
    padding: 5px 7px;
    background-color: #17a2b8;
    &:hover {
    background-color: #138496;  
    }
  }
}

.container {
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.zoom {
  transition: 500ms;
  &:hover {
    transform: scale(1.2);
  }
}
</style>

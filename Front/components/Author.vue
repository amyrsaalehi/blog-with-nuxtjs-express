<template>
  <b-card
    v-if="author"
    :title="author.name"
    :img-src="`https://picsum.photos/400/400/?image=${randomNumber}`"
    :img-alt="author.name"
    img-height="65%"
    img-top
    class="overflow-hidden w-100 h-100 text-center"
  >
    <b-card-text>
      <a :href="`mailto:${author.email}`">
        {{ author.email }}
      </a>
    </b-card-text>
    <template #footer>
      <b-button @click="authorDetails" class="footer-button">
        {{ `${author.name}'s Posts` }}
      </b-button>
    </template>
  </b-card>
</template>

<script>
export default {
  props: ["author"],
  data() {
    return {
      randomNumber: 1,
    };
  },
  mounted() {
    this.randomNumber = Math.floor(Math.random() * 100);
  },
  methods: {
    authorDetails(e) {
      e.preventDefault();
      this.$router.push({
        path: `/authors/${this.author.id}`,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-button {
  font-size: 0.9rem;
}

a {
  &:hover {
    color: #333
  }
}
</style>

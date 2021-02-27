export const state = () => ({
  posts: []
});

export const mutations = {
  setPosts(state, posts) {
    if (state.posts.length > 0) return;

    state.posts.push({
      ...posts,
    });
  },
};
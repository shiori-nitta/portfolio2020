import client from '~/plugins/contentful'

export const state = () => ({
  posts: [],
})

export const getters = {
  posts(state) {
    return state.posts
  },
}

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  },
}

export const actions = {
  async getPosts({ commit }) {
    await client
      .getEntries({
        content_type: process.env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt',
      })
      .then((res) => {
        commit('setPosts', res.items)
      })
      // eslint-disable-next-line
      .catch(console.error)
  },
}

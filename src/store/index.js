import client from '~/plugins/contentful'

export const state = () => ({
  posts: [],
  categories: [],
})

export const getters = {
  posts(state) {
    return state.posts
  },
  categories(state) {
    return state.categories
  },
  relatedPosts: (state) => (category) => {
    return state.posts.filter(
      (post) => post.fields.category.sys.id === category.sys.id
    )
  },
}

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  },
  setCategories(state, payload) {
    state.categories = payload
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
  async getCategories({ commit }) {
    await client
      .getEntries({
        content_type: 'category',
        order: 'fields.sort',
      })
      .then((res) => {
        commit('setCategories', res.items)
      })
      // eslint-disable-next-line
      .catch(console.error)
  },
}

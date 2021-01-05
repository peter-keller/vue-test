const actions = {
  async fetchUsers ({ commit }) {
    const { data } = await this.$axios.get('/files/people.json')

    commit('SET_USERS', data)
  }
}

export default actions

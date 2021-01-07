const getters = {
  resourceById (state) {
    return (id) => {
      const user = state.totalUsers.find(user => user._id === id)

      // Ideally would need better check, also check if users exist.
      // Preferably ditch this getter and send a separate get request to users/:id to
      // get a single user in case it's not in the store.
      return user || null
    }
  },

  users (state) {
    return state.totalUsers
  }
}

export default getters

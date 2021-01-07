const mutations = {
  SET_USERS (state, data) {
    if (data && data.length > 0) {
      state.totalUsers = data.reduce((acc, v) => {
        acc = { ...acc, [v._id]: v }

        return acc
      }, {})
    }
  }
}

export default mutations

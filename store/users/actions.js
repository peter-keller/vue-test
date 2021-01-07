const actions = {
  async fetchUsers ({ commit }) {
    // USually takes 40 or more seconds to fetch the data and the request fails 90% of the time.
    // I completed the test by saving the response in a constant and mocking the BE response.
    const { data } = await this.$axios.get('https://cors-anywhere.herokuapp.com/https://updates.suade.org/files/people.json', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-requested-with': 'origin'
      }
    })

    commit('SET_USERS', data)
  },

  fetchPage ({ state }, page) {
    // Ideally this would be an API call to the BE to receive only a given amount of users within a range
    let startsAt
    let endsAt

    if (page === 1) {
      startsAt = 0
      endsAt = 10
    } else {
      startsAt = (page - 1) * 10 + 1
      endsAt = (page * 10) + 1
    }

    const currentPage = Object.values(state.totalUsers).slice(startsAt, endsAt)

    // Returning the result instead of committing to the store as v-model and 2 way data binding won't
    // work with computed values, it needs the actual data.
    return currentPage.reduce((acc, v) => {
      acc = { ...acc, [v._id]: v }

      return acc
    }, {})
  }
}

export default actions

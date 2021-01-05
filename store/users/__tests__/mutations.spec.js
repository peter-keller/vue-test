import mutations from '../mutations'

describe('Store: users/mutation', () => {
  const users = {
    data: [{ id: '1' }, { name: 'Shrek' }]
  }

  it('#SET_USERS sets the passed in users in the state', () => {
    const state = {
      data: []
    }

    mutations.SET_USERS(state, users)
    expect(state.data).toEqual(users.data)
  })
})

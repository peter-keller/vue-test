import getters from '../getters'

describe('Store: users/getters', () => {
  const data = [{ id: '1' }, { name: 'Shrek' }]

  it('#users returns the available users', () => {
    const state = {
      data
    }

    expect(getters.users(state)).toEqual(data)
  })
})

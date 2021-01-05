
export default {
  namespaced: true,
  state: jest.fn().mockReturnValue(() => ({
    data: []
  })),

  actions: {
    fetchUsers: jest.fn().mockResolvedValue(Promise.resolve())
  },
  getters: {
    users: jest.fn().mockReturnValue([])
  },
  mutations: {
    SET_USERS: jest.fn()
  }
}

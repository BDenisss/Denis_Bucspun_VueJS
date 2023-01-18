import { createStore } from 'vuex'

export default createStore({
  state: {
    numeros: "",
    contact : [
      {
        name: 'John Doe',
        numero: '0643129832',
      },
      {
        name: 'Denis Bucspun',
        numero: '0643105914',
      },
      {
        name: 'Kanye West',
        numero: '0623190191',
      },
    ],
  },
  getters: {
  },
  mutations: {
    addNum(state, chiffre) {
      state.numeros += chiffre
    },
    removeNum(state) {
      state.numeros = state.numeros.slice(0, -1)
    }
  },
  actions: {
  },
  modules: {
  }
})

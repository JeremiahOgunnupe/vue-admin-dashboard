import { createStore } from 'vuex'

export interface State {
  isDarkMode: boolean
}

// Initial State
const userSelectedDarkMode = window.localStorage.getItem('isDarkMode') === 'true'

const store = createStore<State>({
  state: {
    isDarkMode: userSelectedDarkMode,
  },

  // Getters
  getters: {
    isDarkMode(state: State) {
      return state.isDarkMode
    },
  },

  // Mutations
  mutations: {
    toggleDarkMode(state: State) {
      if (state.isDarkMode === true) {
        state.isDarkMode = false
        document.body.style.background = '#f0f3f5'
        window.localStorage.setItem('isDarkMode', 'false')
      } else {
        state.isDarkMode = true
        document.body.style.background = '#212c4f'
        window.localStorage.setItem('isDarkMode', 'true')
      }
    },
  },

  //Actions
  actions: {
    triggerDarkMode(context: { commit: (arg0: string) => void }) {
      context.commit('toggleDarkMode')
    },
  },
})

export default store

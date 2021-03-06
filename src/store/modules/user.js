import { login } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'

const getDefaultState = () => {
  return {
    token: getToken(),
    username: '',
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
}

const actions = {
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password })
        .then((reponse) => {
          const { token } = reponse.data
          commit('SET_TOKEN', token)
          setToken(token)
          resolve(reponse)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}

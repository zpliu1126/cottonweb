import { login } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
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
          const { data } = reponse
          commit('SET_TOKEN', data.code)
          setToken(data.code)
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

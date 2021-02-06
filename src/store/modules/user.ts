import { Module } from 'vuex'
import { RootState } from '../'
import {
  login,
  getUserInfo,
  LoginData,
  MenuItem,
  UserInfo,
} from '../../api/login'

const LOCAL_TOKEN = '_tk'

export interface State {
  token: string
  username: string
  roles: string[]
  menus: MenuItem[]
}

const initState: () => State = () => ({
  token: localStorage[LOCAL_TOKEN],
  username: '',
  roles: [],
  menus: [],
})

const user: Module<State, RootState> = {
  state: initState(),
  mutations: {
    SET_TOKEN: (state, payload: string) => {
      if (payload) {
        localStorage[LOCAL_TOKEN] = payload
      } else {
        localStorage.removeItem(LOCAL_TOKEN)
      }
      state.token = payload
    },
    SET_USER_INFO: (state, payload: UserInfo) => {
      const { username, roles, menus } = payload
      state.username = username
      state.roles = roles
      state.menus = menus
    },
  },
  actions: {
    async login({ commit }, loginData: LoginData) {
      const { data } = await login(loginData)
      commit('SET_TOKEN', data)
    },
    logout({ commit }) {
      commit('SET_TOKEN', undefined)
    },
    async getUserInfo({ commit }) {
      const { data } = await getUserInfo()
      commit('SET_USER_INFO', data)
    },
  },
  getters: {
    token: (state) => state.token,
    roles: (state) => state.roles,
  },
}

export default user

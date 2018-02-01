import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

// 1、应用 state 存在于单个对象中；
// 2、只有 mutation handlers 可以改变 state；
// 3、Mutations 必须是同步的，它们做的应该仅仅是改变 state；
// 4、所有类似数据获取的异步操作细节都应封装在 actions 里面。
// 5、组件通过 getters 从 store 中获取 state，并通过调用 actions 来改变 state。
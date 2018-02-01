import * as types from './mutation-types'

// 必须写同步代码
const mutations = {
	[types.ADD_NUM](state, num) {
		state.addNum = num
	}
}

export default mutations

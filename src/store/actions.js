import * as types from './mutation-types'
// 可以写异步代码
export const addNumber = async function({commit}, {num, num2}) {
	var num = await new Promise((resolve, reject) => {
		setTimeout(() => {
		  resolve(5)
		}, 3000)
	}).then(res => res)
	commit(types.ADD_NUM, num * num2)
}
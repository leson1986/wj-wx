/**
 * Created by ls.c on 2016/11/1.
 */

export const CHANGE_LOADING_STATE = 'CHANGE_LOADING_STATE'
export const START_LOADING = 'START_LOADING'
export const FINISH_LOADING = 'FINISH_LOADING'

const mutations = {
	[CHANGE_LOADING_STATE] (state, isShow) {
		state.loading = isShow
	},
	[START_LOADING] (state) {
		state.loading = true
	},
	[FINISH_LOADING] (state) {
		state.loading = false
	}
}


export default mutations
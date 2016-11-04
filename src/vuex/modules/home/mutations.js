/**
 * Created by ls.c on 2016/11/3.
 */

export const FETCH_HOME_INFO_SUCCESS = 'FETCH_HOME_INFO_SUCCESS'


const mutations = {
	// 获取即将上映电影列表
	[FETCH_HOME_INFO_SUCCESS] (state, data) {
		state.homeInfoData = data
	}
}

export default mutations
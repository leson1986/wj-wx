/**
 * Created by ls.c on 2016/11/3.
 */

export const FETCH_NEWS_LIST_SUCCESS = 'FETCH_NEWS_LIST_SUCCESS'
export const FETCH_NEWS_DETAIL_SUCCESS = 'FETCH_NEWS_DETAIL_SUCCESS'


const mutations = {
	// 获取博客列表
	[FETCH_NEWS_LIST_SUCCESS] (state, data) {
		state.newsList = data
	},
	// 获取博客详情
	[FETCH_NEWS_DETAIL_SUCCESS] (state, data) {
		state.newsDetail = data
	}
}

export default mutations
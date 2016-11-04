/**
 * Created by ls.c on 2016/11/3.
 */

import getjson from '../../getjson'

/**
 * 获取博客列表
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const fetchNewsList = ({ commit }, page, count) =>{

	const url = 'get_forum_list.php'
	const query = ''
	return getjson({url, query}, commit)
		.then((json) => {
			if (json.recode === 0) {
				return commit('FETCH_NEWS_LIST_SUCCESS', json.data)
			}
			return Promise.reject(new Error('fetchNewsList failure'))
		})
		.catch((error) => {
			return Promise.reject(error)
		})

}


/**
 * 获取某条博客详情
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const fetchNewsDetail = ({ commit }, ids) =>{

	const url = 'get_forum_detail.php'
	const query = `id=${ids}&_t=` + new Date().getTime()
	return getjson({url, query}, commit)
		.then((json) => {
			if (json.recode === 0) {
				return commit('FETCH_NEWS_DETAIL_SUCCESS', json.data)
			}
			return Promise.reject(new Error('fetchNewsDetail failure'))
		})
		.catch((error) => {
			return Promise.reject(error)
		})

}
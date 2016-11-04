/**
 * Created by ls.c on 2016/11/3.
 */

import getjson from '../../getjson'

/**
 * 获取个人信息和博客列表
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const fetchHomeInfoData = ({ commit }, page, count) =>{

	const url = 'get_home_info.php'
	const query = ''
	return getjson({url, query}, commit)
		.then((json) => {
			if (json.recode === 0) {
				return commit('FETCH_HOME_INFO_SUCCESS', json.data)
			}
			return Promise.reject(new Error('fetchHomeInfoData failure'))
		})
		.catch((error) => {
			return Promise.reject(error)
		})

}

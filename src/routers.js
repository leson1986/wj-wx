/**
 * Created by Ls.c on 2016/10/26.
 */
export default [{
	path: '/',
	name: 'index',
	component: require('./views/home/index')
}, {
	path: '/home',
	name: 'index',
	component: require('./views/home/index')
},
{
	path: '/forum',
	name: 'forum',
	component: require('./views/forum/index')
}, {
		path: '/forum_detail/:id',
		name: 'forum_detail',
		component: require('./views/forum/detail')
},
{
	path: '/user',
	name: 'user',
	component: require('./views/user/index')
}]
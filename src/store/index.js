import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		ispc: true,
		user_info: false,
		home_buffer: null, //主页缓存
		history_buffer: null, //历史缓存
		informal_essay_buffer: null //随笔缓存
	},
	mutations: {
		pe(state) {
			//判断是pc访问还是pe
			//**未实现**
			state.ispc = false
		},
		chageUserInfo(state, arr) {
			//修改用户状态
			state.user_info = arr
		},
		exit_login(state) {
			//用户退出登录
			state.user_info = false
		},
		change_homeBufer(state, newBuffer) {
			//将获取到的日志数据缓存下来
			state.home_buffer = newBuffer
		},
		clear_homeBuffer(state) {
			state.home_buffer = null
		},
		change_historyBufer(state, newBuffer) {
			//将获取到的日志数据缓存下来
			state.history_buffer = newBuffer
		},
		change_InformalEssayBuffer(s, newBuffer) {
			s.informal_essay_buffer = newBuffer
		},
		clear_InformalEssayBuffer(s) {
			s.informal_essay_buffer = null
		}
	},
	actions: {},
	modules: {}
})

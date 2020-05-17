import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'AboutMe',
		component: () => import('../views/AboutMe.vue')
	},
	{
		path: '/history',
		name: 'History',
		component: () => import('../views/History.vue')
	},
	{
		path: '/seelog',
		name: 'seelog',
		component: () => import('../components/Home/Left/SeeLog.vue')
	},
	{
		path: '/release',
		name: 'release',
		component: () => import('../components/Home/Left/HomeRelease.vue')
	},
	{
		path: '/tool',
		name: 'tool',
		component: () => import('../views/Tool.vue'),
		children: [{
				path: 'jzzh',
				name: 'jzzh',
				component: ()=>import('@/components/Base/Tool/jzzh.vue')
			},{
				path: 'randstr',
				name: 'randstr',
				component: ()=>import('@/components/Base/Tool/RandStr.vue')
			}
		]
	},
	{
		path: '/InformalEssay',
		name: 'informalessay',
		component: () => import('@/views/InformalEssay.vue'),
		children: [{
				path: '/',
				component: ()=>import('@/components/InformalEssay/Content.vue')
			},{
				path: 'release',
				component: ()=>import('@/components/InformalEssay/Release.vue')
			}
		]
	}
]

const router = new VueRouter({
	routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'

//引入组件
import Heros from '../components/view/heros/Heros.vue'
import Weapon from '../components/view/weapon/Weapon.vue'
import Skill from '../components/view/skill/Skill.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            name: 'root',
            path: '/',
           redirect: { 'name' : 'heros'}

        },
        {
            name: 'heros',
            path: '/heros',
            component: Heros

        },
        {
            name: 'weapon',
            path: '/weapon',
            component: Weapon

        },
        {
            name: 'skill',
            path: '/skill',
            component: Skill

        },
    ]
})

import Vuex, { Store } from '@vuexcellent/vuex'
import Vue from 'vue'

Vue.use(Vuex)

// modules
import app from './modules/app'
import todo from './modules/todo'

export default new Store({
    modules: {
        app,
        todo
    }
})

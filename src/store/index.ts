import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    plugins: [createPersistedState()],
    state: {
        isLoggedIn: false 
    },
    mutations: {
        setLoggedIn(state, value) {
            state.isLoggedIn = value;
        }
    },
    actions: {
    },
    modules: {
    }
})


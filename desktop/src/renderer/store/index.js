import Vue from 'vue'
import Vuex from 'vuex'

// import modules from './modules'

Vue.use(Vuex)

const state = {
    /* Initialie the "active" account holder. */
    account: null,

    /**
     * Active Private Key
     *
     * This is the currently active account in use.
     * This key can be changed by clicking on the Status Level icon
     * in the top right of the interface.
     *
     * Default (development ONLY) private key address:
     * 0x0
     */
    //
    privateKey: '0x0',

    /* FOR DEVELOPMENT PURPOSES ONLY -- DELETE ONCE COMPLETED */
    todos: [
        {
            id: 0,
            task: 'Buy food at the supermarket.',
            completed: false
        },
        {
            id: 1,
            task: 'Organize the living room.',
            completed: true
        },
        {
            id: 2,
            task: 'Read every class and tutorial on Sabe.io.',
            completed: false
        }
    ]
}

const getters = {
    getAccount: state => state.account,
    getPrivateKey: state => state.privateKey,
    getTodos: state => state.todos
}

const mutations = {
    UPDATE_ACCOUNT: (state, payload) => {
        state.account = payload
    },
    SET_PRIVATE_KEY: (state, payload) => {
        state.privateKey = payload
    },
    ADD_TODO: (state, payload) => {
        const newTask = {
            id: payload.newId,
            task: payload.task,
            completed: false
        }

        state.todos.unshift(newTask)
    },
    TOGGLE_TODO: (state, payload) => {
        const item = state.todos.find(todo => todo.id === payload)
        item.completed = !item.completed
    },
    DELETE_TODO: (state, payload) => {
        const index = state.todos.findIndex(todo => todo.id === payload)
        state.todos.splice(index, 1)
    }
}

const actions = {
    updateAccount: (context, payload) => {
        context.commit('UPDATE_ACCOUNT', payload)
    },
    setPrivateKey: (context, payload) => {
        context.commit('SET_PRIVATE_KEY', payload)
    },
    addTodo: (context, payload) => {
        context.commit('ADD_TODO', payload)
    },
    toggleTodo: (context, payload) => {
        context.commit('TOGGLE_TODO', payload)
    },
    deleteTodo: (context, payload) => {
        context.commit('DELETE_TODO', payload)
    }
}

export default new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
})

// const ipc = require('electron').ipcRenderer
// ipc.send('put-in-tray')
//
// export default new Vuex.Store({
//     state
//     // modules,
//     // strict: process.env.NODE_ENV !== 'production'
// })

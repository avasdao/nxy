import moment from 'moment'
import path from 'path'

const state = {
    providers: []
}

const mutations = {
    // DECREMENT_MAIN_COUNTER (state) {
    //     state.main--
    // },
    // INCREMENT_MAIN_COUNTER (state) {
    //     state.main++
    // }
}

const actions = {
    // someAsyncTask ({ commit }) {
    //     // do something async
    //     commit('INCREMENT_MAIN_COUNTER')
    // }
}

export default {
    state,
    mutations,
    actions
}

/* Initialize sql lite v3. */
const sqlite3 = require('sqlite3').verbose()

/* Initailize database connection. */
const db = new sqlite3.Database(path.join(__static, '/db/backpage0.db'))

db.serialize(() => {
    // db.run('CREATE TABLE lorem2 (info TEXT)')

    const now = moment().unix()
    const stmt = db.prepare('INSERT INTO lorem VALUES (?)')
    stmt.run(now)
    stmt.finalize()

    db.each('SELECT rowid AS id, info FROM lorem', (err, row) => {
        if (err) return console.error(err)

        console.log(row.id + ': ' + row.info)
    })
})

db.close()

/* Import modules. */
import { v4 as uuidv4 } from 'uuid'


export default defineEventHandler(async (event) => {
    // const query = getQuery(event)
    // console.log('REQUEST QUERY', query)

    return await $fetch('https://tokenapi.otoplo.com/api/v1/tokens/nexa%3Atptlgmqhvmwqppajq7kduxenwt5ljzcccln8ysn9wdzde540vcqqqcra40x0x/richlist?max=100')
        .catch(err => console.error(err))
})

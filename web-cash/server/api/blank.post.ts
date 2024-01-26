/* Import modules. */
import { v4 as uuidv4 } from 'uuid'


export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log('REQUEST BODY', body)

    const action = body.action
    const receiver = body.receiver
    const amount = body.amount

    const getHolders = async () => {
        let response

        response = await $fetch('https://tokenapi.otoplo.com/api/v1/tokens/nexa%3Atptlgmqhvmwqppajq7kduxenwt5ljzcccln8ysn9wdzde540vcqqqcra40x0x/richlist?max=100')
            .catch(err => console.error(err))
        console.error('RESPONSE', response)

    }

    if (action === 'ADDRESS') {
        return await getAddress()
    }

    if (action === 'SEND') {
        return await send(receiver, amount)
    }

    return 'Oops! too many!'
})

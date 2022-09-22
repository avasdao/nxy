import {localNotif} from '../../NotifManager'

const test = () => {
    const channel = 'cafe-channel'

    const title = `You've got a new message!`

    const message = {
        body: `Satoshi just sent you a message`,
        subText: `Café`,
    }

    localNotif(channel, title, message)
}

export default test

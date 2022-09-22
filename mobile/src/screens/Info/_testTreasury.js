import {localNotif} from '../../NotifManager'

const test = () => {
    const channel = 'treasury-channel'

    const title = `Deposit Received`

    const message = {
        body: `We've added 13.37 $GOGO to your account balance.`,
        subText: `Treasury`,
    }

    localNotif(channel, title, message)
}

export default test

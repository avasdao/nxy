import {localNotif} from '../../NotifManager'

const test = () => {
    const channel = 'community-channel'

    const title = `MistSwap has been added to the platform!`

    const message = {
        body: `Now you can trade MistSwap while on-the-go. Try it out TODAY! ;-)`,
        // subText: `Community Bulletin`,
        // subText: `Ava's Cell`,
        subText: `New & Noteworthy`,
    }

    localNotif(channel, title, message)
}

export default test

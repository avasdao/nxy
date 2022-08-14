import {localNotif} from '../../NotifManager'

const test = () => {
    // FOR DEVELOPMENT PURPOSES ONLY
    const _getPlatform = () => {
        const platforms = [
            'Alpha Homora v2',
            'BENQI',
        ]

        return platforms[Math.floor(Math.random() * platforms.length)]
    }

    // FOR DEVELOPMENT PURPOSES ONLY
    const _getMarket = () => {
        const markets = [
            'JOE.e/AVAX',
            'USDC.e/AVAX',
            'AVAX/USDC.e',
        ]

        return markets[Math.floor(Math.random() * markets.length)]
    }

    // FOR DEVELOPMENT PURPOSES ONLY
    const _getActivity = () => {
        const activities = [
            'Trade Opportunity',
            'Limit Reached',
            'Trade Completed',
        ]

        return activities[Math.floor(Math.random() * activities.length)]
    }

    const channel = 'boards-channel'

    // const title = `${market} • ${activity}`
    const title = `${_getMarket()} | ${_getActivity()}`

    const message = {
        body: `This is just a (default) test.`,
        subText: _getPlatform(),
    }

    localNotif(channel, title, message)
}

export default test

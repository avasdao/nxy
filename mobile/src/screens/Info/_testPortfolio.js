import {localNotif} from '../../NotifManager'

const test = () => {
    // FOR DEVELOPMENT PURPOSES ONLY
    const _getFund = () => {
        const funds = [
            `Ava Labs BUIDL Fund`,
            'COLONY Index',
            `Elon's Crypto Index`,
            `Modenero DAO Index`,
            `Moralis DAO Fund`,
            `Vitalik's Dev Fund`,
        ]

        return funds[Math.floor(Math.random() * funds.length)]
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

    const title = `${_getMarket()} ·•· ${_getActivity()}`
    // const title = `${_getMarket()} | ${_getActivity()}`

    const message = {
        body: `This is just a (default) test.`,
        subText: _getFund(),
    }

    localNotif(channel, title, message)
}

export default test

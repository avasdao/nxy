import React from 'react'

import { Link } from 'react-router-dom'

import icon from '../../assets/icon.png'

/* Nito */
const NITO_LIFE_PORT = 7001

/* Bitcoin Please */
const SBCH_INFO_PORT = 9001
const SMARTBCH_EXCHANGE_PORT = 9002
const SMART_POOL_PORT = 9003

/* Ava's DAO */
const SUBNET_BUILDERS_PORT = 9105
const SUBNET_MARKETPLACE_PORT = 9106
const SUBNET_MONITORING_PORT = 9107
const SUBNET_PLAYGROUND_PORT = 9108

const NEXAVERSE_WEB_PORT = 9200

const TELR_EXCHANGE_API_PORT = 5700

const INCOGNITO_APP_PORT = 9300
const INCOGNITO_DOCS_PORT = 9301

/* Modenero */
const USE_CASH_MAP_PORT = 9201
const USE_CASH_CHECKOUT_PORT = 9202
const NEXAJS_PORT = 9203
const NEXAJS_DOCS_PORT = 9204

/**
 * Deployments Screen
 *
 * Empty template.
 */
const Deployments = () => {
    const [isRunningNexaverseWeb, setIsRunningNexaverseWeb] = React.useState(false)

    /* Handle onLoad scripts. */
    React.useEffect(() => {
        /**
         * Fetch Info
         */
        const fetchInfo = async () => {
            //
        }

        /* Fetch info. */
        fetchInfo()
    }, [])


    /* Toggle Nexaverse (daemon). */
    const toggleNexaverseWeb = () => {
        require('../daemons/toggleNexaverseWeb')(
            isRunningNexaverseWeb,
            setIsRunningNexaverseWeb,
            NEXAVERSE_WEB_PORT,
        )
    }

    return (
        <main className="w-screen p-3">
            <div className="py-1 px-3 flex flex-row justify-between items-center border-2 border-purple-300 bg-purple-100 rounded shadow-lg">
                <h1 className="text-2xl text-gray-500 font-thin uppercase">
                    Daemons
                </h1>

                <Link to="/" className="flex flex-col items-end group">
                    <i className="fa-solid fa-computer text-gray-500 text-xl group-hover:text-pink-500"></i>

                    <span className="block text-gray-500 font-bold text-xs text-right group-hover:text-pink-500">
                        back to dashboard
                    </span>
                </Link>
            </div>

            <div className="h-96 flex flex-col lg:flex-row gap-2 lg:gap-4 overflow-y-scroll overflow-x-hidden">
                <button onClick={toggleIncognitoApp} className="my-3 p-3 bg-purple-500 border-2 border-purple-700 text-xl rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transform transition">
                    {isRunningIncognitoApp ? 'Stop Incognito App' : 'Start Incognito App'}
                </button>

                <button onClick={toggleIncognitoDocs} className="my-3 p-3 bg-purple-500 border-2 border-purple-700 text-xl rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transform transition">
                    {isRunningIncognitoDocs ? 'Stop Incognito Docs' : 'Start Incognito Docs'}
                </button>

                <button onClick={toggleNexaJS} className="my-3 p-3 bg-purple-500 border-2 border-purple-700 text-xl rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transform transition">
                    {isRunningNexaJS ? 'Stop NexaJS' : 'Start NexaJS'}
                </button>

                <button onClick={toggleNexaJSDocs} className="my-3 p-3 bg-purple-500 border-2 border-purple-700 text-xl rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transform transition">
                    {isRunningNexaJSDocs ? 'Stop NexaJS Docs' : 'Start NexaJS Docs'}
                </button>

                <button onClick={toggleNexaverseWeb} className="my-3 p-3 bg-purple-500 border-2 border-purple-700 text-xl rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transform transition">
                    {isRunningNexaverseWeb ? 'Stop Nexaverse Web' : 'Start Nexaverse Web'}
                </button>

                <button onClick={toggleNitoLife} className="my-3 p-3 bg-purple-500 border-2 border-purple-700 text-xl rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transform transition">
                    {isRunningNitoLife ? 'Stop Nito Life' : 'Start Nito Life'}
                </button>

                <button onClick={toggleSBX} className="my-3 p-3 bg-purple-500 border-2 border-purple-700 text-xl rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transform transition">
                    {isRunningSBX ? 'Stop SBX' : 'Start SBX'}
                </button>

                <button onClick={toggleSbchInfo} className="my-3 p-3 bg-purple-500 border-2 border-purple-700 text-xl rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transform transition">
                    {isRunningSbchInfo ? 'Stop SBCH Info' : 'Start SBCH Info'}
                </button>

                <button onClick={toggleSmartPool} className="my-3 p-3 bg-purple-500 border-2 border-purple-700 text-xl rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transform transition">
                    {isRunningSmartPool ? 'Stop Smart Pool' : 'Start Smart Pool'}
                </button>

                <button onClick={toggleSubnetBuilders} className="my-3 p-3 bg-purple-500 border-2 border-purple-700 text-xl rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transform transition">
                    {isRunningSubnetBuilders ? 'Stop Subnet Builders' : 'Start Subnet Builders'}
                </button>

                <button onClick={toggleSubnetMarketplace} className="my-3 p-3 bg-purple-500 border-2 border-purple-700 text-xl rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transform transition">
                    {isRunningSubnetMarketplace ? 'Stop Subnet Marketplace' : 'Start Subnet Marketplace'}
                </button>

                <button onClick={toggleSubnetMonitoring} className="my-3 p-3 bg-purple-500 border-2 border-purple-700 text-xl rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transform transition">
                    {isRunningSubnetMonitoring ? 'Stop Subnet Monitoring' : 'Start Subnet Monitoring'}
                </button>

                <button onClick={toggleSubnetPlayground} className="my-3 p-3 bg-purple-500 border-2 border-purple-700 text-xl rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transform transition">
                    {isRunningSubnetPlayground ? 'Stop Subnet Playground' : 'Start Subnet Playground'}
                </button>

                <button onClick={toggleTelrExchangeApi} className="my-3 p-3 bg-purple-500 border-2 border-purple-700 text-xl rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transform transition">
                    {isRunningTelrExchangeApi ? 'Stop TΞLR Exchange API' : 'Start TΞLR Exchange API'}
                </button>

                <button onClick={toggleUseCashMap} className="my-3 p-3 bg-purple-500 border-2 border-purple-700 text-xl rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transform transition">
                    {isRunningUseCashMap ? 'Stop Use Cash Map' : 'Start Use Cash Map'}
                </button>

                <button onClick={toggleUseCashCheckout} className="my-3 p-3 bg-purple-500 border-2 border-purple-700 text-xl rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transform transition">
                    {isRunningUseCashCheckout ? 'Stop Use Cash Checkout' : 'Start Use Cash Checkout'}
                </button>
            </div>
        </main>
    )
}

/* Export module. */
export default Deployments

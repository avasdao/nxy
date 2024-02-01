import React from 'react'

import { Link } from 'react-router-dom'

import icon from '../../assets/icon.png'

// import { exec } from 'child_process'

/**
 * Deployments Screen
 *
 * Empty template.
 */
const Deployments = () => {
    const [isDeploying, setIsDeploying] = React.useState(false)

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


    /* Deploy Wally Dice. */
    const deployWallyDice = () => {
        require('../deployments/deployWallyDice')(setIsDeploying)
    }

    return (
        <main className="w-screen p-3">
            <div className="py-1 px-3 flex flex-row justify-between items-center border-2 border-purple-300 bg-purple-100 rounded shadow-lg">
                <h1 className="sm:hidden text-2xl text-gray-500 font-thin uppercase">
                    Deploy
                </h1>
                <h1 className="hidden sm:flex text-2xl text-gray-500 font-thin uppercase">
                    Deployments
                </h1>

                <Link to="/" className="flex flex-col items-end group">
                    <i className="fa-solid fa-computer text-gray-500 text-xl group-hover:text-pink-500"></i>

                    <span className="block text-gray-500 font-bold text-xs text-right group-hover:text-pink-500">
                        back to dashboard
                    </span>
                </Link>
            </div>

            <div className="my-3 p-3 bg-yellow-200 border-2 border-yellow-400 rounded">
                <span className="text-yellow-700 font-bold font-mono">
                    {isDeploying ? 'Deployment in progress...' : 'Waiting to deploy...'}
                </span>
            </div>

            <div className="h-96 flex flex-col lg:flex-row gap-2 lg:gap-4 overflow-y-scroll overflow-x-hidden">
                {!isDeploying &&
                    <>

                        <button onClick={deployWallyDice} className="my-3 p-3 bg-purple-500 border-2 border-purple-700 text-xl rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 transform transition">
                            Wally Dice
                        </button>

                    </>
                }
            </div>
        </main>
    )
}

/* Export module. */
export default Deployments

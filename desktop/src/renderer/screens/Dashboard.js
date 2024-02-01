import React from 'react'

import {
    MemoryRouter as Router,
    Link,
    Routes,
    Route
} from 'react-router-dom'

import Hi from './Hi'

import icon from '../../assets/icon.png'

/**
 * Dashboard Screen
 *
 * Starting point.
 */
const Dashboard = () => {
    const [activeTaskId, setActiveTaskId] = React.useState(0)

    /* Handle onLoad scripts. */
    React.useEffect(() => {
        /**
         * Fetch Info
         */
        const fetchInfo = async () => {
            console.log('DASHBOARD: info has been fetched!')
        }

        /* Fetch info. */
        fetchInfo()
    }, [])

    return (
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="my-3 flex justify-center items-center">
                <img width="128px" alt="icon" src={icon} />
            </div>

            <div className="flex flex-col items-center mx-5 p-3 border-4 border-purple-400 bg-purple-200 rounded-xl shadow-lg">
                <h1 className="text-4xl lg:text-5xl text-purple-500 font-bold">
                    NXY
                </h1>

                <h2 className="text-xl lg:text-2xl text-center text-purple-500 font-bold">
                    Social Finance (SoFi) Network
                </h2>
            </div>

        </main>
    )
}

/* Export module. */
export default Dashboard

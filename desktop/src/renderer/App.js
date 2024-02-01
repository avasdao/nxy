import React from 'react'

import {
    MemoryRouter as Router,
    Link,
    Routes,
    Route,
} from 'react-router-dom'

import 'tailwindcss/tailwind.css'

// import icon from '../assets/icon.svg'
import icon from '../assets/icon.png'

import './App.css'

import Daemons from './screens/Daemons'
import Dashboard from './screens/Dashboard'
import Deployments from './screens/Deployments'

import ToggleElectronCash from './components/ToggleElectronCash'
import ToggleNexa from './components/ToggleNexa'

export default function App() {
    const [activeTaskId, setActiveTaskId] = React.useState(0)

    /* Handle onLoad scripts. */
    React.useEffect(() => {
        /**
         * Fetch Info
         */
        const fetchInfo = async () => {
            console.log('APP: info has been fetched!')
        }

        /* Fetch info. */
        fetchInfo()


        // const Client = require('bitcoin-core')
        // const client = new Client({
        //     port: 7227,
        //     host: '127.0.0.1',
        //     username: 'user',
        //     password: 'password',
        // })
        // console.log('CLIENT', client)

    }, [])

    const _processAuth = function () {
        const PROCESS_ID = 'nxy'

        const commands = [
            // NOTE: Build process (local).
            'cd',
            '/desktop',
            '&&',
            `atom .`,
        ]

        /* Send IPC message. */
        window.electron.ipcRenderer
            .sendMessage(
                'start-local-node',
                [
                    ...commands,
                    PROCESS_ID,
                ]
            )

        // /* Initialize electron clipboard. */
        // const clipboard = require('electron').clipboard
        //
        // /* Retrieve saved clipboard text. */
        // const saved = clipboard.readText()
        // console.log('saved clipboard', saved)
        //
        // let address = null
        //
        // try {
        //     /* Initialize moment module. */
        //     const ethers = require('ethers')
        //
        //     address = ethers.utils.getAddress(saved)
        //     console.log('Clipboard address is', address)
        // } catch (e) {
        //     alert(e.message)
        // }
        //
        // console.log('getAddress', address)
    }

    const $router = {
        push: function (_dest) {
            console.log('GO TO', _dest)
            alert('go to ' + _dest)
        },
    }

    return (
        <main className="w-screen p-3">
            <div className="absolute bottom-1 left-1 text-xs text-pink-400 font-medium">
                Nxy v{require('../../package.json').version}
            </div>

            <nav className="mt-2 pb-3 flex flex-row justify-between gap-2 border-b-2 border-purple-600">
                <input
                    type="text"
                    className="flex-1 p-3 border-2 border-purple-600 text-lg text-gray-700 rounded-lg shadow-md"
                    placeholder="What's next? Let's keep it moving.."
                />

                <button
                    className="px-3 bg-pink-500 border-2 border-purple-600 text-xl text-gray-100 font-bold rounded-lg shadow-md"
                    onClick={_processAuth}
                >
                    L|0
                </button>
            </nav>

            <ul className="mt-3 flex flex-row justify-around">
                <Link to="/" className="">
                    <span data-feather="home"></span>
                    Home
                </Link>

                <li className="nav-item" id="btnOrders">
                    <a className="nav-link cursor-pointer"
                        onClick={() => $router.push('tasks')}
                    >
                        <span data-feather="file"></span>
                        Tasks
                    </a>
                </li>

                <Link to="/messages" className="">
                    <span data-feather="bell"></span>
                    Messages
                </Link>

                <li className="nav-item">
                    <a className="nav-link cursor-pointer"
                        onClick={() => $router.push('library')}
                    >
                        <span data-feather="shopping-cart"></span>
                        Library
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link cursor-pointer"
                        onClick={() => $router.push('logs')}
                    >
                        <span data-feather="shopping-cart"></span>
                        Logs
                    </a>
                </li>
            </ul>

            <div className="mt-3 flex flex-row">

                <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                    <div className="sidebar-sticky">

                        <Link to="/projects" className="block mt-3">
                            <span data-feather="shopping-cart"></span>
                            Projects
                        </Link>

                        <Link to="/daemons" className="block mt-3">
                            <span data-feather="shopping-cart"></span>
                            Daemons
                        </Link>

                        <Link to="/deployments" className="block mt-3">
                            <span data-feather="shopping-cart"></span>
                            Deployments
                        </Link>

                        <h6 className="mt-2 mb-1">
                            <span className="text-2xl font-bold">
                                Remotes
                            </span>

                            <a className="d-flex align-items-center text-muted cursor-pointer">
                                <span data-feather="plus-circle"></span>
                            </a>
                        </h6>

                        <div className="flex gap-2">
                            <ToggleElectronCash />
                            <ToggleNexa />
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/daemons" element={<Daemons />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/deployments" element={<Deployments />} />
                </Routes>

            </div>
        </main>
    )
}

import React from 'react'

/**
 * Toggle Daemon
 *
 * Empty template.
 */
const Daemon = () => {
    const [isRunning, setIsRunning] = React.useState(false)

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

    /* Toggle Daemon. */
    const toggleDaemon = () => {
        /* Set process id. */
        const PROCESS_ID = 'electron-cash'

        /* Check process status. */
        if (isRunning) {
            /* Send IPC message. */
            window.electron.ipcRenderer
                .sendMessage('stop-local-node', PROCESS_ID)

            /* Stop here! */
            return
        }

        /* Set flag. */
        setIsRunning(true)

        /* Handle IPC message. */
        window.electron.ipcRenderer
            .once('response-local-node', (_id) => {
                if (_id === PROCESS_ID) {
                    /* Set flag. */
                    setIsRunning(false)

                    console.log(
                        '\nElectron Cash has been killed!'
                    )
                }
            })

        /* Send IPC message. */
        window.electron.ipcRenderer
            .sendMessage(
                'start-local-node',
                [
                    // NOTE: Build process (local).
                    'cd Electron-Cash',
                    '&&',
                    './electron-cash',
                    PROCESS_ID,
                ]
            )
    }

    return (
        <button onClick={toggleDaemon} className="flex flex-col items-center w-12 my-1 p-1 group bg-gray-800 border-2 border-purple-700 cursor-pointer rounded-lg shadow-lg hover:bg-gray-200 hover:scale-105 transform transition">
            <i className="fa-solid fa-wallet text-green-700 text-2xl group-hover:text-green-500"></i>

            <div className="text-xs text-gray-100 group-hover:text-pink-700 lowercase">
                {isRunning ? 'Stop' : 'BCH'}
            </div>
        </button>
    )
}

/* Export module. */
export default Daemon

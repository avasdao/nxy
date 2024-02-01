/* Set process id. */
const PROCESS_ID = 'nxy.app'
const name = `Nxy`

/* Toggle Daemon. */
const daemon = (_isRunning, _setIsRunning, _port) => {
    const commands = [
        // NOTE: Build process (local).
        'cd',
        `yarn serve --port ${_port}`,
    ]

    /* Check process status. */
    if (_isRunning) {
        /* Send IPC message. */
        window.electron.ipcRenderer
            .sendMessage('stop-local-node', PROCESS_ID)

        /* Stop here! */
        return
    }

    /* Set flag. */
    _setIsRunning(true)

    /* Handle IPC message. */
    window.electron.ipcRenderer
        .once('response-local-node', (_processid) => {
            if (_processid === PROCESS_ID) {
                /* Set flag. */
                _setIsRunning(false)

                console.log(
                    `\n${name} has completed!`
                )
            }
        })

    /* Send IPC message. */
    window.electron.ipcRenderer
        .sendMessage(
            'start-local-node',
            [
                ...commands,
                PROCESS_ID,
            ]
        )

    /* Open (system) browser. */
    window.electron.ipcRenderer
        .sendMessage('open_url', `http://localhost:${_port}/`)
}

module.exports = daemon

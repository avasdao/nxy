/* Deploy app. */
const action = (_setIsDeploying) => {
    /* Set flag. */
    _setIsDeploying(true)

    /* Send IPC message. */
    window.electron.ipcRenderer
        .sendMessage(
            'deploy-to-remote',
            [
                // NOTE: Build process (local).
                'ssh wallydice deploy.sh',
            ]
        )

    window.electron.ipcRenderer
        .once('response-from-remote', (_output) => {
            /* Set flag. */
            _setIsDeploying(false)

            console.log(
                '\nWally Dice successfully deployed!',
                '\n' + _output
            )
        })
}

module.exports = action

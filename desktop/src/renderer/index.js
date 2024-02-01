import { createRoot } from 'react-dom/client'

import { MemoryRouter } from 'react-router-dom'

import App from './App'

const container = document.getElementById('root')

const root = createRoot(container)

root.render(
    <MemoryRouter>
        <App />
    </MemoryRouter>
)

// NOTE: These `console.log` will appear in the debugging window of the app.
window.electron.ipcRenderer
    .once('ipc-example', (arg) => {
        console.log(arg)
    })

window.electron.ipcRenderer
    .sendMessage('ipc-example', ['ping'])

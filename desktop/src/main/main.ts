/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import {
    app,
    BrowserWindow,
    ipcMain,
    shell,
    Tray,
    Menu,
} from 'electron'
import { autoUpdater } from 'electron-updater'
import log from 'electron-log'

import path from 'path'
import { spawn } from 'child_process'
import kill from 'tree-kill'

import MenuBuilder from './menu'
import { resolveHtmlPath } from './util'

/* Initialize playground. */
const playground = {}

/**
 * Stop Script
 *
 * Terminates a running child.
 */
function stop_script(_childid, _callback) {
    console.log('STOP CHILD ID', _childid)

    if (playground[_childid]) {
        /* Kill child. */
        kill(playground[_childid].pid)

        /* Remove child from playground. */
        delete playground[_childid]
    } else {
        // alert('Could not find child id', _childid)
        throw new Error(`Could not find child [ ${_childid} ]`)
    }

    /* Handle method callback. */
    if (typeof _callback === 'function')
        _callback(`Killed [ ${_childid} ]`)
}

/**
 * Run Script
 *
 * This function will output the lines from the script
 * and will return the full combined output
 * as well as exit code when it's done (using the callback).
 */
function run_script(command, args, _callback, _childid) {
    // console.log('START CHILD ID', _childid)

    /* Initialize output handler. */
    let output

    /* Run child process. */
    const child = spawn(command, args, {
        encoding: 'utf8',
        shell: true,
    })

    /* Add child to plaground (process manager). */
    playground[_childid] = child

    /* Handle timeout. */
    /* Handle errors. */
    child.on('error', (error) => {
        console.error(error)
    })

    /* Set output encoding. */
    child.stdout.setEncoding('utf8')

    /* Handle data. */
    child.stdout.on('data', (data) => {
        /* Convert the data to a string. */
        output = data.toString()
        // console.log('SCRIPT OUTPUT', output)
    })

    /* Set error encoding. */
    child.stderr.setEncoding('utf8')

    /* Handle errors. */
    child.stderr.on('data', (data) => {
        // Return some data to the renderer process with the mainprocess-response ID
        mainWindow.webContents.send('mainprocess-response', data)
        console.log(data)
    })

    /* Handle close. */
    child.on('close', (_code) => {
        switch (_code) {
            case 0:
                console.info('End process.')
                break
            default:
                console.error('Unknown error code:', _code)
        }

        /* Handle method callback. */
        if (typeof _callback === 'function')
            _callback(output)
    })
}

/* Initialize main window. */
let mainWindow: BrowserWindow | null = null

/* Handle URLs. */
ipcMain.on('open_url', async (_event, _url) => {
    // console.log('\nURL', _url)

    /* Open URL. */
    shell.openExternal(_url)
})

/* Handle local node startups. */
ipcMain.on('stop-local-node', async (_event, _childid) => {
    // console.log('\nLOCAL NODE CHILD ID', _childid)

    /* Run the command-line script. */
    stop_script(_childid, (_results) => {
        /* Send IPC response. */
        _event.reply('response-local-node', _childid)
    })
})

/* Handle local node startups. */
ipcMain.on('start-local-node', async (_event, _args) => {
    // console.log('\nLOCAL NODE ARGS', _args)

    /* Request (initial) command. */
    const cmd = _args.shift()
    const childid = _args.pop()
    // console.log('CMD', cmd)
    // console.log('NEW ARGS', _args)

    /* Run the command-line script. */
    run_script(cmd, _args, (_results) => {
        /* Send IPC response. */
        _event.reply('response-local-node', _results)
    }, childid)
})

/* Handle deployment to remote server. */
ipcMain.on('deploy-to-remote', async (_event, _args) => {
    // console.log('\nSCRIPT ARGS', _args)

    /* Request (initial) command. */
    const cmd = _args.shift()
    // console.log('CMD', cmd)
    // console.log('NEW ARGS', _args)

    /* Run the command-line script. */
    run_script(cmd, _args, (_results) => {
        /* Send IPC response. */
        _event.reply('response-from-remote', _results)
    })
})

/* Handle IPC example. */
ipcMain.on('ipc-example', async (event, arg) => {
    /* Initialize message template. */
    const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`

    /* Display to terminal. */
    console.log(msgTemplate(arg))

    /* Send IPC reply. */
    event.reply('ipc-example', msgTemplate('pong'))
})

if (process.env.NODE_ENV === 'production') {
    const sourceMapSupport = require('source-map-support')

    sourceMapSupport.install()
}

const isDebug = process.env.
    NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true'

if (isDebug) {
    require('electron-debug')()
}

/**
 * Install Extensions
 */
const installExtensions = async () => {
    const installer = require('electron-devtools-installer')
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS
    const extensions = ['REACT_DEVELOPER_TOOLS']

    return installer
        .default(
            extensions.map((name) => installer[name]),
            forceDownload,
        )
        .catch(console.log)
}

/**
 * Create Window
 */
const createWindow = async () => {
    if (isDebug) {
        await installExtensions()
    }

    const RESOURCES_PATH = app.isPackaged
        ? path.join(process.resourcesPath, 'assets')
        : path.join(__dirname, '../../assets')

    const getAssetPath = (...paths: string[]): string => {
        return path.join(RESOURCES_PATH, ...paths)
    }

    mainWindow = new BrowserWindow({
        show: false,
        width: 1024,
        height: 728,
        icon: getAssetPath('icon.png'),
        // icon: 'assets/logo.png',
        webPreferences: {
            preload: app.isPackaged
                ? path.join(__dirname, 'preload.js')
                : path.join(__dirname, '../../.erb/dll/preload.js'),
            },
        })

    mainWindow.loadURL(resolveHtmlPath('index.html'))

    mainWindow.on('ready-to-show', () => {
        if (!mainWindow) {
            throw new Error(`"mainWindow" is not defined`)
        }

        if (process.env.START_MINIMIZED) {
            mainWindow.minimize()
        } else {
            mainWindow.show()
        }
    })

    mainWindow.on('closed', () => {
        mainWindow = null
    })

    const menuBuilder = new MenuBuilder(mainWindow)
    menuBuilder.buildMenu()

    // Open urls in the user's browser
    mainWindow.webContents.setWindowOpenHandler((edata) => {
        shell.openExternal(edata.url)

        return { action: 'deny' }
    })
}

/**
 * Add event listeners...
 */
app.on('window-all-closed', () => {
    // Respect the OSX convention of having the application in memory even
    // after all windows have been closed
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

/**
 * Start Main Application
 */
app
    .whenReady()
    .then(() => {
        const tray = new Tray(path.join(__dirname, '/../assets/icon.png'))

        if (process.platform === 'win32' ) {
            tray.on('click', tray.popUpContextMenu)
        }

        const menu = Menu.buildFromTemplate ([
            {
                label: 'Exit',
                click() { app.quit()}
            },
            {
                label: 'Help',
                click() { null; }
            }
        ])

        tray.setToolTip('Nxy')
        tray.setContextMenu(menu)

        /* Create window. */
        createWindow()

        /* Handle app activation. */
        app.on('activate', () => {
            // On macOS it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if (mainWindow === null) {
                /* Create window. */
                createWindow()
            }
        })
    })
    .catch(console.error)

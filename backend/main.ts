// Modules to control application life and create native browser window
const { app, protocol, BrowserWindow, ipcMain, safeStorage } = require('electron')
const path = require('path')

require('./server')
const Store = require('electron-store');

//defined the store
let store = new Store();

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    icon: 'public/favicon.ico',
    width: 1024,
    height: 920,
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('dist/index.html')
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })


  ipcMain.on('electron-store-set', (event, key, value) => {
    // Encrypt password using safeStorage
    if (value.password && safeStorage.isEncryptionAvailable()) {
      value.password = safeStorage.encryptString(value.password).toString('base64')
    }

    store.set(key, value)

    event.sender.send('asynchronous-result', true)
  })

  ipcMain.on('electron-store-get', (event, key) => {
    const value = store.get(key, {})
    // Decrypt password using safeStorage
    if (value.password && safeStorage.isEncryptionAvailable()) {
      value.password = safeStorage.decryptString(Buffer.from(value.password, 'base64'))
    }

    event.sender.send('asynchronous-result', value)
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

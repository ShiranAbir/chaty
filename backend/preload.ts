const { contextBridge, ipcRenderer } = require('electron')

// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })

  // Expose ipcRenderer to the client
  contextBridge.exposeInMainWorld('ipcRenderer', {
    send: (channel, key, value) => {
      let validChannels = ['electron-store-set', 'electron-store-get']
      if (validChannels.includes(channel)) {
        ipcRenderer.send(channel, key, value)
      }

      return new Promise((resolve) => {
        ipcRenderer.once('asynchronous-result', (event, data) => resolve(data))
      })
    }
  })
  
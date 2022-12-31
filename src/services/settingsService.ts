async function getSettings(){
    return await window.ipcRenderer.send('electron-store-get', 'settings')
}

export {
    getSettings
}
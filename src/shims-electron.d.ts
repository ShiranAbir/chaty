interface SettingsType {
  username: string;
  password: string;
  accountType: string;
  shouldRead: boolean;
}

// Create a type that should contain all the data we need to expose in the
// renderer process using `contextBridge`.
export type ContextBridgeApi = {
    // Declare a `send` function that will return a promise. This promise
    // will contain the result from the main process.
    send: (channel:string, key:string, value?: SettingsType) => Promise
  }
  
declare global {
    interface Window {
      ipcRenderer: ContextBridgeApi
    }
  }
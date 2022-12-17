import { ChatGPTAPIBrowser, ChatGPTConversation } from 'chatgpt'
import { app, dialog } from 'electron'

var conversation = null;
export async function chatgpt_init() {
    if (!process.env.OPENAI_EMAIL || !process.env.OPENAI_PASSWORD){
        dialog.showMessageBoxSync({message:"Please set Email and Password first!"})

        app.quit()
        return
    }
    const api = new ChatGPTAPIBrowser({
        email: process.env.OPENAI_EMAIL,
        password: process.env.OPENAI_PASSWORD,
      })
    await api.init()
    conversation = new ChatGPTConversation(api)
}

export async function chatgpt(message) {
    const response = await conversation.sendMessage(
        message
    )

    return response
}
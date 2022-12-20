import { ChatGPTAPIBrowser } from 'chatgpt'
import { app, dialog } from 'electron'
import * as googleTTS from 'google-tts-api'

var chatApi = null
var conversationId = null
var parentMessageId = null
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
    await api.initSession()

    chatApi = api
}

export async function chatgpt(message) {
    var res = null
    if (!conversationId) {
        res = await chatApi.sendMessage(message)
    } else {
        res = await chatApi.sendMessage(
            message,
            {
                conversationId: conversationId,
                parentMessageId: parentMessageId
            }
        )
    }

    conversationId = res.conversationId
    parentMessageId = res.messageId

    return res.response
}

export function getSpeechUrl(text) {
    return googleTTS.getAllAudioUrls(text, {
        lang: 'en',
        slow: false,
        host: 'https://translate.google.com',
        splitPunct: ',.?',
    })
}
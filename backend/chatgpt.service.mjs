import { ChatGPTAPIBrowser } from 'chatgpt'
import { app, dialog } from 'electron'
import * as googleTTS from 'google-tts-api'

var chatApi = null
var conversationId = null
var parentMessageId = null
export async function chatgpt_init(settings) {
    let isGoogleLogin = false
    let isMicrosoftLogin = false
    if (settings.accountType == 'Google') isGoogleLogin = true
    if (settings.accountType == 'Microsoft') isMicrosoftLogin = true

    const api = new ChatGPTAPIBrowser({
        email: settings.username,
        password: settings.password,
        isGoogleLogin: isGoogleLogin,
        isMicrosoftLogin: isMicrosoftLogin
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
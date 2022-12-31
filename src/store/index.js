import { createStore } from "vuex"
import { initBackend, getAnswer, getSpeechUrl } from '@/services/chatService.ts'
import { getSettings } from '@/services/settingsService.ts'

const store = createStore({
    state: {
        messages: [],
        lastId: 1,
        isSoundOn: false,
        settings: {}
    },
    mutations: {
        addMessage(state, { message }) {
            state.messages.push(message)
        },
        advanceId(state) {
            state.lastId++
        },
        toggleSound(state){
            state.isSoundOn = !state.isSoundOn
        },
        setSettings(state, { settings }) {
            state.settings = settings
        }
    },
    getters: {
        messages({ messages }) {
            if (!messages) return
            return messages
        },
        lastId({ lastId }) {
            return lastId
        },
        isSoundOn({isSoundOn}){
            return isSoundOn
        },
        settings({ settings }){
            return settings
        }
    },
    actions: {
        async initBackend({ commit, getters }) {
            const settings = getters.settings
            if (!settings.username || !settings.password){
                return false
            }

            await initBackend(settings.username, settings.password, settings.accountType)
            return true
        },
        async loadAnswer({ commit, getters }, param) {
            var message = {id: getters.lastId, type: 'question', txt:param.question}
            commit({ type: 'addMessage', message })
            commit({ type: 'advanceId', message })

            const answer = await getAnswer(param.question);
            message = {id: getters.lastId, type: 'answer', txt:answer}
            commit({ type: 'addMessage', message })
            commit({ type: 'advanceId', message })
            const isSoundOn = getters.isSoundOn
            return { answer, isSoundOn }
        },
        async getSpeechUrl({commit}, param) {
            return await getSpeechUrl(param.answer)
        },
        toggleSound({commit}){
            commit({ type: 'toggleSound' })
        },
        async loadSettings({commit}) {
            const settings = await getSettings()
            commit({ type: 'setSettings', settings })
        }
    },
})

export default store
import { createStore } from "vuex"
import { getAnswer, getSpeechUrl } from '@/services/chatService.ts'

const store = createStore({
    state: {
        messages: [],
        lastId: 1,
        isSoundOn: false
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
        }
    },
    actions: {
        async loadAnswer({ commit, getters }, param) {
            var message = {id: getters.lastId, type: 'question', txt:param.question};
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
        }
    },
})

export default store
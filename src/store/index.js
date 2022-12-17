import { createStore } from "vuex"
import { getAnswer } from '@/services/chatService.ts'

const store = createStore({
    state: {
        messages: [],
        lastId: 1
    },
    mutations: {
        addMessage(state, { message }) {
            state.messages.push(message)
        },
        advanceId(state) {
            state.lastId++
        },
    },
    getters: {
        messages({ messages }) {
            if (!messages) return
            return messages
        },
        lastId({ lastId }) {
            return lastId
        },
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
            return message
        },
    },
})

export default store
<template>
  <div class="main-conv-holder">
    <div class="conversation-container">
      <div v-if="messages" class="messages-holder"> 
        <div v-for="message in messages" :key="message.id" class="message-holder" :class="{'question-holder': message.type === 'question', 'answer-holder': message.type === 'answer'}">
          <div class="text-container">{{message.txt}}</div>
        </div>  
      </div>
    </div>
    <div class="input-container">
      <b-form-input v-model="question" @keydown.enter="onAskQuestion" placeholder="Ask me anything..." class="input" type="text"/>
    </div>
  </div>
</template>

<script lang="ts">
export default {
    data(){
        return{
            question: '',
            messages:[ {id:1, type: 'question', txt:'Try me :)'} ]
        }
    },
    methods:{
      async onAskQuestion(){
        const question = this.question
        this.question = ''
        this.messages = this.$store.getters.messages

        await this.$store.dispatch({ type: 'loadAnswer', question }).then(async ({answer, isSoundOn}: {answer: string, isSoundOn: boolean}) => {
          if (!isSoundOn) return

          await this.$store.dispatch({ type: 'getSpeechUrl', answer })
            .then(async (results:{shortText: string, url:string}[]) => {
              for (const result of results) {
                const audio = new Audio(result.url)
                await new Promise(res=>{
                  audio.play()
                  audio.onended = res
                })
              }              
            })
        })
        
      }
    },
}
</script>

<style>

</style>
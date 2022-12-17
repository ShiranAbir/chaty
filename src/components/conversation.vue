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
      onAskQuestion(){
        const question = this.question

        this.$store.dispatch({ type: 'loadAnswer', question })
        this.messages = this.$store.getters.messages

        this.question = ''
      }
    },
}
</script>

<style>

</style>
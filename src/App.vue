<template>
  <mainView :callConnecting="callConnecting" />
</template>

<script setup lang="ts">
import mainView from '@/views/mainView.vue'

</script>

<script lang="ts">
export default {
  data(){
    return{
      callConnecting:false
    }
  },
  async created() {
    await this.$store.dispatch({ type: 'loadSettings' }).then(async () => {
      const isConnected = await this.$store.dispatch({ type: 'initBackend' })
      if (!isConnected){
        this.callConnecting = true     
      }
    })
  }
}
</script>

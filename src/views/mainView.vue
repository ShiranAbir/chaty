<template>
  <settingsMenu :showSettings="isShowSettings" @settingsClosed="changeIsShown"/>
  <appHeader @showSettings="showSettings"></appHeader>
  <conversation></conversation>
</template>

<script lang="ts">
import appHeader from '@/components/header.vue'
import conversation from '@/components/conversation.vue'
import settingsMenu from '@/components/settings.vue'
export default {
    data(){
        return{
            isShowSettings: false
        }
    },
    props:{
        callConnecting: Boolean
    },
    methods: {
        showSettings(isShow:boolean) {
            this.isShowSettings = isShow
        },
        changeIsShown() {
            this.isShowSettings = false
        }
    },
    components:{
        settingsMenu,
        appHeader,
        conversation,
    },
    watch: {
      callConnecting: {
        handler(newValue, oldValue) {
          this.isShowSettings = newValue
        },
        immediate: true
      }
    },
}
</script>

<style>

</style>
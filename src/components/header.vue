<template>
  <div class="header-container">
    <div class="main-nav">
        <div class="logo">
            <p>Chaty</p>
        </div>
        <div class="button-container">
            <button :class="getSoundClass" @click="toggleSound">Sound</button>
        </div>
        
        <settingsMenu />
    </div>
  </div>
</template>

<script lang="ts">
import settingsMenu from '@/components/settings.vue'
export default {
    data(){
        return{
            isSoundOn: false
        }
    },
    components: {
        settingsMenu
    },
    methods:{
        toggleSound(){
            this.isSoundOn = !this.isSoundOn
            this.$store.dispatch({ type: 'toggleSound'}) 
        }
    },
    computed:{
        getSoundClass():string{
            const soundClass = this.isSoundOn ? 'active' : 'non-active'
            return soundClass
        }
    }
}

</script>

<style>

</style>
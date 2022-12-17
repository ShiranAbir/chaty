<template>
  <div class="header-container">
    <div class="main-nav">
        <div class="logo">
            <p>Chaty</p>
        </div>
        <div class="button-container">
            <button @click="toggleSound">Sound</button>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
    props: {
        person: Object,
    },
    data(){
        return{
        }
    },
    
    methods:{
        toggleSound(){
            this.$store.dispatch({ type: 'toggleSound'}) 
        }
    }
}

</script>

<style>

</style>
<template>
  <div class="header-container">
    <div class="main-nav">
        <div class="logo">
            <p>Chaty</p>
        </div>
        <div class="button-container">
            <button @click="$emit('showSettings', true)">Settings</button>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
    data(){
        return{
        }
    },
    methods:{
    },
    computed:{
    }
}

</script>

<style>

</style>
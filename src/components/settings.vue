<template>
    <div>
        <b-button @click="showModal=!showModal">Settings</b-button>
        <b-modal v-model="showModal" id="settingsMenu" title="Settings" ok-title="Save">
      <b-form-group
        id="fieldset-horizontal"
        label-cols="2"
        content-cols="9"
        label="Username:"
        label-for="input-horizontal"
      >
        <b-form-input type="email" placeholder="Enter your email"/>
      </b-form-group>
      <b-form-group
        id="fieldset-horizontal"
        label-cols="2"
        content-cols="9"
        label="Password:"
        label-for="input-horizontal"
      >
        <b-form-input type="password" placeholder="Enter your password"/>
      </b-form-group>
      <b-form-group
        label="Account type:"
        label-cols="3"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-radio-group
          class="pt-2"
          :options="['Normal', 'Google', 'Microsoft']"
          :aria-describedby="ariaDescribedby"
        />
      </b-form-group>
      <b-form-group
        label="Read answers:"
        label-cols="4"
        label-for="input-horizontal"
      >
        <b-form-checkbox
        id="checkbox-1"
        name="checkbox-1"
        value="accepted"
        unchecked-value="not_accepted"
        switch
        size="lg"
        />
      </b-form-group>
    </b-modal>
    </div>
  </template>
  
  <script lang="ts">
  export default {
      data(){
          return{
            showModal: false,
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
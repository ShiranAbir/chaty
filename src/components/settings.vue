<template>
  <div>
      <b-modal v-model="showModal" id="settingsMenu" title="Settings" ok-title="Save" @hide="$emit('settingsClosed')" @ok="handleOk">
    <b-form-group
      id="fieldset-horizontal"
      label-cols="2"
      content-cols="9"
      label="Username:"
      label-for="input-horizontal"
    >
      <b-form-input type="email" v-model="username" placeholder="Enter your email"/>
    </b-form-group>
    <b-form-group
      id="fieldset-horizontal"
      label-cols="2"
      content-cols="9"
      label="Password:"
      label-for="input-horizontal"
    >
      <b-form-input type="password" v-model="password" placeholder="Enter your password"/>
    </b-form-group>
    <b-form-group
      label="Account type:"
      label-cols="3"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-radio-group
        class="pt-2"
        v-model="accountType"
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
      v-model="shouldRead"
      name="checkbox-1"
      switch
      size="lg"
      />
    </b-form-group>
  </b-modal>
  </div>
</template>

<script lang="ts">
export default {
    props: {
      showSettings: Boolean
    },
    data(){
        return{
          showModal: false,
          username: '',
          password: '',
          accountType: 'Normal',
          shouldRead: false
        }
    },
    async created() {
      // Load settings from electron store
      const settings = await window.ipcRenderer.send('electron-store-get', 'settings')
      if (!settings.username) return

      this.username = settings.username
      this.password = settings.password
      this.accountType = settings.accountType
      this.shouldRead = settings.shouldRead
    },
    methods:{
      async handleOk() {
        const settings = {
          username: this.username,
          password: this.password,
          accountType: this.accountType,
          shouldRead: this.shouldRead
        }

        await window.ipcRenderer.send('electron-store-set', 'settings', settings)
      },
    },
    watch: {
      showSettings: {
        handler(newValue, oldValue) {
          this.showModal = newValue
        },
        immediate: true
      }
    },
    computed:{
    }
}

</script>

<style>

</style>
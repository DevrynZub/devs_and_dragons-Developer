<template>
  <header>
    <Navbar />
  </header>

  <main>
    <router-view />
  </main>


  <ModalComponent id="createCampaignModal">
    <template #header>

    </template>
    <template #body>
      <CampaignForm />

    </template>
  </ModalComponent>

  <ModalComponent id="createEntityModal">
    <template #header>
      Create Entity
    </template>
    <template #body>
      <EntityCreateForm />

    </template>
  </ModalComponent>

  <ModalComponent id="editAccount">
    <template #header>
      Update Account
    </template>
    <template #body>
      <UpdateAccount />
    </template>
  </ModalComponent>


  <ModalComponent id="createNote">
    <template #header>
      Create a Note
    </template>
    <template #body>
      

    </template>
  </ModalComponent>
</template>


<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import ModalComponent from "./components/ModalComponent.vue"
import CampaignForm from './components/CampaignForm.vue'
import EntityCreateForm from './components/EntityCreateForm.vue'
import UpdateAccount from './components/UpdateAccount.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, ModalComponent, CampaignForm, EntityCreateForm, UpdateAccount }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>

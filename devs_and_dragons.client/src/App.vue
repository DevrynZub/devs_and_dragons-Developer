<template>
  <header>
    <Navbar />
  </header>

  <main>
    <router-view />
  </main>
  <!-- <footer>
  </footer> -->

  <ModalComponent id="whatever you are calling goes here">
    <template #header>

    </template>
    <template #body>

    </template>
  </ModalComponent>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import ModalComponent from "./components/ModalComponent.vue.js"

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar, ModalComponent }
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

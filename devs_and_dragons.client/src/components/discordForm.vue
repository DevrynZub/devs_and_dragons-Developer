<template>
  <form @submit.prevent="updateDiscord">
    <label for="discord">Discord Link</label>
    <input v-model="editable.discordLink" type="url" maxlength="500" minlength="30">
  </form>
</template>


<script>
import { ref } from "vue";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";

export default {
  setup() {
    const editable = ref({})
    return {

      async updateDiscord() {
        try {

        } catch (error) {
          Pop.error(error)
          logger.log()
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped></style>
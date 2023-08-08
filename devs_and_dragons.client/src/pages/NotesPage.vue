<template>
  <h1 class="text-light">
    {{ note?.name }}
  </h1>
</template>


<script>
import { computed, onMounted, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { notesService } from "../services/NotesService.js";

export default {
  setup() {
    const route = useRoute()


    onMounted(() => {
      // getActiveNote()
    })

    watchEffect(() => {
      getActiveNote()
    })

    async function getActiveNote() {
      try {
        const noteId = route.params.noteId
        await notesService.getActiveNote(noteId)
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }

    return {

      note: computed(() => AppState.activeNote)


    }
  }
}
</script>


<style lang="scss" scoped></style>

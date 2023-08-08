<template>
  <div class="row bg-black text-white">
    <h2 class="text-center">{{ note?.name }}</h2>
    <div class="m-auto">
      <p>{{ note?.body }}</p>
    </div>
  </div>
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
      if (route.params.noteId) {
        getActiveNote()
      }
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

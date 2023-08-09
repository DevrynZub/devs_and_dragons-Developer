<template>
  <div class="row text-white text-center">
    <div>
      <h2 class="py-3">{{ note?.name }}</h2>
      <i v-if="note?.isRecap == false && note?.accountId == account.id" class="mdi mdi-feather selectable fs-2 edit-button" title="Edit Notes" data-bs-toggle="modal"
              data-bs-target="#editNote" ></i>
      <i v-if="note?.isRecap == false && note?.accountId == account.id" class="mdi mdi-delete selectable fs-2 delete-button" title="Delete Note" @click="removeNote()"></i>
    </div>
    <p>{{ formattedDate }}</p>
    <div class="col-10 m-auto text-center">
      <p>{{ note?.body }}</p>
    </div>
  </div>
</template>


<script>
import { computed, onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState.js";
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { notesService } from "../services/NotesService.js";

export default {
  setup() {
    const editable = ref({})
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
      editable,

      note: computed(() => AppState.activeNote),
      account: computed(()=> AppState.account),

      formattedDate: computed (() => {
        return AppState.activeNote?.createdAt.toLocaleDateString()
      }),

      async removeNote() {
        try {
          if (await Pop.confirm('Are you sure you want to delete this note?')) {
            const noteId = route.params.noteId
            await notesService.removeNote(noteId)
          }
          return
        } catch (error) {
          Pop.error(error.message)
          logger.log(error.message)
        }
      }

    }
  }
}
</script>


<style lang="scss" scoped>

.edit-button{
  position: relative;
  top: -2em;
  right: -13em;
  color: rgb(209, 209, 6)
  ;
}
.delete-button{
  position: relative;
  top: -2em;
  right: -14em;
  color: rgb(252, 21, 21)
  ;
}
</style>

<template>
  <div class="col-10 mb-4 text-white m-auto">
    <form action="" @submit.prevent="">
      <div class="mb-2 text-center">
        <label class="mb-2" for="name">Name</label>
        <input class="form-control" type="text" id="name" minlength="3" maxlength="75" v-model="editable.name">
      </div>
      <div class="mb-2 text-center">
        <label class="mb-2" for="body">Body</label>
        <textarea v-model="editable.body" name="body" id="body" cols="50" rows="10"></textarea>
      </div>
      <div class="mb-2 text-center">
        <button type="submit">Create</button>

      </div>
    </form>
  </div>
</template>


<script>
import { ref } from "vue";

export default {
  setup() {
    const editable = ref({})

    return {
      editable,
    }
  }
}
</script>


<style lang="scss" scoped>

</style>
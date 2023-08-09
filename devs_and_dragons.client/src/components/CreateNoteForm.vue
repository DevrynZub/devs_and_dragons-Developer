<template>
  <div class="col-6 mb-4 text-white">
    <form action="" @submit.prevent="createNote()">
      <div class="mb-2">
        <label for="name">Name</label>
        <input class="form-control" type="text" id="name" minlength="3" maxlength="75" v-model="editable.name">
      </div>
      <div class="mb-2">
        <label for="email">Email</label>
        <input v-model="editable.email" type="text" class="form-control" name="email" id="email">
      </div>
      <div class="mb-2">
        <label for="picture">Picture</label>
        <input class="form-control" type="url" id="picture" minlength="3" maxlength="200" v-model="editable.picture">
      </div>
      <button type="submit">Update</button>
    </form>
  </div>
</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>
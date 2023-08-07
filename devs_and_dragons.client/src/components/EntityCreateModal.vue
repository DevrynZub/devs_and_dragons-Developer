<template>
  <form @submit.prevent="createEntity">
    <div class="mb-3">
      <label for="name" class="form-label">Entity Name</label>
      <input v-model="editable.name" type="text" class="form-control" id="name" minlength="1" maxlength="35" required>
    </div>
    <div class="mb-3">
      <label for="imgUrl" class="form-label">Entity Image</label>
      <input v-model="editable.imgUrl" type="url" class="form-control" id="imgUrl" minlength="3" maxlength="250" required>
    </div>
    <div class="mb-3">
      <label for="type" class="form-label">Entity Type</label>
      <input v-model="editable.type" type="text" class="form-control" id="type" min="0" max="1000" required>
    </div>
    <div class="mb-3">
      <label for="desc" class="form-label">Entity Description</label>
      <textarea v-model="editable.desc" class="form-control" aria-label="entityDescription" required></textarea>
    </div>
    <div class="mb-3">
      <label for="body" class="form-label">Entity Body</label>
      <textarea v-model="editable.body" class="form-control" aria-label="entityBody" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary" title="Submit">Submit</button>
  </form>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped></style>
<template>
  <div class="col-6 mb-4 text-white">
    <form action="" @submit.prevent="createNote()">
      <div class="mb-2">
        <label for="name">Name</label>
        <input class="form-control" type="text" id="name" minlength="3" maxlength="75">
      </div>
      <div class="mb-2">
        <label for="body">Body</label>
        <textarea name="body" id="body" cols="30" rows="10"></textarea>
      </div>
      <div class="mb-2">

      </div>
      <button type="submit">Update</button>
    </form>
  </div>
</template>


<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped></style>
<template>
  <div class="container-fluid">
    <div class="row">
      <div>
        Name: {{ background?.name }}
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup() {
    return {
      background: computed(() => AppState.selectedResult)
    }
  }
}
</script>


<style lang="scss" scoped></style>
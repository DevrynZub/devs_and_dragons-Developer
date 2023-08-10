<template>
  {{ equipment.name }}
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup() {
    return {
      equipment: computed(() => AppState.selectedResult)
    }
  }
}
</script>


<style lang="scss" scoped></style>
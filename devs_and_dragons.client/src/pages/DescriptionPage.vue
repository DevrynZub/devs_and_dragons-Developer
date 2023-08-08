<template>
  <div class="text-light">
    This is the description component
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup() {


    return {
      campaign: computed(() => AppState.activeCampaign)
    }
  }
}
</script>


<style lang="scss" scoped></style>
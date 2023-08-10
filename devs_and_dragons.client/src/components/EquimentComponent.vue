<template>
  <div class="container-fluid">
    <div class="row">
      <div>
        Name: {{ equipment.name }}
      </div>
      <div>
        Cost: {{ equipment?.cost.quantity }}{{ equipment?.cost.unit }}
      </div>
      <div>
        Item Weight: {{ equipment?.weight }}
      </div>
      <div>
        Description: {{ equipment?.desc }}
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
      equipment: computed(() => AppState.selectedResult)
    }
  }
}
</script>


<style lang="scss" scoped></style>
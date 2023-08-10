<template>
  <div v-if="equipment?.url.includes('equipment')" class="container-fluid">
    <div class="row">
      <div>
        Name: {{ equipment?.name }}
      </div>
      <div v-if="equipment?.damage">
        Damage Die: {{ equipment.damage.damage_dice }}
      </div>
      <div v-if="equipment?.range">
        Range: {{ equipment.range.normal }}/{{ equipment.range?.long }} Feet
      </div>
      <div v-if="equipment?.properties">
        <!-- <div v-for="e in equipment."></div> -->
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
<template>
  <div v-if="magicItems?.url.includes('magic-items')" class="container-fluid">
    <div class="row">
      <div>
        Name: {{ magicItems?.name }}
      </div>
      <div>
        Category: {{ magicItems?.equipment_category.name }}
      </div>
      <div>
        Rarity: {{ magicItems?.rarity }}
      </div>
      <div>
        Description: {{ magicItems?.desc }}
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
      magicItems: computed(() => AppState.selectedResult)
    }
  }
}
</script>


<style lang="scss" scoped></style>
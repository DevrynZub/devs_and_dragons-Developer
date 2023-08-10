<template>
  <div class="row text-white">
    <div class="col-2 p-3">
      <img @click="setCategory('equipment')" title="Equipment" class="category selectable"
        src="https://i.pinimg.com/1200x/3a/b1/d3/3ab1d372cfd32e131c8c14507b507d83.jpg" alt="">
    </div>
    <div class="col-2 p-3">
      <img @click="setCategory('magic-items')" title="Magic Items" class="category selectable"
        src="https://i.pinimg.com/1200x/ca/1d/1e/ca1d1ee3f37af8c0442b7b111d9b5b4a.jpg" alt="">
    </div>
    <div class="col-2 p-3">
      <img @click="setCategory('backgrounds')" title="Backgrounds" class="category selectable"
        src="https://help-action.com/wp-content/uploads/2023/04/dnd-solider-background-help-action-dot-com-1024x574.png"
        alt="">
    </div>
    <div class="col-2 p-3">
      <img @click="setCategory('classes')" title="Classes" class="category selectable"
        src="https://assetsio.reedpopcdn.com/dnd-cleric-images-7.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp"
        alt="">
    </div>
    <div class="col-2 p-3">
      <img @click="setCategory('monsters')" title="Monsters" class="category selectable"
        src="https://www.zbrushcentral.com/uploads/default/original/4X/7/3/5/735deac9fbfd9da5365d71407115b850b18c18f7.jpeg"
        alt="">
    </div>
    <div class="col-2 p-3">
      <img @click="setCategory('spells')" title="Spells" class="category selectable"
        src="https://64.media.tumblr.com/e5432b01aa3f6161a3b4fb79a94fe76c/tumblr_inline_pg4s30mnUS1rqrjnu_1280.png"
        alt="">
    </div>
  </div>
  <div class="row text-white">
    <div class="col-12">
      <div>

      </div>
      <div v-if="selectedCategory" class="d-flex justify-content-center pt-2">
        <form @submit.prevent="searchDnDApi()">
          <label class="" for="dnd-api">Search:</label>
          <input v-model="filterBy.name" type="search" id="dnd-api" class="rounded">
          <button type="submit" class="btn btn-primary"><i class="mdi mdi-magnify"></i></button>
        </form>
      </div>
    </div>
  </div>
  <div class="row">
    <div v-for="item in searchResults" :key="item.name" class="col-4">
      <h3 class="text-white selectable">
        {{ item.name }}
      </h3>
    </div>
  </div>
</template>


<script>
import { computed, onMounted, ref } from "vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { dndApiService } from "../services/DnDApiService.js"
import { AppState } from "../AppState.js";

export default {
  setup() {

    const filterBy = ref({})
    let selectedCategory = ref(null)
    let savedCategory = null

    onMounted(() => {
      logger.log(selectedCategory)
    })


    return {
      searchResults: computed(() => AppState.dndApiResults),
      filterBy,
      selectedCategory,
      setCategory(category) {
        selectedCategory.value = category

        // logger.log(selectedCategory)
      },

      async searchDnDApi() {
        try {
          const formData = filterBy.value

          await dndApiService.searchDnDApi(formData, selectedCategory)
        } catch (error) {
          Pop.error(error.message)
          logger.log(error)
        }
      }

    }
  }
}
</script>


<style lang="scss" scoped>
.category {
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
}
</style>
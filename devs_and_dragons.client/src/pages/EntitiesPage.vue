<template>
  <div class="m-3 card rounded-3 text-light entityCard elevation-5">
    <div class="m-1">
      Type of Entity: {{ entityLink?.Entity.type }}
    </div>
    <div class="m-1">
      Entity Name: {{ entityLink?.Entity.name }}
    </div>
    <div class="m-1">
      Entity Description: {{ entityLink?.Entity.desc }}
    </div>
    <div class="m-1">
      Entity Information: {{ entityLink?.Entity.body }}
    </div>
  </div>
  <img class="rounded-5" :src="entityLink?.Entity.imgUrl">
</template>


<script>
import { computed, onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { entityService } from "../services/EntityService.js";
import { logger } from "../utils/Logger.js";
import { Entity } from "../models/Entity.js";
import { AppState } from "../AppState.js";
import { entitiesCampaignLinkService } from "../services/EntitiesCampaignLinkService.js";

export default {
  setup() {
    const route = useRoute()


    // const route = useRoute()

    onMounted(() => {
      getEntityLinkById()
    })
    async function getEntityLinkById() {

      try {
        const entityLinkId = route.params.entityId
        await entitiesCampaignLinkService.getEntityLinkById(entityLinkId);
        // logger.log('entity data')
      }
      catch (error) {
        Pop.error(error.message)
      }
    }

    return {
      entityLink: computed(() => AppState.ActiveEntityLink)

    }
  }
}
</script>


<style lang="scss" scoped>
.entityCard {
  background-color: rgba(172, 9, 9, 0.438);
  border: 1px double red;
  box-shadow: 3px 1px 5px rgb(255, 0, 0);
}
</style>
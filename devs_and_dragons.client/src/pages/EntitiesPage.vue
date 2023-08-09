<template>
  <div class="text-light">
    Type of Entity: {{ entityLink?.Entity.type }}


  </div>
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


<style lang="scss" scoped></style>
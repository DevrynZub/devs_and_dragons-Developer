<template>
  <div class="text-light">
    this is the entities Page


  </div>
</template>


<script>
import { onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { entityService } from "../services/EntityService.js";
import { logger } from "../utils/Logger.js";
import { Entity } from "../models/Entity.js";

export default {
  setup() {
    const route = useRoute()
    async function getEntityLinkById() {

      try {
        const entityLinkId = route.params.entityId
        await entityService.getEntity(entityLinkId);
        logger.log('entity data')
      }
      catch (error) {
        Pop.error(error.message)
      }
    }


    // const route = useRoute()

    onMounted(() => {
      getEntityLinkById()
    })

    return {


    }
  }
}
</script>


<style lang="scss" scoped></style>
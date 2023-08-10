<template>
  <div class="container-fluid d-flex">
    <div class="row">
      <div class="mt-3 card rounded-3 text-light entityCard elevation-5">
        <div class="m-1 d-flex justify-content-between">
          Type of Entity: {{ entityLink?.Entity.type }}
          
          <div v-if="activeCampaign?.creatorId == account?.id" class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked @click="makeEntityPrivate()">
            <label class="btn btn-outline-warning" for="btnradio1">Private</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-success" for="btnradio2">Public</label>
          </div>
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
      <div class="entityImg  mt-3">
        <img class="img-fluid rounded-5" :src="entityLink?.Entity.imgUrl">
      </div>
    </div>
  </div>
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
    watchEffect(() => {
      if (route.params.entityId) {
        getEntityLinkById()
      }
    })


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
      entityLink: computed(() => AppState.ActiveEntityLink),
      activeCampaign: computed(() => AppState.activeCampaign),
      account: computed(() => AppState.account),
      activeEntity: computed(() => AppState.ActiveEntityLink),


        async makeEntityPrivate() {
          try {
            const entity = AppState.ActiveEntityLink
          await entitiesCampaignLinkService.makeEntityPrivate(entity)
          } catch (error) {
            Pop.error(error.message)
            logger.log(error.message)
          }
        }
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

.entityImg {
  max-width: 60%;
}
</style>
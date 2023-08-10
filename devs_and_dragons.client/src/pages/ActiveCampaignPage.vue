<template>
  <div class="container-fluid background">
    <!-- SECTION links, join us, title, and session date -->
    <div class="row">
      <!-- STUB Discord Link -->
      <div class="col-md-2 col-12 d-flex align-items-center">
        <img class="discord"
          src="https://logo.com/image-cdn/images/kts928pd/production/5b24e49fd89287ff1eb5bbc4cf93cb038c3384ef-512x512.png?w=1080&q=72"
          alt="">
      </div>
      <!-- STUB  Title and session date-->
      <div class="col-md-8 col-12">
        <div class="text-white d-flex flex-column align-items-center pt-3">
          <h1>{{ campaign?.name }}</h1>
          <h2>Next Session Date: {{ formattedDate }}
          </h2>
        </div>
      </div>
      <!-- STUB Join us/ add character -->
      <div v-if="campaign?.creatorId != account.id && !hasLink" class="col-md-2 col-12 d-flex justify-content-center align-items-center">
        <button class="btn btn-outline-danger" :hidden="hasLink" @click="createAccountLink()">Join Us!</button>
      </div>
    </div>
    <!-- SECTION players -->

    <!--  REVIEW does the creator of the campaign need a link to interact with the other players? are they given a link when creating a campaign? -->

    <div class="row">
      <div class="col-12 d-flex justify-content-around p-4">
        <div v-for="links in accountLinks" :key="links.id">
          <img class="player-avatar" :src="links.Profile?.picture" :alt="links.Profile.name" :title="links.Profile.name">
        </div>
      </div>
    </div>

    <!-- SECTION (image?), main body, information section -->
    <div class="row">
      <!-- STUB picture/chatbox reservation -->
      <div class="col-2">

      </div>
      <!-- STUB child routing section -->
      <div class="col-8 bg-black">
        <div>
          <router-view>

          </router-view>
        </div>

      </div>
      <!-- STUB information collapsibles -->
      <div class="col-2 bg-dark text-light">
        <!-- NOTE description -->
        <div>
          <router-link :to="{ name: 'description' }">
            <h1 class="selectable">Description</h1>
          </router-link>
        </div>
        <!-- NOTE Notes Section -->
        <div>
          <div class="d-flex justify-content-around align-items-center fs-4">
            <h1 class="selectable" data-bs-toggle="collapse" data-bs-target="#notes">Notes</h1>
            <i v-if="hasLink || campaign?.creatorId == account.id" class="mdi mdi-plus-circle selectable" title="Create a new Note" type="button" data-bs-toggle="modal"
              data-bs-target="#createNote"></i>
          </div>

          <div id="notes" class="collapse">
            <ul v-for="note in notes" :key="note?.id">
              <router-link :to="{ name: 'notes', params: { campaignId: campaign.id, noteId: note.id } }">
                <li v-if="note.isRecap == false" class="selectable">{{ note.name }}</li>
              </router-link>

            </ul>
          </div>
        </div>
        <!-- NOTE Recaps section -->
        <div>
          <div class="d-flex justify-content-around align-items-center fs-4">
            <h1 class="selectable" data-bs-toggle="collapse" data-bs-target="#recaps">Recaps</h1>
            <i v-if="campaign?.creatorId == account.id" class="mdi mdi-plus-circle selectable" title="Create a new Recap" type="button" data-bs-toggle="modal"
                data-bs-target="#createRecap"></i>
          </div>

          <div id="recaps" class="collapse">
            <ul v-for="note in notes" :key="note.id">
              <router-link :to="{ name: 'notes', params: { campaignId: campaign.id, noteId: note.id } }">
                <li v-if="note.isRecap == true" class="selectable">{{ note.name }}</li>
              </router-link>
            </ul>
          </div>
        </div>
        <!-- NOTE Entities Section -->
        <div>
          <h1 class="selectable" data-bs-toggle="collapse" data-bs-target="#entities">Entities</h1>
          <div id="entities" class="collapse">
            <ul v-for="entity in entityLinks" :key="entity.id">
              <router-link :to="{ name: 'entities', params: { campaignId: campaign.id, entityId: entity.id } }">
                <li
                  v-if="entity.Entity.isPrivate == false || entity.Entity.isPrivate == true && account.id == entity.Entity.creatorId"
                  class="selectable">{{ entity.Entity.name }}</li>
              </router-link>
            </ul>
          </div>
        </div>
        <!-- NOTE Search page routing -->
        <div>
          <router-link :to="{ name: 'search' }">
            <h1>Search</h1>
          </router-link>
        </div>


      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted, ref, } from "vue";
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { campaignsService } from "../services/CampaignsService.js";
import { AppState } from "../AppState.js";
import { accountCampaignLinkService } from "../services/AccountCampaignLinkService.js"
import { notesService } from "../services/NotesService.js"
import { entitiesCampaignLinkService } from "../services/EntitiesCampaignLinkService.js"
import { router } from "../router.js";
export default {
  setup() {

    const editable = ref({})
    const route = useRoute()

    onMounted(() => {
      getActiveCampaign()
      getAccountCampaignLinks()
      getEntityLinksByCampaign()
      getNotesByCampaign()
    })

    async function getEntityLinksByCampaign() {
      try {
        const campaignId = route.params.campaignId
        await entitiesCampaignLinkService.getEntityLinksByCampaign(campaignId)
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }

    async function getNotesByCampaign() {
      try {
        const campaignId = route.params.campaignId
        await notesService.getNotesByCampaign(campaignId)
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }

    async function getActiveCampaign() {
      try {
        const campaignId = route.params.campaignId
        await campaignsService.getActiveCampaign(campaignId)
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }
    async function getAccountCampaignLinks() {
      try {
        const campaignId = route.params.campaignId
        logger.log('here is the campaign id on page', campaignId)
        await accountCampaignLinkService.getAccountCampaignLinks(campaignId)
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }

    return {
      notes: computed(() => AppState.Notes),
      campaign: computed(() => AppState.activeCampaign),
      accountLinks: computed(() => AppState.AccountLinks),
      entityLinks: computed(() => AppState.entityLinks),
      account: computed(() => AppState.account),

      formattedDate: computed(() => {
        return AppState.activeCampaign?.nextSessionDate.toLocaleDateString()
      }),

      hasLink: computed(() => {
        return AppState.AccountLinks.find(l => l.accountId == AppState.account.id)
      }),

      async createAccountLink() {
        try {
          const activeCampaign = route.params.campaignId
          const linkData = { campaignId: activeCampaign }
          await accountCampaignLinkService.createAccountLink(linkData)
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
.discord {
  height: 10vh;
  width: 10vh;

}

.background {
  background-position: center;
  background-image: url("../assets/img/solarized-colorscheme-dungeons-and-dragons-minimalism-vector-simple-background-hd-wallpaper-preview.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.player-avatar {
  height: 10vh;
  width: 10vh;
  border-radius: 50%;
}

.player-info-background {
  background-image: url(https://www.shutterstock.com/image-photo/flameburning-banner-black-flames-fire-260nw-2123476919.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow:
    inset 0 0 20px 7px #0cfc8cb6,
}
</style>
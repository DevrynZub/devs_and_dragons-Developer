<template>
  <div class="container-fluid background">
    <!-- SECTION links, join us, title, and session date -->
    <div class="row">
      <!-- STUB Discord Link -->
      <div class="col-2 d-flex align-items-center">
        <img class="discord"
          src="https://logo.com/image-cdn/images/kts928pd/production/5b24e49fd89287ff1eb5bbc4cf93cb038c3384ef-512x512.png?w=1080&q=72"
          alt="">
      </div>
      <!-- STUB  Title and session date-->
      <div class="col-8">
        <div class="text-white d-flex flex-column align-items-center">
          <h1>{{ campaign?.name }}</h1>
          <h1>Session Date: {{ campaign?.nextSessionDate.toDateString() }} {{
            campaign?.nextSessionDate.toLocaleTimeString()
          }}
          </h1>
        </div>
      </div>
      <!-- STUB Join us/ add character -->
      <div class="col-2 d-flex justify-content-center align-items-center">
        <button class="btn btn-outline-danger">Join Us!</button>
      </div>
    </div>
    <!-- SECTION players -->
    <div class="row">
      
    </div>
    <!-- SECTION (imgage?), main body, information section -->
    <div class="row">

    </div>
  </div>
</template>


<script>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { campaignsService } from "../services/CampaignsService.js";
import { AppState } from "../AppState.js";
import { accountCampaignLinkService } from "../services/AccountCampaignLinkService.js"

export default {
  setup() {

    const editable = ref({})
    const route = useRoute()

    onMounted(() => {
      getActiveCampaign()
      getAccountCampaignLinks()

    })
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
        await accountCampaignLinkService.getAccountCampaignLinks(campaignId)
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }


    return {

      campaign: computed(() => AppState.activeCampaign)
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
</style>
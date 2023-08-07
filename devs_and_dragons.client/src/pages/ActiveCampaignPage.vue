<template>
  <div class="container-fluid background">
    <!-- SECTION links, join us, title, and session date -->
    <div class="row">
      <!-- STUB Discord Link -->
      <div class="col-2">
        <img class="discord"
          src="https://logo.com/image-cdn/images/kts928pd/production/5b24e49fd89287ff1eb5bbc4cf93cb038c3384ef-512x512.png?w=1080&q=72"
          alt="">
      </div>
      <!-- STUB  Title and session date-->
      <div class="col-8">
        <div class="text-white d-flex flex-column align-items-center">
          <h1>Title of Campaign</h1>
          <h1>Session Date: Date goes Here</h1>
        </div>
      </div>
      <!-- STUB Join us/ add character -->
      <div class="col-2">
        <div v-if="">

                </div>
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
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { logger } from "../utils/Logger.js";
import { campaignsService } from "../services/CampaignsService.js";

export default {
  setup() {

    const editable = ref({})
    const route = useRoute()

    onMounted(() => {

    })
    async function getActiveCampaign() {
      try {
        await campaignsService.getActiveCampaign()
      } catch (error) {
        Pop.error(error.message)
        logger.log(error)
      }
    }


    return {


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
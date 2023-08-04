<template>
  <router-link :to="{ name: 'ActiveCampaign', param: { campaignId: campaignProp.id } }">
    <div class="col-md-3 col-12 card m-3 text-light elevation-5 selectable">
      <div class="d-flex flex-column">
        <img class="image-fluid cover-Img" :src="campaign?.coverImg" alt="">
        <h3>{{ campaign.name }}</h3>
        <p>{{ campaign.nextSessionDate }}</p>
        <p>{{ campaign.desc }}</p>
        <p>Player Capacity: {{ campaign.capacity }}</p>
      </div>
    </div>
  </router-link>
</template>


<script>
import { Campaign } from "../models/Campaign.js";

export default {
  props: {
    campaignProp: { type: Campaign, required: true }
  },

  setup() {

    return {}
  }
}
</script>


<style lang="scss" scoped></style>
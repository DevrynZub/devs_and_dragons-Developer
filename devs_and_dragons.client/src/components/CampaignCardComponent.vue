<template>
  <router-link :to="{ name: 'ActiveCampaign', params: { campaignId: campaignProp.id } }">
    <div class="text-white">
      <div class="d-flex flex-column">
        <img class="image-fluid cover-Img" :src="campaignProp.coverImg" alt="">
        <h3>{{ campaignProp.name }}</h3>
        <p>{{ campaignProp.nextSessionDate.toLocaleDateString() }} </p>
        <p>{{ campaignProp.nextSessionDate.toLocaleTimeString() }}</p>
        <p>{{ campaignProp.desc }}</p>
        <p>Player Capacity: {{ campaignProp.capacity }}</p>
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
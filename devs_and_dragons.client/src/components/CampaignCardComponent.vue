<template>
  <router-link :to="{ name: 'ActiveCampaign', params: { campaignId: campaignProp.id } }">
    <div class="text-white">
      <div class="d-flex flex-column box rounded elevation-5 selectable p-2">
        <div class="card text-light mb-2 p-2">
          <h3>{{ campaignProp.name }}</h3>
          <p>{{ campaignProp.nextSessionDate.toLocaleDateString() }} </p>
          <p>{{ campaignProp.nextSessionDate.toLocaleTimeString() }}</p>
          <p>{{ campaignProp.desc }}</p>
          <p>Player Capacity: {{ campaignProp.capacity }}</p>
        </div>
        <div class="text-center mb-2">
          <img class="image-fluid rounded cover-Img" :src="campaignProp.coverImg" alt="">
        </div>
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



<style lang="scss" scoped>
.box {
  background-color: rgba(73, 73, 73, 0.719);
  outline: 1px double red;
  box-shadow: 3px 1px 5px rgb(255, 0, 0);

}

.box:hover {
  background-color: rgb(73, 73, 73);
  outline: 2px double rgb(112, 213, 241);
  box-shadow: 2px 0px 4px rgb(112, 213, 241);

}

.card {
  background-color: rgba(30, 20, 20, 0.644);
  border: 1px double rgba(255, 0, 0, 0.395);

}

.card:hover {
  background-color: rgba(30, 20, 20, 0.644);
  border: 1px double rgb(112, 213, 241);

}

.cover-Img {
  height: 15vh;
  width: 35vh;
  object-fit: cover;
}
</style>
<template>
  <div class="container-fluid">
    <div class="row justify-content-around mt-2">
      <div class="col-3 mb-5">
        <div class="card">
          <img class="card-img-top " :src="account.picture" alt="profile">
          <div class="card-body">
            <p class="card-text">{{ account.name }}</p>
            <p class="card-text">{{ account.email }}</p>
          </div>
        </div>
      </div>
      <div class="col-6 mb-4">
        <p>Edit Account</p>
        <form action="" @submit.prevent="editAccount()">
          <div class="mb-2">
            <label for="name">Name</label>
            <input class="form-control" type="text" id="name" minlength="3" maxlength="75" v-model="editable.name">
          </div>
          <div class="mb-2">
            <label for="name">Email</label>
            <input class="form-control" type="text" id="email" minlength="3" maxlength="75" v-model="editable.email">
          </div>
          <div class="mb-2">
            <label for="picture">Picture</label>
            <input class="form-control" type="url" id="picture" minlength="3" maxlength="200" v-model="editable.picture">
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>

    <div class="row">
      <p>My Campaigns</p>
      <div class="col-12 col-md-4" v-for="campaign in myCampaigns" :key="campaign.id">
        <div class="card mb-3">
          <CampaignCardComponent :campaignProp="campaign" />
        </div>
      </div>
    </div>
    <div class="row">
      <div>
        <p>My Entities</p>
        <button v-if="account.id" class="btn btn-outline-primary" type="button" data-bs-toggle="modal"
          data-bs-target="#createEntityModal">
          Create Entity</button>
      </div>
      <div class="col-12 col-md-4 pt-3" v-for="entity in myEntities" :key="entity.id">
        <div class="card mb-3">
          <p class="card-header">{{ entity.name }}</p>
          <p>{{ entity.body }}</p>
          <p>Type: {{ entity.type }}</p>
          <p>{{ entity.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop.js';
import { accountService } from '../services/AccountService.js';
import { campaignsService } from '../services/CampaignsService.js';
import { entityService } from '../services/EntityService.js';
import { logger } from '../utils/Logger.js';

export default {
  setup() {
    const account = ref({})
    const editable = ref({})



    async function getCampaignsByAccount() {
      try {
        const accountId = account.value.id;
        await campaignsService.getCampaignsByAccount(accountId);
      }
      catch (error) {
        logger.error(error);
      }
    }

    async function getMyEntitiesByAccount() {
      try {
        const accountId = account.value.id;
        await entityService.getMyEntitiesByAccount(accountId)
      } catch (error) {
        logger.error(error)
      }
    }

    onMounted(() => {
      getCampaignsByAccount();
      getMyEntitiesByAccount();
    });





    return {
      editable,
      account: computed(() => AppState.account),
      myCampaigns: computed(() => AppState.myCampaigns),
      myEntities: computed(() => AppState.myEntities),



      async editAccount() {
        try {
          const formData = editable.value
          await accountService.editAccount(formData)
          logger.log('[EDITING ACCOUNT]', editable)
        } catch (error) {
          Pop.error(error.message)
        }
      }



    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}

.card-img-top {

  max-width: 500px;
  margin: 0;
  object-fit: cover;
  position: relative;

}
</style>

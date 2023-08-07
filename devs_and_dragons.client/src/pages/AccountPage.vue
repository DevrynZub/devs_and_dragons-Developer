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
      <p>My Entities</p>
      <form @submit.prevent="createEntity">
        <div class="mb-3">
          <label for="name" class="form-label">Entity Name</label>
          <input v-model="editable.name" type="text" class="form-control" id="name" minlength="1" maxlength="35" required>
        </div>
        <div class="mb-3">
          <label for="imgUrl" class="form-label">Entity Image</label>
          <input v-model="editable.imgUrl" type="url" class="form-control" id="imgUrl" minlength="3" maxlength="250"
            required>
        </div>
        <div class="mb-3">
          <label for="type" class="form-label">Entity Type</label>
          <input v-model="editable.type" type="text" class="form-control" id="type" min="0" max="1000" required>
        </div>
        <div class="mb-3">
          <label for="desc" class="form-label">Entity Description</label>
          <textarea v-model="editable.desc" class="form-control" aria-label="entityDescription" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" title="Submit">Submit</button>
      </form>
      <div class="col-12 col-md-4" v-for="entity in myEntities" :key="entity.id">
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

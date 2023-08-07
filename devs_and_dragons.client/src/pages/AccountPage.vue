<template>
  <div class="container-fluid account-page">
    <div class="row justify-content-around mt-2">
      <div class="col-3 mb-5">
        <div class="card">
          <img class="card-img-top " :src="account.picture" alt="profile">
          <div class="card-body text-white">
            <p class="card-text">{{ account.name }}</p>
            <p class="card-text">{{ account.email }}</p>
          </div>
        </div>
      </div>
      <div class="col-6 mb-4 text-white">
        <p>Edit Account</p>
        <form action="" @submit.prevent="editAccount()">
          <div class="mb-2">
            <label for="name">Name</label>
            <input class="form-control" type="text" id="name" minlength="3" maxlength="75" v-model="editable.name">
          </div>
          <div class="mb-2">
            <label for="email">Email</label>
            <input v-model="editable.email" type="text" class="form-control" name="email" id="email">
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
        <div class="text-white">
          <div class="d-flex flex-column box rounded elevation-5 p-2">
            <div class="elevation-5 mb-3 info-card rounded">
              <h3>{{ entity.name }}</h3>
              <p>Type: {{ entity.type }}</p>
              <p>{{ entity.desc }}</p>
              <p>{{ entity.body }}</p>
            </div>
            <div class="text-center mb-2">
              <img class="img-fluid rounded cover-Img" :src="entity.imgUrl" alt="">
            </div>
          </div>
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

.account-page {
  background-image: url('https://wallpapercave.com/wp/2iIPx6K.png');
  background-color: white#5f3f2485;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 95vh;
}

.box {
  background-color: rgba(73, 73, 73, 0.719);
  outline: 1px double red;
  box-shadow: 3px 1px 5px rgb(255, 0, 0);

}

.cover-Img {
  height: 15vh;
  width: 35vh;
  object-fit: cover;
}

.card-img-top {

  max-width: 500px;
  margin: 0;
  object-fit: cover;
  position: relative;

}

.card {
  background-color: rgba(30, 20, 20, 0.644);
  border: 1px double rgba(255, 0, 0, 0.395);

}

.info-card {
  background-color: rgba(0, 0, 0, 0.555);
  padding: 10px;
}
</style>

<template>
  <div class="container-fluid background">
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
        <form @submit.prevent="editAccount()">
          <div>
            <label for="name">Username</label>
            <input v-model="editable.name" type="text" class="form-control" name="name" id="name">
          </div>
          <div>
            <label for="email">Email</label>
            <input v-model="editable.email" type="text" class="form-control" name="email" id="email">
          </div>
          <div>
            <label for="picture">Picture</label>
            <input v-model="editable.picture" type="url" class="form-control" name="picture" id="picture">
          </div>
          <button @click="updateAccount" type="submit">Update</button>
        </form>
      </div>
    </div>

    <div class="row">
      <div class="col-4" v-for="campaign in myCampaigns" :key="campaign.id">
        <div class="card mb-3">
          <div class="card-header">
            {{ campaign.name }}
          </div>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2abaa30-1464-49db-aff5-f8a38372adbf/dfjlfz3-62ebbef5-327b-4ca7-934a-c2f21c4cd74b.png/v1/fill/w_894,h_894,q_70,strp/sir_corgi_by_bravenor88_dfjlfz3-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YyYWJhYTMwLTE0NjQtNDlkYi1hZmY1LWY4YTM4MzcyYWRiZlwvZGZqbGZ6My02MmViYmVmNS0zMjdiLTRjYTctOTM0YS1jMmYyMWM0Y2Q3NGIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Dz70fMr_xV6XeGY6XeyG7Jz73H0xu7nfh9p3fS2vB6w"
            class="card-img-top img-fluid elevation rounded" alt="">
          <div class="card-body">
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="entity in myEntities" :key="entity.id">
        <div class="card mb-3">
          <div class="card-header">
            {{ entity.body }}
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

    const editable = ref({})



    async function getCampaignsByAccount() {
      try {
        await campaignsService.getCampaignsByAccount();
      }
      catch (error) {
        logger.error(error);
      }
    }

    async function getMyEntitiesByAccount() {
      try {
        await entityService.getMyEntitiesByAccount()
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
      myEntities: computed(() => AppState.entities),



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

/* .background {
  background-position: center;
  background-image: url(https://th.bing.com/th/id/R.7c4b72b54938b0773e70c8ebb312ef10?rik=8W63dH%2b9lw0yXA&riu=http%3a%2f%2fwallpapercave.com%2fwp%2f7z6cSaI.jpg&ehk=X%2b%2fh530OV87vj1tiOdMAL8nSbsHAxeJ1ympx8rJ5y5I%3d&risl=&pid=ImgRaw&r=0);
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 100%;
  background-attachment: fixed;
} */

.card-img-top {

  max-width: 500px;
  margin: 0;
  object-fit: cover;
  position: relative;

}
</style>

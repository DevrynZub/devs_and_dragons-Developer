<template>
    <div class="background">

        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-5 col-12 p-3 text-center">
                    <div class="elevation-3 rounded fs-5 bg-black text-light p-1">
                        <button v-if="account.id" class="btn btn-outline-danger mx-2" type="button" data-bs-toggle="modal"
                            data-bs-target="#createCampaignModal">
                            <i class="mdi mdi-plus-box"> </i> Create Campaign</button>
                        <label for="site-campaigns">Search for Campaigns: </label>
                        <input v-model="filterBy" class="m-2" type="search" id="site-campaigns" name="q" />

                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-3 col-12 card m-3 text-light elevation-5 selectable" v-for="campaign in  campaigns "
                    :key="campaign.id">
                    <div class="d-flex flex-column">
                        <img :src="campaign?.coverImg" alt="">
                        <h3>{{ campaign.name }}</h3>
                        <p>{{ campaign.nextSessionDate }}</p>
                        <p>{{ campaign.desc }}</p>
                        <p>Player Capacity: {{ campaign.capacity }}</p>
                    </div>



                </div>
            </div>

        </div>
    </div>
</template>


<script>
import { computed, onMounted, ref } from 'vue'
import Pop from '../utils/Pop.js'
import { campaignsService } from '../services/CampaignsService.js'
import { AppState } from "../AppState.js"


export default {
    setup() {
        const filterBy = ref('')


        async function getCampaigns() {
            try {
                await campaignsService.getCampaigns()
            } catch (error) {
                Pop.error(error.message)
            }
        }
        onMounted(() => {
            getCampaigns()
        })

        return {
            account: computed(() => AppState.account),
            filterBy,
            campaigns: computed(() => {
                if (filterBy.value == "") {
                    return AppState.campaigns

                } else {

                    return AppState.campaigns.filter(c => c.name.toLowerCase().includes(filterBy.value.toLowerCase()))
                }
            })
        }
    }
}
</script>


<style lang="scss" scoped>
.background {
    background-position: center;
    background-image: url(https://www.pixel-creation.com/wp-content/uploads/dungeons-and-dragons-wallpaper-1920x1080-77-images-2.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 92dvh;
    background-attachment: fixed;
}

.card {
    background-color: rgba(73, 73, 73, 0.719);
    border: 1px double red;
    box-shadow: 3px 1px 5px rgb(255, 0, 0);
}

.card:hover {
    background-color: rgb(73, 73, 73);
    border: 2px double rgb(112, 213, 241);
    box-shadow: 2px 0px 4px rgb(112, 213, 241);

}
</style>
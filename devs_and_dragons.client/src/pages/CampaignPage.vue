<template>
    <div class="background">

        <div class="container-fluid">
            <div class="row justify-content-center d-flex ">
                <div class="col-md-4 col-12 p-3 text-center">
                    <div class="elevation-3 rounded fs-5 search text-light p-1 ">
                        <input v-model="filterBy" class="rounded-pill m-2 w-75" placeholder="Search Campaigns" type="search"
                            id="site-campaigns" name="q" />
                    </div>
                    <button v-if="account.id" class="btn btn-danger m-2" type="button" data-bs-toggle="modal"
                        data-bs-target="#createCampaignModal">
                        <i class="mdi mdi-plus-box"> </i> Create Campaign</button>
                </div>
            </div>
            <div class="row justify-content-center p-2">
                <div class="col-10">
                    <div class="row justify-content-center p-2 ">
                        <div class="col-md-3 col-12 m-3 text-light animate__animated animate__fadeIn camp-card"
                            v-for="campaign in campaigns " :key="campaign.id">
                            <CampaignCardComponent :campaignProp="campaign" />
                        </div>
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
import CampaignCardComponent from "../components/CampaignCardComponent.vue"
import 'animate.css';


export default {
    setup() {
        const filterBy = ref('');
        async function getCampaigns() {
            try {
                await campaignsService.getCampaigns();
            }
            catch (error) {
                Pop.error(error.message);
            }
        }
        onMounted(() => {
            getCampaigns();
        });
        return {
            account: computed(() => AppState.account),
            filterBy,

            campaigns: computed(() => {
                if (filterBy.value == "") {
                    return AppState.campaigns;
                }
                else {
                    return AppState.campaigns.filter(c => c.name.toLowerCase().includes(filterBy.value.toLowerCase()));
                }
            })
        };
    },
    components: { CampaignCardComponent }
}
</script>


<style lang="scss" scoped>
.background {
    // background-position: center;
    background-image: url(https://www.pixel-creation.com/wp-content/uploads/dungeons-and-dragons-wallpaper-1920x1080-77-images-2.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

}

.scroll {
    overflow-y: scroll;
}

.box {
    background-color: rgba(10, 7, 7, 0.719);
    border: 1px double rgb(63, 5, 5);
    box-shadow: 3px 1px 5px rgba(100, 4, 4, 0.628);

}

.search {
    background-color: rgba(0, 0, 0, 0.831);
    // border: 1px double red;
    // box-shadow: 3px 1px 5px rgb(255, 0, 0);

}

.box:hover {
    background-color: rgb(73, 73, 73);
    border: 2px double rgb(112, 213, 241);
    box-shadow: 2px 0px 4px rgb(112, 213, 241);

}

.cover-Img {
    height: 15vh;
    width: 35vh;
    object-fit: cover;
}

.camp-card{
    height: 100%;
}
</style>
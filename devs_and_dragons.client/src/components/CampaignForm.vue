<template>
    <form @submit.prevent="createCampaign">
        <div class="mb-3">
            <label for="name" class="form-label">Campaign Name</label>
            <input v-model="editable.name" type="text" class="form-control" id="name" minlength="1" maxlength="35" required>
        </div>
        <div class="mb-3">
            <label for="coverImg" class="form-label">Event Image</label>
            <input v-model="editable.coverImg" type="url" class="form-control" id="coverImg" minlength="3" maxlength="250"
                required>
        </div>
        <div class="mb-3">
            <label for="capacity" class="form-label">Event Capacity</label>
            <input v-model="editable.capacity" type="number" class="form-control" id="capacity" min="0" max="1000" required>
        </div>
        <div class="mb-3">
            <label for="nextSessionDate" class="form-label">Next Session Date</label>
            <input v-model="editable.nextSessionDate" type="date" class="form-control" id="nextSessionDate" required>
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Event Description</label>
            <textarea v-model="editable.desc" class="form-control" aria-label="eventDescription" required></textarea>
        </div>
        <div class="mb-3">
            <label for="tags" class="form-label">Campaign Tags</label>
            <textarea v-model="editable.tags" class="form-control" aria-label="tags"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" title="Submit">Submit</button>
    </form>
</template>


<script>
import { ref } from 'vue'
import { AppState } from '../AppState.js'
import { campaignsService } from '../services/CampaignsService.js'
import { router } from '../router.js'
import { Modal } from 'bootstrap'
import Pop from '../utils/Pop.js'

export default {
    setup() {
        const editable = ref({})
        const campaignData = editable.value

        return {
            editable,
            async createCampaign() {
                try {
                    if (!AppState.account.id) {
                        throw new Error('Login required to Create Event')
                    }
                    const campaign = await campaignsService.createCampaign(campaignData)
                    router.push({ name: 'Campaign', params: { campaignId: campaign.id } })
                    editable.value = {}
                    Modal.getOrCreateInstance(document.getElementById('exampleModal')).hide()
                    Pop.success('Created Campaign!')
                } catch (error) {
                    Pop.error(error)
                }

            }
        }
    }
}
</script>


<style lang="scss" scoped></style>
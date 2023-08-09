import { AppState } from "../AppState.js"
import { Campaign } from "../models/Campaign.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CampaignsService {

    async getCampaigns() {
        const res = await api.get('api/campaigns')
        logger.log('[Got Campaigns]', res.data)
        const campaigns = res.data.map(c => new Campaign(c))
        AppState.campaigns = campaigns
    }

    async getCampaignsByAccount() {
        const res = await api.get('account/campaigns')
        logger.log('[GOT MY CAMPAIGNS]', res.data)
        AppState.myCampaigns = res.data.map(c => new Campaign(c))
        // logger.log('[appstate campaigns]', AppState.myCampaigns)
    }


    async createCampaign(campaignData) {
        const res = await api.post('api/campaigns', campaignData)
        logger.log(res.data)
        const campaign = new Campaign(res.data)
        AppState.campaigns.push(campaign)
        return campaign

    }

    async getActiveCampaign(campaignId) {
        const res = await api.get(`api/campaigns/${campaignId}`)
        // logger.log('active campaign res data', res.data)
        const campaign = new Campaign(res.data)
        // logger.log('new Campaign from active campaign', campaign)
        AppState.activeCampaign = campaign
        logger.log('Appstate activecampaign', AppState.activeCampaign)
    }
}
export const campaignsService = new CampaignsService()
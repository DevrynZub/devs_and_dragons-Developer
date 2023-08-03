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
}
export const campaignsService = new CampaignsService()
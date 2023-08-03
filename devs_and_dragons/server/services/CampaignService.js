import { dbContext } from "../db/DbContext.js"

class CampaignService {
  async createCampaign(campaignData) {
    const newCampaigns = await dbContext.Campaigns.create(campaignData)
    return newCampaigns
  }

}


export const campaignService = new CampaignService()
import { dbContext } from "../db/DbContext.js"

class CampaignService {
  async getAllCampaigns() {
    const campaigns = await dbContext.Campaigns.find()
    return campaigns
  }

  async
  async createCampaign(campaignData) {
    const newCampaigns = await dbContext.Campaigns.create(campaignData)
    return newCampaigns
  }

}


export const campaignService = new CampaignService()
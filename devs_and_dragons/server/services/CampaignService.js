import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class CampaignService {
  async getAllCampaigns() {
    const campaigns = await dbContext.Campaigns.find()
    return campaigns
  }

  async getCampaignById(campaignId) {
    const campaign = await dbContext.Campaigns.findById(campaignId)
    if (!campaign) {
      throw new BadRequest('Cannot find any campaigns by that ID')
    }
    return campaign
  }
  async createCampaign(campaignData) {
    const newCampaigns = await dbContext.Campaigns.create(campaignData)
    return newCampaigns
  }

}


export const campaignService = new CampaignService()
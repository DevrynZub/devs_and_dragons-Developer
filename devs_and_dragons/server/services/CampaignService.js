import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

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

  async archiveCampaign(campaignId, userId) {
    const campaignToArchive = await this.getCampaignById(campaignId)
    if (campaignToArchive.creatorId.toString() != userId) {
      throw new Forbidden('Only the creator of this campaign can archive it')
    }
    campaignToArchive.isArchived = true
    await campaignToArchive.save()
    return campaignToArchive
  }

  async editCampaign(campaignId, campaignData, userId) {
    const originalCampaign = await this.getCampaignById(campaignId)
    if (!originalCampaign) {
      throw new BadRequest('Cannot find any campaigns by that ID')
    }
    if (originalCampaign.isArchived == true) {
      throw new BadRequest('You cannot edit a campaign once it has been archived')
    }
    if (originalCampaign.creatorId.toString() != userId) {
      throw new Forbidden('Only the creator of this campaign can archive it')
    }
    originalCampaign.name = campaignData.name || originalCampaign.name
    originalCampaign.desc = campaignData.desc || originalCampaign.desc
    originalCampaign.isPrivate = campaignData.isPrivate || originalCampaign.isPrivate
    originalCampaign.tags = campaignData.tags || originalCampaign.tags
    originalCampaign.capacity = campaignData.capacity || originalCampaign.capacity
    originalCampaign.isArchived = campaignData.isArchived || originalCampaign.isArchived || originalCampaign.isArchived
    originalCampaign.nextSessionDate = campaignData.nextSessionDate || originalCampaign.nextSessionDate

    await originalCampaign.save()
    return originalCampaign
  }

}


export const campaignService = new CampaignService()
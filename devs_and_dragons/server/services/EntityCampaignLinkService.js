import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"
import { campaignService } from "./CampaignService.js"

class EntityCampaignLinkService {
  async createEntityCampaignLink(data) {
    const campaign = await campaignService.getCampaignById(data.campaignId)
    if (campaign.isArchived == true) {
      throw new Forbidden('campaign is closed.')
    }
    const newLink = (await dbContext.EntityCampaignLink.create(data)).populate('Entity')
    return newLink
  }

}

export const entityCampaignLinkService = new EntityCampaignLinkService()
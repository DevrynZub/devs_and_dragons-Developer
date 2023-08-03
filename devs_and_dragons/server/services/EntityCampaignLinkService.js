import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"
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

  async deleteEntityCampaignLink(entityLinkId, accountId) {
    const linkToDelete = await dbContext.EntityCampaignLink.findById(entityLinkId)
    if (!linkToDelete) {
      throw new BadRequest('This link could not be found')
    }
    if (linkToDelete.creatorId != accountId) {
      throw new Forbidden('You cannot delete a link that you did not create')
    }
    await linkToDelete.remove()
    return linkToDelete
  }

}

export const entityCampaignLinkService = new EntityCampaignLinkService()
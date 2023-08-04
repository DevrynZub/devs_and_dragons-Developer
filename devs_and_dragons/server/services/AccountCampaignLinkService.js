import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"
import { campaignService } from "./CampaignService.js"

class AccountCampaignLinkService {
  async createAccountLink(linkData) {
    const campaign = await campaignService.getCampaignById(linkData.campaignId)
    if (campaign.isArchived == true) {
      throw new Forbidden('You cannot join an archived campaign.')
    }
    const newLink = (await (await dbContext.AccountCampaignLink.create(linkData)).populate('Profile', 'name picture')).populate('Campaign')
    return newLink

  }

}

export const accountCampaignLinkService = new AccountCampaignLinkService()
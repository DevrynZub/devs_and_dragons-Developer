import { AppState } from "../AppState.js"
import { AccountCampaignLink } from "../models/AccountCampaignLink.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class AccountCampaignLinkService {

  async getAccountCampaignLinks(campaignId) {
    const res = await api.get(`api/campaigns/${campaignId}/accountcampaignlinks`)
    logger.log('account links res data', res.data)
    const accountLinks = res.data.map(a => new AccountCampaignLink(a))
    logger.log('account links as model', accountLinks)
    AppState.AccountLinks = accountLinks
    logger.log('Appstate account Links', AppState.AccountLinks)
  }
}



export const accountCampaignLinkService = new AccountCampaignLinkService()
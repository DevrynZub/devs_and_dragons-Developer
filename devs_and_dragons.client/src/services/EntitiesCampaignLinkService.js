import { AppState } from "../AppState.js";
import { EntityCampaignLink } from "../models/EntityCampaignLink.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js"


class EntitiesCampaignLinkService {

  async getEntityLinksByCampaign(campaignId) {
    const res = await api.get(`api/campaigns/${campaignId}/entitycampaignlinks`)
    logger.log('res data from entity links', res.data);
    const entityLinks = res.data.map(e => new EntityCampaignLink(e))
    logger.log('entity Links as class', entityLinks)
    AppState.entityLinks = entityLinks
    logger.log('appstate entity links', AppState.entityLinks)
  }
}



export const entitiesCampaignLinkService = new EntitiesCampaignLinkService()
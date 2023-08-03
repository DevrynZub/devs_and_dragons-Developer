import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { entityCampaignLinkService } from "../services/EntityCampaignLinkService.js";



export class EntityCampaignLinkController extends BaseController {
  constructor() {
    super('api/entitycampaignlinks')
    this.router

      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createEntityCampaignLink)
      .delete('/:entityLinkId', this.deleteEntityCampaignLink)
  }
  deleteEntityCampaignLink(req, res, next) {
    try {

    } catch (error) {
      next(error)
    }
  }
  async createEntityCampaignLink(req, res, next) {
    try {
      const data = req.body
      data.accountId = req.userInfo.id
      const entityCampaignLink = await entityCampaignLinkService.createEntityCampaignLink(data)
      res.send(entityCampaignLink)
    } catch (error) {
      next(error)
    }
  }
}
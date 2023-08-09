import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { entityCampaignLinkService } from "../services/EntityCampaignLinkService.js";



export class EntityCampaignLinkController extends BaseController {
  constructor() {
    super('api/entitycampaignlinks')
    this.router

      .get('/:entityLinkId', this.getEntityLinkById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createEntityCampaignLink)
      .delete('/:entityLinkId', this.deleteEntityCampaignLink)
  }

  async getEntityLinkById(req, res, next) {
    try {
      const entityLinkId = req.params.entityLinkId
      const entityLink = await entityCampaignLinkService.getEntityLinkById(entityLinkId)
    } catch (error) {
      next(error)
    }
  }
  async deleteEntityCampaignLink(req, res, next) {
    try {
      const entityLinkId = req.params.entityLinkId
      const accountId = req.userInfo.id
      const entityLink = await entityCampaignLinkService.deleteEntityCampaignLink(entityLinkId, accountId)
      res.send(entityLink)
    } catch (error) {
      next(error)
    }
  }
  async createEntityCampaignLink(req, res, next) {
    try {
      const data = req.body
      data.creatorId = req.userInfo.id
      const entityCampaignLink = await entityCampaignLinkService.createEntityCampaignLink(data)
      res.send(entityCampaignLink)
    } catch (error) {
      next(error)
    }
  }
}
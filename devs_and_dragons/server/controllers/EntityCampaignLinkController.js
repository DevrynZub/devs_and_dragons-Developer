import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";



export class EntityCampaignLinkController extends BaseController {
  constructor() {
    super('api/entitycampaignlinks')
    this.router

      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createEntityCampaignLink)
  }
  createEntityCampaignLink(req, res, next) {
    try {
      const userId = req.userInfo.id

    } catch (error) {
      next(error)
    }
  }
}
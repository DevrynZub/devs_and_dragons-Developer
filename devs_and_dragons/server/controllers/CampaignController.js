import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { campaignService } from "../services/CampaignService.js";

export class CampaignController extends BaseController {
  constructor() {
    super('api/campaigns')
    this.router

      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createCampaign)
  }
  async createCampaign(req, res, next) {
    try {
      const campaignData = req.body
      campaignData.creatorId = req.userInfo.id
      const campaign = await campaignService.createCampaign(campaignData)
      res.send(campaign)
    } catch (error) {
      next(error)
    }
  }
}
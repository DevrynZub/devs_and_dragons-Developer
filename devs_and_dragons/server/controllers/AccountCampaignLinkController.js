import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { accountCampaignLinkService } from "../services/AccountCampaignLinkService.js";

export class AccountCampaignLinkController extends BaseController {
  constructor() {
    super('api/accountcampaignlinks')
    this.router

      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createAccountLink)
  }


  async createAccountLink(req, res, next) {
    try {
      const linkData = req.body
      linkData.accountId = req.userInfo.id
      const accountLink = await accountCampaignLinkService.createAccountLink(linkData)
      res.send(accountLink)
    } catch (error) {
      next(error)
    }
  }
}
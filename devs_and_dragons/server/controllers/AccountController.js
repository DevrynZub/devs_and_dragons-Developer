import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import BaseController from '../utils/BaseController'
import { campaignService } from "../services/CampaignService.js"
import { entitiesService } from "../services/EntitiesService.js"

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/campaigns', this.getCampaignsByAccount)
      .get('/entities', this.getEntitiesByAccount)
  }

  async getEntitiesByAccount(req, res, next) {
    try {
      const accountId = req.userInfo.id
      const entities = await entitiesService.getEntitiesByAccount(accountId)
      res.send(entities)
    } catch (error) {
      next(error)
    }
  }


  async getCampaignsByAccount(req, res, next) {
    try {
      const userId = req.userInfo.id
      const campaigns = await campaignService.getCampaignsByAccount(userId)
      res.send(campaigns)
    } catch (error) {
      next(error)
    }
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
}

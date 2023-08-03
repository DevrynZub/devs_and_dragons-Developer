import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { entitiesService } from "../services/EntitiesService.js";


export class EntitiesController extends BaseController {
  constructor() {
    super('api/entities')
    this.router

      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createEntity)
  }
  async createEntity(req, res, next) {
    try {
      const entityData = req.body
      const entity = await entitiesService.createEntity(entityData,)
      res.send(entity)
    } catch (error) {
      next(error)
    }
  }
}


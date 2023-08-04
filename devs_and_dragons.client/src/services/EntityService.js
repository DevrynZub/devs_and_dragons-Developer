import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class EntityService {

  async getEntity() {
    const res = await api.get('api/entities')
    logger.log('[Got ENTITIES]', res.data)
  }


  async getMyEntitiesByAccount() {
    const res = await api.get('api/entities')
    logger.log('[GETTING MY ENTITIES]', res.data)
  }
}

export const entityService = new EntityService()
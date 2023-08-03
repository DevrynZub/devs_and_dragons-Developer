import { dbContext } from "../db/DbContext.js"


class EntitiesService {
  async createEntity(entityData) {
    const entity = await dbContext.Entities.create(entityData)
    return entity
  }

}



export const entitiesService = new EntitiesService
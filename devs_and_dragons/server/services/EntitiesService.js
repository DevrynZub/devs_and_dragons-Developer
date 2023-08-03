import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"


class EntitiesService {
  async deleteEntity(entityId, userId) {
    const entityToDelete = await this.getEntityById(entityId)
    if (!entityToDelete) {
      throw new BadRequest('There is no entity with that id')
    }
    if (entityToDelete.creatorId != userId) {
      throw new Forbidden("you cannot delete someone else's entity")
    }
    await entityToDelete.remove()
    return 'Entity has been deleted'
  }
  async getEntityById(entityId) {
    const entity = await dbContext.Entities.findById(entityId)
    return entity
  }
  async getEntities() {
    const entities = await dbContext.Entities.find()
    return entities
  }
  async createEntity(entityData) {
    const entity = await dbContext.Entities.create(entityData)
    return entity
  }

}



export const entitiesService = new EntitiesService
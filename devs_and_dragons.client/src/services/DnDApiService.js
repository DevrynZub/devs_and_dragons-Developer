import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { DnDApi } from "./AxiosService.js"


class DnDApiService {
  async searchDnDApi(formData, category) {
    // logger.log(category)
    const res = await DnDApi.get(`api/${category.value}?name=${formData.name}`)
    logger.log('res data form dnd api for query', res.data)
    AppState.dndApiResults = res.data.results
    logger.log('appstate dndapi results', AppState.dndApiResults)
  }

}



export const dndApiService = new DnDApiService()
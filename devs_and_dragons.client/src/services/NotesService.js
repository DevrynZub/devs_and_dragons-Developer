import { AppState } from "../AppState.js"
import { Note } from "../models/Note.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class NotesService {

  async getNotesByCampaign(campaignId) {
    const res = await api.get(`api/campaigns/${campaignId}/notes`)
    // logger.log('getting notes from api', res.data)
    const notes = res.data.map(n => new Note(n))
    // logger.log('turning notes into class', notes)
    AppState.Notes = notes
    // logger.log('appstate notes', AppState.Notes)
  }
}


export const notesService = new NotesService()
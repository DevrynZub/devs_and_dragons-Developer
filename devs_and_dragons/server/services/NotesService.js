import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"
import { campaignService } from "./CampaignService.js"

class NotesService {
  async getNotesByCampaignId(campaignId) {
    const notes = await dbContext.Notes.find(campaignId)
    return notes
  }

  a

  async createNote(noteData) {
    const campaign = await campaignService.getCampaignById(noteData.campaignId)
    if (campaign.isArchived == true) {
      throw new Forbidden(`${campaign.name} has been archived. You cannot create notes for an archived campaign.`)
    }
    const newNote = await dbContext.Notes.create(noteData)
    return newNote
  }

  async removeNote(noteId, userId) {
    const noteToRemove = await dbContext.Notes.findById(noteId)
    if (noteToRemove.accountId.toString() != userId) {
      throw new Forbidden('You cannot delete a note you did not create.')
    }
    await noteToRemove.remove()
    return noteToRemove
  }

  async editNotes(noteId, noteData, userId) {

  }
}


export const notesService = new NotesService()
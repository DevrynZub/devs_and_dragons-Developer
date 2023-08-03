import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { CampaignSchema } from "../models/CampaignSchema.js";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Campaigns = mongoose.model('Campaign', CampaignSchema);
}

export const dbContext = new DbContext()

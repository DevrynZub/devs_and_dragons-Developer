import { Schema } from "mongoose";


export const accountCampaignLink = new Schema({
  campaignId: { type: Schema.Types.ObjectId, required: true, ref: 'Campaign' },
  accountId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
}, { timestamps: true, toJSON: { virtuals: true } })

accountCampaignLink.virtual('Campaign', {
  localField: 'campaignId',
  foreignField: '_id',
  justOne: true,
  ref: 'Campaign'
})
accountCampaignLink.virtual('Account', {
  localField: 'accountId',
  foreignField: '_id',
  justOne: true,

})
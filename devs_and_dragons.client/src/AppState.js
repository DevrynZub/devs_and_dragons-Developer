import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Campaign.js').Campaign[]} */
  campaigns: [],

  /** @type {import('./models/Campaign.js').Campaign[]} */
  myCampaigns: [],
  /** @type {import('./models/Campaign.js').Campaign | null} */
  activeCampaign: null,

  /** @type {import('./models/Entity.js').Entity[]} */
  entities: [],

  /** @type {import('./models/Entity.js').Entity[]} */
  myEntities: [],


})

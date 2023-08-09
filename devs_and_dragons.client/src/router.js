import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'
import DescriptionPage from './pages/DescriptionPage.vue'
import NotesPage from './pages/NotesPage.vue'
import EntitiesPage from './pages/EntitiesPage.vue'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/',
    name: 'Chat',
    component: loadPage('ChatRoomPage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/campaign',
    name: 'Campaign',
    component: loadPage('CampaignPage'),
  },
  {
    path: '/campaign/:campaignId',
    name: 'ActiveCampaign',
    component: loadPage('ActiveCampaignPage'),
    children: [
      {
        path: '',
        name: 'description',
        component: DescriptionPage,

      },
      {
        path: ':noteId',
        name: 'notes',
        component: NotesPage,
      },
      {
        path: ':entityId',
        name: 'entities',
        component: EntitiesPage,
      }

    ]
  }








]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

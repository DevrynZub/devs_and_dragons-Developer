import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'
import DescriptionPage from './pages/DescriptionPage.vue'
import NotesPage from './pages/NotesPage.vue'

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

    ]
  }








]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

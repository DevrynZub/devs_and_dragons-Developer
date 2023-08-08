import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'
import DescriptionComponent from './components/DescriptionComponent.vue'
import NotesComponent from './components/NotesComponent.vue'

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
        component: DescriptionComponent,

      },
      {
        path: 'notes',
        name: 'notes',
        component: NotesComponent,
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

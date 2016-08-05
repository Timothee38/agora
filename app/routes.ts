import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent, NewsComponent, NewsDescription, DownloadComponent, ConcertsComponent, BioComponent, LicenseComponent, NotFoundComponent } from './domain/index';

const routes : RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'news/:id',
    component: NewsDescription
  },
  {
    path: 'downloads',
    component: DownloadComponent
  },
  {
    path: 'concerts',
    component: ConcertsComponent
  },
  {
    path: 'bio',
    component: BioComponent
  },
  {
    path: 'license',
    component: LicenseComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
]

export const appRouterProviders = [
  provideRouter(routes)
]

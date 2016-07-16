import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent, NewsComponent, DownloadComponent, ConcertsComponent, BioComponent, LicenseComponent } from './domain/index';

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
  }
]

export const appRouterProviders = [
  provideRouter(routes)
]

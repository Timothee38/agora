import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent, NewsComponent, DownloadComponent, ConcertsComponent, BioComponent } from './domain/index';

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
  }
]

export const appRouterProviders = [
  provideRouter(routes)
]

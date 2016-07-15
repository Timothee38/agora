import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { Agora } from './app.component';

import { appRouterProviders } from './routes';

bootstrap(Agora, [HTTP_PROVIDERS, appRouterProviders]);

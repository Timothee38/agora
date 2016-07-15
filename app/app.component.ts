import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent, FooterComponent } from './domain/index';

@Component({
  selector: 'agora',
  templateUrl: './app/app.html',
  directives: [HeaderComponent, FooterComponent, ROUTER_DIRECTIVES]
})
export class Agora {
}

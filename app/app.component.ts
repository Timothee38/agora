import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { HeaderComponent } from './domain/index';

@Component({
  selector: 'agora',
  templateUrl: './app/app.html',
  directives: [HeaderComponent, ROUTER_DIRECTIVES]
})
export class Agora {
  toto: number = 1;
}

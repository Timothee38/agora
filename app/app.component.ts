import { Component } from '@angular/core';

import { HeaderComponent } from './domain/index';

@Component({
  selector: 'agora',
  templateUrl: './app/app.html',
  directives: [HeaderComponent]
})
export class Agora {
  toto: number = 1;
}

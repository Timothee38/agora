import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';
import { MDL } from '../../common/index';

@Component({
  selector: 'header',
  directives: [MDL, ROUTER_DIRECTIVES],
  templateUrl: 'app/domain/header/header.html'
})
export class HeaderComponent {

}

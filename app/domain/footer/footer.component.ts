import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';
import { MDL } from '../../common/index';

@Component({
  selector: 'agora-footer',
  directives: [MDL, ROUTER_DIRECTIVES],
  templateUrl: 'app/domain/footer/footer.html'
})
export class FooterComponent {

}

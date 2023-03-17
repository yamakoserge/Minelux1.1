import { Component } from '@angular/core';
import { SERVICES } from '../mock-services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
     Services = SERVICES
}

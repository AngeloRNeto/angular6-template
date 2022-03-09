import { Component } from '@angular/core';
import { PersonService } from './service/person.service';

//var _service = new PersonService(HttpClient);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-angular';
  item = { phoneNumber: '' };

}

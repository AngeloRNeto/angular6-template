import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//workaround -.-
const baseUrl = 'http://localhost:49157/api';

@Injectable()
export class PersonService {
  constructor(private http: HttpClient) {}
  getPersons() {
    return this.http.get(baseUrl + '/person', { responseType: 'json' });
  }
}

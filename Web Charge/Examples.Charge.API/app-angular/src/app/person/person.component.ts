import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }
  persons: any = [];

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons() {
    this.persons = [];
    this.rest.getPersons().subscribe((data: {}) => {
      console.log(data);
      this.persons = data;
    });
  }

  add() {
    this.router.navigate(['/product-add']);
  }

}

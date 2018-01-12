import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable'
import { PeopleService } from '../returns-json-array.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers:[PeopleService]
})
export class PeopleComponent implements OnInit {
  title="People Json Service Getpopulated Properly";
  people: Observable<Array<any>>;
  constructor(private peopleService:PeopleService) { }

  ngOnInit() {
    this.people=this.peopleService.getPeople();
  }

}

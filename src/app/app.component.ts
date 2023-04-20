import { Component } from '@angular/core';
import { Team } from './models/componente-squadra.model';
import { ServiceResponse } from './models/serviceResponse.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  teams!: Team[]
  serviceResponse !: ServiceResponse 
  oServiceResponse !: Observable<Team[]>;
  private serviceURL = 'https://my-json-server.typicode.com/Vincenza-Genuardi/teams/data'
  sortedTeam!: Team[]
  intSortedTeam!: Team[]

  constructor(public http: HttpClient) {
  this.makeTypedRequest()
 /*  this.sortedTeam = this.teams.sort((a, b) => a.conference.localeCompare(b.conference))
  this.intSortedTeam = this.teams.sort((a, b) => a.division.localeCompare(b.division)) */
  
  }
  
  /*  makeTypedRequest() : void
  {
    this.oServiceResponse = this.http.get<ServiceResponse>(this.serviceURL);
    this.oServiceResponse.subscribe(d => {this.serviceResponse = d;});
    this.teams = this.serviceResponse.data;
  }   */ 
    makeTypedRequest() : void
  {
    alert("ciao");
    this.oServiceResponse = this.http.get<Team[]>(this.serviceURL);
    this.oServiceResponse.subscribe(d => {this.teams = d;});
  }    
} 



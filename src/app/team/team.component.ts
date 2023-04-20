import { Component, Input } from '@angular/core';
import { Team } from '../models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent {
  @Input() team: Team
  //fullname_class: string = "team-fullname";

  ngInit() {
    //this.fullname_class = this.team.division;
  }
}

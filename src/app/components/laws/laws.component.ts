import { Component, OnInit } from '@angular/core';
import { faBuilding, faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faDiamond, faHandPointUp, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-laws',
  templateUrl: './laws.component.html',
  styleUrls: ['./laws.component.scss']
})
export class LawsComponent implements OnInit {

  constructor() { }

  faHandPointUpIcon = faHandPointUp;
  handshakeIcon = faHandshake;
  buildingIcon = faBuilding;
  homeIcon = faHome

  ngOnInit(): void {
  }

}

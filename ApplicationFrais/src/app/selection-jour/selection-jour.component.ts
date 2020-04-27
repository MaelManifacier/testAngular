import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FRAISJOUR } from '../mock/mock-frais-jour';
import { FraisJour } from '../model/FraisJour';

@Component({
  selector: 'app-selection-jour',
  templateUrl: './selection-jour.component.html',
  styleUrls: ['./selection-jour.component.scss']
})
export class SelectionJourComponent implements OnInit {

  title = "selection jour"
  retour = "accueil"
  iconType = "keyboard_backspace"

  /*@Input()
  queryParams: {
    [mois: string] : string
  }*/

  moisDonne : string
  day : Date;

  fraisJour : FraisJour[]
  datesJour : string[] = []

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() { 
    this.recupParamsURL()
    this.getFraisJour()
  }

  recupParamsURL() {
    this._route.params.subscribe(params => {
      this.moisDonne = params['mois'];
    });
    this.day = new Date(this.moisDonne)
  }

  getFraisJour() {
    // appeler le service ici
    this.fraisJour = FRAISJOUR;

    // remplace 01/01/2000 par 01-01-2000 pour les liens vers les autres pages
    for(let i = 0; i < this.fraisJour.length; i++) {
      this.datesJour[i] = this.fraisJour[i].date.replace(/\//ig, "-")
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Frais } from '../model/Frais';

@Component({
  selector: 'app-page-ajout-frais',
  templateUrl: './page-ajout-frais.component.html',
  styleUrls: ['./page-ajout-frais.component.scss']
})
export class PageAjoutFraisComponent implements OnInit {

  title = "AJOUT DE FRAIS"
  retour = "detail-journee"
  iconType = "keyboard_backspace"

  day : string
  date : Date
  frais : Frais

  constructor(private _route: ActivatedRoute
    , public datepipe: DatePipe) { }

  ngOnInit() {
    this.recupParamsURL()
    if(this.day == undefined || this.day == 'undefined') {
      this.day = this.datepipe.transform(new Date, 'dd-MM-yyyy')
    }
    this.retour += "/" + this.day
  }

  recupParamsURL() {
    this._route.params.subscribe(params => {
      this.day = params['jour']
      this.date = new Date(this.day)

      if(params['frais'] != undefined) {
        this.frais = params['frais']
      } else {
        this.frais = new Frais
      }
    });
  }

  // récupération de l'event renvoyé par le formulaire d'ajout de frais
  setNewFrais($event) {
    console.log($event)
  }

}

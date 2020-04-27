import { Component, OnInit, Input } from '@angular/core';

import { FraisService } from '../frais.service';
import { FRAISDETAIL } from '../mock/mock-frais-detail';
import { FraisDetail } from '../model/FraisDetail';
import { FormControl } from '@angular/forms';
import { Frais } from '../model/Frais';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-detail-journee',
  templateUrl: './detail-journee.component.html',
  styleUrls: ['./detail-journee.component.scss']
})
export class DetailJourneeComponent implements OnInit {

  //@Input() day: Date;
  day : string;
  date : Date;
  maxDate: Date;

  title = "detail journee"
  retour = "selection-jour"
  iconType = "keyboard_backspace"

  frais: Frais[]
  fraisDetail : FraisDetail[]
  dateJour : string

  constructor(private fraisService: FraisService, private _route: ActivatedRoute
      , public datepipe: DatePipe) { }

  ngOnInit() {
    this.recupParamsURL()
    this.getFraisJour(this.day);

    // une date maximum sera donnée à la flèche pour jour + 1, pour ne pas dépasser la date du jour
    //this.maxDate = new Date(this.day.getTime() + (1000 * 60 * 60 * 24))
    //this.date = new FormControl(this.day)
  }

  recupParamsURL() {
    this._route.params.subscribe(params => {
      this.day = params['jour']
      this.date = new Date(this.day)
    });
    this.retour += "/" + this.day
    //this.dateJour = this.datepipe.transform(this.day, 'MM/dd/yyyy')
    this.dateJour = this.day
  }

  getFraisJour(day) : void {
     // appeler le service ici
     this.frais = this.fraisService.getFrais()
     // récupère depuis le mock
    if(this.fraisDetail == undefined) {
      this.fraisDetail = FRAISDETAIL
    }
  }

  // A FAIRE
  dayBefore() {
    /*
    console.log(Date.parse((this.day.getDate() - 1).toString()))
    this.day.setDate(this.day.getTime() - (1000 * 60 * 60 * 24))
    var day = this.day.getDate();
    var month = this.day.getMonth();
    var year = this.day.getFullYear();
    this.date = new FormControl(day + '/' + month + '/' + year)
    this.getFraisJour(this.day)
    */
  }

  dayAfter() {
    /*
    this.day.setDate(this.day.getTime() + (1000 * 60 * 60 * 24))
    this.date = new FormControl(this.day)
    this.getFraisJour(this.day)
    */
  }

}
